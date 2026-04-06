# Strapi Localization Audit & Translation Reference

## PROBLEM DIAGNOSIS

### Root Cause
The Strapi database has **two critical issues**:

1. **Only `en` (English) locale is registered** in the `i18n_locale` table. The `vi` and `zh` locales were never created in Strapi Admin.

2. **All content stored under `locale="en"` is actually written in Vietnamese.** Every single content entry (home hero slides, commitments, navbar, footer, tours, posts, FAQ, etc.) has `locale="en"` but the text is 100% Vietnamese.

### Impact
- When the frontend requests `?locale=en` -> it gets **Vietnamese content** (incorrectly labeled as English)
- When the frontend requests `?locale=vi` -> it gets **nothing** (no `vi` rows exist)
- When the frontend requests `?locale=zh` -> it gets **nothing** (no `zh` rows exist)

### What Needs to Happen
1. Register `vi` (Vietnamese) and `zh` (Chinese) locales in Strapi Admin -> Settings -> Internationalization
2. The existing `en` locale rows should either:
   - **Option A (Recommended):** Change the existing content's locale from `en` to `vi` (since the text is Vietnamese), then create new `en` and `zh` entries with proper translations.
   - **Option B:** Keep `en` as default, overwrite the Vietnamese text with English, then create `vi` and `zh` localized entries.

---

## TRANSLATION REFERENCE

Below is every piece of Strapi-managed content that needs proper translations across all 3 locales.

---

### 1. HOME HERO SLIDER (`home_hero_sliders` -> `components_slides_slides`)

| Field | vi (current "en" data) | en | zh |
|---|---|---|---|
| **Slide 1** |||
| title | Vịnh Hạ Long | Ha Long Bay | 下龙湾 |
| nav_text_line_1 | Du thuyền | Cruise | 游轮 |
| nav_text_line_2 | Vịnh Hạ Long | Ha Long Bay | 下龙湾 |
| button_text | Khám phá ngay | Explore Now | 立即探索 |
| **Slide 2** |||
| title | Phố cổ Hội An | Hoi An Ancient Town | 会安古镇 |
| nav_text_line_1 | Đèn lồng | Lanterns | 灯笼 |
| nav_text_line_2 | Hội An | Hoi An | 会安 |
| button_text | Khám phá các tour | Explore Tours | 探索旅游线路 |
| **Slide 3** |||
| title | Thành phố biển Đà Nẵng | Da Nang Coastal City | 岘港海滨城市 |
| nav_text_line_1 | Cầu Vàng | Golden Bridge | 金桥 |
| nav_text_line_2 | Bãi biển trong xanh | Crystal Clear Beaches | 碧海沙滩 |
| button_text | Đăng ký ngay | Register Now | 立即注册 |
| **Slide 4** |||
| title | Ninh Bình | Ninh Binh | 宁平 |
| nav_text_line_1 | Quần thể Tràng An | Trang An Complex | 长安名胜群 |
| nav_text_line_2 | Du ngoạn trên sông | River Excursion | 河上游览 |
| button_text | Đăng kí tư vấn ngay | Get a Free Consultation | 立即获取免费咨询 |

---

### 2. HOME STATISTICS (`home_statistics` -> `components_slides_statistic_slides`)

| Field | vi (current) | en | zh |
|---|---|---|---|
| **Stat 1** |||
| value | 15K+ | 15K+ | 15K+ |
| line_1 | Khách Hàng | Satisfied | 满意 |
| line_2 | Thõa Mãn | Customers | 客户 |
| **Stat 2** |||
| value | 100+ | 100+ | 100+ |
| line_1 | Đích Đến | Travel | 旅游 |
| line_2 | Du Lịch | Destinations | 目的地 |
| **Stat 3** |||
| value | 2+ | 2+ | 2+ |
| line_1 | Năm | Years of | 年 |
| line_2 | Kinh Nghiệm | Experience | 经验 |

---

### 3. HOME COMMITMENT (`home_commitments`)

| Field | vi (current "en" data) | en | zh |
|---|---|---|---|
| pre_title | Tại sao lại chọn chúng tôi | Why Choose Us | 为什么选择我们 |
| title | Cam kết mang đến trải nghiệm Việt Nam trọn vẹn nhất | Committed to Delivering the Most Authentic Vietnam Experience | 致力于为您提供最完整的越南体验 |
| descriptions | Chúng tôi cam kết mang đến những hành trình tuyệt vời và chân thực nhất trên khắp mọi miền Việt Nam. Bằng kiến thức sâu rộng của người bản địa và tiêu chuẩn dịch vụ khắt khe nhất, chúng tôi tự hào là cầu nối đưa bạn đến với vẻ đẹp trọn vẹn của dải đất hình chữ S. Hãy để chúng tôi đồng hành cùng bạn trên mỗi bước chân khám phá! | We are committed to bringing you the most wonderful and authentic journeys across every region of Vietnam. With deep local knowledge and the highest service standards, we proudly serve as your bridge to the full beauty of the S-shaped land. Let us accompany you on every step of discovery! | 我们致力于为您带来越南各地最精彩、最真实的旅行体验。凭借深厚的本地知识和最严格的服务标准，我们自豪地成为连接您与S形国土之美的桥梁。让我们陪伴您踏上每一步探索之旅！ |
| button_text | Đăng kí tư vấn ngay | Get a Free Consultation | 立即获取免费咨询 |
| button_path | /about | /about | /about |

---

### 4. HOME DIAGRAM (`home_diagrams`)

| Field | vi (current "en" data) | en | zh |
|---|---|---|---|
| badge | TravelTVB | TravelTVB | TravelTVB |
| title | Cách Tour Hoạt Động | How Our Tours Work | 我们的旅游如何运作 |
| descriptions | TravelTVB là là là là | TravelTVB is your trusted travel companion | TravelTVB是您值得信赖的旅行伙伴 |
| compare_plans | Muốn | Compare | 比较 |
| expert_advice | Muốn | Expert Advice | 专家建议 |
| business | Muốn | Business | 商务 |
| save_time | Muốn | Save Time | 节省时间 |
| complex_solutions | Muốn | Complex Solutions | 复杂方案 |
| maximize_benefits | Muốn | Maximize Benefits | 最大化收益 |
| insurance_broker | Muốn | Tour Broker | 旅游经纪人 |
| risk_analysis | Muốn | Risk Analysis | 风险分析 |
| negotiation | Muốn | Negotiation | 协商 |
| contract_support | Muốn | Contract Support | 合同支持 |
| claims_handling | Muốn | Claims Handling | 索赔处理 |
| right_product | Muốn | Right Product | 合适产品 |
| insurance_provider | Muốn | Tour Provider | 旅游供应商 |

