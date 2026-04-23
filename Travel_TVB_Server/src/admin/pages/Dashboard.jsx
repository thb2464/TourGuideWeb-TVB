import React, { useEffect, useState, useCallback } from 'react';
import { Page, Layouts, useFetchClient } from '@strapi/strapi/admin';
import {
  Box,
  Flex,
  Typography,
  Loader,
  Alert,
  Status,
  Table,
  Tr,
  Td,
  Th,
  Thead,
  Tbody,
} from '@strapi/design-system';
import {
  AreaChart,
  Area,
  BarChart,
  Bar,
  PieChart,
  Pie,
  Cell,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
  Legend,
} from 'recharts';

const STATUS_COLORS = {
  Paid: '#2F9461',
  Pending: '#D78A4A',
  Failed: '#C93A3A',
  Cancelled: '#8E8EA9',
};
const REFUND_COLORS = {
  refunded: '#2F9461',
  refund_failed: '#C93A3A',
  not_charged: '#4945FF',
  no_refund: '#8E8EA9',
  unknown: '#B5B7BB',
};
const FALLBACK = ['#4945FF', '#2F9461', '#D78A4A', '#C93A3A', '#8E8EA9'];
const ACCENT_PURPLE = '#4945FF';

function fmtVnd(n) {
  if (n == null) return '0 ₫';
  if (n >= 1_000_000_000) return `${(n / 1_000_000_000).toFixed(2)} tỷ ₫`;
  if (n >= 1_000_000) return `${(n / 1_000_000).toFixed(1)} tr ₫`;
  if (n >= 1_000) return `${(n / 1_000).toFixed(0)}K ₫`;
  return `${n.toLocaleString('vi-VN')} ₫`;
}

function fmtPct(n) {
  return `${(n * 100).toFixed(1)}%`;
}

function fmtNum(n) {
  return (n ?? 0).toLocaleString('en-US');
}

function fmtDateShort(iso) {
  if (!iso) return '—';
  const d = new Date(iso);
  return `${d.getDate().toString().padStart(2, '0')}/${(d.getMonth() + 1)
    .toString()
    .padStart(2, '0')}`;
}

function KpiCard({ label, value, sublabel, accent = ACCENT_PURPLE }) {
  return (
    <Box
      background="neutral0"
      paddingTop={5}
      paddingBottom={5}
      paddingLeft={5}
      paddingRight={5}
      shadow="tableShadow"
      hasRadius
      style={{
        height: '100%',
        borderLeft: `4px solid ${accent}`,
      }}
    >
      <Flex direction="column" alignItems="flex-start" gap={2}>
        <Typography variant="pi" textColor="neutral600" fontWeight="bold">
          {label.toUpperCase()}
        </Typography>
        <Typography variant="alpha" fontWeight="bold" textColor="neutral800">
          {value}
        </Typography>
        {sublabel && (
          <Typography variant="pi" textColor="neutral600">
            {sublabel}
          </Typography>
        )}
      </Flex>
    </Box>
  );
}

function Card({ title, children, padding = 5 }) {
  return (
    <Box background="neutral0" padding={padding} shadow="tableShadow" hasRadius>
      <Flex direction="column" alignItems="stretch" gap={3}>
        {title && <Typography variant="delta">{title}</Typography>}
        {children}
      </Flex>
    </Box>
  );
}

function ChartBox({ height = 280, children }) {
  return (
    <div style={{ width: '100%', height }}>
      <ResponsiveContainer width="100%" height="100%">
        {children}
      </ResponsiveContainer>
    </div>
  );
}

function statusVariant(status) {
  switch (status) {
    case 'Paid': return 'success';
    case 'Pending': return 'secondary';
    case 'Failed': return 'danger';
    case 'Cancelled': return 'alternative';
    default: return 'alternative';
  }
}

const kpiGridStyle = {
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
  gap: '16px',
};

const twoColGridStyle = {
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fit, minmax(360px, 1fr))',
  gap: '16px',
};

