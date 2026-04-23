'use strict';

function startOfDayISO(d) {
  const x = new Date(d);
  x.setHours(0, 0, 0, 0);
  return x.toISOString();
}

function startOfMonthISO(d) {
  const x = new Date(d);
  x.setDate(1);
  x.setHours(0, 0, 0, 0);
  return x.toISOString();
}

function addDays(d, n) {
  const x = new Date(d);
  x.setDate(x.getDate() + n);
  return x;
}

function toDateKey(d) {
  const x = new Date(d);
  return `${x.getFullYear()}-${String(x.getMonth() + 1).padStart(2, '0')}-${String(
    x.getDate()
  ).padStart(2, '0')}`;
}

module.exports = {
  async overview(ctx) {
    const knex = strapi.db.connection;
    const now = new Date();
    const todayIso = startOfDayISO(now);
    const monthStart = startOfMonthISO(now);
    const last30Start = startOfDayISO(addDays(now, -29));
    const weekEnd = startOfDayISO(addDays(now, 7));

    // ── KPI aggregates ───────────────────────────────────
    const statusAgg = await knex('bookings')
      .select('status')
      .count({ count: 'id' })
      .sum({ total: 'total_price' })
      .sum({ adults: 'adult_count' })
      .sum({ children: 'child_count' })
      .groupBy('status');

    const statusAggMTD = await knex('bookings')
      .select('status')
      .count({ count: 'id' })
      .sum({ total: 'total_price' })
      .sum({ adults: 'adult_count' })
      .sum({ children: 'child_count' })
      .where('created_at', '>=', monthStart)
      .groupBy('status');

    const getStatus = (arr, s) => arr.find((r) => r.status === s) || {};
    const paidAll = getStatus(statusAgg, 'Paid');
    const paidMTD = getStatus(statusAggMTD, 'Paid');
    const failedAll = getStatus(statusAgg, 'Failed');
    const cancelledAll = getStatus(statusAgg, 'Cancelled');
    const pendingAll = getStatus(statusAgg, 'Pending');

    const totalBookingsAll = statusAgg.reduce(
      (a, r) => a + Number(r.count || 0),
      0
    );
    const totalBookingsMTD = statusAggMTD.reduce(
      (a, r) => a + Number(r.count || 0),
      0
    );

    const paidCount = Number(paidAll.count || 0);
    const decided =
      paidCount +
      Number(failedAll.count || 0) +
      Number(cancelledAll.count || 0);
    const conversionRate = decided > 0 ? paidCount / decided : 0;

    const paidRevenueAll = Number(paidAll.total || 0);
    const paidRevenueMTD = Number(paidMTD.total || 0);
    const aov = paidCount > 0 ? paidRevenueAll / paidCount : 0;
    const seatsMTD =
      Number(paidMTD.adults || 0) + Number(paidMTD.children || 0);

    // Active customers — users with ≥1 Paid booking
    const [{ activeCustomers }] = await knex('bookings_user_lnk as bul')
      .join('bookings as b', 'b.id', 'bul.booking_id')
      .where('b.status', 'Paid')
      .countDistinct({ activeCustomers: 'bul.user_id' });

    // Upcoming departures (Paid, travel_date in next 7 days)
    const [{ upcomingCount }] = await knex('bookings')
      .count({ upcomingCount: 'id' })
      .where('status', 'Paid')
      .where('travel_date', '>=', toDateKey(now))
      .where('travel_date', '<', toDateKey(addDays(now, 7)));

    // Refunds issued MTD (count + amount of refunded status)
    const [refundMTD] = await knex('bookings')
      .count({ count: 'id' })
      .sum({ amount: 'refund_amount' })
      .where('refund_status', 'refunded')
      .where('cancelled_at', '>=', monthStart);

    // ── Revenue last 30 days (daily) ─────────────────────
    const dailyRevenueRows = await knex('bookings')
      .where('status', 'Paid')
      .where('created_at', '>=', last30Start)
      .select('created_at', 'total_price');

    const revenueByDay = {};
    for (let i = 29; i >= 0; i--) {
      const key = toDateKey(addDays(now, -i));
      revenueByDay[key] = { date: key, revenue: 0, bookings: 0 };
    }
    for (const r of dailyRevenueRows) {
      const key = toDateKey(r.created_at);
      if (revenueByDay[key]) {
        revenueByDay[key].revenue += Number(r.total_price || 0);
        revenueByDay[key].bookings += 1;
      }
    }
    const revenueSeries = Object.values(revenueByDay);

    // ── Booking status breakdown (pie) ───────────────────
    const statusSeries = statusAgg.map((r) => ({
      name: r.status,
      value: Number(r.count || 0),
    }));

    // ── Top 5 tours by bookings (group across locales via document_id) ──
    // Use a subquery to group bookings by the tour's document_id, then join
    // the vi locale row for the canonical display name.
    const topToursRows = await knex('bookings_tour_lnk as btl')
      .join('bookings as b', 'b.id', 'btl.booking_id')
      .join('tours as t', 't.id', 'btl.tour_id')
      .count({ bookings: 'b.id' })
      .sum({ revenue: 'b.total_price' })
      .select('t.document_id as document_id')
      .groupBy('t.document_id')
      .orderBy('bookings', 'desc')
      .limit(5);
    const docIds = topToursRows.map((r) => r.document_id).filter(Boolean);
    const nameRows = docIds.length
      ? await knex('tours')
          .whereIn('document_id', docIds)
          .where('locale', 'vi')
          .select('document_id', 'tour_name')
      : [];
    const nameMap = Object.fromEntries(nameRows.map((r) => [r.document_id, r.tour_name]));
    const topTours = topToursRows.map((r) => ({
      name: nameMap[r.document_id] || '(unnamed)',
      bookings: Number(r.bookings || 0),
      revenue: Number(r.revenue || 0),
    }));

    // ── Refund breakdown (cancelled bookings) ────────────
    const refundBreakdown = await knex('bookings')
      .where('status', 'Cancelled')
      .select('refund_status')
      .count({ count: 'id' })
      .groupBy('refund_status');
    const refundSeries = refundBreakdown.map((r) => ({
      name: r.refund_status || 'unknown',
      value: Number(r.count || 0),
    }));

    // Helper: fetch vi-locale tour_name + max_participants keyed by booking.id
    async function tourInfoForBookings(bookingIds) {
      if (!bookingIds.length) return {};
      const rows = await knex('bookings_tour_lnk as btl')
        .join('tours as tAny', 'tAny.id', 'btl.tour_id')
        .leftJoin('tours as tVi', function () {
          this.on('tVi.document_id', '=', 'tAny.document_id').andOn(
            knex.raw("tVi.locale = 'vi'")
          );
        })
        .whereIn('btl.booking_id', bookingIds)
        .select(
          'btl.booking_id as booking_id',
          'tVi.tour_name as tour_name',
          'tVi.max_participants as max_participants'
        );
      const out = {};
      for (const r of rows) {
        out[r.booking_id] = {
          tour_name: r.tour_name,
          max_participants: r.max_participants,
        };
      }
      return out;
    }

    // ── Recent bookings (last 10) ────────────────────────
    const recentRowsRaw = await knex('bookings')
      .select(
        'id',
        'status',
        'total_price',
        'travel_date',
        'adult_count',
        'child_count',
        'contact_name',
        'created_at'
      )
      .orderBy('created_at', 'desc')
      .limit(10);
    const recentTourInfo = await tourInfoForBookings(recentRowsRaw.map((r) => r.id));
    const recentBookings = recentRowsRaw.map((r) => ({
      id: r.id,
      status: r.status,
      total_price: Number(r.total_price || 0),
      travel_date: r.travel_date,
      seats: Number(r.adult_count || 0) + Number(r.child_count || 0),
      contact_name: r.contact_name,
      tour_name: recentTourInfo[r.id]?.tour_name || null,
      created_at: r.created_at,
    }));

    // ── Upcoming departures (next 7 days, Paid only) ─────
    const upcomingRowsRaw = await knex('bookings')
      .where('status', 'Paid')
      .where('travel_date', '>=', toDateKey(now))
      .where('travel_date', '<', toDateKey(addDays(now, 7)))
      .select(
        'id',
        'travel_date',
        'adult_count',
        'child_count',
        'contact_name'
      )
      .orderBy('travel_date', 'asc');
    const upcomingTourInfo = await tourInfoForBookings(upcomingRowsRaw.map((r) => r.id));
    const upcomingDepartures = upcomingRowsRaw.map((r) => ({
      id: r.id,
      travel_date: r.travel_date,
      seats: Number(r.adult_count || 0) + Number(r.child_count || 0),
      capacity: Number(upcomingTourInfo[r.id]?.max_participants || 0),
      contact_name: r.contact_name,
      tour_name: upcomingTourInfo[r.id]?.tour_name || null,
    }));

    ctx.body = {
      data: {
        generated_at: now.toISOString(),
        kpis: {
          revenue_mtd: paidRevenueMTD,
          revenue_all_time: paidRevenueAll,
          bookings_mtd: totalBookingsMTD,
          bookings_all_time: totalBookingsAll,
          paid_count_all_time: paidCount,
          conversion_rate: conversionRate,
          aov: aov,
          seats_mtd: seatsMTD,
          upcoming_7d: Number(upcomingCount || 0),
          active_customers: Number(activeCustomers || 0),
          refunds_mtd_count: Number(refundMTD?.count || 0),
          refunds_mtd_amount: Number(refundMTD?.amount || 0),
        },
        status_breakdown: statusSeries,
        refund_breakdown: refundSeries,
        revenue_series: revenueSeries,
        top_tours: topTours,
        recent_bookings: recentBookings,
        upcoming_departures: upcomingDepartures,
      },
    };
  },
};