> **Note:** The current `vi` content for the diagram section appears to be placeholder text ("Muốn" repeated). This needs proper Vietnamese content to be authored.

---

### 5. HOME PORTFOLIO (`home_portfolios`)

| Field | vi (current "en" data) | en | zh |
|---|---|---|---|
| portfolio_subtitle | Khám phá | Discover | 探索 |
| portfolia_title | Các điểm đến được yêu thích nhất tại Việt Nam | Most Loved Destinations in Vietnam | 越南最受欢迎的目的地 |

---

### 6. ABOUT HERO (`about_heroes`)

| Field | vi (current "en" data) | en | zh |
|---|---|---|---|
| title | Về chúng tôi | About Us | 关于我们 |
| highlight | TravelTVB | TravelTVB | TravelTVB |
| subtitle (rich text) | **Trải nghiệm Việt Nam tuyệt vời nhất** / Đơn vị lữ hành hàng đầu Việt Nam – Cung cấp những trải nghiệm du lịch thuần túy và ấn tượng nhất. | **The Best Vietnam Experience** / Vietnam's leading travel agency – Providing the most authentic and impressive travel experiences. | **最佳越南体验** / 越南领先的旅行社——提供最纯正、最令人印象深刻的旅行体验。 |

---

### 7. ABOUT JOURNEY (`about_journeys`)

| Field | vi (current "en" data) | en | zh |
|---|---|---|---|
| highlight | Lịch sử | History | 历史 |
| title | HÀNH TRÌNH PHÁT TRIỂN | OUR JOURNEY | 发展历程 |

#### Timeline Events (`components_slides_timeline_events`)

| Field | vi (current) | en | zh |
|---|---|---|---|
| **Event 1** |||
| date | Tháng 8, 2019 | August 2019 | 2019年8月 |
| card_title | Khởi Đầu Hành Trình | The Beginning | 启程 |
| card_description | Đặt những viên gạch đầu tiên với sứ mệnh kết nối du khách và văn hóa bản địa. | Laying the first bricks with a mission to connect travelers with local culture. | 奠定第一块基石，以连接游客与本地文化为使命。 |
| **Event 2** |||
| date | Tháng 1, 2020 | January 2020 | 2020年1月 |
| card_title | Vươn Tầm Hệ Thống | Expanding the Network | 系统升级 |
| card_description | Mở rộng mạng lưới đối tác chiến lược tại các điểm đến hàng đầu khắp Việt Nam. | Expanding strategic partner networks at top destinations across Vietnam. | 在越南各顶级目的地拓展战略合作伙伴网络。 |
| **Event 3** |||
| date | Tháng 9, 2020 | September 2020 | 2020年9月 |
| card_title | Đổi Mới Công Nghệ | Technology Innovation | 技术创新 |
| card_description | Ra mắt nền tảng đặt tour trực tuyến hiện đại, tối ưu hóa trải nghiệm khách hàng. | Launching a modern online tour booking platform, optimizing the customer experience. | 推出现代在线旅游预订平台，优化客户体验。 |
| **Event 4** |||
| date | Tháng 7, 2024 | July 2024 | 2024年7月 |
| card_title | Đơn Vị Lữ Hành Hàng Đầu | Leading Travel Agency | 领先旅行社 |
| card_description | Tự hào phục vụ hơn 1 triệu lượt khách với những hành trình di sản độc bản. | Proudly serving over 1 million guests with unique heritage journeys. | 自豪地为超过100万游客提供独特的文化遗产之旅。 |

---

### 8. ABOUT TEAM (`about_teams`)

| Field | vi (current "en" data) | en | zh |
|---|---|---|---|
| team_highlight | Travel TVB | Travel TVB | Travel TVB |
| team_title | Đội Ngũ TravelTVB | The TravelTVB Team | TravelTVB团队 |
| team_leader_subtible | Đội Ngũ Phát Triển | Development Team | 开发团队 |
| team_expert_subtitle | *(null)* | Expert Team | 专家团队 |
| director_subtitle | *(null)* | Board of Directors | 董事会 |

---

### 9. ABOUT CORE VALUES (`about_core_values`)

| Field | vi (current "en" data) | en | zh |
|---|---|---|---|
| highlight | TravelTVB | TravelTVB | TravelTVB |
| title | Giá Trị Cốt Lõi | Core Values | 核心价值观 |
| cta_card_title | Bạn cần tư vấn? | Need a Consultation? | 需要咨询？ |
| cta_card_descriptions | Săn ngay những combo khách sạn và tour tuyến với mức giá cạnh tranh nhất thị trường. Nhận báo giá tốt nhất cho chuyến đi tiếp theo của bạn chỉ trong vài giây! | Find the best hotel and tour combos at the most competitive prices on the market. Get the best quote for your next trip in just seconds! | 以市场最具竞争力的价格抢购酒店和旅游套餐。只需几秒钟即可获取您下次旅行的最佳报价！ |

#### Core Value Cards (`components_card_stacked_cards`)

| Field | vi (current) | en | zh |
|---|---|---|---|
| **Card 1** |||
| card_title | Tâm - Tín | Heart & Trust | 用心 - 诚信 |
| descriptions | Lấy sự hài lòng và tin cậy của khách hàng làm đích đến, hoạt động minh bạch, tận tâm | Customer satisfaction and trust are our destination; we operate with transparency and dedication. | 以客户满意和信任为目标，透明经营，全心全意。 |
| **Card 2** |||
| card_title | Chuyên nghiệp và uy tín | Professional & Reputable | 专业与信誉 |
| descriptions | Đội ngũ trình độ cao, quy trình dễ thực hiện, hỗ trợ nhanh, đúng, đủ. | Highly skilled team, easy processes, fast, accurate, and thorough support. | 高素质团队，流程简便，支持快速、准确、全面。 |
| **Card 3** |||
| card_title | Độc Lập | Independent | 独立 |
| descriptions | Tìm kiếm và đề xuất giải pháp tối ưu, không bị chi phối bởi bên thứ ba. | Seeking and recommending optimal solutions, free from third-party influence. | 寻找并推荐最优方案，不受第三方影响。 |
| **Card 4** |||
| card_title | Bảo Mật | Secure | 安全保密 |
| descriptions | Hệ thống quản trị an toàn, bảo vệ tuyệt đối thông tin khách hàng. | Safe management system, absolute protection of customer information. | 安全的管理系统，绝对保护客户信息。 |
| **Card 5** |||
| card_title | Dễ Tiếp Cận | Accessible | 便捷服务 |
| descriptions | Luôn sẵn sàng qua email, điện thoại, website để tư vấn và hỗ trợ | Always available via email, phone, and website for consultation and support. | 随时通过电子邮件、电话和网站提供咨询和支持。 |