export default function Dashboard() {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const { get } = useFetchClient();

  const load = useCallback(async () => {
    try {
      const res = await get('/api/dashboard/overview');
      setData(res.data?.data || res.data);
      setError(null);
    } catch (e) {
      const status = e?.response?.status ?? e?.status;
      const msg = e?.response?.data?.error?.message || e?.message || 'Request failed';
      setError(status ? `HTTP ${status}: ${msg}` : msg);
    } finally {
      setLoading(false);
    }
  }, [get]);

  useEffect(() => {
    load();
    const interval = setInterval(load, 60000);
    return () => clearInterval(interval);
  }, [load]);

  if (loading && !data) {
    return (
      <Layouts.Root>
        <Page.Title>Dashboard</Page.Title>
        <Layouts.Header title="Dashboard" subtitle="Travel TVB overview" />
        <Layouts.Content>
          <Flex justifyContent="center" padding={8}>
            <Loader>Loading dashboard…</Loader>
          </Flex>
        </Layouts.Content>
      </Layouts.Root>
    );
  }

  if (error && !data) {
    return (
      <Layouts.Root>
        <Page.Title>Dashboard</Page.Title>
        <Layouts.Header title="Dashboard" subtitle="Travel TVB overview" />
        <Layouts.Content>
          <Alert title="Failed to load dashboard" variant="danger" closeLabel="Close">
            {error}
          </Alert>
        </Layouts.Content>
      </Layouts.Root>
    );
  }

  const {
    kpis,
    status_breakdown,
    refund_breakdown,
    revenue_series,
    top_tours,
    recent_bookings,
    upcoming_departures,
  } = data;

  const kpis1 = [
    {
      label: 'Revenue (MTD)',
      value: fmtVnd(kpis.revenue_mtd),
      sublabel: `All-time: ${fmtVnd(kpis.revenue_all_time)}`,
      accent: '#2F9461',
    },
    {
      label: 'Bookings (MTD)',
      value: fmtNum(kpis.bookings_mtd),
      sublabel: `All-time: ${fmtNum(kpis.bookings_all_time)}`,
      accent: '#4945FF',
    },
    {
      label: 'Conversion rate',
      value: fmtPct(kpis.conversion_rate),
      sublabel: 'Paid ÷ (Paid + Failed + Cancelled)',
      accent: '#D78A4A',
    },
    {
      label: 'Avg booking value',
      value: fmtVnd(kpis.aov),
      sublabel: `Across ${fmtNum(kpis.paid_count_all_time)} paid bookings`,
      accent: '#2F9461',
    },
  ];

  const kpis2 = [
    {
      label: 'Seats sold (MTD)',
      value: fmtNum(kpis.seats_mtd),
      sublabel: 'Adults + children',
      accent: '#4945FF',
    },
    {
      label: 'Upcoming 7-day',
      value: fmtNum(kpis.upcoming_7d),
      sublabel: 'Paid departures',
      accent: '#D78A4A',
    },
    {
      label: 'Active customers',
      value: fmtNum(kpis.active_customers),
      sublabel: '≥1 Paid booking',
      accent: '#4945FF',
    },
    {
      label: 'Refunds (MTD)',
      value: fmtVnd(kpis.refunds_mtd_amount),
      sublabel: `${fmtNum(kpis.refunds_mtd_count)} refunds issued`,
      accent: '#C93A3A',
    },
  ];

  return (
    <Layouts.Root>
      <Page.Title>Dashboard</Page.Title>
      <Layouts.Header
        title="Dashboard"
        subtitle={`Travel TVB overview — updated ${new Date(data.generated_at).toLocaleTimeString()}`}
      />
      <Layouts.Content>
        <Flex direction="column" alignItems="stretch" gap={5}>
          {error && (
            <Alert title="Refresh warning" variant="default" closeLabel="Close" onClose={() => setError(null)}>
              {error}
            </Alert>
          )}

          {/* KPI row 1 */}
          <div style={kpiGridStyle}>
            {kpis1.map((k) => (<KpiCard key={k.label} {...k} />))}
          </div>
          {/* KPI row 2 */}
          <div style={kpiGridStyle}>
            {kpis2.map((k) => (<KpiCard key={k.label} {...k} />))}
          </div>

          {/* Revenue trend */}
          <Card title="Revenue — last 30 days">
            <ChartBox height={260}>
              <AreaChart data={revenue_series} margin={{ top: 10, right: 20, left: 0, bottom: 0 }}>
                <defs>
                  <linearGradient id="revGrad" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor={ACCENT_PURPLE} stopOpacity={0.8} />
                    <stop offset="95%" stopColor={ACCENT_PURPLE} stopOpacity={0} />
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke="#eee" />
                <XAxis dataKey="date" tickFormatter={fmtDateShort} fontSize={11} />
                <YAxis tickFormatter={(v) => (v >= 1_000_000 ? `${(v / 1_000_000).toFixed(0)}M` : v)} fontSize={11} />
                <Tooltip
                  formatter={(v) => fmtVnd(v)}
                  labelFormatter={(l) => `Date: ${l}`}
                />
                <Area type="monotone" dataKey="revenue" stroke={ACCENT_PURPLE} strokeWidth={2} fill="url(#revGrad)" />
              </AreaChart>
            </ChartBox>
          </Card>

          {/* Two side-by-side pies */}
          <div style={twoColGridStyle}>
            <Card title="Booking status">
              <ChartBox height={280}>
                <PieChart>
                  <Pie
                    data={status_breakdown}
                    dataKey="value"
                    nameKey="name"
                    cx="50%"
                    cy="45%"
                    innerRadius={45}
                    outerRadius={90}
                    paddingAngle={2}
                  >
                    {status_breakdown.map((entry, i) => (
                      <Cell
                        key={i}
                        fill={STATUS_COLORS[entry.name] || FALLBACK[i % FALLBACK.length]}
                      />
                    ))}
                  </Pie>
                  <Tooltip formatter={(v, n) => [`${v} bookings`, n]} />
                  <Legend verticalAlign="bottom" iconType="circle" />
                </PieChart>
              </ChartBox>
            </Card>
            <Card title="Refund breakdown (cancelled)">
              <ChartBox height={280}>
                <PieChart>
                  <Pie
                    data={refund_breakdown}
                    dataKey="value"
                    nameKey="name"
                    cx="50%"
                    cy="45%"
                    innerRadius={45}
                    outerRadius={90}
                    paddingAngle={2}
                  >
                    {refund_breakdown.map((entry, i) => (
                      <Cell
                        key={i}
                        fill={REFUND_COLORS[entry.name] || FALLBACK[i % FALLBACK.length]}
                      />
                    ))}
                  </Pie>
                  <Tooltip formatter={(v, n) => [`${v} bookings`, n]} />
                  <Legend verticalAlign="bottom" iconType="circle" />
                </PieChart>
              </ChartBox>
            </Card>
          </div>

          {/* Top tours */}
          <Card title="Top 5 tours by bookings">
            <ChartBox height={Math.max(240, top_tours.length * 44 + 60)}>
              <BarChart
                data={top_tours}
                layout="vertical"
                margin={{ top: 10, right: 24, left: 16, bottom: 8 }}
              >
                <CartesianGrid strokeDasharray="3 3" stroke="#eee" />
                <XAxis type="number" fontSize={11} />
                <YAxis
                  dataKey="name"
                  type="category"
                  fontSize={11}
                  width={240}
                  interval={0}
                  tickFormatter={(v) => (v && v.length > 36 ? v.slice(0, 34) + '…' : v)}
                />
                <Tooltip formatter={(v, n) => [n === 'Revenue' ? fmtVnd(v) : v, n]} />
                <Legend />
                <Bar dataKey="bookings" fill={ACCENT_PURPLE} name="Bookings" radius={[0, 4, 4, 0]} />
              </BarChart>
            </ChartBox>
          </Card>

          {/* Upcoming departures */}
          <Card title="Upcoming departures (next 7 days)">
            {upcoming_departures.length === 0 ? (
              <Typography textColor="neutral600">No Paid bookings departing in the next 7 days.</Typography>
            ) : (
              <Table colCount={5} rowCount={upcoming_departures.length + 1}>
                <Thead>
                  <Tr>
                    <Th><Typography variant="sigma">Date</Typography></Th>
                    <Th><Typography variant="sigma">Tour</Typography></Th>
                    <Th><Typography variant="sigma">Customer</Typography></Th>
                    <Th><Typography variant="sigma">Seats</Typography></Th>
                    <Th><Typography variant="sigma">Capacity</Typography></Th>
                  </Tr>
                </Thead>
                <Tbody>
                  {upcoming_departures.map((r) => (
                    <Tr key={r.id}>
                      <Td><Typography>{r.travel_date}</Typography></Td>
                      <Td><Typography>{r.tour_name || '—'}</Typography></Td>
                      <Td><Typography>{r.contact_name || '—'}</Typography></Td>
                      <Td><Typography>{r.seats}</Typography></Td>
                      <Td><Typography>{r.capacity || '—'}</Typography></Td>
                    </Tr>
                  ))}
                </Tbody>
              </Table>
            )}
          </Card>

          {/* Recent bookings */}
          <Card title="Recent bookings">
            {recent_bookings.length === 0 ? (
              <Typography textColor="neutral600">No bookings yet.</Typography>
            ) : (
              <Table colCount={6} rowCount={recent_bookings.length + 1}>
                <Thead>
                  <Tr>
                    <Th><Typography variant="sigma">ID</Typography></Th>
                    <Th><Typography variant="sigma">Tour</Typography></Th>
                    <Th><Typography variant="sigma">Customer</Typography></Th>
                    <Th><Typography variant="sigma">Travel date</Typography></Th>
                    <Th><Typography variant="sigma">Amount</Typography></Th>
                    <Th><Typography variant="sigma">Status</Typography></Th>
                  </Tr>
                </Thead>
                <Tbody>
                  {recent_bookings.map((r) => (
                    <Tr key={r.id}>
                      <Td><Typography>#{r.id}</Typography></Td>
                      <Td><Typography>{r.tour_name || '—'}</Typography></Td>
                      <Td><Typography>{r.contact_name || '—'}</Typography></Td>
                      <Td><Typography>{r.travel_date}</Typography></Td>
                      <Td><Typography>{fmtVnd(r.total_price)}</Typography></Td>
                      <Td>
                        <Status variant={statusVariant(r.status)} showBullet>
                          <Typography>{r.status}</Typography>
                        </Status>
                      </Td>
                    </Tr>
                  ))}
                </Tbody>
              </Table>
            )}
          </Card>
        </Flex>
      </Layouts.Content>
    </Layouts.Root>
  );
}
