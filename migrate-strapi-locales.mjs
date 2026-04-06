/**
 * Strapi Locale Migration Script
 * ================================
 * This script migrates all Strapi content to proper tri-lingual support.
 *
 * Problem: All content is stored under locale="en" but the text is Vietnamese.
 * Solution:
 *   1. Create vi and zh locale entries with correct translations
 *   2. Update existing en entries to have proper English text
 *
 * Strategy (per content type):
 *   - PUT ?locale=vi  -> Vietnamese (the ORIGINAL text, kept as-is from current "en")
 *   - PUT ?locale=zh  -> Chinese translations
 *   - PUT ?locale=en  -> English translations (overwrite the current Vietnamese)
 *
 * Order matters: We create vi & zh FIRST (they copy from the existing en data),
 * then overwrite en last so we don't lose the original Vietnamese text.
 */

import http from 'node:http';

// ── Config ──────────────────────────────────────────────────────────
const STRAPI_URL = 'http://localhost:1337';
const API_TOKEN =
  '3f031e1d4d40388df56a5ee3701bf4b5e9ca5efddd543c15af42d2ed2f24a723031914adea35628711b5574a317f20ea14841d1c165e728f7ff0753f3ad7b3b5cba03012abdb0663c41234478d3682c1050ea5f272c1547379fb4be75c6b5842e9b53f9fe939446cde3c7ddbe6fd1dafe00cc65503c83ebc0871bf819d3e782e';

// ── HTTP helpers ────────────────────────────────────────────────────

function request(method, path, body) {
  return new Promise((resolve, reject) => {
    const payload = body ? JSON.stringify(body) : null;
    const opts = {
      hostname: 'localhost',
      port: 1337,
      path,
      method,
      headers: {
        Authorization: `Bearer ${API_TOKEN}`,
        'Content-Type': 'application/json',
      },
    };
    if (payload) opts.headers['Content-Length'] = Buffer.byteLength(payload);

    const req = http.request(opts, (res) => {
      let data = '';
      res.on('data', (c) => (data += c));
      res.on('end', () => {
        try {
          resolve({ status: res.statusCode, body: JSON.parse(data) });
        } catch {
          resolve({ status: res.statusCode, body: data });
        }
      });
    });
    req.on('error', reject);
    if (payload) req.write(payload);
    req.end();
  });
}

const GET = (path) => request('GET', path);
const PUT = (path, body) => request('PUT', path, body);
const POST = (path, body) => request('POST', path, body);

// Helper: make a blocks-format rich text from a simple string
function blocksText(text) {
  return [{ type: 'paragraph', children: [{ type: 'text', text }] }];
}

function blocksBoldAndNormal(boldText, normalText) {
  return [
    { type: 'paragraph', children: [{ type: 'text', text: boldText, bold: true }] },
    { type: 'paragraph', children: [{ type: 'text', text: normalText }] },
  ];
}

// Small delay to avoid overwhelming Strapi
const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

// ── Logging ─────────────────────────────────────────────────────────
let successCount = 0;
let errorCount = 0;
const errors = [];

function logOK(msg) {
  successCount++;
  console.log(`  ✅ ${msg}`);
}
function logERR(msg, detail) {
  errorCount++;
  errors.push(msg);
  console.error(`  ❌ ${msg}`, detail || '');
}

// ── Generic migration function ──────────────────────────────────────

/**
 * Migrate a single-type content
 * @param {string} apiName - e.g. "home-hero-slider"
 * @param {object} viData  - data payload for Vietnamese
 * @param {object} enData  - data payload for English
 * @param {object} zhData  - data payload for Chinese
 */
async function migrateSingleType(apiName, viData, enData, zhData) {
  console.log(`\n📦 Migrating: ${apiName}`);

  // 1) Create vi locale
  const viRes = await PUT(`/api/${apiName}?locale=vi`, { data: viData });
  if (viRes.status === 200) logOK(`${apiName} [vi] created/updated`);
  else logERR(`${apiName} [vi] failed (${viRes.status})`, JSON.stringify(viRes.body).substring(0, 200));

  await sleep(200);

  // 2) Create zh locale
  const zhRes = await PUT(`/api/${apiName}?locale=zh`, { data: zhData });
  if (zhRes.status === 200) logOK(`${apiName} [zh] created/updated`);
  else logERR(`${apiName} [zh] failed (${zhRes.status})`, JSON.stringify(zhRes.body).substring(0, 200));

  await sleep(200);

  // 3) Update en locale (overwrite Vietnamese with English)
  const enRes = await PUT(`/api/${apiName}?locale=en`, { data: enData });
  if (enRes.status === 200) logOK(`${apiName} [en] updated`);
  else logERR(`${apiName} [en] failed (${enRes.status})`, JSON.stringify(enRes.body).substring(0, 200));

  await sleep(200);
}

/**
 * Migrate a collection-type entry
 */
async function migrateCollectionEntry(apiName, documentId, viData, enData, zhData) {
  console.log(`\n📦 Migrating: ${apiName}/${documentId}`);

  // 1) Create vi
  const viRes = await PUT(`/api/${apiName}/${documentId}?locale=vi`, { data: viData });
  if (viRes.status === 200) logOK(`${apiName}/${documentId} [vi]`);
  else logERR(`${apiName}/${documentId} [vi] (${viRes.status})`, JSON.stringify(viRes.body).substring(0, 200));

  await sleep(200);

  // 2) Create zh
  const zhRes = await PUT(`/api/${apiName}/${documentId}?locale=zh`, { data: zhData });
  if (zhRes.status === 200) logOK(`${apiName}/${documentId} [zh]`);
  else logERR(`${apiName}/${documentId} [zh] (${zhRes.status})`, JSON.stringify(zhRes.body).substring(0, 200));

  await sleep(200);

  // 3) Update en
  const enRes = await PUT(`/api/${apiName}/${documentId}?locale=en`, { data: enData });
  if (enRes.status === 200) logOK(`${apiName}/${documentId} [en]`);
  else logERR(`${apiName}/${documentId} [en] (${enRes.status})`, JSON.stringify(enRes.body).substring(0, 200));

  await sleep(200);
}