---

### 10. LAYOUT NAVBAR (`layout_navbars` -> `components_button_navigation_buttons`)

| Field | vi (current) | en | zh |
|---|---|---|---|
| **Nav Item 1** |||
| navigation_text | Trang Chủ | Home | 首页 |
| path | / | / | / |
| **Nav Item 2** |||
| navigation_text | Về Chúng Tôi | About Us | 关于我们 |
| path | /about | /about | /about |
| **Nav Item 3** |||
| navigation_text | Các Gói Tour | Tour Packages | 旅游套餐 |
| path | /tours | /tours | /tours |
| **Nav Item 4** |||
| navigation_text | Tin Tức | News | 新闻 |
| path | /news | /news | /news |
| **Nav Item 5** |||
| navigation_text | Cộng Đồng | Community | 社区 |
| path | /community | /community | /community |

#### Navbar CTA Button (`components_button_nav_buttons`)

| Field | vi (current) | en | zh |
|---|---|---|---|
| text | Liên Hệ Ngay | Contact Us | 联系我们 |
| url | /contact | /contact | /contact |

---

### 11. LAYOUT FOOTER (`layout_footers`)

| Field | vi (current "en" data) | en | zh |
|---|---|---|---|
| menu_1_title | Về chúng tôi | About Us | 关于我们 |
| menu_2_title | Góc chuyên gia | Expert Corner | 专家角 |
| contact_title | Liên hệ | Contact | 联系方式 |
| footer_address_title | Địa chỉ | Address | 地址 |
| footer_address | 273 An Dương Vương, Phường 3, Quận 5, TP.HCM | 273 An Duong Vuong, Ward 3, District 5, HCMC | 胡志明市第五郡第三坊安阳王街273号 |
| copyright | 2026 &copy; TravelTVB. All rights reserved. | 2026 &copy; TravelTVB. All rights reserved. | 2026 &copy; TravelTVB. 版权所有。 |

#### Footer Menu 1 (`components_menu_item_footer_menu1_items`)

| Field | vi (current) | en | zh |
|---|---|---|---|
| Item 1 text | Trang chủ | Home | 首页 |
| Item 1 path | / | / | / |
| Item 2 text | Giới thiệu | About | 关于 |
| Item 2 path | /about | /about | /about |
| Item 3 text | Tin tức | News | 新闻 |
| Item 3 path | /news | /news | /news |

#### Footer Menu 2 (`components_menu_item_footer_menu2_items`)

| Field | vi (current) | en | zh |
|---|---|---|---|
| Item 1 text | Liên hệ chuyên gia | Contact an Expert | 联系专家 |
| Item 1 path | /contact | /contact | /contact |
| Item 2 text | Cộng đồng | Community | 社区 |
| Item 2 path | /community | /community | /community |
| Item 3 text | Dịch vụ | Services | 服务 |
| Item 3 path | /service | /service | /service |

#### Footer Contact Items (`components_menu_item_contact_items`)

| Field | vi (current) | en | zh |
|---|---|---|---|
| Item 1 label | SĐT: | Phone: | 电话: |
| Item 1 value | 0909090909 | 0909090909 | 0909090909 |
| Item 2 label | Email: | Email: | 邮箱: |
| Item 2 value | TravelTVB@gmail.com | TravelTVB@gmail.com | TravelTVB@gmail.com |
| Item 3 label | Giờ làm việc: | Working Hours: | 工作时间: |
| Item 3 value | Từ thứ Hai đến thứ Sáu: 8h - 17h30. Thứ Bảy, Chủ nhật: Nghỉ | Mon - Fri: 8:00 AM - 5:30 PM. Sat & Sun: Closed | 周一至周五：8:00 - 17:30。周六、周日：休息 |

---

### 12. LAYOUT CTA BANNER (`layout_cta_banners`)

| Field | vi (current "en" data) | en | zh |
|---|---|---|---|
| cta_text | Bạn cần tư vấn chuyên môn? | Need Expert Advice? | 需要专业咨询？ |

#### CTA Buttons (`components_button_cta_buttons`)

| ID | vi (current) | en | zh |
|---|---|---|---|
| id=3 text | Đăng kí tư vấn ngay | Get a Free Consultation | 立即获取免费咨询 |
| id=3 url | /contact | /contact | /contact |
| id=7 text | Liên Hệ Ngay | Contact Us | 联系我们 |
| id=7 url | / | / | / |
| id=11 text | Đọc Thêm | Read More | 阅读更多 |
| id=11 url | /news | /news | /news |

---

### 13. LAYOUT NEWSLETTER (`layout_newsletters`)

| Field | vi (current "en" data) | en | zh |
|---|---|---|---|
| newsletter_banner_text | Đăng ký để nhận tư vấn từ chuyên gia | Subscribe to Receive Expert Advice | 订阅以获取专家建议 |
| newsletter_button_text | Đăng Ký | Subscribe | 订阅 |

---

### 14. NEWS HERO (`news_heroes`)

| Field | vi (current "en" data) | en | zh |
|---|---|---|---|
| news_main_title | Tin tức du lịch | Travel News | 旅游新闻 |
| news_sub_title | Chúng tôi luôn sẵn sàng hướng dẫn, đồng hành và mang đến sự an tâm, giúp Quý vị thuận tiền trong hành trình khám phá Việt Nam | We are always ready to guide, accompany, and bring peace of mind, helping you explore Vietnam with ease. | 我们随时准备引导、陪伴并带来安心，帮助您轻松探索越南。 |
| newsletter_label | Tham gia newsletter của TVB | Join TVB's Newsletter | 加入TVB新闻通讯 |
| follow_us_text | Theo dõi chúng tôi trên: | Follow us on: | 关注我们： |

---

### 15. COMMUNITY HERO (`community_heroes`)

| Field | vi (current "en" data) | en | zh |
|---|---|---|---|
| community_main_title | Hướng Dẫn Du Lịch | Travel Guide | 旅游指南 |
| community_sub_title | Chúng tôi luôn sẵn sàng hướng dẫn, đồng hành và mang đến sự an tâm, giúp Quý vị thuận tiền trong hành trình khám phá Việt Nam | We are always ready to guide, accompany, and bring peace of mind, helping you explore Vietnam with ease. | 我们随时准备引导、陪伴并带来安心，帮助您轻松探索越南。 |
| community_newsletter_text | Tham gia newsletter của TVB | Join TVB's Newsletter | 加入TVB新闻通讯 |
| follow_us_text | Theo dõi chúng tôi trên: | Follow us on: | 关注我们： |

---

### 16. FAQ (`faqs` -> `components_slides_questions`)

#### Main Title (Rich Text)

| Locale | Text |
|---|---|
| vi | Những câu hỏi thường gặp |
| en | Frequently Asked Questions |
| zh | 常见问题 |

#### Questions

| Field | vi (current) | en | zh |
|---|---|---|---|
| **Q1** |||
| question | Làm thế nào để tôi đặt tour trên trang web của bạn? | How do I book a tour on your website? | 如何在您的网站上预订旅游？ |
| answer | Bạn chỉ cần duyệt qua danh sách tour theo điểm đến, loại hình hoạt động hoặc ngày khởi hành. Khi tìm thấy tour ưng ý, hãy chọn ngày đi, số lượng người và nhấp vào "Đặt ngay". Sau đó, bạn chỉ cần làm theo các bước thanh toán để xác nhận giữ chỗ. | Simply browse our tour listings by destination, activity type, or departure date. When you find a tour you like, select your travel date and number of guests, then click "Book Now." Follow the payment steps to confirm your reservation. | 只需按目的地、活动类型或出发日期浏览我们的旅游列表。找到心仪的旅游后，选择出发日期和人数，然后点击"立即预订"。按照付款步骤确认您的预订。 |
| **Q2** |||
| question | Có bất kỳ khoản phụ phí ẩn nào không? | Are there any hidden surcharges? | 有任何隐藏费用吗？ |
| answer | Không, chúng tôi cam kết minh bạch về giá. Mức giá bạn thấy ở bước thanh toán là giá cuối cùng cho các dịch vụ được liệt kê. Vui lòng đọc kỹ mục "Bao gồm / Không bao gồm" trong từng tour, vì các chi phí cá nhân, vé máy bay và tiền tip thường không nằm trong giá tour. | No, we are committed to price transparency. The price you see at checkout is the final price for the listed services. Please read the "Included / Not Included" section of each tour carefully, as personal expenses, airfare, and tips are typically not included in the tour price. | 不，我们承诺价格透明。您在结账时看到的价格就是所列服务的最终价格。请仔细阅读每个旅游的"包含/不包含"部分，因为个人费用、机票和小费通常不包含在旅游价格中。 |
| **Q3** |||
| question | Các nhà điều hành tour được kiểm định như thế nào? | How are tour operators vetted? | 旅游运营商是如何审核的？ |
| answer | Là một nền tảng môi giới uy tín, chúng tôi chỉ hợp tác với các nhà điều hành và hướng dẫn viên địa phương có giấy phép kinh doanh hợp lệ và đánh giá cao từ khách hàng. Chúng tôi liên tục theo dõi phản hồi để đảm bảo các đối tác luôn duy trì tiêu chuẩn cao nhất về an toàn và chất lượng dịch vụ. | As a reputable brokerage platform, we only partner with local operators and guides who hold valid business licenses and receive high customer ratings. We continuously monitor feedback to ensure partners maintain the highest standards of safety and service quality. | 作为一个信誉良好的中介平台，我们只与持有有效营业执照并获得高客户评价的当地运营商和导游合作。我们持续监控反馈，确保合作伙伴始终保持最高的安全和服务质量标准。 |

---

### 17. TOURS (`tours`) - Collection Type

#### Tour 1: Northern Vietnam

| Field | vi (current "en" data) | en | zh |
|---|---|---|---|
| tour_name | Khám Phá Vẻ Đẹp Miền Bắc: Hà Nội - Hạ Long - Sapa | Discover Northern Beauty: Hanoi - Ha Long - Sapa | 探索北部之美：河内 - 下龙 - 沙坝 |
| short_description | Trải nghiệm trọn vẹn văn hóa thủ đô ngàn năm văn hiến, kỳ quan thiên nhiên Vịnh Hạ Long và vẻ đẹp hùng vĩ của núi rừng Tây Bắc. | Experience the full culture of the thousand-year-old capital, the natural wonder of Ha Long Bay, and the majestic beauty of the Northwest mountains. | 体验千年古都的完整文化、下龙湾的自然奇观和西北山区的壮丽之美。 |
| location | Hà Nội, Quảng Ninh, Lào Cai | Hanoi, Quang Ninh, Lao Cai | 河内、广宁、老街 |
| departure_location | Hà Nội | Hanoi | 河内 |

##### Tour 1 Highlights (`components_card_tour_highlights`)

| vi (current) | en | zh |
|---|---|---|
| Ngủ đêm trên du thuyền 4 sao tại Vịnh Hạ Long. | Overnight stay on a 4-star cruise in Ha Long Bay. | 在下龙湾四星级游轮上过夜。 |
| Chinh phục đỉnh Fansipan hùng vĩ. | Conquer the majestic Fansipan peak. | 征服壮丽的番西邦峰。 |
| Thưởng thức phở và cà phê trứng chuẩn vị Hà Nội. | Savor authentic Hanoi pho and egg coffee. | 品尝正宗河内河粉和蛋咖啡。 |

#### Tour 2: Central Vietnam