// ══════════════════════════════════════════════════════════════════════
// ── TRANSLATION DATA ────────────────────────────────────────────────
// ══════════════════════════════════════════════════════════════════════

async function main() {
  console.log('🚀 Starting Strapi Locale Migration...\n');
  console.log('Strategy: Create vi & zh locales, then update en with English text.\n');

  // ────────────────────────────────────────────────────────────────
  // 1. HOME HERO SLIDER
  // ────────────────────────────────────────────────────────────────
  await migrateSingleType(
    'home-hero-slider',
    // vi (keep original Vietnamese)
    {
      Slide: [
        { Title: 'Vịnh Hạ Long', navTextLine1: 'Du thuyền', navTextLine2: 'Vịnh Hạ Long', buttonText: 'Khám phá ngay' },
        { Title: 'Phố cổ Hội An', navTextLine1: 'Đèn lồng', navTextLine2: 'Hội An', buttonText: 'Khám phá các tour' },
        { Title: 'Thành phố biển Đà Nẵng', navTextLine1: 'Cầu Vàng', navTextLine2: 'Bãi biển trong xanh', buttonText: 'Đăng ký ngay' },
        { Title: 'Ninh Bình', navTextLine1: 'Quần thể Tràng An', navTextLine2: 'Du ngoạn trên sông', buttonText: 'Đăng kí tư vấn ngay' },
      ],
    },
    // en
    {
      Slide: [
        { Title: 'Ha Long Bay', navTextLine1: 'Cruise', navTextLine2: 'Ha Long Bay', buttonText: 'Explore Now' },
        { Title: 'Hoi An Ancient Town', navTextLine1: 'Lanterns', navTextLine2: 'Hoi An', buttonText: 'Explore Tours' },
        { Title: 'Da Nang Coastal City', navTextLine1: 'Golden Bridge', navTextLine2: 'Crystal Clear Beaches', buttonText: 'Register Now' },
        { Title: 'Ninh Binh', navTextLine1: 'Trang An Complex', navTextLine2: 'River Excursion', buttonText: 'Get a Free Consultation' },
      ],
    },
    // zh
    {
      Slide: [
        { Title: '下龙湾', navTextLine1: '游轮', navTextLine2: '下龙湾', buttonText: '立即探索' },
        { Title: '会安古镇', navTextLine1: '灯笼', navTextLine2: '会安', buttonText: '探索旅游线路' },
        { Title: '岘港海滨城市', navTextLine1: '金桥', navTextLine2: '碧海沙滩', buttonText: '立即注册' },
        { Title: '宁平', navTextLine1: '长安名胜群', navTextLine2: '河上游览', buttonText: '立即获取免费咨询' },
      ],
    }
  );

  // ────────────────────────────────────────────────────────────────
  // 2. HOME COMMITMENT
  // ────────────────────────────────────────────────────────────────
  await migrateSingleType(
    'home-commitment',
    // vi
    {
      PreTitle: 'Tại sao lại chọn chúng tôi',
      Title: 'Cam kết mang đến trải nghiệm Việt Nam trọn vẹn nhất',
      Descriptions: blocksText(
        'Chúng tôi cam kết mang đến những hành trình tuyệt vời và chân thực nhất trên khắp mọi miền Việt Nam. Bằng kiến thức sâu rộng của người bản địa và tiêu chuẩn dịch vụ khắt khe nhất, chúng tôi tự hào là cầu nối đưa bạn đến với vẻ đẹp trọn vẹn của dải đất hình chữ S. Hãy để chúng tôi đồng hành cùng bạn trên mỗi bước chân khám phá!'
      ),
      buttonText: 'Đăng kí tư vấn ngay',
      buttonPath: '/about',
    },
    // en
    {
      PreTitle: 'Why Choose Us',
      Title: 'Committed to Delivering the Most Authentic Vietnam Experience',
      Descriptions: blocksText(
        'We are committed to bringing you the most wonderful and authentic journeys across every region of Vietnam. With deep local knowledge and the highest service standards, we proudly serve as your bridge to the full beauty of the S-shaped land. Let us accompany you on every step of discovery!'
      ),
      buttonText: 'Get a Free Consultation',
      buttonPath: '/about',
    },
    // zh
    {
      PreTitle: '为什么选择我们',
      Title: '致力于为您提供最完整的越南体验',
      Descriptions: blocksText(
        '我们致力于为您带来越南各地最精彩、最真实的旅行体验。凭借深厚的本地知识和最严格的服务标准，我们自豪地成为连接您与S形国土之美的桥梁。让我们陪伴您踏上每一步探索之旅！'
      ),
      buttonText: '立即获取免费咨询',
      buttonPath: '/about',
    }
  );

  // ────────────────────────────────────────────────────────────────
  // 3. HOME DIAGRAM
  // ────────────────────────────────────────────────────────────────
  await migrateSingleType(
    'home-diagram',
    // vi (fix placeholder "Muốn" values with proper Vietnamese)
    {
      Badge: 'TravelTVB',
      Title: 'Cách Tour Hoạt Động',
      Descriptions: 'TravelTVB là người bạn đồng hành du lịch đáng tin cậy của bạn',
      comparePlans: 'So sánh',
      expertAdvice: 'Tư vấn chuyên gia',
      business: 'Doanh nghiệp',
      saveTime: 'Tiết kiệm thời gian',
      complexSolutions: 'Giải pháp toàn diện',
      maximizeBenefits: 'Tối đa lợi ích',
      insuranceBroker: 'Đại lý tour',
      riskAnalysis: 'Phân tích rủi ro',
      negotiation: 'Đàm phán',
      contractSupport: 'Hỗ trợ hợp đồng',
      claimsHandling: 'Xử lý khiếu nại',
      rightProduct: 'Sản phẩm phù hợp',
      insuranceProvider: 'Nhà cung cấp tour',
    },
    // en
    {
      Badge: 'TravelTVB',
      Title: 'How Our Tours Work',
      Descriptions: 'TravelTVB is your trusted travel companion',
      comparePlans: 'Compare',
      expertAdvice: 'Expert Advice',
      business: 'Business',
      saveTime: 'Save Time',
      complexSolutions: 'Complex Solutions',
      maximizeBenefits: 'Maximize Benefits',
      insuranceBroker: 'Tour Broker',
      riskAnalysis: 'Risk Analysis',
      negotiation: 'Negotiation',
      contractSupport: 'Contract Support',
      claimsHandling: 'Claims Handling',
      rightProduct: 'Right Product',
      insuranceProvider: 'Tour Provider',
    },
    // zh
    {
      Badge: 'TravelTVB',
      Title: '我们的旅游如何运作',
      Descriptions: 'TravelTVB是您值得信赖的旅行伙伴',
      comparePlans: '比较',
      expertAdvice: '专家建议',
      business: '商务',
      saveTime: '节省时间',
      complexSolutions: '复杂方案',
      maximizeBenefits: '最大化收益',
      insuranceBroker: '旅游经纪人',
      riskAnalysis: '风险分析',
      negotiation: '协商',
      contractSupport: '合同支持',
      claimsHandling: '索赔处理',
      rightProduct: '合适产品',
      insuranceProvider: '旅游供应商',
    }
  );

  // ────────────────────────────────────────────────────────────────
  // 4. HOME PORTFOLIO
  // ────────────────────────────────────────────────────────────────
  await migrateSingleType(
    'home-portfolio',
    // vi
    { Portfolio_Subtitle: 'Khám phá', Portfolia_Title: 'Các điểm đến được yêu thích nhất tại Việt Nam' },
    // en
    { Portfolio_Subtitle: 'Discover', Portfolia_Title: 'Most Loved Destinations in Vietnam' },
    // zh
    { Portfolio_Subtitle: '探索', Portfolia_Title: '越南最受欢迎的目的地' }
  );

  // ────────────────────────────────────────────────────────────────
  // 5. ABOUT HERO
  // ────────────────────────────────────────────────────────────────
  await migrateSingleType(
    'about-hero',
    // vi
    {
      Title: 'Về chúng tôi',
      Highlight: 'TravelTVB',
      Subtitle: blocksBoldAndNormal(
        'Trải nghiệm Việt Nam tuyệt vời nhất',
        'Đơn vị lữ hành hàng đầu Việt Nam – Cung cấp những trải nghiệm du lịch thuần túy và ấn tượng nhất.'
      ),
    },
    // en
    {
      Title: 'About Us',
      Highlight: 'TravelTVB',
      Subtitle: blocksBoldAndNormal(
        'The Best Vietnam Experience',
        "Vietnam's leading travel agency – Providing the most authentic and impressive travel experiences."
      ),
    },
    // zh
    {
      Title: '关于我们',
      Highlight: 'TravelTVB',
      Subtitle: blocksBoldAndNormal(
        '最佳越南体验',
        '越南领先的旅行社——提供最纯正、最令人印象深刻的旅行体验。'
      ),
    }
  );

  // ────────────────────────────────────────────────────────────────
  // 6. ABOUT JOURNEY
  // ────────────────────────────────────────────────────────────────
  await migrateSingleType(
    'about-journey',
    // vi
    {
      Highlight: 'Lịch sử',
      Title: 'HÀNH TRÌNH PHÁT TRIỂN',
      TimelineEvents: [
        { date: 'Tháng 8, 2019', cardTitle: 'Khởi Đầu Hành Trình', cardDescription: 'Đặt những viên gạch đầu tiên với sứ mệnh kết nối du khách và văn hóa bản địa.' },
        { date: 'Tháng 1, 2020', cardTitle: 'Vươn Tầm Hệ Thống', cardDescription: 'Mở rộng mạng lưới đối tác chiến lược tại các điểm đến hàng đầu khắp Việt Nam.' },
        { date: 'Tháng 9, 2020', cardTitle: 'Đổi Mới Công Nghệ', cardDescription: 'Ra mắt nền tảng đặt tour trực tuyến hiện đại, tối ưu hóa trải nghiệm khách hàng.' },
        { date: 'Tháng 7, 2024', cardTitle: 'Đơn Vị Lữ Hành Hàng Đầu', cardDescription: 'Tự hào phục vụ hơn 1 triệu lượt khách với những hành trình di sản độc bản.' },
      ],
    },
    // en
    {
      Highlight: 'History',
      Title: 'OUR JOURNEY',
      TimelineEvents: [
        { date: 'August 2019', cardTitle: 'The Beginning', cardDescription: 'Laying the first bricks with a mission to connect travelers with local culture.' },
        { date: 'January 2020', cardTitle: 'Expanding the Network', cardDescription: 'Expanding strategic partner networks at top destinations across Vietnam.' },
        { date: 'September 2020', cardTitle: 'Technology Innovation', cardDescription: 'Launching a modern online tour booking platform, optimizing the customer experience.' },
        { date: 'July 2024', cardTitle: 'Leading Travel Agency', cardDescription: 'Proudly serving over 1 million guests with unique heritage journeys.' },
      ],
    },
    // zh
    {
      Highlight: '历史',
      Title: '发展历程',
      TimelineEvents: [
        { date: '2019年8月', cardTitle: '启程', cardDescription: '奠定第一块基石，以连接游客与本地文化为使命。' },
        { date: '2020年1月', cardTitle: '系统升级', cardDescription: '在越南各顶级目的地拓展战略合作伙伴网络。' },
        { date: '2020年9月', cardTitle: '技术创新', cardDescription: '推出现代在线旅游预订平台，优化客户体验。' },
        { date: '2024年7月', cardTitle: '领先旅行社', cardDescription: '自豪地为超过100万游客提供独特的文化遗产之旅。' },
      ],
    }
  );

  // ────────────────────────────────────────────────────────────────
  // 7. ABOUT TEAM
  // ────────────────────────────────────────────────────────────────
  await migrateSingleType(
    'about-team',
    // vi
    {
      Team_highlight: 'Travel TVB',
      Team_title: 'Đội Ngũ TravelTVB',
      Team_leader_subtible: 'Đội Ngũ Phát Triển',
      Team_expert_subtitle: 'Đội Ngũ Chuyên Gia',
      Director_Subtitle: 'Ban Giám Đốc',
    },
    // en
    {
      Team_highlight: 'Travel TVB',
      Team_title: 'The TravelTVB Team',
      Team_leader_subtible: 'Development Team',
      Team_expert_subtitle: 'Expert Team',
      Director_Subtitle: 'Board of Directors',
    },
    // zh
    {
      Team_highlight: 'Travel TVB',
      Team_title: 'TravelTVB团队',
      Team_leader_subtible: '开发团队',
      Team_expert_subtitle: '专家团队',
      Director_Subtitle: '董事会',
    }
  );

  // ────────────────────────────────────────────────────────────────
  // 8. ABOUT CORE VALUES
  // ────────────────────────────────────────────────────────────────
  await migrateSingleType(
    'about-core-value',
    // vi
    {
      Highlight: 'TravelTVB',
      Title: 'Giá Trị Cốt Lõi',
      CtaCardTitle: 'Bạn cần tư vấn?',
      CtaCardDescriptions: 'Săn ngay những combo khách sạn và tour tuyến với mức giá cạnh tranh nhất thị trường. Nhận báo giá tốt nhất cho chuyến đi tiếp theo của bạn chỉ trong vài giây!',
      StackedCard: [
        { CardTitle: 'Tâm - Tín', Descriptions: 'Lấy sự hài lòng và tin cậy của khách hàng làm đích đến, hoạt động minh bạch, tận tâm' },
        { CardTitle: 'Chuyên nghiệp và uy tín', Descriptions: 'Đội ngũ trình độ cao, quy trình dễ thực hiện, hỗ trợ nhanh, đúng, đủ.' },
        { CardTitle: 'Độc Lập', Descriptions: 'Tìm kiếm và đề xuất giải pháp tối ưu, không bị chi phối bởi bên thứ ba.' },
        { CardTitle: 'Bảo Mật', Descriptions: 'Hệ thống quản trị an toàn, bảo vệ tuyệt đối thông tin khách hàng.' },
        { CardTitle: 'Dễ Tiếp Cận', Descriptions: 'Luôn sẵn sàng qua email, điện thoại, website để tư vấn và hỗ trợ' },
      ],
    },
    // en
    {
      Highlight: 'TravelTVB',
      Title: 'Core Values',
      CtaCardTitle: 'Need a Consultation?',
      CtaCardDescriptions: 'Find the best hotel and tour combos at the most competitive prices on the market. Get the best quote for your next trip in just seconds!',
      StackedCard: [
        { CardTitle: 'Heart & Trust', Descriptions: 'Customer satisfaction and trust are our destination; we operate with transparency and dedication.' },
        { CardTitle: 'Professional & Reputable', Descriptions: 'Highly skilled team, easy processes, fast, accurate, and thorough support.' },
        { CardTitle: 'Independent', Descriptions: 'Seeking and recommending optimal solutions, free from third-party influence.' },
        { CardTitle: 'Secure', Descriptions: 'Safe management system, absolute protection of customer information.' },
        { CardTitle: 'Accessible', Descriptions: 'Always available via email, phone, and website for consultation and support.' },
      ],
    },
    // zh
    {
      Highlight: 'TravelTVB',
      Title: '核心价值观',
      CtaCardTitle: '需要咨询？',
      CtaCardDescriptions: '以市场最具竞争力的价格抢购酒店和旅游套餐。只需几秒钟即可获取您下次旅行的最佳报价！',
      StackedCard: [
        { CardTitle: '用心 - 诚信', Descriptions: '以客户满意和信任为目标，透明经营，全心全意。' },
        { CardTitle: '专业与信誉', Descriptions: '高素质团队，流程简便，支持快速、准确、全面。' },
        { CardTitle: '独立', Descriptions: '寻找并推荐最优方案，不受第三方影响。' },
        { CardTitle: '安全保密', Descriptions: '安全的管理系统，绝对保护客户信息。' },
        { CardTitle: '便捷服务', Descriptions: '随时通过电子邮件、电话和网站提供咨询和支持。' },
      ],
    }
  );

  // ────────────────────────────────────────────────────────────────
  // 9. LAYOUT NAVBAR
  // ────────────────────────────────────────────────────────────────
  await migrateSingleType(
    'layout-navbar',
    // vi
    {
      navigationButtons: [
        { navigationText: 'Trang Chủ', path: '/' },
        { navigationText: 'Về Chúng Tôi', path: '/about' },
        { navigationText: 'Các Gói Tour', path: '/tours' },
        { navigationText: 'Tin Tức', path: '/news' },
        { navigationText: 'Cộng Đồng', path: '/community' },
      ],
      Nav_button: { Text: 'Liên Hệ Ngay', Url: '/contact' },
    },
    // en
    {
      navigationButtons: [
        { navigationText: 'Home', path: '/' },
        { navigationText: 'About Us', path: '/about' },
        { navigationText: 'Tour Packages', path: '/tours' },
        { navigationText: 'News', path: '/news' },
        { navigationText: 'Community', path: '/community' },
      ],
      Nav_button: { Text: 'Contact Us', Url: '/contact' },
    },
    // zh
    {
      navigationButtons: [
        { navigationText: '首页', path: '/' },
        { navigationText: '关于我们', path: '/about' },
        { navigationText: '旅游套餐', path: '/tours' },
        { navigationText: '新闻', path: '/news' },
        { navigationText: '社区', path: '/community' },
      ],
      Nav_button: { Text: '联系我们', Url: '/contact' },
    }
  );

  // ────────────────────────────────────────────────────────────────
  // 10. LAYOUT FOOTER
  // ────────────────────────────────────────────────────────────────
  await migrateSingleType(
    'layout-footer',
    // vi
    {
      Menu1_Title: 'Về chúng tôi',
      Menu2_Title: 'Góc chuyên gia',
      Contact_Title: 'Liên hệ',
      Footer_Address_Title: 'Địa chỉ',
      Footer_Address: '273 An Dương Vương, Phường 3, Quận 5, TP.HCM',
      Copyright: '2026 © TravelTVB. All rights reserved.',
      Footer_Menu1_Item: [
        { text: 'Trang chủ', path: '/' },
        { text: 'Giới thiệu', path: '/about' },
        { text: 'Tin tức', path: '/news' },
      ],
      Footer_Menu2_Item: [
        { text: 'Liên hệ chuyên gia', path: '/contact' },
        { text: 'Cộng đồng', path: '/community' },
        { text: 'Dịch vụ', path: '/service' },
      ],
      Contact_Item: [
        { label: 'SĐT:', value: '0909090909' },
        { label: 'Email:', value: 'TravelTVB@gmail.com' },
        { label: 'Giờ làm việc:', value: 'Từ thứ Hai đến thứ Sáu: 8h - 17h30. Thứ Bảy, Chủ nhật: Nghỉ' },
      ],
    },
    // en
    {
      Menu1_Title: 'About Us',
      Menu2_Title: 'Expert Corner',
      Contact_Title: 'Contact',
      Footer_Address_Title: 'Address',
      Footer_Address: '273 An Duong Vuong, Ward 3, District 5, HCMC',
      Copyright: '2026 © TravelTVB. All rights reserved.',
      Footer_Menu1_Item: [
        { text: 'Home', path: '/' },
        { text: 'About', path: '/about' },
        { text: 'News', path: '/news' },
      ],
      Footer_Menu2_Item: [
        { text: 'Contact an Expert', path: '/contact' },
        { text: 'Community', path: '/community' },
        { text: 'Services', path: '/service' },
      ],
      Contact_Item: [
        { label: 'Phone:', value: '0909090909' },
        { label: 'Email:', value: 'TravelTVB@gmail.com' },
        { label: 'Working Hours:', value: 'Mon - Fri: 8:00 AM - 5:30 PM. Sat & Sun: Closed' },
      ],
    },
    // zh
    {
      Menu1_Title: '关于我们',
      Menu2_Title: '专家角',
      Contact_Title: '联系方式',
      Footer_Address_Title: '地址',
      Footer_Address: '胡志明市第五郡第三坊安阳王街273号',
      Copyright: '2026 © TravelTVB. 版权所有。',
      Footer_Menu1_Item: [
        { text: '首页', path: '/' },
        { text: '关于', path: '/about' },
        { text: '新闻', path: '/news' },
      ],
      Footer_Menu2_Item: [
        { text: '联系专家', path: '/contact' },
        { text: '社区', path: '/community' },
        { text: '服务', path: '/service' },
      ],
      Contact_Item: [
        { label: '电话:', value: '0909090909' },
        { label: '邮箱:', value: 'TravelTVB@gmail.com' },
        { label: '工作时间:', value: '周一至周五：8:00 - 17:30。周六、周日：休息' },
      ],
    }
  );

  // ────────────────────────────────────────────────────────────────
  // 11. LAYOUT CTA BANNER
  // ────────────────────────────────────────────────────────────────
  await migrateSingleType(
    'layout-cta-banner',
    // vi
    {
      Cta_Text: 'Bạn cần tư vấn chuyên môn?',
      Cta_Banner_Button: { Text: 'Đăng kí tư vấn ngay', Url: '/contact' },
    },
    // en
    {
      Cta_Text: 'Need Expert Advice?',
      Cta_Banner_Button: { Text: 'Get a Free Consultation', Url: '/contact' },
    },
    // zh
    {
      Cta_Text: '需要专业咨询？',
      Cta_Banner_Button: { Text: '立即获取免费咨询', Url: '/contact' },
    }
  );

  // ────────────────────────────────────────────────────────────────
  // 12. LAYOUT NEWSLETTER
  // ────────────────────────────────────────────────────────────────
  await migrateSingleType(
    'layout-newsletter',
    // vi
    { Newsletter_banner_Text: 'Đăng ký để nhận tư vấn từ chuyên gia', Newsletter_button_text: 'Đăng Ký' },
    // en
    { Newsletter_banner_Text: 'Subscribe to Receive Expert Advice', Newsletter_button_text: 'Subscribe' },
    // zh
    { Newsletter_banner_Text: '订阅以获取专家建议', Newsletter_button_text: '订阅' }
  );

  // ────────────────────────────────────────────────────────────────
  // 13. NEWS HERO
  // ────────────────────────────────────────────────────────────────
  await migrateSingleType(
    'news-hero',
    // vi
    {
      News_MainTitle: 'Tin tức du lịch',
      News_subTitle: 'Chúng tôi luôn sẵn sàng hướng dẫn, đồng hành và mang đến sự an tâm, giúp Quý vị thuận tiền trong hành trình khám phá Việt Nam',
      NewsletterLabel: 'Tham gia newsletter của TVB',
      followUsText: 'Theo dõi chúng tôi trên:',
    },
    // en
    {
      News_MainTitle: 'Travel News',
      News_subTitle: 'We are always ready to guide, accompany, and bring peace of mind, helping you explore Vietnam with ease.',
      NewsletterLabel: "Join TVB's Newsletter",
      followUsText: 'Follow us on:',
    },
    // zh
    {
      News_MainTitle: '旅游新闻',
      News_subTitle: '我们随时准备引导、陪伴并带来安心，帮助您轻松探索越南。',
      NewsletterLabel: '加入TVB新闻通讯',
      followUsText: '关注我们：',
    }
  );

  // ────────────────────────────────────────────────────────────────
  // 14. COMMUNITY HERO
  // ────────────────────────────────────────────────────────────────
  await migrateSingleType(
    'community-hero',
    // vi
    {
      Community_MainTitle: 'Hướng Dẫn Du Lịch',
      Community_SubTitle: 'Chúng tôi luôn sẵn sàng hướng dẫn, đồng hành và mang đến sự an tâm, giúp Quý vị thuận tiền trong hành trình khám phá Việt Nam',
      Community_NewsletterText: 'Tham gia newsletter của TVB',
      followUsText: 'Theo dõi chúng tôi trên:',
    },
    // en
    {
      Community_MainTitle: 'Travel Guide',
      Community_SubTitle: 'We are always ready to guide, accompany, and bring peace of mind, helping you explore Vietnam with ease.',
      Community_NewsletterText: "Join TVB's Newsletter",
      followUsText: 'Follow us on:',
    },
    // zh
    {
      Community_MainTitle: '旅游指南',
      Community_SubTitle: '我们随时准备引导、陪伴并带来安心，帮助您轻松探索越南。',
      Community_NewsletterText: '加入TVB新闻通讯',
      followUsText: '关注我们：',
    }
  );

  // ────────────────────────────────────────────────────────────────
  // 15. FAQ
  // ────────────────────────────────────────────────────────────────
  await migrateSingleType(
    'faq',
    // vi
    {
      MainTitle: blocksText('Những câu hỏi\nthường gặp'),
      Question: [
        {
          Question: 'Làm thế nào để tôi đặt tour trên trang web của bạn?',
          Answer: blocksText('Bạn chỉ cần duyệt qua danh sách tour theo điểm đến, loại hình hoạt động hoặc ngày khởi hành. Khi tìm thấy tour ưng ý, hãy chọn ngày đi, số lượng người và nhấp vào "Đặt ngay". Sau đó, bạn chỉ cần làm theo các bước thanh toán để xác nhận giữ chỗ.'),
        },
        {
          Question: 'Có bất kỳ khoản phụ phí ẩn nào không?',
          Answer: blocksText('Không, chúng tôi cam kết minh bạch về giá. Mức giá bạn thấy ở bước thanh toán là giá cuối cùng cho các dịch vụ được liệt kê. Vui lòng đọc kỹ mục "Bao gồm / Không bao gồm" trong từng tour, vì các chi phí cá nhân, vé máy bay và tiền tip thường không nằm trong giá tour.'),
        },
        {
          Question: 'Các nhà điều hành tour được kiểm định như thế nào?',
          Answer: blocksText('Là một nền tảng môi giới uy tín, chúng tôi chỉ hợp tác với các nhà điều hành và hướng dẫn viên địa phương có giấy phép kinh doanh hợp lệ và đánh giá cao từ khách hàng. Chúng tôi liên tục theo dõi phản hồi để đảm bảo các đối tác luôn duy trì tiêu chuẩn cao nhất về an toàn và chất lượng dịch vụ.'),
        },
      ],
    },
    // en
    {
      MainTitle: blocksText('Frequently Asked Questions'),
      Question: [
        {
          Question: 'How do I book a tour on your website?',
          Answer: blocksText('Simply browse our tour listings by destination, activity type, or departure date. When you find a tour you like, select your travel date and number of guests, then click "Book Now." Follow the payment steps to confirm your reservation.'),
        },
        {
          Question: 'Are there any hidden surcharges?',
          Answer: blocksText('No, we are committed to price transparency. The price you see at checkout is the final price for the listed services. Please read the "Included / Not Included" section of each tour carefully, as personal expenses, airfare, and tips are typically not included in the tour price.'),
        },
        {
          Question: 'How are tour operators vetted?',
          Answer: blocksText('As a reputable brokerage platform, we only partner with local operators and guides who hold valid business licenses and receive high customer ratings. We continuously monitor feedback to ensure partners maintain the highest standards of safety and service quality.'),
        },
      ],
    },
    // zh
    {
      MainTitle: blocksText('常见问题'),
      Question: [
        {
          Question: '如何在您的网站上预订旅游？',
          Answer: blocksText('只需按目的地、活动类型或出发日期浏览我们的旅游列表。找到心仪的旅游后，选择出发日期和人数，然后点击"立即预订"。按照付款步骤确认您的预订。'),
        },
        {
          Question: '有任何隐藏费用吗？',
          Answer: blocksText('不，我们承诺价格透明。您在结账时看到的价格就是所列服务的最终价格。请仔细阅读每个旅游的"包含/不包含"部分，因为个人费用、机票和小费通常不包含在旅游价格中。'),
        },
        {
          Question: '旅游运营商是如何审核的？',
          Answer: blocksText('作为一个信誉良好的中介平台，我们只与持有有效营业执照并获得高客户评价的当地运营商和导游合作。我们持续监控反馈，确保合作伙伴始终保持最高的安全和服务质量标准。'),
        },
      ],
    }
  );

  // ────────────────────────────────────────────────────────────────
  // 16. TOUR CATEGORIES (Collection Type)
  // ────────────────────────────────────────────────────────────────
  const tourCats = [
    {
      documentId: 'mn32rw213q64cod4f0lfyr6g',
      vi: { Category_Name: 'Miền Bắc' },
      en: { Category_Name: 'Northern Vietnam' },
      zh: { Category_Name: '北部' },
    },
    {
      documentId: 'r3lw8gp1god5t8jycuielwud',
      vi: { Category_Name: 'Miền Trung' },
      en: { Category_Name: 'Central Vietnam' },
      zh: { Category_Name: '中部' },
    },
    {
      documentId: 'ri70ywjcefrnpcqlpj7suiz6',
      vi: { Category_Name: 'Miền Nam' },
      en: { Category_Name: 'Southern Vietnam' },
      zh: { Category_Name: '南部' },
    },
  ];

  for (const cat of tourCats) {
    await migrateCollectionEntry('tour-categories', cat.documentId, cat.vi, cat.en, cat.zh);
  }

  // ────────────────────────────────────────────────────────────────
  // 17. TOURS (Collection Type)
  // ────────────────────────────────────────────────────────────────

  // Tour 1: Northern Vietnam
  await migrateCollectionEntry(
    'tours',
    'h40ez2sgznvuse8fdj1y6sjy',
    // vi
    {
      Tour_Name: 'Khám Phá Vẻ Đẹp Miền Bắc: Hà Nội - Hạ Long - Sapa',
      slug: 'kham-pha-ve-dep-mien-bac-ha-noi-ha-long-sapa',
      Short_Description: 'Trải nghiệm trọn vẹn văn hóa thủ đô ngàn năm văn hiến, kỳ quan thiên nhiên Vịnh Hạ Long và vẻ đẹp hùng vĩ của núi rừng Tây Bắc.',
      Location: 'Hà Nội, Quảng Ninh, Lào Cai',
      Departure_Location: 'Hà Nội',
      Highlights: [
        { Highlight_Text: 'Ngủ đêm trên du thuyền 4 sao tại Vịnh Hạ Long.' },
        { Highlight_Text: 'Chinh phục đỉnh Fansipan hùng vĩ.' },
        { Highlight_Text: 'Thưởng thức phở và cà phê trứng chuẩn vị Hà Nội.' },
      ],
    },
    // en
    {
      Tour_Name: 'Discover Northern Beauty: Hanoi - Ha Long - Sapa',
      slug: 'discover-northern-beauty-hanoi-ha-long-sapa',
      Short_Description: 'Experience the full culture of the thousand-year-old capital, the natural wonder of Ha Long Bay, and the majestic beauty of the Northwest mountains.',
      Location: 'Hanoi, Quang Ninh, Lao Cai',
      Departure_Location: 'Hanoi',
      Highlights: [
        { Highlight_Text: 'Overnight stay on a 4-star cruise in Ha Long Bay.' },
        { Highlight_Text: 'Conquer the majestic Fansipan peak.' },
        { Highlight_Text: 'Savor authentic Hanoi pho and egg coffee.' },
      ],
    },
    // zh
    {
      Tour_Name: '探索北部之美：河内 - 下龙 - 沙坝',
      slug: 'discover-northern-beauty-hanoi-ha-long-sapa',
      Short_Description: '体验千年古都的完整文化、下龙湾的自然奇观和西北山区的壮丽之美。',
      Location: '河内、广宁、老街',
      Departure_Location: '河内',
      Highlights: [
        { Highlight_Text: '在下龙湾四星级游轮上过夜。' },
        { Highlight_Text: '征服壮丽的番西邦峰。' },
        { Highlight_Text: '品尝正宗河内河粉和蛋咖啡。' },
      ],
    }
  );

  // Tour 2: Central Vietnam
  await migrateCollectionEntry(
    'tours',
    'iyp9ta3nmf8aqk8yvtc6v98z',
    // vi
    {
      Tour_Name: 'Hành Trình Di Sản Miền Trung: Đà Nẵng - Hội An - Huế',
      slug: 'hanh-trinh-di-san-mien-trung-da-nang-hoi-an-hue',
      Short_Description: 'Đắm chìm trong không gian hoài cổ của phố cổ Hội An, sự trầm mặc của cố đô Huế và nhịp sống hiện đại, năng động của thành phố biển Đà Nẵng.',
      Location: 'Đà Nẵng, Quảng Nam, Thừa Thiên Huế',
      Departure_Location: 'Đà Nẵng',
      Highlights: [
        { Highlight_Text: 'Check-in Cầu Vàng và vui chơi tại Bà Nà Hills.' },
      ],
    },
    // en
    {
      Tour_Name: 'Central Heritage Journey: Da Nang - Hoi An - Hue',
      slug: 'central-heritage-journey-da-nang-hoi-an-hue',
      Short_Description: 'Immerse yourself in the nostalgic atmosphere of Hoi An Ancient Town, the serenity of the ancient capital Hue, and the vibrant modern rhythm of the coastal city Da Nang.',
      Location: 'Da Nang, Quang Nam, Thua Thien Hue',
      Departure_Location: 'Da Nang',
      Highlights: [
        { Highlight_Text: 'Check in at the Golden Bridge and enjoy Ba Na Hills.' },
      ],
    },
    // zh
    {
      Tour_Name: '中部遗产之旅：岘港 - 会安 - 顺化',
      slug: 'central-heritage-journey-da-nang-hoi-an-hue',
      Short_Description: '沉浸在会安古镇的怀旧氛围、古都顺化的宁静以及海滨城市岘港的现代活力中。',
      Location: '岘港、广南、承天顺化',
      Departure_Location: '岘港',
      Highlights: [
        { Highlight_Text: '在金桥打卡并畅玩巴拿山。' },
      ],
    }
  );

  // ────────────────────────────────────────────────────────────────
  // 18. POST CATEGORIES (Collection Type)
  // ────────────────────────────────────────────────────────────────
  const postCats = [
    {
      documentId: 'te5sele8nyz86j1bpm5owcw9',
      vi: { Category_Name: 'Miền Bắc' },
      en: { Category_Name: 'Northern Vietnam' },
      zh: { Category_Name: '北部' },
    },
    {
      documentId: 'a9etfp885w0z0uaou5xncs2y',
      vi: { Category_Name: 'Miền Nam' },
      en: { Category_Name: 'Southern Vietnam' },
      zh: { Category_Name: '南部' },
    },
  ];

  for (const cat of postCats) {
    await migrateCollectionEntry('post-categories', cat.documentId, cat.vi, cat.en, cat.zh);
  }

  // ────────────────────────────────────────────────────────────────
  // 19. NEWS POSTS (Collection Type) - 4 posts all same title
  // ────────────────────────────────────────────────────────────────
  const singlePostIds = [
    'yc7ijliqvxeutx6e39x4r96t',
    'u8u7987ggaat7mr9k94obshr',
    'v3xtdlca8sd15hqmlbt71twq',
    'zsnk9sdebphi3jml3mmoqgoy',
  ];

  for (const docId of singlePostIds) {
    await migrateCollectionEntry(
      'single-posts',
      docId,
      // vi
      {
        PostTitle: 'Top 5 Điểm Đến Nhất Định Phải Ghé Thăm Tại Việt Nam Mùa Hè Này',
        Audio_Button_Text: 'Nghe bài viết',
        Audio_Pause_Text: 'Tạm dừng nghe',
        Related_Post_Highlight: 'Bài viết liên quan',
      },
      // en
      {
        PostTitle: 'Top 5 Must-Visit Destinations in Vietnam This Summer',
        Audio_Button_Text: 'Listen to article',
        Audio_Pause_Text: 'Pause',
        Related_Post_Highlight: 'Related Articles',
      },
      // zh
      {
        PostTitle: '今夏越南必去的5大目的地',
        Audio_Button_Text: '收听文章',
        Audio_Pause_Text: '暂停',
        Related_Post_Highlight: '相关文章',
      }
    );
  }

  // ────────────────────────────────────────────────────────────────
  // 20. COMMUNITY POST (Collection Type)
  // ────────────────────────────────────────────────────────────────
  await migrateCollectionEntry(
    'single-community-posts',
    'kafp07tw27ux77z9wz8spdg7',
    // vi
    {
      PostTitle: 'Nhật Ký Hướng Dẫn Viên: Khám Phá Hội An "Thật Khác" Qua Góc Nhìn Của Người Bản Địa',
      Audio_Button_Text: 'Lắng nghe chia sẻ',
      Audio_Pause_Text: 'Tạm dừng nghe',
      Related_Post_Highlight: 'Bài viết liên quan',
    },
    // en
    {
      PostTitle: "Tour Guide Diary: Discovering a \"Different\" Hoi An Through a Local's Eyes",
      Audio_Button_Text: 'Listen to the story',
      Audio_Pause_Text: 'Pause',
      Related_Post_Highlight: 'Related Posts',
    },
    // zh
    {
      PostTitle: '导游日记：通过当地人的视角发现"不一样的"会安',
      Audio_Button_Text: '聆听故事',
      Audio_Pause_Text: '暂停',
      Related_Post_Highlight: '相关文章',
    }
  );

  // ══════════════════════════════════════════════════════════════════
  // DONE
  // ══════════════════════════════════════════════════════════════════
  console.log('\n' + '═'.repeat(60));
  console.log(`🏁 Migration Complete!`);
  console.log(`   ✅ Successes: ${successCount}`);
  console.log(`   ❌ Errors:    ${errorCount}`);
  if (errors.length > 0) {
    console.log('\n📋 Error summary:');
    errors.forEach((e) => console.log(`   - ${e}`));
  }
  console.log('═'.repeat(60));
}

main().catch((err) => {
  console.error('💥 Fatal error:', err);
  process.exit(1);
});