| Field | vi (current "en" data) | en | zh |
|---|---|---|---|
| tour_name | Hành Trình Di Sản Miền Trung: Đà Nẵng - Hội An - Huế | Central Heritage Journey: Da Nang - Hoi An - Hue | 中部遗产之旅：岘港 - 会安 - 顺化 |
| short_description | Đắm chìm trong không gian hoài cổ của phố cổ Hội An, sự trầm mặc của cố đô Huế và nhịp sống hiện đại, năng động của thành phố biển Đà Nẵng. | Immerse yourself in the nostalgic atmosphere of Hoi An Ancient Town, the serenity of the ancient capital Hue, and the vibrant modern rhythm of the coastal city Da Nang. | 沉浸在会安古镇的怀旧氛围、古都顺化的宁静以及海滨城市岘港的现代活力中。 |
| location | Đà Nẵng, Quảng Nam, Thừa Thiên Huế | Da Nang, Quang Nam, Thua Thien Hue | 岘港、广南、承天顺化 |
| departure_location | Đà Nẵng | Da Nang | 岘港 |

##### Tour 2 Highlights

| vi (current) | en | zh |
|---|---|---|
| Check-in Cầu Vàng và vui chơi tại Bà Nà Hills. | Check in at the Golden Bridge and enjoy Ba Na Hills. | 在金桥打卡并畅玩巴拿山。 |

---

### 18. TOUR CATEGORIES (`tour_categories`)

| vi (current "en" data) | en | zh |
|---|---|---|
| Miền Bắc (mien-bac) | Northern Vietnam (northern-vietnam) | 北部 (northern-vietnam) |
| Miền Trung (mien-trung) | Central Vietnam (central-vietnam) | 中部 (central-vietnam) |
| Miền Nam (mien-nam) | Southern Vietnam (southern-vietnam) | 南部 (southern-vietnam) |

---

### 19. NEWS POSTS (`single_posts`)

> All 4 published posts currently have the same Vietnamese title. Below is the translation for the shared content:

| Field | vi (current "en" data) | en | zh |
|---|---|---|---|
| post_title | Top 5 Điểm Đến Nhất Định Phải Ghé Thăm Tại Việt Nam Mùa Hè Này | Top 5 Must-Visit Destinations in Vietnam This Summer | 今夏越南必去的5大目的地 |
| audio_button_text | Nghe bài viết | Listen to article | 收听文章 |
| audio_pause_text | Tạm dừng nghe | Pause | 暂停 |
| related_post_highlight | Bài viết liên quan | Related Articles | 相关文章 |

---

### 20. COMMUNITY POSTS (`single_community_posts`)

| Field | vi (current "en" data) | en | zh |
|---|---|---|---|
| post_title | Nhật Ký Hướng Dẫn Viên: Khám Phá Hội An "Thật Khác" Qua Góc Nhìn Của Người Bản Địa | Tour Guide Diary: Discovering a "Different" Hoi An Through a Local's Eyes | 导游日记：通过当地人的视角发现"不一样的"会安 |
| audio_button_text | Lắng nghe chia sẻ | Listen to the story | 聆听故事 |
| audio_pause_text | Tạm dừng nghe | Pause | 暂停 |
| related_post_highlight | Bài viết liên quan | Related Posts | 相关文章 |

---

### 21. POST CATEGORIES (`post_categories`)

| vi (current "en" data) | en | zh |
|---|---|---|
| Miền Bắc (mien-bac) | Northern Vietnam (northern-vietnam) | 北部 (northern-vietnam) |
| Miền Nam (mien-nam) | Southern Vietnam (southern-vietnam) | 南部 (southern-vietnam) |

---

### 22. PARTNERS (`components_slides_partners`)

| Field | vi (current) | en | zh |
|---|---|---|---|
| partner_name | Vietnam Airlines | Vietnam Airlines | 越南航空 |
| description | Vietnam Airlines | Vietnam Airlines | 越南航空 |
| partner_name | Vinpearl | Vinpearl | Vinpearl |
| description | Vinpearl | Vinpearl | Vinpearl |

---

## FRONTEND HARDCODED `displayData` (Already Translated - For Reference)

The following components already contain hardcoded `vi`/`en`/`zh` translations in their source code. These do NOT need Strapi changes, but are listed here for completeness and review.

### Already Complete:
- **Tours.jsx** - Page title, region names, sort labels, pagination, search, loading/error states
- **TourDetail.jsx** - regionLabels, transportLabels, highlights/description/itinerary labels, booking CTA, duration units
- **BookingForm.jsx** - Form labels (adults, children, date, contact fields), payment button, login prompt
- **BookingTicket.jsx** - E-ticket labels (tour, date, guests, reference, contact, QR note)
- **PaymentReturn.jsx** - Success/failure titles and messages, navigation buttons
- **Login.jsx** - Login form labels, placeholders, buttons
- **Register.jsx** - Registration form labels, placeholders, validation messages
- **Profile.jsx** - Profile labels, booking history table headers, status labels
- **Home-Navbar.jsx** - Auth buttons (login, register, profile, logout)
- **ChatbotWidget.jsx** - Chatbot title, welcome message, placeholder, error messages
- **NewsPostArchive.jsx** - Tab names, search, pagination, loading states
- **CommunityPostArchive.jsx** - Tab names (podcast, analysis, Q&A), search, pagination
- **SmallPostArchive.jsx** - Tab names (latest, popular), pagination
- **SuggestedTours.jsx** - Section title, subtitle, view all link
- **SinglePost.jsx** - Follow us text
- **SingleCommunityPost.jsx** - Follow us text

### Vietnamese Text Issues in Frontend `displayData`
> The `vi` locale in several frontend components uses **non-diacritical Vietnamese** (e.g., "Dang Nhap" instead of "Đăng Nhập"). This is readable but non-standard. If proper Vietnamese is desired, these should be updated with diacritics.

| Component | Current vi text (no diacritics) | Correct vi text (with diacritics) |
|---|---|---|
| Tours.jsx | `pageTitle: 'Tour Du Lich'` | `pageTitle: 'Tour Du Lịch'` |
| Tours.jsx | `pageSubtitle: 'Kham pha nhung hanh trinh tuyet voi nhat Viet Nam'` | `pageSubtitle: 'Khám phá những hành trình tuyệt vời nhất Việt Nam'` |
| Tours.jsx | `allRegions: 'Tat ca'` | `allRegions: 'Tất cả'` |
| Tours.jsx | `mienBac: 'Mien Bac'` | `mienBac: 'Miền Bắc'` |
| Tours.jsx | `mienTrung: 'Mien Trung'` | `mienTrung: 'Miền Trung'` |
| Tours.jsx | `mienNam: 'Mien Nam'` | `mienNam: 'Miền Nam'` |
| Tours.jsx | `tayNguyen: 'Tay Nguyen'` | `tayNguyen: 'Tây Nguyên'` |
| Tours.jsx | `nhieuVung: 'Nhieu Vung'` | `nhieuVung: 'Nhiều Vùng'` |
| Tours.jsx | `searchPlaceholder: 'Tim tour...'` | `searchPlaceholder: 'Tìm tour...'` |
| Tours.jsx | `sortLabel: 'Sap xep:'` | `sortLabel: 'Sắp xếp:'` |
| Tours.jsx | `sortDefault: 'Moi nhat'` | `sortDefault: 'Mới nhất'` |
| Tours.jsx | `sortPriceLow: 'Gia tang dan'` | `sortPriceLow: 'Giá tăng dần'` |
| Tours.jsx | `sortPriceHigh: 'Gia giam dan'` | `sortPriceHigh: 'Giá giảm dần'` |
| Tours.jsx | `sortRating: 'Danh gia cao'` | `sortRating: 'Đánh giá cao'` |
| Tours.jsx | `priceRange: 'Khoang gia'` | `priceRange: 'Khoảng giá'` |
| Tours.jsx | `loading: 'Dang tai tour...'` | `loading: 'Đang tải tour...'` |
| Tours.jsx | `noTours: 'Khong tim thay tour nao.'` | `noTours: 'Không tìm thấy tour nào.'` |
| Tours.jsx | `error: 'Khong the tai tour.'` | `error: 'Không thể tải tour.'` |
| Tours.jsx | `prevButton: 'TRUOC'` | `prevButton: 'TRƯỚC'` |
| Tours.jsx | `nextButton: 'TIEP'` | `nextButton: 'TIẾP'` |
| TourDetail.jsx | `highlights: 'Diem noi bat'` | `highlights: 'Điểm nổi bật'` |
| TourDetail.jsx | `description: 'Mo ta tour'` | `description: 'Mô tả tour'` |
| TourDetail.jsx | `itinerary: 'Lich trinh'` | `itinerary: 'Lịch trình'` |
| TourDetail.jsx | `gallery: 'Hinh anh'` | `gallery: 'Hình ảnh'` |
| TourDetail.jsx | `duration: 'Thoi gian'` | `duration: 'Thời gian'` |
| TourDetail.jsx | `days: 'ngay'` | `days: 'ngày'` |
| TourDetail.jsx | `nights: 'dem'` | `nights: 'đêm'` |
| TourDetail.jsx | `departure: 'Khoi hanh tu'` | `departure: 'Khởi hành từ'` |
| TourDetail.jsx | `transport: 'Phuong tien'` | `transport: 'Phương tiện'` |
| TourDetail.jsx | `maxParticipants: 'So nguoi toi da'` | `maxParticipants: 'Số người tối đa'` |
| TourDetail.jsx | `people: 'nguoi'` | `people: 'người'` |
| TourDetail.jsx | `rating: 'Danh gia'` | `rating: 'Đánh giá'` |
| TourDetail.jsx | `reviews: 'danh gia'` | `reviews: 'đánh giá'` |
| TourDetail.jsx | `bookNow: 'Dat Tour Ngay'` | `bookNow: 'Đặt Tour Ngay'` |
| TourDetail.jsx | `contactUs: 'Lien He Tu Van'` | `contactUs: 'Liên Hệ Tư Vấn'` |
| TourDetail.jsx | `backToTours: 'Quay lai danh sach tour'` | `backToTours: 'Quay lại danh sách tour'` |
| TourDetail.jsx | `loading: 'Dang tai thong tin tour...'` | `loading: 'Đang tải thông tin tour...'` |
| TourDetail.jsx | `notFound: 'Khong tim thay tour.'` | `notFound: 'Không tìm thấy tour.'` |
| TourDetail.jsx | `fromPrice: 'Gia tu'` | `fromPrice: 'Giá từ'` |
| TourDetail.jsx regionLabels | `MienBac: 'Mien Bac'` | `MienBac: 'Miền Bắc'` |
| TourDetail.jsx regionLabels | `MienTrung: 'Mien Trung'` | `MienTrung: 'Miền Trung'` |
| TourDetail.jsx regionLabels | `MienNam: 'Mien Nam'` | `MienNam: 'Miền Nam'` |
| TourDetail.jsx regionLabels | `TayNguyen: 'Tay Nguyen'` | `TayNguyen: 'Tây Nguyên'` |
| TourDetail.jsx regionLabels | `NhieuVung: 'Nhieu Vung'` | `NhieuVung: 'Nhiều Vùng'` |
| TourDetail.jsx transportLabels | `XeKhach: 'Xe khach'` | `XeKhach: 'Xe khách'` |
| TourDetail.jsx transportLabels | `MayBay: 'May bay'` | `MayBay: 'Máy bay'` |
| TourDetail.jsx transportLabels | `Tau: 'Tau'` | `Tau: 'Tàu'` |
| TourDetail.jsx transportLabels | `XeMay: 'Xe may'` | `XeMay: 'Xe máy'` |
| TourDetail.jsx transportLabels | `KetHop: 'Ket hop'` | `KetHop: 'Kết hợp'` |
| BookingForm.jsx | `title: 'Dat Tour'` | `title: 'Đặt Tour'` |
| BookingForm.jsx | `adults: 'Nguoi lon'` | `adults: 'Người lớn'` |
| BookingForm.jsx | `children: 'Tre em'` | `children: 'Trẻ em'` |
| BookingForm.jsx | `travelDate: 'Ngay khoi hanh'` | `travelDate: 'Ngày khởi hành'` |
| BookingForm.jsx | `contactName: 'Ho ten lien he'` | `contactName: 'Họ tên liên hệ'` |
| BookingForm.jsx | `contactEmail: 'Email lien he'` | `contactEmail: 'Email liên hệ'` |
| BookingForm.jsx | `contactPhone: 'So dien thoai'` | `contactPhone: 'Số điện thoại'` |
| BookingForm.jsx | `totalPrice: 'Tong cong'` | `totalPrice: 'Tổng cộng'` |
| BookingForm.jsx | `perAdult: '/ nguoi lon'` | `perAdult: '/ người lớn'` |
| BookingForm.jsx | `perChild: '/ tre em'` | `perChild: '/ trẻ em'` |
| BookingForm.jsx | `proceedPayment: 'Thanh Toan VNPay'` | `proceedPayment: 'Thanh Toán VNPay'` |
| BookingForm.jsx | `processing: 'Dang xu ly...'` | `processing: 'Đang xử lý...'` |
| BookingForm.jsx | `loginRequired: 'Dang nhap de dat tour'` | `loginRequired: 'Đăng nhập để đặt tour'` |
| BookingForm.jsx | `loginBtn: 'Dang Nhap'` | `loginBtn: 'Đăng Nhập'` |
| BookingForm.jsx | `spotsLeft: 'cho con lai'` | `spotsLeft: 'chỗ còn lại'` |
| BookingForm.jsx | `noSpots: 'Het cho'` | `noSpots: 'Hết chỗ'` |
| BookingForm.jsx | `error: 'Loi dat tour'` | `error: 'Lỗi đặt tour'` |
| Login.jsx | `title: 'Dang Nhap'` | `title: 'Đăng Nhập'` |
| Login.jsx | `subtitle: 'Chao mung ban quay lai!...'` | `subtitle: 'Chào mừng bạn quay lại! Vui lòng đăng nhập để tiếp tục.'` |
| Login.jsx | `emailLabel: 'Email hoac Ten dang nhap'` | `emailLabel: 'Email hoặc Tên đăng nhập'` |
| Login.jsx | `emailPlaceholder: 'Nhap email hoac ten dang nhap'` | `emailPlaceholder: 'Nhập email hoặc tên đăng nhập'` |
| Login.jsx | `passwordLabel: 'Mat khau'` | `passwordLabel: 'Mật khẩu'` |
| Login.jsx | `passwordPlaceholder: 'Nhap mat khau'` | `passwordPlaceholder: 'Nhập mật khẩu'` |
| Login.jsx | `submitButton: 'Dang Nhap'` | `submitButton: 'Đăng Nhập'` |
| Login.jsx | `submitting: 'Dang xu ly...'` | `submitting: 'Đang xử lý...'` |
| Login.jsx | `noAccount: 'Chua co tai khoan?'` | `noAccount: 'Chưa có tài khoản?'` |
| Login.jsx | `registerLink: 'Dang ky ngay'` | `registerLink: 'Đăng ký ngay'` |
| Register.jsx | `title: 'Dang Ky'` | `title: 'Đăng Ký'` |
| Register.jsx | `subtitle: 'Tao tai khoan de dat tour va quan ly don hang.'` | `subtitle: 'Tạo tài khoản để đặt tour và quản lý đơn hàng.'` |
| Register.jsx | `fullNameLabel: 'Ho va ten'` | `fullNameLabel: 'Họ và tên'` |
| Register.jsx | `fullNamePlaceholder: 'Nhap ho va ten'` | `fullNamePlaceholder: 'Nhập họ và tên'` |
| Register.jsx | `emailPlaceholder: 'Nhap email'` | `emailPlaceholder: 'Nhập email'` |
| Register.jsx | `usernameLabel: 'Ten dang nhap'` | `usernameLabel: 'Tên đăng nhập'` |
| Register.jsx | `usernamePlaceholder: 'Nhap ten dang nhap'` | `usernamePlaceholder: 'Nhập tên đăng nhập'` |
| Register.jsx | `phoneLabel: 'So dien thoai'` | `phoneLabel: 'Số điện thoại'` |
| Register.jsx | `phonePlaceholder: 'Nhap so dien thoai'` | `phonePlaceholder: 'Nhập số điện thoại'` |
| Register.jsx | `passwordLabel: 'Mat khau'` | `passwordLabel: 'Mật khẩu'` |
| Register.jsx | `passwordPlaceholder: 'Nhap mat khau (toi thieu 6 ky tu)'` | `passwordPlaceholder: 'Nhập mật khẩu (tối thiểu 6 ký tự)'` |
| Register.jsx | `confirmPasswordLabel: 'Xac nhan mat khau'` | `confirmPasswordLabel: 'Xác nhận mật khẩu'` |
| Register.jsx | `confirmPasswordPlaceholder: 'Nhap lai mat khau'` | `confirmPasswordPlaceholder: 'Nhập lại mật khẩu'` |
| Register.jsx | `submitButton: 'Dang Ky'` | `submitButton: 'Đăng Ký'` |
| Register.jsx | `submitting: 'Dang xu ly...'` | `submitting: 'Đang xử lý...'` |
| Register.jsx | `hasAccount: 'Da co tai khoan?'` | `hasAccount: 'Đã có tài khoản?'` |
| Register.jsx | `loginLink: 'Dang nhap'` | `loginLink: 'Đăng nhập'` |
| Register.jsx | `passwordMismatch: 'Mat khau khong khop!'` | `passwordMismatch: 'Mật khẩu không khớp!'` |
| Profile.jsx | `title: 'Ho So Ca Nhan'` | `title: 'Hồ Sơ Cá Nhân'` |
| Profile.jsx | `fullNameLabel: 'Ho va ten'` | `fullNameLabel: 'Họ và tên'` |
| Profile.jsx | `usernameLabel: 'Ten dang nhap'` | `usernameLabel: 'Tên đăng nhập'` |
| Profile.jsx | `phoneLabel: 'So dien thoai'` | `phoneLabel: 'Số điện thoại'` |
| Profile.jsx | `logoutButton: 'Dang Xuat'` | `logoutButton: 'Đăng Xuất'` |
| Profile.jsx | `notProvided: 'Chua cung cap'` | `notProvided: 'Chưa cung cấp'` |
| Profile.jsx | `memberSince: 'Thanh vien tu'` | `memberSince: 'Thành viên từ'` |
| Profile.jsx | `ordersTitle: 'Lich Su Dat Tour'` | `ordersTitle: 'Lịch Sử Đặt Tour'` |
| Profile.jsx | `noOrders: 'Chua co don dat tour nao.'` | `noOrders: 'Chưa có đơn đặt tour nào.'` |
| Profile.jsx | `dateCol: 'Ngay di'` | `dateCol: 'Ngày đi'` |
| Profile.jsx | `guestsCol: 'So nguoi'` | `guestsCol: 'Số người'` |
| Profile.jsx | `totalCol: 'Tong tien'` | `totalCol: 'Tổng tiền'` |
| Profile.jsx | `statusCol: 'Trang thai'` | `statusCol: 'Trạng thái'` |
| Profile.jsx | `statusPending: 'Cho thanh toan'` | `statusPending: 'Chờ thanh toán'` |
| Profile.jsx | `statusPaid: 'Da thanh toan'` | `statusPaid: 'Đã thanh toán'` |
| Profile.jsx | `statusFailed: 'That bai'` | `statusFailed: 'Thất bại'` |
| Profile.jsx | `statusCancelled: 'Da huy'` | `statusCancelled: 'Đã hủy'` |
| Profile.jsx | `viewTicket: 'Xem Ve'` | `viewTicket: 'Xem Vé'` |
| Profile.jsx | `loadingOrders: 'Dang tai...'` | `loadingOrders: 'Đang tải...'` |
| BookingTicket.jsx | `title: 'Ve Dien Tu'` | `title: 'Vé Điện Tử'` |
| BookingTicket.jsx | `dateLabel: 'Ngay khoi hanh'` | `dateLabel: 'Ngày khởi hành'` |
| BookingTicket.jsx | `guestsLabel: 'So khach'` | `guestsLabel: 'Số khách'` |
| BookingTicket.jsx | `adults: 'nguoi lon'` | `adults: 'người lớn'` |
| BookingTicket.jsx | `children: 'tre em'` | `children: 'trẻ em'` |
| BookingTicket.jsx | `refLabel: 'Ma dat tour'` | `refLabel: 'Mã đặt tour'` |
| BookingTicket.jsx | `contactLabel: 'Nguoi lien he'` | `contactLabel: 'Người liên hệ'` |
| BookingTicket.jsx | `phoneLabel: 'Dien thoai'` | `phoneLabel: 'Điện thoại'` |
| BookingTicket.jsx | `totalLabel: 'Tong tien da thanh toan'` | `totalLabel: 'Tổng tiền đã thanh toán'` |
| BookingTicket.jsx | `statusLabel: 'Trang thai'` | `statusLabel: 'Trạng thái'` |
| BookingTicket.jsx | `statusPaid: 'Da thanh toan'` | `statusPaid: 'Đã thanh toán'` |
| BookingTicket.jsx | `bookingDateLabel: 'Ngay dat'` | `bookingDateLabel: 'Ngày đặt'` |
| BookingTicket.jsx | `printBtn: 'In Ve'` | `printBtn: 'In Vé'` |
| BookingTicket.jsx | `backBtn: 'Quay lai Ho So'` | `backBtn: 'Quay lại Hồ Sơ'` |
| BookingTicket.jsx | `loading: 'Dang tai...'` | `loading: 'Đang tải...'` |
| BookingTicket.jsx | `notFound: 'Khong tim thay don dat tour.'` | `notFound: 'Không tìm thấy đơn đặt tour.'` |
| BookingTicket.jsx | `notPaid: 'Don dat tour chua duoc thanh toan.'` | `notPaid: 'Đơn đặt tour chưa được thanh toán.'` |
| BookingTicket.jsx | `scanNote: 'Xuat trinh ma QR nay cho huong dan vien tour de xac nhan.'` | `scanNote: 'Xuất trình mã QR này cho hướng dẫn viên tour để xác nhận.'` |
| BookingTicket.jsx | `tagline: 'Kham pha Viet Nam cung ban'` | `tagline: 'Khám phá Việt Nam cùng bạn'` |
| PaymentReturn.jsx | `successTitle: 'Thanh Toan Thanh Cong!'` | `successTitle: 'Thanh Toán Thành Công!'` |
| PaymentReturn.jsx | `successMessage: 'Don dat tour cua ban da duoc xac nhan...'` | `successMessage: 'Đơn đặt tour của bạn đã được xác nhận. Cảm ơn bạn!'` |
| PaymentReturn.jsx | `failedTitle: 'Thanh Toan That Bai'` | `failedTitle: 'Thanh Toán Thất Bại'` |
| PaymentReturn.jsx | `failedMessage: 'Thanh toan khong thanh cong...'` | `failedMessage: 'Thanh toán không thành công. Vui lòng thử lại.'` |
| PaymentReturn.jsx | `bookingRef: 'Ma dat tour'` | `bookingRef: 'Mã đặt tour'` |
| PaymentReturn.jsx | `viewBookings: 'Xem Don Dat Tour'` | `viewBookings: 'Xem Đơn Đặt Tour'` |
| PaymentReturn.jsx | `backToTours: 'Quay Lai Danh Sach Tour'` | `backToTours: 'Quay Lại Danh Sách Tour'` |
| PaymentReturn.jsx | `tryAgain: 'Thu Lai'` | `tryAgain: 'Thử Lại'` |
| Navbar authDisplayData | `login: 'Dang Nhap'` | `login: 'Đăng Nhập'` |
| Navbar authDisplayData | `register: 'Dang Ky'` | `register: 'Đăng Ký'` |
| Navbar authDisplayData | `profile: 'Ho So'` | `profile: 'Hồ Sơ'` |
| Navbar authDisplayData | `logout: 'Dang Xuat'` | `logout: 'Đăng Xuất'` |

---

## CHINESE (zh) PAGINATION FIX

Two components have suboptimal Chinese translations for pagination buttons:

| Component | Current zh | Corrected zh |
|---|---|---|
| NewsPostArchive.jsx | `prevButton: '以前的'` (means "former/previous" in wrong context) | `prevButton: '上一页'` |
| NewsPostArchive.jsx | `nextButton: '下一个'` (means "next one" in wrong context) | `nextButton: '下一页'` |
| SmallPostArchive.jsx | `prevButton: '以前的'` | `prevButton: '上一页'` |
| SmallPostArchive.jsx | `nextButton: '下一个'` | `nextButton: '下一页'` |

---

## SUMMARY OF ISSUES

| # | Issue | Severity | Scope |
|---|---|---|---|
| 1 | Only `en` locale registered in Strapi; `vi` and `zh` missing | **Critical** | All content |
| 2 | All Strapi content is Vietnamese but labeled as `locale="en"` | **Critical** | All 22+ content types |
| 3 | No `vi` or `zh` locale rows exist in any content table | **Critical** | All content |
| 4 | `home_statistics` has NULL locale on some rows | Medium | Statistics |
| 5 | `home_diagrams` has placeholder text ("Muốn" repeated) | Medium | Home diagram |
| 6 | Frontend `vi` displayData uses ASCII-only Vietnamese (no diacritics) | Medium | 10+ components |
| 7 | Chinese pagination labels are awkward in 2 components | Low | NewsPostArchive, SmallPostArchive |
| 8 | `service_heroes` has no published content at all | Low | Service page |
