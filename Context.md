# CONTEXT.MD — NỘI DUNG BÁO CÁO ĐỒ ÁN CHUYÊN NGÀNH

> **Hướng dẫn cho Claude tạo báo cáo:** File này chứa toàn bộ nội dung chi tiết cho báo cáo Đồ án Chuyên ngành. Hãy dùng nội dung dưới đây để tạo file .docx theo đúng format: Font Times New Roman 13pt, lề trên/dưới 2cm, lề trái 3cm, lề phải 2cm, dãn dòng Multiple 1.2pt, canh đều hai bên. Đánh số trang bắt đầu từ Chương 1 (trang 1), các trang trước đó đánh i, ii, iii. Hình vẽ đánh số theo chương (Hình 1.1, 2.1...), bảng cũng vậy (Bảng 1.1, 2.1...). Mục lớn (Chương) cỡ 16pt in đậm, mục con (1.1, 2.1...) cỡ 14pt in đậm. Nội dung 13pt.

---

## TRANG BÌA

```
ỦY BAN NHÂN DÂN TP HỒ CHÍ MINH
TRƯỜNG ĐẠI HỌC SÀI GÒN
KHOA CÔNG NGHỆ THÔNG TIN


ĐỒ ÁN CHUYÊN NGÀNH


XÂY DỰNG WEBSITE ĐẶT TOUR DU LỊCH TRAVELTVB
VỚI TÍCH HỢP TRỢ LÝ ẢO AI VÀ THANH TOÁN TRỰC TUYẾN


Giảng viên hướng dẫn: TS. Đỗ Ngọc Như Loan

Thực hiện:
    Phùng Anh Tuấn  — MSSV — Lớp
    Trần Hoàng Bảo  — MSSV — Lớp
    Thái Trí Văn    — MSSV — Lớp


TP. Hồ Chí Minh – Tháng 4/2026
```

---

## TRANG BÌA PHỤ

(Nội dung giống trang bìa chính)

---

## MỤC LỤC

(Tạo tự động từ các heading)

---

## DANH MỤC CÁC KÝ HIỆU, CHỮ VIẾT TẮT

| Ký hiệu / Viết tắt | Ý nghĩa |
|---|---|
| CMS | Content Management System — Hệ thống quản lý nội dung |
| API | Application Programming Interface — Giao diện lập trình ứng dụng |
| REST | Representational State Transfer — Kiến trúc truyền tải trạng thái đại diện |
| JWT | JSON Web Token — Mã thông báo web dạng JSON |
| RAG | Retrieval Augmented Generation — Sinh văn bản có tăng cường truy xuất |
| LLM | Large Language Model — Mô hình ngôn ngữ lớn |
| SPA | Single Page Application — Ứng dụng trang đơn |
| CRUD | Create, Read, Update, Delete — Tạo, Đọc, Sửa, Xóa |
| i18n | Internationalization — Quốc tế hóa (đa ngôn ngữ) |
| VNPay | Cổng thanh toán điện tử Việt Nam |
| HMAC | Hash-based Message Authentication Code — Mã xác thực dựa trên hàm băm |
| SHA-512 | Secure Hash Algorithm 512-bit — Thuật toán băm an toàn 512 bit |
| ERD | Entity-Relationship Diagram — Sơ đồ thực thể - quan hệ |
| UI/UX | User Interface / User Experience — Giao diện / Trải nghiệm người dùng |
| QR | Quick Response — Mã phản hồi nhanh |
| VND | Vietnamese Dong — Đồng Việt Nam |
| CI/CD | Continuous Integration / Continuous Deployment — Tích hợp / Triển khai liên tục |
| ORM | Object-Relational Mapping — Ánh xạ đối tượng - quan hệ |
| SEO | Search Engine Optimization — Tối ưu hóa công cụ tìm kiếm |
| CORS | Cross-Origin Resource Sharing — Chia sẻ tài nguyên khác nguồn gốc |

---

## DANH MỤC CÁC BẢNG

| Số | Tên bảng |
|---|---|
| Bảng 2.1 | So sánh các công nghệ Frontend |
| Bảng 2.2 | So sánh các hệ thống CMS |
| Bảng 2.3 | So sánh các cổng thanh toán |
| Bảng 3.1 | Danh sách yêu cầu chức năng |
| Bảng 3.2 | Danh sách yêu cầu phi chức năng |
| Bảng 3.3 | Mô tả bảng tours |
| Bảng 3.4 | Mô tả bảng bookings |
| Bảng 3.5 | Mô tả bảng up_users |
| Bảng 3.6 | Mô tả bảng tour_categories |
| Bảng 3.7 | Mô tả Use Case đặt tour |
| Bảng 3.8 | Mô tả Use Case thanh toán VNPay |
| Bảng 3.9 | Mô tả Use Case chatbot |
| Bảng 4.1 | Môi trường phát triển |
| Bảng 4.2 | Biến môi trường Backend |
| Bảng 4.3 | Biến môi trường Frontend |
| Bảng 4.4 | Các lệnh chạy hệ thống |

---

## DANH MỤC CÁC HÌNH

| Số | Tên hình |
|---|---|
| Hình 1.1 | Kiến trúc tổng quan hệ thống TravelTVB |
| Hình 2.1 | Kiến trúc Headless CMS so với Traditional CMS |
| Hình 2.2 | Quy trình hoạt động của RAG Pipeline |
| Hình 2.3 | Luồng thanh toán VNPay |
| Hình 3.1 | Sơ đồ ERD tổng quan |
| Hình 3.2 | Sơ đồ Use Case tổng quát |
| Hình 3.3 | Sơ đồ Use Case — Khách vãng lai |
| Hình 3.4 | Sơ đồ Use Case — Khách hàng đã đăng nhập |
| Hình 3.5 | Sơ đồ Use Case — Quản trị viên |
| Hình 3.6 | Sequence Diagram — Đặt tour và thanh toán |
| Hình 3.7 | Sequence Diagram — Chatbot RAG |
| Hình 3.8 | Sequence Diagram — Đăng nhập |
| Hình 3.9 | Thiết kế giao diện Trang chủ |
| Hình 3.10 | Thiết kế giao diện Danh sách tour |
| Hình 3.11 | Thiết kế giao diện Chi tiết tour + Đặt tour |
| Hình 3.12 | Thiết kế giao diện Chatbot Widget |
| Hình 3.13 | Thiết kế giao diện Đăng nhập / Đăng ký |
| Hình 3.14 | Thiết kế giao diện Hồ sơ cá nhân + Lịch sử đặt tour |
| Hình 3.15 | Thiết kế giao diện Vé điện tử |
| Hình 3.16 | Thiết kế giao diện Kết quả thanh toán |
| Hình 4.1 | Cấu trúc thư mục dự án |
| Hình 4.2 | Trang quản trị Strapi CMS |
| Hình 4.3 | Kết quả chạy test Frontend (Vitest) |
| Hình 4.4 | Kết quả chạy test Backend (Jest) |
| Hình 4.5 | Pipeline CI/CD trên GitHub Actions |

---

# Chương 1 – TỔNG QUAN VỀ ĐỀ TÀI

## 1.1 Giới thiệu đề tài và tính cấp thiết

Ngành du lịch Việt Nam đang trên đà phục hồi mạnh mẽ sau đại dịch COVID-19. Theo số liệu của Tổng cục Du lịch Việt Nam, năm 2024 Việt Nam đón hơn 17,5 triệu lượt khách quốc tế, tăng 38,9% so với cùng kỳ năm trước. Cùng với sự phát triển của công nghệ số, hành vi người tiêu dùng trong lĩnh vực du lịch đã có sự chuyển dịch rõ rệt: từ việc đặt tour qua đại lý truyền thống sang tìm kiếm, so sánh và đặt tour trực tuyến. Theo khảo sát của Google & Kantar (2023), hơn 75% du khách Việt Nam sử dụng Internet để nghiên cứu và đặt dịch vụ du lịch.

Tuy nhiên, nhiều doanh nghiệp lữ hành vừa và nhỏ tại Việt Nam vẫn chưa có một nền tảng số hóa hoàn chỉnh. Các vấn đề thường gặp bao gồm:

- **Thiếu kênh bán hàng trực tuyến:** Nhiều đại lý du lịch vẫn phụ thuộc vào Zalo, Facebook hoặc tổng đài để nhận đặt tour, dẫn đến trải nghiệm khách hàng không liền mạch và khó mở rộng quy mô.
- **Quản lý nội dung thủ công:** Thông tin tour, bài viết, hình ảnh được cập nhật thủ công trên website tĩnh, tốn thời gian và dễ sai sót.
- **Rào cản ngôn ngữ:** Phần lớn website du lịch Việt Nam chỉ hỗ trợ tiếng Việt, bỏ lỡ lượng lớn khách quốc tế, đặc biệt là thị trường Trung Quốc — thị trường khách du lịch lớn nhất của Việt Nam trước đại dịch.
- **Thiếu kênh tư vấn tự động:** Khách hàng thường có nhiều câu hỏi về tour (giá cả, lịch trình, điểm đến) nhưng phải chờ đợi nhân viên phản hồi, đặc biệt ngoài giờ hành chính.

Xuất phát từ những vấn đề trên, nhóm quyết định thực hiện đề tài **"Xây dựng Website Đặt Tour Du Lịch TravelTVB với Tích hợp Trợ lý Ảo AI và Thanh toán Trực tuyến"**. Đề tài hướng đến việc xây dựng một nền tảng web toàn diện cho doanh nghiệp lữ hành, kết hợp:

1. **Hệ thống quản lý nội dung (CMS)** linh hoạt dựa trên Strapi — cho phép quản trị viên dễ dàng tạo và quản lý tour, bài viết, nội dung đa ngôn ngữ mà không cần kiến thức lập trình.
2. **Giao diện người dùng hiện đại** xây dựng bằng React — mang lại trải nghiệm mượt mà, đáp ứng trên mọi thiết bị.
3. **Trợ lý ảo AI (Chatbot)** sử dụng kiến trúc RAG (Retrieval Augmented Generation) — tự động tư vấn tour dựa trên dữ liệu thực tế, hoạt động 24/7.
4. **Tích hợp thanh toán trực tuyến VNPay** — cho phép khách hàng đặt và thanh toán tour ngay trên website một cách an toàn.
5. **Hỗ trợ đa ngôn ngữ (i18n)** — tiếng Việt, tiếng Anh và tiếng Trung để phục vụ khách nội địa lẫn quốc tế.

## 1.2 Mục tiêu và phạm vi

### 1.2.1 Mục tiêu

**Mục tiêu tổng quát:** Xây dựng một website đặt tour du lịch hoàn chỉnh, tích hợp trí tuệ nhân tạo và thanh toán trực tuyến, phục vụ cả khách hàng trong nước và quốc tế.

**Mục tiêu cụ thể:**

1. Xây dựng giao diện người dùng (Frontend) đáp ứng, thân thiện trên thiết bị di động và máy tính, sử dụng React 19 và Vite.
2. Xây dựng hệ thống Backend dựa trên Strapi 5 (Headless CMS) với khả năng quản lý nội dung linh hoạt cho 25+ loại nội dung (content type).
3. Triển khai hệ thống đặt tour trực tuyến hoàn chỉnh: chọn tour → chọn ngày → chọn số lượng → thanh toán VNPay → nhận vé điện tử.
4. Tích hợp Chatbot AI sử dụng kiến trúc RAG với Google Gemini 2.5 Flash và ChromaDB, có khả năng tư vấn tour bằng 3 ngôn ngữ.
5. Hỗ trợ đa ngôn ngữ (tiếng Việt, tiếng Anh, tiếng Trung) cho toàn bộ nội dung CMS và giao diện người dùng.
6. Triển khai hệ thống kiểm thử tự động (Vitest cho Frontend, Jest cho Backend) và CI/CD pipeline trên GitHub Actions.

### 1.2.2 Phạm vi

**Phạm vi thực hiện:**

- Website dành cho khách hàng (Customer-facing): Trang chủ, giới thiệu, danh sách tour, chi tiết tour, đặt tour, thanh toán, tin tức, cộng đồng, liên hệ, chatbot AI.
- Trang quản trị (Admin Panel): Sử dụng Strapi Admin Panel có sẵn để quản lý nội dung, tour, đơn đặt, người dùng.
- Hệ thống đăng nhập/đăng ký người dùng với JWT authentication.
- Tích hợp cổng thanh toán VNPay (chế độ Sandbox).
- Chatbot AI với khả năng tìm kiếm ngữ nghĩa (semantic search) trên dữ liệu tour.

**Giới hạn:**

- Thanh toán chỉ hỗ trợ VNPay Sandbox (không kết nối production).
- Chatbot chỉ trả lời dựa trên dữ liệu tour có trong hệ thống, không trả lời câu hỏi ngoài phạm vi.
- Không hỗ trợ đặt tour cho nhóm lớn (>100 người) hoặc tour tùy chỉnh.
- Không có ứng dụng di động native (chỉ responsive web).

## 1.3 Cấu trúc của báo cáo

Báo cáo được tổ chức thành 5 chương:

- **Chương 1 – Tổng quan về đề tài:** Giới thiệu bối cảnh, tính cấp thiết, mục tiêu, phạm vi và kiến trúc tổng quan của hệ thống.
- **Chương 2 – Cơ sở lý thuyết:** Trình bày các khái niệm nền tảng (Headless CMS, SPA, RAG, Vector Database) và các công nghệ được sử dụng (React, Strapi, Google Gemini, ChromaDB, VNPay).
- **Chương 3 – Phân tích và thiết kế hệ thống:** Phân tích yêu cầu chức năng và phi chức năng, thiết kế cơ sở dữ liệu (ERD), sơ đồ use case, sequence diagram và thiết kế giao diện.
- **Chương 4 – Phát triển và triển khai hệ thống:** Mô tả chi tiết quá trình phát triển, mã nguồn quan trọng, hướng dẫn cài đặt và kết quả kiểm thử.
- **Chương 5 – Kết luận và hướng phát triển:** Tổng kết kết quả đạt được, ưu nhược điểm và đề xuất phát triển tương lai.

### Kiến trúc tổng quan

[Hình 1.1: Kiến trúc tổng quan hệ thống TravelTVB — Sơ đồ khối thể hiện: React Frontend (port 5173) giao tiếp REST API với Strapi Backend (port 1337), Strapi kết nối với SQLite Database, ChromaDB Vector Database (port 8000) và VNPay Payment Gateway. ChromaDB giao tiếp với Google Gemini API (Embeddings + LLM). Mũi tên hai chiều giữa Frontend-Backend, một chiều từ Backend đến VNPay và ChromaDB, một chiều từ ChromaDB đến Gemini API.]

Hệ thống TravelTVB được xây dựng theo kiến trúc **Headless CMS** với sự tách biệt rõ ràng giữa Frontend và Backend:

- **Frontend (React + Vite):** Ứng dụng SPA chạy trên port 5173, giao tiếp với Backend qua REST API. Sử dụng React Router cho điều hướng, Framer Motion cho hiệu ứng chuyển động, và Context API cho quản lý trạng thái (xác thực, ngôn ngữ).
- **Backend (Strapi 5):** Headless CMS chạy trên port 1337, cung cấp REST API tự động cho 25+ content type. Tích hợp custom controller cho Booking (599 dòng), Chatbot (150 dòng) và VNPay payment.
- **Cơ sở dữ liệu (SQLite):** Lưu trữ toàn bộ dữ liệu tour, booking, người dùng, nội dung CMS. Hỗ trợ chuyển sang MySQL/PostgreSQL cho production.
- **Vector Database (ChromaDB):** Lưu trữ embedding vectors của dữ liệu tour cho chatbot RAG, chạy trên port 8000.
- **Google Gemini API:** Cung cấp hai dịch vụ — Gemini Embedding 001 cho vector hóa văn bản và Gemini 2.5 Flash cho sinh câu trả lời chatbot.
- **VNPay Sandbox:** Cổng thanh toán trực tuyến, xử lý giao dịch qua HMAC SHA-512 signature verification.

---

# Chương 2 – CƠ SỞ LÝ THUYẾT

## 2.1 Các khái niệm nền tảng

### 2.1.1 Headless CMS (Hệ thống quản lý nội dung không giao diện)

Headless CMS là một kiến trúc quản lý nội dung trong đó phần **Backend** (quản lý, lưu trữ nội dung) được tách biệt hoàn toàn với phần **Frontend** (hiển thị nội dung). Thay vì cung cấp giao diện website tích hợp như WordPress hay Joomla (Traditional CMS), Headless CMS chỉ cung cấp nội dung thông qua **API** (thường là REST hoặc GraphQL), cho phép bất kỳ ứng dụng nào — web, mobile, IoT — đều có thể sử dụng cùng một nguồn dữ liệu.

[Hình 2.1: So sánh kiến trúc Traditional CMS và Headless CMS — Sơ đồ hai cột: Bên trái "Traditional CMS" thể hiện một khối monolith gồm Admin Panel + Template Engine + Database gắn liền nhau, output ra HTML. Bên phải "Headless CMS" thể hiện Backend (Admin Panel + Database) tách rời, cung cấp REST/GraphQL API, nhiều Frontend client (Web React, Mobile App, IoT) kết nối vào API.]

**Ưu điểm của Headless CMS:**

- **Tách biệt quan tâm (Separation of Concerns):** Đội phát triển Frontend và Backend có thể làm việc song song, độc lập.
- **Đa kênh (Omnichannel):** Cùng một nội dung có thể phục vụ cho web, ứng dụng di động, kiosk, chatbot.
- **Linh hoạt công nghệ:** Frontend có thể sử dụng bất kỳ framework nào (React, Vue, Angular) mà không bị ràng buộc bởi CMS.
- **Hiệu suất cao:** Frontend có thể được tối ưu hóa riêng (SPA, SSR, SSG) cho từng trường hợp sử dụng.
- **Bảo mật tốt hơn:** Giảm bề mặt tấn công vì CMS không trực tiếp phục vụ người dùng cuối.

Trong đồ án này, nhóm sử dụng **Strapi** — một Headless CMS mã nguồn mở — làm Backend. Strapi tự động tạo REST API cho mỗi content type được định nghĩa, giúp rút ngắn đáng kể thời gian phát triển.

### 2.1.2 Single Page Application (SPA)

Single Page Application (Ứng dụng trang đơn) là một kiến trúc ứng dụng web trong đó toàn bộ ứng dụng được tải một lần duy nhất khi người dùng truy cập lần đầu. Sau đó, mọi tương tác (chuyển trang, tải dữ liệu) đều diễn ra **không cần tải lại toàn bộ trang** — thay vào đó, JavaScript cập nhật nội dung DOM một cách động.

**Đặc điểm của SPA:**

- **Client-side routing:** Điều hướng giữa các "trang" diễn ra hoàn toàn trên trình duyệt (ví dụ: React Router), URL thay đổi nhưng không gửi request tải trang mới đến server.
- **API-driven data:** Dữ liệu được tải bất đồng bộ qua AJAX/Fetch API, chỉ lấy phần dữ liệu cần thiết.
- **Trải nghiệm mượt mà:** Không có hiện tượng "nhấp nháy" khi chuyển trang, tương tự ứng dụng native.

Trong đồ án, Frontend được xây dựng dưới dạng SPA bằng **React 19** kết hợp **React Router v7** cho điều hướng phía client với 17 route.

### 2.1.3 RAG — Retrieval Augmented Generation (Sinh văn bản có tăng cường truy xuất)

RAG là một kiến trúc kết hợp giữa **truy xuất thông tin** (Information Retrieval) và **sinh văn bản** (Text Generation) bằng mô hình ngôn ngữ lớn (LLM). Thay vì dựa hoàn toàn vào kiến thức nội tại của LLM (có thể lỗi thời hoặc bịa đặt — hallucination), RAG bổ sung ngữ cảnh thực tế từ cơ sở dữ liệu trước khi LLM tạo câu trả lời.

[Hình 2.2: Quy trình hoạt động của RAG Pipeline — Sơ đồ luồng 5 bước: (1) Người dùng gửi câu hỏi → (2) Câu hỏi được vector hóa bằng Embedding Model → (3) Tìm kiếm ngữ nghĩa trong Vector Database (ChromaDB) lấy Top-K tài liệu liên quan → (4) Ghép ngữ cảnh + câu hỏi + lịch sử hội thoại thành prompt → (5) Gửi prompt đến LLM (Gemini 2.5 Flash) → Sinh câu trả lời có căn cứ. Mũi tên phản hồi từ LLM trở về người dùng kèm danh sách nguồn.]

**Quy trình RAG trong hệ thống TravelTVB:**

1. **Indexing (Lập chỉ mục):** Dữ liệu tour từ Strapi được chia thành các đoạn (chunks) theo 4 loại: tổng quan, mô tả, điểm nổi bật, lịch trình. Mỗi đoạn được chuyển thành vector embedding 3072 chiều bằng Gemini Embedding 001 và lưu vào ChromaDB.
2. **Retrieval (Truy xuất):** Khi người dùng hỏi chatbot, câu hỏi được vector hóa và so sánh cosine similarity với các vector trong ChromaDB để tìm 5 đoạn tài liệu liên quan nhất.
3. **Generation (Sinh văn bản):** Các đoạn tài liệu liên quan được đưa vào system prompt cùng lịch sử hội thoại, sau đó gửi đến Gemini 2.5 Flash để sinh câu trả lời tự nhiên, chính xác.

**Ưu điểm của RAG so với fine-tuning LLM:**

- Không cần huấn luyện lại mô hình khi dữ liệu thay đổi — chỉ cần cập nhật ChromaDB.
- Câu trả lời luôn dựa trên dữ liệu thực tế, giảm đáng kể hiện tượng hallucination.
- Chi phí thấp — không cần GPU hoặc tài nguyên huấn luyện.

### 2.1.4 Vector Database (Cơ sở dữ liệu vector)

Vector Database là loại cơ sở dữ liệu chuyên biệt để lưu trữ, lập chỉ mục và truy vấn các **vector embedding** — biểu diễn số học đa chiều của dữ liệu phi cấu trúc (văn bản, hình ảnh, âm thanh). Khác với cơ sở dữ liệu truyền thống tìm kiếm theo từ khóa chính xác (exact match), Vector Database sử dụng **tìm kiếm ngữ nghĩa** (semantic search) dựa trên khoảng cách vector (cosine similarity, Euclidean distance).

Ví dụ: Câu hỏi "tour biển đẹp giá rẻ" sẽ tìm được tour "Khám phá bãi biển Đà Nẵng – 2.500.000 VND" dù không có từ khóa trùng khớp, vì hai vector có nghĩa gần nhau trong không gian embedding.

Trong đồ án, nhóm sử dụng **ChromaDB** — một vector database mã nguồn mở, nhẹ, dễ triển khai — lưu trữ embedding của 33 chunks dữ liệu tour (9 tour × 3 ngôn ngữ × ~4 chunks mỗi tour).

### 2.1.5 JWT Authentication (Xác thực bằng JSON Web Token)

JSON Web Token (JWT) là một tiêu chuẩn mở (RFC 7519) cho việc truyền thông tin xác thực giữa các bên dưới dạng JSON object được mã hóa. JWT gồm 3 phần: **Header** (thuật toán mã hóa), **Payload** (dữ liệu người dùng, thời hạn), **Signature** (chữ ký xác minh tính toàn vẹn).

Trong hệ thống TravelTVB, JWT được sử dụng cho:

- Xác thực người dùng sau khi đăng nhập (thời hạn 7 ngày, cấu hình tại `config/plugins.js`).
- Bảo vệ các API endpoint yêu cầu đăng nhập (đặt tour, xem lịch sử, hủy tour).
- Token được lưu ở `localStorage` phía client và gửi trong header `Authorization: Bearer <token>` mỗi request.

## 2.2 Các công nghệ sử dụng

### 2.2.1 Frontend

#### React 19

React là thư viện JavaScript mã nguồn mở do Meta (Facebook) phát triển, chuyên xây dựng giao diện người dùng dựa trên **component** (thành phần). React 19 (phiên bản được sử dụng trong đồ án) mang đến các cải tiến về hiệu suất render và hỗ trợ tốt hơn cho concurrent features.

**Các tính năng React được sử dụng trong đồ án:**

- **Functional Components + Hooks:** Toàn bộ component sử dụng hàm (không class), quản lý state bằng `useState`, side-effects bằng `useEffect`, context bằng `useContext`.
- **Context API:** Hai context provider — `AuthContext` (quản lý đăng nhập/JWT) và `LanguageContext` (quản lý ngôn ngữ vi/en/zh).
- **React Router v7:** Điều hướng client-side với 17 route, bao gồm 2 route được bảo vệ (`/profile`, `/booking/:id/ticket`) qua component `ProtectedRoute`.
- **Custom Hooks:** `useCountUp` — hook tùy chỉnh tạo hiệu ứng đếm số cho phần thống kê trang chủ.

#### Vite 7

Vite là build tool thế hệ mới cho ứng dụng web, nổi bật với tốc độ khởi động server phát triển gần như tức thì nhờ sử dụng **ES Modules native** của trình duyệt (không bundling ở chế độ dev). So với Webpack, Vite nhanh hơn 10-100x cho Hot Module Replacement (HMR).

**Cấu hình Vite trong đồ án** (`vite.config.js`):

```javascript
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    host: '0.0.0.0',
    allowedHosts: [
      'srv1488417.hstgr.cloud',
      '.ngrok-free.app',
    ],
  },
  preview: {
    port: 3011,
  },
})
```

#### Framer Motion

Framer Motion là thư viện animation cho React, cung cấp API khai báo (declarative) để tạo hiệu ứng chuyển động. Trong đồ án, Framer Motion được sử dụng cho:

- **Hiệu ứng chuyển trang:** `AnimatePresence` + `PageLayout` bọc mỗi route với fade-in animation.
- **Hiệu ứng cuộn (Scroll Animation):** Component `AnimateOnScroll` sử dụng `whileInView` để kích hoạt animation khi element xuất hiện trong viewport, hỗ trợ 3 hướng: trái, phải, dưới.
- **Hero Slider:** Animation slide với opacity transition cho banner trang chủ.

Bảng 2.1: So sánh các công nghệ Frontend

| Tiêu chí | React + Vite | Vue + Nuxt | Angular |
|---|---|---|---|
| Tốc độ phát triển | Cao (HMR cực nhanh) | Cao | Trung bình |
| Hệ sinh thái | Rất lớn (npm) | Lớn | Lớn |
| Đường cong học tập | Trung bình | Thấp | Cao |
| Hiệu suất runtime | Cao (Virtual DOM) | Cao | Cao |
| Cộng đồng | Lớn nhất | Lớn | Lớn |
| **Lý do chọn** | **Hệ sinh thái phong phú, tương thích tốt với Strapi, thành viên nhóm có kinh nghiệm** | | |

### 2.2.2 Backend

#### Strapi 5

Strapi là **Headless CMS mã nguồn mở** hàng đầu, được viết bằng Node.js. Strapi 5 (phiên bản 5.36.0 trong đồ án) cung cấp:

- **Content-Type Builder:** Giao diện kéo thả để tạo cấu trúc dữ liệu (schema) mà không cần viết code. Trong đồ án, 25 content type được định nghĩa (tours, bookings, single-posts, FAQ, navbar, footer...).
- **REST API tự động:** Mỗi content type tự động có đầy đủ endpoint CRUD (`GET /api/tours`, `POST /api/tours`, `PUT /api/tours/:id`, `DELETE /api/tours/:id`).
- **Hệ thống plugin:** Users-Permissions (JWT auth), i18n (đa ngôn ngữ), Upload (quản lý media).
- **Custom Controller/Service:** Cho phép viết business logic tùy chỉnh — trong đồ án, booking controller (599 dòng) và chatbot controller (150 dòng) là các custom controller phức tạp nhất.
- **Cron Tasks:** Hỗ trợ tác vụ định kỳ — trong đồ án, cứ mỗi 5 phút hệ thống tự động hủy các đơn đặt tour quá hạn 30 phút.

Bảng 2.2: So sánh các hệ thống CMS

| Tiêu chí | Strapi | WordPress | Directus | Sanity |
|---|---|---|---|---|
| Loại | Headless CMS | Traditional CMS | Headless CMS | Headless CMS |
| Ngôn ngữ | Node.js | PHP | Node.js | Hosted (SaaS) |
| Mã nguồn mở | Có | Có | Có | Không (freemium) |
| REST API tự động | Có | Plugin (WP REST) | Có | Có |
| Custom Logic | Controller/Service | Plugin/Hook | Extension | GROQ queries |
| Đa ngôn ngữ (i18n) | Tích hợp sẵn | Plugin | Tích hợp sẵn | Tích hợp sẵn |
| Self-hosted | Có | Có | Có | Không |
| **Lý do chọn** | **Mã nguồn mở, Node.js (thống nhất stack), API tự động, i18n tích hợp, cộng đồng lớn** | | | |

#### SQLite / better-sqlite3

SQLite là hệ quản trị cơ sở dữ liệu quan hệ nhúng (embedded), lưu trữ toàn bộ database trong một file duy nhất (`.tmp/data.db`). SQLite phù hợp cho giai đoạn phát triển và prototype nhờ không cần cài đặt server riêng. Hệ thống được thiết kế để dễ dàng chuyển sang MySQL hoặc PostgreSQL cho production thông qua cấu hình `config/database.js`.

### 2.2.3 AI và Chatbot

#### Google Gemini API

Google Gemini là dòng mô hình AI đa phương thức (multimodal) của Google. Trong đồ án, hai mô hình Gemini được sử dụng:

1. **Gemini Embedding 001:** Mô hình tạo vector embedding 3072 chiều cho văn bản. Được sử dụng trong:
   - Script indexing (`indexTours.js`): Chuyển đổi dữ liệu tour thành vectors.
   - Chatbot service (`vectorStore.js`): Vector hóa câu hỏi người dùng để tìm kiếm ngữ nghĩa.

2. **Gemini 2.5 Flash:** Mô hình ngôn ngữ lớn (LLM) được sử dụng trong chatbot service (`chatbot.js`) để sinh câu trả lời tự nhiên dựa trên ngữ cảnh tour được truy xuất từ ChromaDB.

#### ChromaDB

ChromaDB là vector database mã nguồn mở, viết bằng Python, hỗ trợ:

- Lưu trữ và truy vấn vector embedding.
- Lọc metadata (theo ngôn ngữ, loại chunk, tour ID).
- API HTTP đơn giản, dễ tích hợp với Node.js qua thư viện `chromadb` npm.

Trong đồ án, ChromaDB chạy như một server độc lập (port 8000) và lưu trữ 33 chunks embedding cho 9 tour × 3 ngôn ngữ.

### 2.2.4 Thanh toán trực tuyến

#### VNPay

VNPay (Vietnam Payment) là một trong những cổng thanh toán trực tuyến lớn nhất Việt Nam, hỗ trợ hơn 40 ngân hàng nội địa và các phương thức thanh toán quốc tế (Visa, MasterCard, JCB).

[Hình 2.3: Luồng thanh toán VNPay — Sơ đồ sequence: (1) Người dùng nhấn "Thanh toán" → (2) Frontend gửi POST đến Backend → (3) Backend tạo URL thanh toán với HMAC SHA-512 signature → (4) Redirect người dùng đến VNPay Gateway → (5) Người dùng nhập thông tin thẻ → (6) VNPay xử lý giao dịch → (7) VNPay redirect callback về Backend URL → (8) Backend xác minh chữ ký, cập nhật trạng thái đơn hàng → (9) Redirect người dùng về Frontend trang kết quả.]

**Cơ chế bảo mật VNPay:**

- Mỗi giao dịch được ký bằng **HMAC SHA-512** với secret key riêng của merchant.
- Backend xác minh chữ ký trên callback return để đảm bảo dữ liệu không bị giả mạo.
- Sử dụng chế độ **Sandbox** cho phát triển và kiểm thử (không trừ tiền thật).

Bảng 2.3: So sánh các cổng thanh toán

| Tiêu chí | VNPay | MoMo | ZaloPay | Stripe |
|---|---|---|---|---|
| Thị trường | Việt Nam | Việt Nam | Việt Nam | Quốc tế |
| Ngân hàng hỗ trợ | 40+ | 30+ | 20+ | Quốc tế |
| Sandbox miễn phí | Có | Có | Có | Có |
| Tài liệu API | Tiếng Việt | Tiếng Việt | Tiếng Việt | Tiếng Anh |
| Tích hợp Node.js | REST API | REST API | REST API | SDK chính thức |
| **Lý do chọn** | **Phổ biến nhất VN, hỗ trợ 40+ ngân hàng, tài liệu đầy đủ, sandbox miễn phí** | | | |

### 2.2.5 Kiểm thử và CI/CD

#### Vitest (Frontend Testing)

Vitest là framework kiểm thử đơn vị (unit testing) được thiết kế riêng cho Vite, tương thích API với Jest nhưng nhanh hơn nhờ chia sẻ cấu hình và plugin với Vite. Trong đồ án, Vitest được kết hợp với **React Testing Library** (kiểm thử component) và **jsdom** (mô phỏng DOM trình duyệt).

#### Jest (Backend Testing)

Jest là framework kiểm thử JavaScript phổ biến nhất, được sử dụng để kiểm thử các utility functions phía backend. Trong đồ án, Jest kiểm thử VNPay helper functions (`sortObject`, `formatVnpDate`) với 21 test case.

#### GitHub Actions (CI/CD)

GitHub Actions được cấu hình để chạy tự động khi push hoặc tạo Pull Request vào nhánh `main` và `develop`. Pipeline gồm 2 job chạy song song:

- **frontend-tests:** Cài đặt dependencies + chạy Vitest trên Node.js 20.
- **backend-tests:** Cài đặt dependencies + chạy Jest trên Node.js 20.

### 2.2.6 Đa ngôn ngữ (Internationalization — i18n)

Hệ thống hỗ trợ 3 ngôn ngữ thông qua hai cơ chế:

1. **Strapi i18n Plugin (Backend):** Mỗi content type có thể có nhiều phiên bản ngôn ngữ. Khi Frontend gọi API với tham số `?locale=vi` (hoặc `en`, `zh`), Strapi trả về nội dung tương ứng.

2. **Frontend displayData Pattern:** Mỗi component chứa một object `displayData` với key là mã ngôn ngữ, value là các chuỗi đã dịch. Component đọc ngôn ngữ hiện tại từ `LanguageContext` để hiển thị đúng bản dịch.

```javascript
// Ví dụ pattern displayData trong Tours.jsx
const displayData = {
  vi: { pageTitle: 'Tour Du Lịch', searchPlaceholder: 'Tìm tour...' },
  en: { pageTitle: 'Tours', searchPlaceholder: 'Search tours...' },
  zh: { pageTitle: '旅游套餐', searchPlaceholder: '搜索旅游...' },
};
```

---

# Chương 3 – PHÂN TÍCH VÀ THIẾT KẾ HỆ THỐNG

## 3.1 Phân tích yêu cầu hệ thống

### 3.1.1 Các đối tượng sử dụng hệ thống

Hệ thống TravelTVB phục vụ 3 nhóm đối tượng chính:

**1. Khách vãng lai (Guest Visitor)**

Là người dùng chưa đăng ký hoặc chưa đăng nhập. Khách vãng lai có thể:

- Duyệt và tìm kiếm tour theo từ khóa, khu vực, khoảng giá.
- Xem chi tiết tour (mô tả, lịch trình, điểm nổi bật, hình ảnh, giá).
- Đọc bài viết tin tức và bài viết cộng đồng.
- Sử dụng chatbot AI để hỏi thông tin về tour.
- Chuyển đổi ngôn ngữ (Việt / Anh / Trung).
- Xem các trang thông tin: Trang chủ, Giới thiệu, Dịch vụ, Liên hệ, FAQ.
- **Không thể** đặt tour hoặc thanh toán (phải đăng nhập).

**2. Khách hàng đã đăng nhập (Registered Customer)**

Là người dùng đã có tài khoản và đã đăng nhập thành công. Ngoài tất cả chức năng của khách vãng lai, khách hàng đã đăng nhập có thể:

- Đặt tour trực tuyến: Chọn ngày, số lượng người lớn/trẻ em, điền thông tin liên hệ.
- Thanh toán qua VNPay (chuyển hướng đến cổng thanh toán, nhận kết quả).
- Xem hồ sơ cá nhân (tên, email, số điện thoại, ngày tham gia).
- Xem lịch sử đặt tour với trạng thái (Chờ thanh toán, Đã thanh toán, Thất bại, Đã hủy).
- Hủy đơn đặt tour (với chính sách hoàn tiền theo thời gian).
- Thử thanh toán lại cho đơn hàng thất bại.
- Xem và in vé điện tử (E-ticket với mã QR) cho đơn đã thanh toán.
- Đăng xuất.

**3. Quản trị viên (Administrator)**

Là người quản lý nội dung và vận hành hệ thống, truy cập thông qua Strapi Admin Panel (`/admin`). Quản trị viên có thể:

- Quản lý tour (CRUD): Tạo, sửa, xóa, xuất bản tour với đầy đủ thông tin đa ngôn ngữ.
- Quản lý bài viết tin tức và cộng đồng (CRUD).
- Quản lý danh mục tour và danh mục bài viết.
- Xem và quản lý đơn đặt tour (trạng thái, thông tin khách hàng).
- Quản lý người dùng (xem, khóa tài khoản).
- Quản lý nội dung CMS: Navbar, Footer, Hero slides, FAQ, thống kê, banner CTA, newsletter.
- Quản lý media (hình ảnh, file).
- Cấu hình đa ngôn ngữ cho tất cả content type.

### 3.1.2 Yêu cầu chức năng

Bảng 3.1: Danh sách yêu cầu chức năng

| Mã | Nhóm chức năng | Mô tả yêu cầu | Mức ưu tiên |
|---|---|---|---|
| **Tìm kiếm và Duyệt Tour** | | | |
| REQ-SEARCH-01 | Tìm kiếm | Hệ thống phải cung cấp thanh tìm kiếm theo từ khóa (tên tour) | Cao |
| REQ-SEARCH-02 | Lọc giá | Hệ thống phải cung cấp bộ lọc theo khoảng giá (Price Range Slider) với bước 100.000 VND | Cao |
| REQ-SEARCH-03 | Lọc khu vực | Hệ thống phải cung cấp bộ lọc theo khu vực (Miền Bắc, Miền Trung, Miền Nam, Tây Nguyên, Nhiều Vùng) | Cao |
| REQ-SEARCH-04 | Sắp xếp | Hệ thống phải hỗ trợ sắp xếp tour theo: Mới nhất, Giá tăng dần, Giá giảm dần, Đánh giá cao | Cao |
| REQ-SEARCH-05 | Hiển thị kết quả | Kết quả tìm kiếm phải hiển thị: Hình ảnh, Tên tour, Giá tiền (giá gốc + giá khuyến mãi), Đánh giá, Thời lượng, Địa điểm | Cao |
| REQ-SEARCH-06 | Phân trang | Hệ thống phải phân trang kết quả tìm kiếm (mặc định 25 tour/trang, tối đa 100) | Trung bình |
| **Đặt Tour và Thanh toán** | | | |
| REQ-BOOK-01 | Chọn số lượng | Hệ thống cho phép chọn số lượng người lớn (tối thiểu 1, tối đa 100) và trẻ em (tối thiểu 0, tối đa 100) | Cao |
| REQ-BOOK-02 | Chọn ngày | Hệ thống cho phép chọn ngày khởi hành (từ ngày mai trở đi) | Cao |
| REQ-BOOK-03 | Kiểm tra chỗ | Hệ thống phải kiểm tra số chỗ còn lại theo ngày và tour, tự động điều chỉnh nếu vượt quá | Cao |
| REQ-BOOK-04 | Tính giá | Hệ thống phải tính tổng tiền chính xác: (Người lớn × Giá người lớn) + (Trẻ em × Giá trẻ em) | Cao |
| REQ-BOOK-05 | Thanh toán VNPay | Hệ thống phải tích hợp API VNPay để tạo URL thanh toán an toàn (HMAC SHA-512 checksum) | Cao |
| REQ-BOOK-06 | Xác nhận đơn | Hệ thống phải lưu đơn hàng với trạng thái "Pending", cập nhật thành "Paid" sau khi VNPay callback thành công | Cao |
| REQ-BOOK-07 | Hủy đơn | Hệ thống phải cho phép hủy đơn với chính sách hoàn tiền: ≤24h trước khởi hành → 100%, ≤72h → 85%, >72h → 0% | Trung bình |
| REQ-BOOK-08 | Tự động hết hạn | Hệ thống phải tự động chuyển đơn "Pending" quá 30 phút thành "Failed" (cron task mỗi 5 phút) | Trung bình |
| REQ-BOOK-09 | Thanh toán lại | Hệ thống phải cho phép thử thanh toán lại cho đơn hàng có trạng thái "Failed" | Trung bình |
| REQ-BOOK-10 | Vé điện tử | Hệ thống phải tạo vé điện tử (E-ticket) với mã QR cho đơn đã thanh toán thành công | Trung bình |
| REQ-BOOK-11 | Idempotency | Hệ thống phải đảm bảo idempotency trên VNPay callback — không cập nhật trùng lặp nếu callback được gọi nhiều lần | Cao |
| **Trợ lý ảo AI (Chatbot)** | | | |
| REQ-AI-01 | Hiểu ngôn ngữ | Chatbot phải hiểu ngôn ngữ tự nhiên tiếng Việt, tiếng Anh và tiếng Trung | Trung bình |
| REQ-AI-02 | Trả lời chính xác | Chatbot chỉ được trả lời dựa trên dữ liệu tour thực tế (context), không bịa đặt (hallucination) | Cao |
| REQ-AI-03 | Giao diện | Giao diện chat phải nổi (Floating Widget) ở góc màn hình, có thể mở/đóng | Trung bình |
| REQ-AI-04 | Nguồn tham khảo | Chatbot phải trả về danh sách tour liên quan (sources) kèm tên tour, slug, giá, địa điểm | Trung bình |
| REQ-AI-05 | Giới hạn tần suất | Chatbot phải giới hạn 15 request/phút mỗi IP để chống lạm dụng | Trung bình |
| REQ-AI-06 | Lịch sử hội thoại | Chatbot phải duy trì ngữ cảnh hội thoại (tối đa 10 tin nhắn gần nhất — 5 cặp hỏi/đáp) | Trung bình |
| **Đăng nhập và Quản lý người dùng** | | | |
| REQ-AUTH-01 | Đăng ký | Hệ thống cho phép đăng ký bằng email, tên đăng nhập, mật khẩu, họ tên, số điện thoại | Cao |
| REQ-AUTH-02 | Đăng nhập | Hệ thống cho phép đăng nhập bằng email/tên đăng nhập + mật khẩu, trả về JWT token (hiệu lực 7 ngày) | Cao |
| REQ-AUTH-03 | Bảo mật mật khẩu | Mật khẩu phải được mã hóa (hash) trước khi lưu vào database | Cao |
| REQ-AUTH-04 | Hồ sơ cá nhân | Hệ thống phải có trang Profile hiển thị thông tin cá nhân và lịch sử đặt tour | Trung bình |
| REQ-AUTH-05 | Navbar động | Navbar phải thay đổi dựa trên trạng thái đăng nhập: Guest → nút Đăng nhập/Đăng ký; Logged in → tên user + dropdown | Trung bình |
| REQ-AUTH-06 | Bảo vệ route | Các trang yêu cầu đăng nhập (/profile, /booking/:id/ticket) phải chuyển hướng về /login nếu chưa xác thực | Cao |
| **Quản trị nội dung** | | | |
| REQ-ADMIN-01 | Đăng nhập admin | Admin phải đăng nhập được vào trang quản trị Strapi (/admin) | Cao |
| REQ-ADMIN-02 | CRUD Tour | Admin có thể Tạo, Đọc, Sửa, Xóa tour với đầy đủ 25 trường thuộc tính | Cao |
| REQ-ADMIN-03 | CRUD Bài viết | Admin có thể quản lý bài viết tin tức và cộng đồng | Trung bình |
| REQ-ADMIN-04 | Quản lý đơn hàng | Admin có thể xem danh sách đơn đặt tour với trạng thái | Trung bình |
| REQ-ADMIN-05 | Quản lý nội dung | Admin có thể quản lý nội dung CMS đa ngôn ngữ (navbar, footer, hero, FAQ...) | Trung bình |
| **Đa ngôn ngữ** | | | |
| REQ-I18N-01 | CMS đa ngôn ngữ | Tất cả nội dung CMS phải hỗ trợ 3 ngôn ngữ: Tiếng Việt (vi), Tiếng Anh (en), Tiếng Trung (zh) | Trung bình |
| REQ-I18N-02 | Frontend đa ngôn ngữ | Giao diện người dùng phải chuyển đổi được giữa 3 ngôn ngữ mà không cần tải lại trang | Trung bình |
| REQ-I18N-03 | Chuyển ngữ | Hệ thống phải lưu lựa chọn ngôn ngữ trong session để duy trì khi chuyển trang | Thấp |
| **Blog và Cộng đồng** | | | |
| REQ-BLOG-01 | Danh sách bài viết | Trang tin tức phải hiển thị danh sách bài viết theo thứ tự mới nhất, có phân trang | Trung bình |
| REQ-BLOG-02 | Chi tiết bài viết | Trang chi tiết phải hỗ trợ Rich Text (đậm, nghiêng, tiêu đề, danh sách, hình ảnh) | Trung bình |
| REQ-BLOG-03 | Bài liên quan | Cuối bài viết phải có phần "Bài viết liên quan" để điều hướng người dùng | Thấp |
| REQ-BLOG-04 | Phân loại | Bài viết phải được phân loại theo danh mục (khu vực) | Thấp |

### 3.1.3 Yêu cầu phi chức năng

Bảng 3.2: Danh sách yêu cầu phi chức năng

| Mã | Nhóm | Mô tả yêu cầu | Chỉ tiêu |
|---|---|---|---|
| **Hiệu suất** | | | |
| NFR-PERF-01 | Tải trang | Thời gian First Contentful Paint (FCP) phải dưới 2 giây trên mạng 4G | < 2s |
| NFR-PERF-02 | Chatbot | Thời gian phản hồi chatbot (từ gửi câu hỏi đến nhận trả lời) phải dưới 5 giây | < 5s |
| NFR-PERF-03 | API | Thời gian phản hồi API Strapi cho các endpoint CRUD phải dưới 500ms | < 500ms |
| NFR-PERF-04 | Pagination | API phải hỗ trợ phân trang (mặc định 25, tối đa 100 bản ghi) để tránh tải toàn bộ dữ liệu | Max 100 |
| **Bảo mật** | | | |
| NFR-SEC-01 | Dữ liệu thẻ | Hệ thống không được lưu trữ bất kỳ thông tin thẻ thanh toán nào — ủy thác hoàn toàn cho VNPay | 0 data stored |
| NFR-SEC-02 | Biến môi trường | API key, JWT secret, VNPay secret phải được lưu trong file .env, không commit vào Git | .env + .gitignore |
| NFR-SEC-03 | Mã hóa mật khẩu | Mật khẩu phải được hash bằng bcrypt trước khi lưu database | bcrypt hash |
| NFR-SEC-04 | CORS | Backend phải giới hạn CORS chỉ cho phép request từ domain Frontend đã biết | Whitelist |
| NFR-SEC-05 | Xác minh thanh toán | Mỗi VNPay callback phải được xác minh HMAC SHA-512 signature trước khi cập nhật trạng thái | HMAC SHA-512 |
| NFR-SEC-06 | Booking lockdown | Endpoint CRUD mặc định của booking phải trả 403 Forbidden — người dùng chỉ truy cập qua custom routes | 403 default |
| **Khả năng sử dụng** | | | |
| NFR-USE-01 | Responsive | Giao diện phải hiển thị tốt trên màn hình từ 320px (mobile) đến 1920px (desktop) | 320px - 1920px |
| NFR-USE-02 | Quy trình đặt tour | Quy trình đặt tour phải hoàn thành trong tối đa 3 bước: Chọn tour → Điền form → Thanh toán | ≤ 3 bước |
| NFR-USE-03 | Animation | Giao diện phải có hiệu ứng chuyển động mượt mà (Framer Motion) để nâng cao trải nghiệm | 60fps |
| **Chất lượng mã nguồn** | | | |
| NFR-CODE-01 | Kiến trúc component | Mã nguồn Frontend phải sử dụng kiến trúc component-based, tách biệt trang (page) và thành phần tái sử dụng (component) | Component-based |
| NFR-CODE-02 | Content type | Mã nguồn Backend phải sử dụng Strapi content type cho mỗi loại dữ liệu, tách biệt controller/service/route | Strapi pattern |
| NFR-CODE-03 | Kiểm thử | Hệ thống phải có kiểm thử tự động cho các module quan trọng, chạy tự động qua CI/CD | Auto test |
| NFR-CODE-04 | Linting | Mã nguồn Frontend phải tuân thủ ESLint rules (React hooks, refresh plugins) | 0 lint errors |

## 3.2 Thiết kế cơ sở dữ liệu

### 3.2.1 Sơ đồ ERD tổng quan

[Hình 3.1: Sơ đồ ERD tổng quan — Entity-Relationship Diagram thể hiện 4 bảng chính và mối quan hệ:

1. **up_users** (Người dùng): id(PK), username, email, password, full_name, phone, provider, confirmed, blocked, role(FK→roles)
2. **tours** (Tour): id(PK), Tour_Name, slug, Short_Description, Description(blocks), Featured_Image, Gallery, Price, Original_Price, Child_Price, Duration_Days, Duration_Nights, Region(enum), Location, Departure_Location, Itinerary(blocks), Highlights(component), Max_Participants, Rating, Review_Count, Transport_Type(enum), Is_Featured, tour_category(FK→tour_categories), locale, publishedAt
3. **bookings** (Đặt tour): id(PK), tour(FK→tours), user(FK→up_users), adult_count, child_count, travel_date, total_price, status(enum), payment_ref, vnpay_transaction_no, booking_date, contact_name, contact_email, contact_phone, refund_amount, cancelled_at, refund_status
4. **tour_categories** (Danh mục): id(PK), Category_Name, Category_Slug, locale

Quan hệ:
- tour_categories 1——N tours (một danh mục có nhiều tour)
- tours 1——N bookings (một tour có nhiều đơn đặt)
- up_users 1——N bookings (một user có nhiều đơn đặt)

Các bảng phụ (không vẽ chi tiết, chỉ liệt kê tên): single_posts, single_community_posts, post_categories, authors, home_hero_sliders, home_statistics, home_commitments, home_diagrams, home_portfolios, about_heroes, about_journeys, about_teams, about_core_values, layout_navbars, layout_footers, layout_cta_banners, layout_newsletters, news_heroes, community_heroes, faqs, service_heroes, newsletter_email_submissions.]

### 3.2.2 Mô tả bảng tours

Bảng 3.3: Mô tả bảng tours

| Trường | Kiểu dữ liệu | Bắt buộc | Đa ngôn ngữ | Mô tả |
|---|---|---|---|---|
| id | Integer (PK) | Tự động | — | Khóa chính, tự tăng |
| Tour_Name | String | Có | Có | Tên tour du lịch |
| slug | UID | — | Có | Đường dẫn thân thiện, tự tạo từ Tour_Name |
| Short_Description | Text | — | Có | Mô tả ngắn hiển thị trên card tour |
| Description | Blocks (Rich Text) | — | Có | Mô tả chi tiết dạng rich text |
| Featured_Image | Media (ảnh đơn) | — | Có | Ảnh đại diện tour |
| Gallery | Media (nhiều ảnh) | — | Có | Bộ sưu tập hình ảnh tour |
| Price | BigInteger | — | Có | Giá hiện tại (VND) |
| Original_Price | BigInteger | — | Có | Giá gốc trước khuyến mãi |
| Child_Price | BigInteger | — | Có | Giá cho trẻ em |
| Duration_Days | Integer | — | Không | Số ngày tour |
| Duration_Nights | Integer | — | Không | Số đêm tour |
| Region | Enum | — | Không | Khu vực: MienBac, MienTrung, MienNam, TayNguyen, NhieuVung |
| Location | String | — | Có | Điểm đến |
| Departure_Location | String | — | Có | Điểm khởi hành |
| Itinerary | Blocks (Rich Text) | — | Có | Lịch trình chi tiết theo ngày |
| Highlights | Component (repeatable) | — | Có | Danh sách điểm nổi bật của tour |
| Max_Participants | Integer | — | Không | Số người tối đa mỗi ngày |
| Rating | Decimal | — | Không | Đánh giá trung bình (0-5) |
| Review_Count | Integer | — | Không | Số lượt đánh giá |
| Transport_Type | Enum | — | Không | Phương tiện: XeKhach, MayBay, Tau, XeMay, KetHop |
| Is_Featured | Boolean | — | Không | Đánh dấu tour nổi bật (mặc định: false) |
| tour_category | Relation (N-1) | — | — | Khóa ngoại đến tour_categories |
| locale | String | Tự động | — | Mã ngôn ngữ (vi, en, zh) |
| publishedAt | Datetime | — | — | Thời điểm xuất bản (null = bản nháp) |

### 3.2.3 Mô tả bảng bookings

Bảng 3.4: Mô tả bảng bookings

| Trường | Kiểu dữ liệu | Bắt buộc | Mô tả |
|---|---|---|---|
| id | Integer (PK) | Tự động | Khóa chính, tự tăng |
| tour | Relation (N-1) | — | Khóa ngoại đến tours |
| user | Relation (N-1) | — | Khóa ngoại đến up_users |
| adult_count | Integer | Có | Số người lớn (min: 1) |
| child_count | Integer | — | Số trẻ em (min: 0, mặc định: 0) |
| travel_date | Date | Có | Ngày khởi hành |
| total_price | BigInteger | Có | Tổng tiền (VND) |
| status | Enum | Có | Trạng thái: Pending, Paid, Failed, Cancelled (mặc định: Pending) |
| payment_ref | String | — | Mã tham chiếu thanh toán (UUID) |
| vnpay_transaction_no | String | — | Mã giao dịch VNPay |
| booking_date | Datetime | — | Thời điểm đặt tour |
| contact_name | String | Có | Họ tên liên hệ |
| contact_email | String | Có | Email liên hệ |
| contact_phone | String | Có | Số điện thoại liên hệ |
| refund_amount | BigInteger | — | Số tiền hoàn trả (mặc định: 0) |
| cancelled_at | Datetime | — | Thời điểm hủy đơn |
| refund_status | String | — | Trạng thái hoàn tiền: none, not_charged, refunded, refund_failed, pending_manual |

### 3.2.4 Mô tả bảng up_users

Bảng 3.5: Mô tả bảng up_users

| Trường | Kiểu dữ liệu | Bắt buộc | Mô tả |
|---|---|---|---|
| id | Integer (PK) | Tự động | Khóa chính, tự tăng |
| username | String | Có | Tên đăng nhập (duy nhất, tối thiểu 3 ký tự) |
| email | Email | Có | Địa chỉ email (duy nhất, tối thiểu 6 ký tự) |
| password | Password | — | Mật khẩu đã hash (tối thiểu 6 ký tự, private, không tìm kiếm được) |
| provider | String | — | Nhà cung cấp xác thực (mặc định: "local") |
| confirmed | Boolean | — | Tài khoản đã xác nhận (mặc định: false) |
| blocked | Boolean | — | Tài khoản bị khóa (mặc định: false) |
| role | Relation (N-1) | — | Khóa ngoại đến roles (users-permissions) |
| full_name | String | — | Họ và tên đầy đủ (trường mở rộng) |
| phone | String | — | Số điện thoại (trường mở rộng) |
| resetPasswordToken | String | — | Token đặt lại mật khẩu (private) |
| confirmationToken | String | — | Token xác nhận email (private) |

### 3.2.5 Mô tả bảng tour_categories

Bảng 3.6: Mô tả bảng tour_categories

| Trường | Kiểu dữ liệu | Bắt buộc | Đa ngôn ngữ | Mô tả |
|---|---|---|---|---|
| id | Integer (PK) | Tự động | — | Khóa chính, tự tăng |
| Category_Name | String | Có | Có | Tên danh mục (VD: Miền Bắc, Northern Vietnam, 北部) |
| Category_Slug | UID | — | — | Đường dẫn thân thiện, tự tạo từ Category_Name |
| tours | Relation (1-N) | — | — | Quan hệ ngược với tours.tour_category |
| locale | String | Tự động | — | Mã ngôn ngữ (vi, en, zh) |

## 3.3 Thiết kế hệ thống

### 3.3.1 Sơ đồ Use Case tổng quát

[Hình 3.2: Sơ đồ Use Case tổng quát — Sơ đồ UML Use Case với 3 actor bên trái (Khách vãng lai, Khách hàng đã đăng nhập, Quản trị viên) và một hệ thống "TravelTVB" ở giữa chứa các use case. Khách vãng lai kết nối với: Xem trang chủ, Tìm kiếm tour, Xem chi tiết tour, Đọc tin tức, Đọc bài viết cộng đồng, Sử dụng chatbot AI, Chuyển đổi ngôn ngữ, Đăng ký, Đăng nhập. Khách hàng đã đăng nhập kế thừa (generalization) từ Khách vãng lai và thêm: Đặt tour, Thanh toán VNPay, Xem hồ sơ cá nhân, Xem lịch sử đặt tour, Hủy đơn đặt tour, Xem vé điện tử, Đăng xuất. Quản trị viên kết nối với: Đăng nhập Admin, Quản lý tour (CRUD), Quản lý bài viết (CRUD), Quản lý đơn hàng, Quản lý người dùng, Quản lý nội dung CMS.]

### 3.3.2 Sơ đồ Use Case chi tiết — Khách vãng lai

[Hình 3.3: Sơ đồ Use Case — Khách vãng lai — Actor "Khách vãng lai" bên trái kết nối với các use case trong hệ thống:
1. "Xem trang chủ" — include → "Xem hero slider", "Xem thống kê", "Xem cam kết", "Xem portfolio", "Xem FAQ"
2. "Tìm kiếm tour" — include → "Lọc theo khu vực", "Lọc theo giá", "Sắp xếp kết quả"
3. "Xem chi tiết tour" — include → "Xem mô tả", "Xem lịch trình", "Xem điểm nổi bật", "Xem gallery"
4. "Sử dụng chatbot AI" — include → "Gửi câu hỏi", "Nhận câu trả lời với nguồn"
5. "Chuyển đổi ngôn ngữ" — extend → tất cả use case khác
6. "Đăng ký tài khoản"
7. "Đăng nhập"]

### 3.3.3 Sơ đồ Use Case chi tiết — Khách hàng đã đăng nhập

[Hình 3.4: Sơ đồ Use Case — Khách hàng đã đăng nhập — Actor "Khách hàng" bên trái kết nối với:
1. "Đặt tour" — include → "Chọn ngày khởi hành", "Chọn số lượng người", "Kiểm tra chỗ trống", "Điền thông tin liên hệ", "Tính tổng tiền"
2. "Thanh toán VNPay" — include → "Tạo URL thanh toán", "Chuyển đến VNPay", "Xác minh callback"
   "Thanh toán VNPay" — extend → "Thanh toán lại (đơn Failed)"
3. "Xem hồ sơ cá nhân" — include → "Xem thông tin cá nhân", "Xem lịch sử đặt tour"
4. "Hủy đơn đặt tour" — include → "Tính phần trăm hoàn tiền", "Gọi VNPay refund API"
5. "Xem vé điện tử" — include → "Hiển thị mã QR", "In vé"
6. "Đăng xuất"]

### 3.3.4 Sơ đồ Use Case chi tiết — Quản trị viên

[Hình 3.5: Sơ đồ Use Case — Quản trị viên — Actor "Admin" bên trái kết nối với:
1. "Đăng nhập Admin Panel" (Strapi /admin)
2. "Quản lý tour" — include → "Tạo tour mới", "Sửa tour", "Xóa tour", "Xuất bản/Gỡ xuất bản"
3. "Quản lý bài viết" — include → "Tạo bài viết tin tức", "Tạo bài viết cộng đồng", "Sửa/Xóa"
4. "Quản lý đơn hàng" — include → "Xem danh sách đơn", "Xem chi tiết đơn"
5. "Quản lý người dùng" — include → "Xem danh sách", "Khóa tài khoản"
6. "Quản lý nội dung CMS" — include → "Sửa Navbar", "Sửa Footer", "Sửa Hero", "Sửa FAQ", "Quản lý đa ngôn ngữ"]

### 3.3.5 Mô tả Use Case: Đặt tour và Thanh toán

Bảng 3.7: Mô tả Use Case đặt tour

| Thuộc tính | Mô tả |
|---|---|
| **Tên Use Case** | Đặt tour và Thanh toán VNPay |
| **Mã** | UC-BOOK-01 |
| **Actor** | Khách hàng đã đăng nhập |
| **Mô tả** | Khách hàng chọn tour, điền thông tin, thanh toán qua VNPay và nhận vé điện tử |
| **Tiền điều kiện** | Khách hàng đã đăng nhập, tour có chỗ trống cho ngày đã chọn |
| **Hậu điều kiện** | Đơn đặt tour được tạo với trạng thái "Paid", vé điện tử có thể xem |
| **Luồng chính** | 1. Khách hàng xem trang chi tiết tour |
| | 2. Khách hàng chọn ngày khởi hành (từ ngày mai trở đi) |
| | 3. Hệ thống gọi API kiểm tra chỗ trống (`GET /api/bookings/availability`) |
| | 4. Hệ thống hiển thị số chỗ còn lại |
| | 5. Khách hàng chọn số người lớn và trẻ em |
| | 6. Hệ thống tính tổng tiền theo thời gian thực |
| | 7. Khách hàng điền thông tin liên hệ (tên, email, SĐT — tự điền từ profile nếu có) |
| | 8. Khách hàng nhấn "Thanh Toán VNPay" |
| | 9. Frontend gửi `POST /api/bookings/create-payment-url` với JWT token |
| | 10. Backend tạo booking (status: Pending), tạo URL thanh toán VNPay với HMAC SHA-512 |
| | 11. Frontend chuyển hướng khách hàng đến VNPay Gateway |
| | 12. Khách hàng nhập thông tin thẻ test trên VNPay |
| | 13. VNPay xử lý giao dịch, redirect callback về `GET /api/bookings/vnpay-return` |
| | 14. Backend xác minh chữ ký HMAC, cập nhật booking status → "Paid" |
| | 15. Backend redirect khách hàng về Frontend `/payment-return?status=success` |
| | 16. Khách hàng xem trang kết quả thanh toán thành công |
| **Luồng thay thế** | **4a.** Nếu hết chỗ → hiển thị "Hết chỗ", nút đặt tour bị vô hiệu hóa |
| | **10a.** Nếu số người vượt chỗ trống → trả lỗi "Not enough capacity" |
| | **13a.** Nếu VNPay trả mã lỗi ≠ "00" → Backend cập nhật status → "Failed" |
| | **13b.** Nếu chữ ký HMAC không khớp → Backend không cập nhật, redirect về `/payment-return?status=failed` |
| **Luồng ngoại lệ** | **E1.** Đơn Pending quá 30 phút → Cron task tự động chuyển thành "Failed" |
| | **E2.** Đơn Failed → Khách hàng có thể nhấn "Thử lại" để tạo URL thanh toán mới (kiểm tra lại chỗ trống) |

Bảng 3.8: Mô tả Use Case thanh toán (hủy và hoàn tiền)

| Thuộc tính | Mô tả |
|---|---|
| **Tên Use Case** | Hủy đơn đặt tour |
| **Mã** | UC-BOOK-02 |
| **Actor** | Khách hàng đã đăng nhập |
| **Mô tả** | Khách hàng hủy đơn đặt tour đã thanh toán, hệ thống tính và xử lý hoàn tiền |
| **Tiền điều kiện** | Đơn đặt tour có trạng thái "Paid" hoặc "Pending", ngày khởi hành chưa qua |
| **Hậu điều kiện** | Đơn chuyển sang trạng thái "Cancelled", hoàn tiền theo chính sách |
| **Luồng chính** | 1. Khách hàng vào trang Hồ sơ, xem lịch sử đặt tour |
| | 2. Khách hàng nhấn nút "Hủy" trên đơn cần hủy |
| | 3. Frontend gửi `POST /api/bookings/:id/cancel` với JWT token |
| | 4. Backend xác minh quyền sở hữu đơn (user ID khớp) |
| | 5. Backend tính phần trăm hoàn tiền theo thời gian: |
| | — Cách ngày khởi hành ≤ 24 giờ → hoàn 100% |
| | — Cách ngày khởi hành ≤ 72 giờ → hoàn 85% |
| | — Cách ngày khởi hành > 72 giờ → hoàn 0% |
| | 6. Nếu đơn đã thanh toán (Paid) → Backend gọi VNPay Refund API |
| | 7. Backend cập nhật: status → "Cancelled", refund_amount, cancelled_at, refund_status |
| | 8. Frontend hiển thị thông tin hoàn tiền cho khách hàng |
| **Luồng thay thế** | **4a.** Nếu user ID không khớp → trả 403 Forbidden |
| | **5a.** Nếu ngày khởi hành đã qua → trả lỗi "Cannot cancel past travel date" |
| | **6a.** Nếu đơn chưa thanh toán (Pending) → không gọi VNPay, refund_status = "not_charged" |
| | **6b.** Nếu VNPay refund thất bại → refund_status = "pending_manual" |

Bảng 3.9: Mô tả Use Case chatbot

| Thuộc tính | Mô tả |
|---|---|
| **Tên Use Case** | Sử dụng Trợ lý ảo AI (Chatbot) |
| **Mã** | UC-AI-01 |
| **Actor** | Khách vãng lai hoặc Khách hàng đã đăng nhập |
| **Mô tả** | Người dùng hỏi chatbot về thông tin tour, chatbot trả lời dựa trên dữ liệu thực |
| **Tiền điều kiện** | ChromaDB đang chạy, dữ liệu tour đã được lập chỉ mục, Google Gemini API key hợp lệ |
| **Hậu điều kiện** | Người dùng nhận được câu trả lời kèm danh sách tour gợi ý |
| **Luồng chính** | 1. Người dùng nhấn vào biểu tượng chatbot (góc phải dưới màn hình) |
| | 2. Widget chatbot mở ra với tin nhắn chào mừng |
| | 3. Người dùng nhập câu hỏi (tối đa 500 ký tự) và nhấn Enter hoặc nút Gửi |
| | 4. Frontend gửi `POST /api/chatbot/query` với: message, language, history (5 cặp gần nhất) |
| | 5. Backend kiểm tra rate limit (15 req/phút/IP) |
| | 6. Backend vector hóa câu hỏi bằng Gemini Embedding 001 |
| | 7. Backend tìm kiếm 5 chunks liên quan nhất trong ChromaDB (ưu tiên đúng ngôn ngữ) |
| | 8. Backend xây dựng system prompt: ngữ cảnh tour + quy tắc trả lời + ngôn ngữ |
| | 9. Backend gửi prompt + lịch sử hội thoại đến Gemini 2.5 Flash |
| | 10. Gemini sinh câu trả lời tự nhiên dựa trên ngữ cảnh |
| | 11. Backend trích xuất danh sách tour được đề cập → tạo mảng sources |
| | 12. Frontend hiển thị câu trả lời, chuyển [slug] thành link đến trang tour |
| | 13. Frontend hiển thị danh sách tour gợi ý (tên, giá, địa điểm) |
| **Luồng thay thế** | **5a.** Nếu vượt rate limit → trả 429 "Too many requests", Frontend hiển thị thông báo |
| | **7a.** Nếu không tìm thấy kết quả đúng ngôn ngữ → fallback tìm tiếng Anh → fallback tìm tất cả |
| | **10a.** Nếu Gemini API lỗi → trả tin nhắn lỗi thân thiện theo ngôn ngữ |

### 3.3.6 Sequence Diagram — Đặt tour và Thanh toán

[Hình 3.6: Sequence Diagram — Đặt tour và Thanh toán VNPay

Các lifeline: Người dùng, Frontend (React), Backend (Strapi), Database (SQLite), VNPay Gateway

1. Người dùng → Frontend: Nhấn "Đặt Tour Ngay" trên trang chi tiết tour
2. Frontend → Backend: GET /api/bookings/availability?tourId=X&date=Y
3. Backend → Database: SELECT SUM(adult_count + child_count) FROM bookings JOIN bookings_tour_lnk WHERE status IN ('Pending','Paid')
4. Database → Backend: bookedCount
5. Backend → Frontend: { remaining: N, isSoldOut: false }
6. Frontend → Người dùng: Hiển thị form đặt tour với số chỗ còn lại

7. Người dùng → Frontend: Điền form (ngày, số người, thông tin liên hệ) → Nhấn "Thanh Toán VNPay"
8. Frontend → Backend: POST /api/bookings/create-payment-url { tour, adult_count, child_count, travel_date, contact_* } [Authorization: Bearer JWT]

--- alt: Booking chưa tồn tại ---
9. Backend → Database: BEGIN TRANSACTION
10. Backend → Database: INSERT INTO bookings (status='Pending', payment_ref=UUID)
11. Backend → Database: INSERT INTO bookings_tour_lnk (booking_id, tour_id)
12. Backend → Database: INSERT INTO bookings_user_lnk (booking_id, user_id)
13. Backend → Database: COMMIT
--- end alt ---

14. Backend: Tạo VNPay params + HMAC SHA-512 signature
15. Backend → Frontend: { paymentUrl: "https://sandbox.vnpayment.vn/...?vnp_SecureHash=..." }
16. Frontend → Người dùng: window.location.href = paymentUrl (redirect đến VNPay)

17. Người dùng → VNPay: Nhập thông tin thẻ test → Xác nhận thanh toán
18. VNPay → Backend: GET /api/bookings/vnpay-return?vnp_ResponseCode=00&vnp_SecureHash=...

--- alt: Signature hợp lệ & ResponseCode = "00" ---
19. Backend: Xác minh HMAC SHA-512 → PASS
20. Backend → Database: UPDATE bookings SET status='Paid', vnpay_transaction_no='...' WHERE payment_ref='...'
21. Backend → Frontend: 302 Redirect → /payment-return?status=success&bookingRef=...
--- alt: Signature lỗi hoặc ResponseCode ≠ "00" ---
19b. Backend → Database: UPDATE bookings SET status='Failed'
20b. Backend → Frontend: 302 Redirect → /payment-return?status=failed
--- end alt ---

22. Frontend → Người dùng: Hiển thị trang kết quả thanh toán (Thành công / Thất bại)]

### 3.3.7 Sequence Diagram — Chatbot RAG

[Hình 3.7: Sequence Diagram — Chatbot RAG Pipeline

Các lifeline: Người dùng, Frontend (React), Backend (Strapi), ChromaDB, Google Gemini API

1. Người dùng → Frontend: Mở chatbot widget → Nhập câu hỏi "Có tour nào đi Đà Lạt không?"
2. Frontend → Backend: POST /api/chatbot/query { message: "Có tour nào đi Đà Lạt không?", language: "vi", history: [...] }

3. Backend: Kiểm tra rate limit (15 req/min/IP) → PASS
4. Backend: Sanitize input (trim, max 500 chars, validate history roles)

5. Backend → Google Gemini API: embedContent(model: "gemini-embedding-001", content: "Có tour nào đi Đà Lạt không?")
6. Google Gemini API → Backend: vector[3072 dimensions]

7. Backend → ChromaDB: collection.query({ queryEmbeddings: [vector], nResults: 5, where: { language: "vi" } })
8. ChromaDB → Backend: Top 5 chunks (content + metadata: tourName, tourSlug, price, location)

9. Backend: Xây dựng system prompt:
   - "Bạn là trợ lý du lịch của TravelTVB..."
   - "Ngữ cảnh: [5 chunks tour data]"
   - "Chỉ trả lời dựa trên ngữ cảnh, không bịa đặt"
   - "Trả lời bằng tiếng Việt"

10. Backend → Google Gemini API: chat.sendMessage(systemInstruction + history + userMessage) [model: gemini-2.5-flash]
11. Google Gemini API → Backend: "Dạ có! TravelTVB hiện có tour [mekong-delta-tour] Khám phá Miền Tây..."

12. Backend: Trích xuất sources từ metadata của chunks được đề cập
13. Backend → Frontend: { reply: "Dạ có! TravelTVB...", sources: [{ tourName, tourSlug, price, location }] }

14. Frontend: Parse [slug] thành <Link to="/tours/slug">
15. Frontend → Người dùng: Hiển thị câu trả lời + danh sách tour gợi ý có link]

### 3.3.8 Sequence Diagram — Đăng nhập

[Hình 3.8: Sequence Diagram — Đăng nhập

Các lifeline: Người dùng, Frontend (React), Backend (Strapi), Database (SQLite)

1. Người dùng → Frontend: Nhấn "Đăng Nhập" trên Navbar → Chuyển đến /login
2. Người dùng → Frontend: Nhập email/username + mật khẩu → Nhấn "Đăng Nhập"
3. Frontend → Backend: POST /api/auth/local { identifier: "email@test.com", password: "***" }

--- alt: Thông tin hợp lệ ---
4. Backend → Database: SELECT * FROM up_users WHERE email = 'email@test.com'
5. Database → Backend: user record (with hashed password)
6. Backend: bcrypt.compare(password, hashedPassword) → MATCH
7. Backend: jwt.sign({ id: user.id }, JWT_SECRET, { expiresIn: '7d' })
8. Backend → Frontend: { jwt: "eyJ...", user: { id, username, email, full_name, phone } }
9. Frontend: localStorage.setItem('token', jwt)
10. Frontend: AuthContext.setUser(user), AuthContext.setToken(jwt)
11. Frontend → Người dùng: Redirect về trang trước hoặc trang chủ, Navbar cập nhật hiển thị tên user
--- alt: Thông tin không hợp lệ ---
4b. Backend → Frontend: 400 { error: "Invalid identifier or password" }
5b. Frontend → Người dùng: Hiển thị thông báo lỗi
--- end alt ---

Note: Mỗi request sau đó, Frontend gửi header Authorization: Bearer <jwt>
Backend verify token → nếu hợp lệ, ctx.state.user = decoded user]

## 3.4 Thiết kế giao diện người dùng

### 3.4.1 Trang chủ (Home)

[Hình 3.9: Thiết kế giao diện Trang chủ — Screenshot trang chủ TravelTVB gồm các phần từ trên xuống:
1. **Navbar:** Logo TravelTVB bên trái, menu navigation (Trang Chủ, Về Chúng Tôi, Các Gói Tour, Tin Tức, Cộng Đồng) ở giữa, dropdown chọn ngôn ngữ (🇻🇳/🇺🇸/🇨🇳) và nút "Liên Hệ Ngay" bên phải. Nếu đã đăng nhập: thay nút liên hệ bằng tên user + dropdown (Hồ Sơ, Đăng Xuất).
2. **Hero Slider:** Full-width ảnh du lịch Việt Nam (Hạ Long, Hội An, Đà Nẵng, Ninh Bình) tự động xoay mỗi 7 giây, có tiêu đề lớn, mô tả ngắn, nút CTA "Khám phá ngay". Navigation dots phía dưới.
3. **Thống kê:** 3 ô số liệu (15K+ Khách Hàng Thỏa Mãn, 100+ Đích Đến Du Lịch, 2+ Năm Kinh Nghiệm) với hiệu ứng đếm số khi cuộn đến.
4. **Cam kết:** Tiêu đề "Tại sao lại chọn chúng tôi", mô tả cam kết, nút CTA. Kèm hình ảnh minh họa.
5. **Sơ đồ hoạt động:** Tiêu đề "Cách Tour Hoạt Động", sơ đồ minh họa quy trình.
6. **Portfolio:** Tiêu đề "Các điểm đến được yêu thích nhất tại Việt Nam", grid hình ảnh.
7. **FAQ:** Danh sách câu hỏi thường gặp dạng accordion (click để mở/đóng).
8. **Newsletter:** Banner đăng ký nhận tư vấn qua email.
9. **Footer:** 3 cột (Về chúng tôi, Góc chuyên gia, Liên hệ) + địa chỉ + copyright.]

### 3.4.2 Trang Danh sách Tour

[Hình 3.10: Thiết kế giao diện Danh sách Tour — Screenshot trang /tours gồm:
1. **Tiêu đề trang:** "Tour Du Lịch" + mô tả phụ
2. **Bộ lọc (sidebar hoặc top bar):**
   - Tabs khu vực: Tất cả | Miền Bắc | Miền Trung | Miền Nam | Tây Nguyên | Nhiều Vùng
   - Thanh tìm kiếm: Input "Tìm tour..." với icon kính lúp
   - Dropdown sắp xếp: Mới nhất / Giá tăng dần / Giá giảm dần / Đánh giá cao
   - Price Range Slider: Thanh kéo kép hiển thị khoảng giá min-max (VND)
3. **Grid kết quả:** Mỗi TourCard gồm:
   - Ảnh đại diện (có badge "SALE" nếu có giá gốc > giá hiện tại)
   - Tag danh mục (VD: "Miền Bắc")
   - Tên tour (in đậm, 2 dòng max)
   - Mô tả ngắn (2-3 dòng)
   - Icon + Thời lượng (VD: "2 đêm 3 ngày")
   - Icon + Địa điểm
   - Icon sao + Đánh giá + Số lượt đánh giá
   - Giá: Giá gốc (gạch ngang) + Giá hiện tại (in đậm, màu đỏ)
4. **Phân trang:** Nút TRƯỚC / Số trang / TIẾP]

### 3.4.3 Trang Chi tiết Tour + Đặt Tour

[Hình 3.11: Thiết kế giao diện Chi tiết Tour — Screenshot trang /tours/:slug gồm:
1. **Breadcrumb:** "Quay lại danh sách tour"
2. **Header:** Tên tour lớn, Tag khu vực, Rating (sao + số đánh giá)
3. **Ảnh đại diện:** Full-width Featured Image
4. **Layout 2 cột:**
   - **Cột trái (70%):**
     - Tab "Điểm nổi bật": Danh sách bullet với icon check
     - Tab "Mô tả tour": Rich text (đậm, nghiêng, heading, list, ảnh)
     - Tab "Lịch trình": Chi tiết theo ngày (Ngày 1, Ngày 2...)
     - Tab "Hình ảnh": Gallery grid
   - **Cột phải (30%) — Sidebar Booking Form:**
     - Giá: "Giá từ X VND" (giá gốc gạch ngang nếu có khuyến mãi)
     - Thông tin nhanh: Thời gian, Khởi hành từ, Phương tiện, Số người tối đa
     - Input ngày khởi hành (date picker, min = ngày mai)
     - Bộ đếm Người lớn (+/-) và Trẻ em (+/-)
     - Hiển thị "X chỗ còn lại" (cập nhật động khi đổi ngày)
     - Input Họ tên, Email, Số điện thoại (tự điền từ profile nếu đăng nhập)
     - Tổng cộng: "X VND" (tính real-time)
     - Nút "Thanh Toán VNPay" (màu xanh, full-width)
     - Nếu chưa đăng nhập: Thông báo "Đăng nhập để đặt tour" + nút "Đăng Nhập"
     - Nếu hết chỗ: Nút bị disabled, hiển thị "Hết chỗ"]

### 3.4.4 Chatbot Widget

[Hình 3.12: Thiết kế giao diện Chatbot Widget — Screenshot widget chatbot:
1. **Nút mở (floating):** Icon chat tròn, góc phải dưới màn hình, có hiệu ứng pulse
2. **Panel chat (khi mở):**
   - Header: Logo + "Trợ lý TravelTVB" + nút đóng (X)
   - Vùng tin nhắn: Tin nhắn chào mừng từ bot, sau đó các cặp user/bot messages
   - Tin nhắn bot: Background xám nhạt, bên trái, có avatar bot
   - Tin nhắn user: Background xanh, bên phải
   - Tour gợi ý: Cards nhỏ dưới tin nhắn bot (tên tour, giá, địa điểm, link đến tour)
   - Typing indicator: 3 chấm nhấp nháy khi bot đang xử lý
   - Input bar: Textarea "Hỏi về tour du lịch..." + nút Gửi (icon mũi tên)
   - Hỗ trợ Shift+Enter xuống dòng, Enter gửi]

### 3.4.5 Trang Đăng nhập / Đăng ký

[Hình 3.13: Thiết kế giao diện Đăng nhập / Đăng ký — Hai screenshot cạnh nhau:

**Trang Đăng nhập (/login):**
- Tiêu đề: "Đăng Nhập"
- Phụ đề: "Chào mừng bạn quay lại! Vui lòng đăng nhập để tiếp tục."
- Input "Email hoặc Tên đăng nhập" với placeholder
- Input "Mật khẩu" với icon ẩn/hiện mật khẩu
- Nút "Đăng Nhập" (full-width, màu chủ đạo)
- Link "Chưa có tài khoản? Đăng ký ngay"
- Thông báo lỗi màu đỏ nếu sai thông tin

**Trang Đăng ký (/register):**
- Tiêu đề: "Đăng Ký"
- Phụ đề: "Tạo tài khoản để đặt tour và quản lý đơn hàng."
- Input "Họ và tên"
- Input "Email"
- Input "Tên đăng nhập"
- Input "Số điện thoại"
- Input "Mật khẩu" (tối thiểu 6 ký tự)
- Input "Xác nhận mật khẩu"
- Nút "Đăng Ký" (full-width)
- Link "Đã có tài khoản? Đăng nhập"
- Validation: Mật khẩu không khớp hiển thị lỗi]

### 3.4.6 Trang Hồ sơ cá nhân + Lịch sử đặt tour

[Hình 3.14: Thiết kế giao diện Hồ sơ — Screenshot trang /profile gồm:
1. **Phần thông tin cá nhân:**
   - Avatar/Icon người dùng
   - Họ và tên (in đậm, lớn)
   - Tên đăng nhập
   - Email
   - Số điện thoại (hoặc "Chưa cung cấp")
   - Thành viên từ: [ngày đăng ký]
   - Nút "Đăng Xuất" (màu đỏ)
2. **Phần Lịch sử Đặt Tour:**
   - Tiêu đề: "Lịch Sử Đặt Tour"
   - Bảng với các cột: Tên tour, Ngày đi, Số người, Tổng tiền, Trạng thái, Hành động
   - Trạng thái có màu: Xanh (Đã thanh toán), Vàng (Chờ thanh toán), Đỏ (Thất bại), Xám (Đã hủy)
   - Hành động: "Xem Vé" (cho đơn Paid), "Thử Lại" (cho đơn Failed), "Hủy" (cho đơn Pending/Paid)
   - Nếu chưa có đơn: "Chưa có đơn đặt tour nào."]

### 3.4.7 Trang Vé điện tử

[Hình 3.15: Thiết kế giao diện Vé điện tử — Screenshot trang /booking/:id/ticket gồm:
- Header: Logo TravelTVB + "Vé Điện Tử"
- Tên tour (in đậm, lớn)
- Thông tin vé (dạng grid 2 cột):
  - Ngày khởi hành: DD/MM/YYYY
  - Số khách: X người lớn, Y trẻ em
  - Mã đặt tour: UUID
  - Người liên hệ: Tên
  - Điện thoại: Số
  - Tổng tiền đã thanh toán: X VND
  - Trạng thái: "Đã thanh toán" (badge xanh)
  - Ngày đặt: DD/MM/YYYY
- Mã QR: QR code lớn ở giữa (chứa mã đặt tour)
- Ghi chú: "Xuất trình mã QR này cho hướng dẫn viên tour để xác nhận."
- Tagline: "Khám phá Việt Nam cùng bạn"
- Nút "In Vé" + Nút "Quay lại Hồ Sơ"]

### 3.4.8 Trang Kết quả Thanh toán

[Hình 3.16: Thiết kế giao diện Kết quả Thanh toán — Hai trường hợp:

**Thanh toán thành công:**
- Icon check xanh lớn
- Tiêu đề: "Thanh Toán Thành Công!"
- Mô tả: "Đơn đặt tour của bạn đã được xác nhận. Cảm ơn bạn!"
- Mã đặt tour: [UUID]
- Nút "Xem Đơn Đặt Tour" → /profile
- Nút "Quay Lại Danh Sách Tour" → /tours

**Thanh toán thất bại:**
- Icon X đỏ lớn
- Tiêu đề: "Thanh Toán Thất Bại"
- Mô tả: "Thanh toán không thành công. Vui lòng thử lại."
- Nút "Thử Lại" → /tours
- Nút "Quay Lại Danh Sách Tour" → /tours]

---

# Chương 4 – PHÁT TRIỂN VÀ TRIỂN KHAI HỆ THỐNG

## 4.1 Môi trường phát triển

Bảng 4.1: Môi trường phát triển

| Thành phần | Công nghệ / Phiên bản | Vai trò |
|---|---|---|
| Hệ điều hành | Windows 11 / Ubuntu 22.04 | Phát triển và triển khai |
| Runtime | Node.js 22.16.0 | Chạy Frontend và Backend |
| Package Manager | npm 10.x | Quản lý thư viện |
| IDE | Visual Studio Code | Viết mã nguồn |
| Version Control | Git + GitHub | Quản lý phiên bản và CI/CD |
| Frontend Framework | React 19.1.0 + Vite 7.0.4 | Xây dựng giao diện |
| Backend CMS | Strapi 5.36.0 | API và quản lý nội dung |
| Database | SQLite (better-sqlite3 12.4.1) | Lưu trữ dữ liệu |
| Vector Database | ChromaDB 3.4.0 | Lưu trữ embedding cho chatbot |
| AI/LLM | Google Gemini 2.5 Flash + Embedding 001 | Chatbot RAG |
| Payment Gateway | VNPay Sandbox | Thanh toán trực tuyến |
| Frontend Testing | Vitest 4.1.2 + React Testing Library 16.3.2 | Kiểm thử Frontend |
| Backend Testing | Jest 30.3.0 | Kiểm thử Backend |
| CI/CD | GitHub Actions | Tích hợp và triển khai liên tục |
| Python | 3.8+ | Chạy ChromaDB server |

## 4.2 Cấu trúc thư mục dự án

[Hình 4.1: Cấu trúc thư mục dự án — Sơ đồ cây thư mục]

```
DACN_TourGuideWeb/
├── Travel_TVB/                          # Frontend (React + Vite)
│   ├── src/
│   │   ├── components/                  # Thành phần tái sử dụng
│   │   │   ├── Layout/
│   │   │   │   ├── Navbar/Home-Navbar.jsx       # Thanh điều hướng
│   │   │   │   ├── Footer/Footer.jsx            # Chân trang
│   │   │   │   ├── Newsletter/Newsletter.jsx    # Đăng ký nhận tin
│   │   │   │   ├── ScrollToTop/ScrollToTop.jsx  # Cuộn lên đầu trang
│   │   │   │   └── ScrollToTopButton/           # Nút cuộn lên
│   │   │   ├── AnimateOnScroll/AnimateOnScroll.jsx  # Animation cuộn
│   │   │   ├── BookingForm/BookingForm.jsx      # Form đặt tour
│   │   │   ├── ChatbotWidget/ChatbotWidget.jsx  # Widget chatbot AI
│   │   │   ├── HeroSlider/HeroSlider.jsx        # Banner xoay trang chủ
│   │   │   ├── PageLayout/PageLayout.jsx        # Bọc trang với animation
│   │   │   ├── PriceRangeSlider/                # Thanh lọc giá
│   │   │   ├── ProtectedRoute/ProtectedRoute.jsx # Bảo vệ route
│   │   │   ├── TourCard/TourCard.jsx            # Card hiển thị tour
│   │   │   └── ... (Statistic, Commitment, Diagram, Portfolio, FAQ,
│   │   │         CoreValues, Journey, Team, CtaBanner, ...)
│   │   ├── context/
│   │   │   ├── AuthContext.jsx          # Context xác thực (JWT)
│   │   │   └── LanguageContext.jsx      # Context ngôn ngữ (vi/en/zh)
│   │   ├── config/
│   │   │   └── strapi.js                # 50+ API endpoint definitions
│   │   ├── hooks/
│   │   │   └── useCountUp.js            # Hook đếm số animation
│   │   ├── page/
│   │   │   ├── Home/Home.jsx            # Trang chủ
│   │   │   ├── AboutUS/AboutUs.jsx      # Trang giới thiệu
│   │   │   ├── Tours/Tours.jsx          # Trang danh sách tour
│   │   │   ├── TourDetail/TourDetail.jsx # Trang chi tiết tour
│   │   │   ├── Login/Login.jsx          # Trang đăng nhập
│   │   │   ├── Register/Register.jsx    # Trang đăng ký
│   │   │   ├── Profile/Profile.jsx      # Trang hồ sơ cá nhân
│   │   │   ├── BookingTicket/BookingTicket.jsx  # Vé điện tử
│   │   │   ├── PaymentReturn/PaymentReturn.jsx  # Kết quả thanh toán
│   │   │   ├── News/News.jsx            # Trang tin tức
│   │   │   ├── Community/Community.jsx  # Trang cộng đồng
│   │   │   └── ... (Service, Contact, Individual-Post, ...)
│   │   ├── test/
│   │   │   ├── setup.js                 # Vitest setup (mock localStorage, ...)
│   │   │   └── test-utils.jsx           # Hàm tiện ích cho test
│   │   ├── assets/                      # Hình ảnh, icon
│   │   ├── App.jsx                      # Root component + Router
│   │   ├── App.css                      # Style toàn cục
│   │   ├── main.jsx                     # Entry point
│   │   └── index.css                    # Style gốc
│   ├── .env                             # Biến môi trường Frontend
│   ├── vite.config.js                   # Cấu hình Vite
│   ├── vitest.config.js                 # Cấu hình Vitest
│   └── package.json
│
├── Travel_TVB_Server/                   # Backend (Strapi 5)
│   ├── config/
│   │   ├── server.js                    # Host, port, cron
│   │   ├── database.js                  # SQLite/MySQL/PostgreSQL
│   │   ├── admin.js                     # JWT secret, encryption
│   │   ├── api.js                       # Pagination (25/100)
│   │   ├── middlewares.js               # CORS, security
│   │   ├── plugins.js                   # JWT 7 ngày, custom fields
│   │   └── cron-tasks.js               # Hủy booking quá hạn 30 phút
│   ├── src/
│   │   ├── api/
│   │   │   ├── booking/                 # Hệ thống đặt tour
│   │   │   │   ├── controllers/booking.js   # 599 dòng — VNPay, refund
│   │   │   │   ├── routes/booking.js        # CRUD routes (locked)
│   │   │   │   ├── routes/01-custom-booking.js  # Custom routes
│   │   │   │   ├── services/booking.js
│   │   │   │   ├── utils/vnpay-helpers.js   # sortObject, formatVnpDate
│   │   │   │   ├── utils/__tests__/vnpay-helpers.test.js  # 21 test cases
│   │   │   │   └── content-types/booking/schema.json
│   │   │   ├── chatbot/                 # Hệ thống chatbot AI
│   │   │   │   ├── controllers/chatbot.js   # Rate limiting, validation
│   │   │   │   ├── services/chatbot.js      # RAG pipeline (Gemini)
│   │   │   │   ├── services/vectorStore.js  # ChromaDB + embeddings
│   │   │   │   ├── routes/chatbot.js
│   │   │   │   └── scripts/indexTours.js    # Indexing script
│   │   │   ├── tour/                    # Content type Tour
│   │   │   ├── tour-category/           # Danh mục tour
│   │   │   ├── single-post/             # Bài viết tin tức
│   │   │   ├── single-community-post/   # Bài viết cộng đồng
│   │   │   └── ... (22 content types khác)
│   │   ├── components/                  # 30 reusable components
│   │   └── extensions/
│   │       └── users-permissions/       # Mở rộng User (full_name, phone)
│   ├── .env                             # Biến môi trường Backend
│   ├── jest.config.js                   # Cấu hình Jest
│   └── package.json
│
├── .github/workflows/ci.yml            # GitHub Actions CI pipeline
├── migrate-strapi-locales.mjs           # Script chuyển đổi ngôn ngữ
├── index-tours-cron.sh                  # Cron script đồng bộ ChromaDB
└── docs/                                # Tài liệu dự án
```

## 4.3 Phát triển Backend

### 4.3.1 Cấu hình hệ thống

**Cấu hình cron task — Tự động hủy đơn quá hạn** (`config/cron-tasks.js`):

```javascript
'use strict';

module.exports = {
  // Chạy mỗi 5 phút: hủy đơn Pending quá 30 phút
  '*/5 * * * *': async ({ strapi }) => {
    const knex = strapi.db.connection;
    const thirtyMinutesAgo = new Date(Date.now() - 30 * 60 * 1000)
      .toISOString();

    try {
      const expiredCount = await knex('bookings')
        .where('status', 'Pending')
        .where('booking_date', '<', thirtyMinutesAgo)
        .update({
          status: 'Failed',
          updated_at: new Date().toISOString(),
        });

      if (expiredCount > 0) {
        strapi.log.info(
          `[Cron] Expired ${expiredCount} pending booking(s) older than 30 minutes.`
        );
      }
    } catch (err) {
      strapi.log.error('[Cron] Failed to expire pending bookings:', err);
    }
  },
};
```

Giải thích: Cron task này đảm bảo các đơn đặt tour "treo" (người dùng bắt đầu đặt nhưng không thanh toán) sẽ tự động chuyển sang trạng thái "Failed" sau 30 phút, giải phóng chỗ cho khách hàng khác.

### 4.3.2 Controller Booking — Tạo đơn đặt tour

Đây là phần quan trọng nhất của hệ thống booking, sử dụng **Knex transaction** để đảm bảo tính nguyên tử (atomicity) — tránh tình trạng đặt trùng (race condition).

```javascript
// src/api/booking/controllers/booking.js (trích đoạn - Tạo booking)
async create(ctx) {
  const user = ctx.state.user;
  if (!user) {
    return ctx.unauthorized('You must be logged in to book a tour.');
  }

  const { tour: tourId, adult_count, child_count = 0,
          travel_date, contact_name, contact_email, contact_phone }
    = ctx.request.body.data || {};

  // Kiểm tra đầu vào nghiêm ngặt
  const parsedAdultCount = parseInt(adult_count);
  const parsedChildCount = parseInt(child_count || 0);

  if (!tourId || !travel_date || !contact_name ||
      !contact_email || !contact_phone) {
    return ctx.badRequest('Missing required booking fields.');
  }
  if (isNaN(parsedAdultCount) || parsedAdultCount < 1) {
    return ctx.badRequest('adult_count must be at least 1.');
  }
  if (parsedAdultCount > 100 || parsedChildCount > 100) {
    return ctx.badRequest('Guest count exceeds maximum allowed.');
  }

  const knex = strapi.db.connection;

  try {
    const result = await knex.transaction(async (trx) => {
      // Lấy thông tin tour trong transaction (lock)
      const tour = await trx('tours').where('id', tourId).first();
      if (!tour) throw new Error('TOUR_NOT_FOUND');

      const maxParticipants = tour.max_participants || 999;
      const adultPrice = parseInt(tour.price) || 0;
      const childPrice = parseInt(tour.child_price) || adultPrice;

      // Đếm số chỗ đã đặt (Pending + Paid)
      const bookedResult = await trx('bookings')
        .join('bookings_tour_lnk', 'bookings.id',
              'bookings_tour_lnk.booking_id')
        .where('bookings_tour_lnk.tour_id', tourId)
        .where('bookings.travel_date', travel_date)
        .whereIn('bookings.status', ['Pending', 'Paid'])
        .select(trx.raw(
          'COALESCE(SUM(bookings.adult_count + bookings.child_count), 0) as booked_count'
        ))
        .first();

      const bookedCount = parseInt(bookedResult?.booked_count) || 0;
      const requested = parsedAdultCount + parsedChildCount;
      if (requested > maxParticipants - bookedCount) {
        throw new Error('CAPACITY_EXCEEDED');
      }

      // Tính tổng tiền và tạo booking
      const totalPrice = (parsedAdultCount * adultPrice)
                       + (parsedChildCount * childPrice);
      const paymentRef = `BOOK_${Date.now()}_${Math.random()
        .toString(36).substring(2, 8)}`;

      const [bookingId] = await trx('bookings').insert({
        document_id: crypto.randomUUID(),
        adult_count: parsedAdultCount,
        child_count: parsedChildCount,
        travel_date,
        total_price: totalPrice.toString(),
        status: 'Pending',
        payment_ref: paymentRef,
        booking_date: new Date().toISOString(),
        contact_name, contact_email, contact_phone,
        refund_amount: '0',
        created_at: new Date().toISOString(),
        updated_at: new Date().toISOString(),
        published_at: new Date().toISOString(),
      });

      // Tạo liên kết tour-booking và user-booking
      await trx('bookings_tour_lnk')
        .insert({ booking_id: bookingId, tour_id: tourId });
      await trx('bookings_user_lnk')
        .insert({ booking_id: bookingId, user_id: user.id });

      return { id: bookingId, total_price: totalPrice.toString(),
               payment_ref: paymentRef, status: 'Pending' };
    });

    ctx.body = { data: result };
  } catch (err) {
    if (err.message === 'TOUR_NOT_FOUND')
      return ctx.notFound('Tour not found.');
    if (err.message === 'CAPACITY_EXCEEDED')
      return ctx.badRequest('Not enough spots available.');
    return ctx.internalServerError('Booking creation failed.');
  }
},
```

### 4.3.3 Controller Booking — Tạo URL thanh toán VNPay

```javascript
// src/api/booking/controllers/booking.js (trích đoạn - VNPay Payment URL)
async createPaymentUrl(ctx) {
  const user = ctx.state.user;
  if (!user) return ctx.unauthorized('You must be logged in.');

  const { bookingId } = ctx.request.body || {};
  const knex = strapi.db.connection;

  // Xác minh quyền sở hữu đơn hàng
  const booking = await knex('bookings')
    .join('bookings_user_lnk', 'bookings.id',
          'bookings_user_lnk.booking_id')
    .where('bookings.id', bookingId)
    .where('bookings_user_lnk.user_id', user.id)
    .select('bookings.*').first();

  if (!booking) return ctx.notFound('Booking not found.');

  // Chỉ cho phép Pending hoặc Failed (retry thanh toán)
  if (!['Pending', 'Failed'].includes(booking.status)) {
    return ctx.badRequest('Booking must be Pending or Failed.');
  }

  // Tạo tham số VNPay
  const txnRef = `${booking.id}_${Date.now()}`;
  const amount = parseInt(booking.total_price) * 100; // VNPay yêu cầu × 100

  let vnpParams = {
    vnp_Version: '2.1.0',     vnp_Command: 'pay',
    vnp_TmnCode: process.env.VNPAY_TMN_CODE,
    vnp_Locale: 'vn',         vnp_CurrCode: 'VND',
    vnp_TxnRef: txnRef,
    vnp_OrderInfo: `Thanh toan dat tour ${booking.id}`,
    vnp_OrderType: 'other',   vnp_Amount: amount,
    vnp_ReturnUrl: process.env.VNPAY_RETURN_URL,
    vnp_IpAddr: '127.0.0.1',
    vnp_CreateDate: formatVnpDate(new Date()),
  };

  // Ký HMAC SHA-512
  vnpParams = sortObject(vnpParams);
  const signData = qs.stringify(vnpParams, { encode: false });
  const hmac = crypto.createHmac('sha512',
    process.env.VNPAY_HASH_SECRET);
  const signed = hmac.update(Buffer.from(signData, 'utf-8'))
    .digest('hex');
  vnpParams['vnp_SecureHash'] = signed;

  const paymentUrl = `${process.env.VNPAY_URL}?${
    qs.stringify(vnpParams, { encode: false })}`;

  ctx.body = { paymentUrl };
},
```

### 4.3.4 Chatbot Service — RAG Pipeline

Đây là core logic của chatbot AI, điều phối giữa ChromaDB (vector search) và Gemini (LLM).

```javascript
// src/api/chatbot/services/chatbot.js (toàn bộ)
'use strict';

const { GoogleGenerativeAI } = require('@google/generative-ai');
const vectorStore = require('./vectorStore');

const LLM_MODEL = 'gemini-2.5-flash';
let genAI = null;

function getGenAI() {
  if (!genAI) {
    const apiKey = process.env.GOOGLE_AI_API_KEY
                || process.env.GEMINI_API_KEY;
    if (!apiKey) throw new Error('GOOGLE_AI_API_KEY is not set.');
    genAI = new GoogleGenerativeAI(apiKey);
  }
  return genAI;
}

function buildSystemPrompt(language, contextChunks) {
  const langNames = {
    vi: 'Vietnamese (Tiếng Việt)',
    en: 'English',
    zh: 'Chinese (中文)',
  };
  const contextText = contextChunks.length > 0
    ? contextChunks.map((chunk, i) => {
        const meta = chunk.metadata || {};
        return `--- Tour ${i + 1}: ${meta.tourName || 'Unknown'} `
             + `(slug: ${meta.tourSlug || 'N/A'}) ---\n${chunk.content}`;
      }).join('\n\n')
    : 'No relevant tour data found.';

  return `You are a friendly tour guide assistant for "Travel TVB".

STRICT RULES:
1. Answer ONLY based on TOUR DATA CONTEXT below.
   Do NOT hallucinate.
2. If unknown, suggest /tours page.
3. Respond in ${langNames[language] || langNames.vi}.
4. Mention: tour name, price (₫), duration, location, rating.
5. Keep responses 2-4 paragraphs max.
6. Include tour slug as [tour-slug] for frontend links.

TOUR DATA CONTEXT:
${contextText}`;
}

async function chat(message, language = 'vi', history = []) {
  try {
    // Bước 1: Tìm kiếm vector trong ChromaDB
    const contextChunks = await vectorStore.search(
      message, 5, language);

    // Bước 2: Xây dựng system prompt
    const systemPrompt = buildSystemPrompt(language, contextChunks);

    // Bước 3: Cấu hình Gemini model
    const ai = getGenAI();
    const model = ai.getGenerativeModel({
      model: LLM_MODEL,
      systemInstruction: systemPrompt,
    });

    // Bước 4: Xây dựng lịch sử hội thoại
    let chatHistory = history.slice(-10).map((msg) => ({
      role: msg.role === 'user' ? 'user' : 'model',
      parts: [{ text: msg.content }],
    }));
    // Gemini yêu cầu history bắt đầu bằng 'user'
    while (chatHistory.length > 0
        && chatHistory[0].role === 'model') {
      chatHistory.shift();
    }

    const chatSession = model.startChat({ history: chatHistory });

    // Bước 5: Gửi tin nhắn và nhận phản hồi
    const result = await chatSession.sendMessage(message);
    const reply = result.response.text();

    // Bước 6: Trích xuất danh sách tour được đề cập
    const sources = extractSources(contextChunks, reply);

    return { reply, sources };
  } catch (error) {
    console.error('[Chatbot] Error:', error);
    const errorMessages = {
      vi: 'Xin lỗi, tôi đang gặp sự cố. Vui lòng thử lại sau.',
      en: 'Sorry, technical issue. Please try again later.',
      zh: '抱歉，遇到技术问题。请稍后再试。',
    };
    return { reply: errorMessages[language] || errorMessages.vi,
             sources: [] };
  }
}

module.exports = { chat };
```

### 4.3.5 VNPay Helper Utilities

```javascript
// src/api/booking/utils/vnpay-helpers.js
'use strict';

/**
 * Sắp xếp object theo key alphabetical + URL encode
 * theo yêu cầu của VNPay specification.
 */
function sortObject(obj) {
  const sorted = {};
  const keys = Object.keys(obj).sort();

  for (const key of keys) {
    const encodedKey = encodeURIComponent(key);
    const encodedValue = encodeURIComponent(String(obj[key]))
      .replace(/%20/g, '+');
    sorted[encodedKey] = encodedValue;
  }
  return sorted;
}

/**
 * Format Date → chuỗi 14 ký tự YYYYMMDDHHmmss
 * theo yêu cầu VNPay.
 */
function formatVnpDate(date) {
  const d = date instanceof Date ? date : new Date(date);
  const pad = (n) => String(n).padStart(2, '0');
  return `${d.getFullYear()}${pad(d.getMonth() + 1)}`
       + `${pad(d.getDate())}${pad(d.getHours())}`
       + `${pad(d.getMinutes())}${pad(d.getSeconds())}`;
}

module.exports = { sortObject, formatVnpDate };
```

### 4.3.6 Cấu hình biến môi trường Backend

Bảng 4.2: Biến môi trường Backend (`Travel_TVB_Server/.env`)

| Biến | Bắt buộc | Mô tả | Ví dụ |
|---|---|---|---|
| HOST | Không | Địa chỉ server | `0.0.0.0` |
| PORT | Không | Cổng server | `1337` |
| APP_KEYS | Có | 4 khóa mã hóa, phân cách bằng dấu phẩy | `key1,key2,key3,key4` |
| API_TOKEN_SALT | Có | Muối cho API token | (random base64) |
| ADMIN_JWT_SECRET | Có | Khóa bí mật JWT admin | (random base64) |
| TRANSFER_TOKEN_SALT | Có | Muối cho transfer token | (random base64) |
| ENCRYPTION_KEY | Có | Khóa mã hóa dữ liệu nhạy cảm | (random base64) |
| JWT_SECRET | Có | Khóa bí mật JWT người dùng | (random base64) |
| DATABASE_CLIENT | Không | Loại database | `sqlite` |
| DATABASE_FILENAME | Không | Đường dẫn file SQLite | `.tmp/data.db` |
| VNPAY_TMN_CODE | Không* | Mã terminal VNPay | `6UH2PIXS` |
| VNPAY_HASH_SECRET | Không* | Khóa bí mật HMAC VNPay | (từ VNPay sandbox) |
| VNPAY_URL | Không* | URL cổng thanh toán | `https://sandbox.vnpayment.vn/paymentv2/vpcpay.html` |
| VNPAY_RETURN_URL | Không* | URL callback sau thanh toán | `http://localhost:1337/api/bookings/vnpay-return` |
| FRONTEND_URL | Không | URL Frontend (redirect) | `http://localhost:5173` |
| GOOGLE_AI_API_KEY | Không** | API key Google Gemini | (từ Google AI Studio) |
| CHROMADB_URL | Không** | URL ChromaDB server | `http://localhost:8000` |

> *Bắt buộc nếu sử dụng tính năng thanh toán. **Bắt buộc nếu sử dụng tính năng chatbot.

## 4.4 Phát triển Frontend

### 4.4.1 AuthContext — Quản lý xác thực người dùng

`AuthContext` là context provider trung tâm quản lý toàn bộ trạng thái đăng nhập, sử dụng JWT token lưu trong `localStorage`.

```jsx
// src/context/AuthContext.jsx
import React, { createContext, useState, useContext, useEffect } from 'react';
import config from '../config/strapi';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(localStorage.getItem('jwt_token'));
  const [loading, setLoading] = useState(true);

  // Tự động xác minh token khi mount hoặc khi token thay đổi
  useEffect(() => {
    const verifyToken = async () => {
      if (!token) { setLoading(false); return; }
      try {
        const response = await fetch(
          `${config.STRAPI_URL}${config.API_ENDPOINTS.USERS_ME}`,
          { headers: { Authorization: `Bearer ${token}` } }
        );
        if (response.ok) {
          setUser(await response.json());
        } else {
          // Token hết hạn hoặc không hợp lệ
          localStorage.removeItem('jwt_token');
          setToken(null); setUser(null);
        }
      } catch (err) {
        localStorage.removeItem('jwt_token');
        setToken(null); setUser(null);
      } finally { setLoading(false); }
    };
    verifyToken();
  }, [token]);

  const login = async (identifier, password) => {
    const response = await fetch(
      `${config.STRAPI_URL}${config.API_ENDPOINTS.AUTH_LOCAL}`,
      { method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ identifier, password }) }
    );
    const data = await response.json();
    if (!response.ok)
      throw new Error(data.error?.message || 'Login failed');
    localStorage.setItem('jwt_token', data.jwt);
    setToken(data.jwt); setUser(data.user);
    return data;
  };

  const register = async ({ username, email, password,
                            full_name, phone }) => {
    const response = await fetch(
      `${config.STRAPI_URL}${config.API_ENDPOINTS.AUTH_REGISTER}`,
      { method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, email, password,
                               full_name, phone }) }
    );
    const data = await response.json();
    if (!response.ok)
      throw new Error(data.error?.message || 'Registration failed');
    localStorage.setItem('jwt_token', data.jwt);
    setToken(data.jwt); setUser(data.user);
    return data;
  };

  const logout = () => {
    localStorage.removeItem('jwt_token');
    setToken(null); setUser(null);
  };

  return (
    <AuthContext.Provider value={{
      user, token, loading,
      isAuthenticated: !!user,
      login, register, logout
    }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
```

Giải thích: AuthContext cung cấp 3 hàm chính (`login`, `register`, `logout`) và 4 state (`user`, `token`, `loading`, `isAuthenticated`). Khi component mount, `useEffect` tự động gọi `/api/users/me` để xác minh JWT token còn hợp lệ không. Nếu token hết hạn (401), tự động dọn dẹp localStorage.

### 4.4.2 LanguageContext — Quản lý đa ngôn ngữ

```jsx
// src/context/LanguageContext.jsx
import React, { createContext, useState, useContext, useEffect } from 'react';

const languages = [
  { code: 'vi', name: 'Tiếng Việt', flag: '🇻🇳' },
  { code: 'en', name: 'English',    flag: '🇺🇸' },
  { code: 'zh', name: '中文',       flag: '🇨🇳' },
];

const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  const getInitialLanguage = () => {
    const saved = sessionStorage.getItem('preferredLanguage');
    if (saved) {
      const found = languages.find(l => l.code === saved);
      if (found) return found;
    }
    return languages.find(l => l.code === 'en') || languages[1];
  };

  const [currentLanguage, setCurrentLanguage] =
    useState(getInitialLanguage);

  // Thêm/xóa class 'locale-zh' cho body khi chọn tiếng Trung
  // (dùng cho font chữ Trung Quốc)
  useEffect(() => {
    if (currentLanguage.code === 'zh') {
      document.body.classList.add('locale-zh');
    } else {
      document.body.classList.remove('locale-zh');
    }
    return () => document.body.classList.remove('locale-zh');
  }, [currentLanguage]);

  const handleLanguageSelect = (language) => {
    setCurrentLanguage(language);
    sessionStorage.setItem('preferredLanguage', language.code);
  };

  return (
    <LanguageContext.Provider value={{
      languages, currentLanguage, handleLanguageSelect
    }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => useContext(LanguageContext);
```

Giải thích: LanguageContext lưu lựa chọn ngôn ngữ trong `sessionStorage` để duy trì khi chuyển trang. Khi người dùng chọn tiếng Trung (`zh`), class `locale-zh` được thêm vào `<body>` để CSS áp dụng font chữ phù hợp.

### 4.4.3 ProtectedRoute — Bảo vệ route yêu cầu đăng nhập

```jsx
// src/components/ProtectedRoute/ProtectedRoute.jsx
import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';

const ProtectedRoute = ({ children }) => {
  const { isAuthenticated, loading } = useAuth();

  if (loading) return <div className="auth-loading">Loading...</div>;
  if (!isAuthenticated) return <Navigate to="/login" replace />;
  return children;
};

export default ProtectedRoute;
```

Giải thích: Component wrapper kiểm tra trạng thái đăng nhập. Nếu đang xác minh token → hiển thị loading. Nếu chưa đăng nhập → redirect về `/login`. Nếu đã đăng nhập → render children. Được sử dụng cho route `/profile` và `/booking/:id/ticket`.

### 4.4.4 App.jsx — Root Component và Routing

```jsx
// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation }
  from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import { LanguageProvider } from './context/LanguageContext';
import { AuthProvider } from './context/AuthContext';
// ... import components và pages ...

function AppContent() {
  const location = useLocation();
  return (
    <AuthProvider>
      <LanguageProvider>
        <ScrollToTop />
        <div className="App minimal-scrollbar">
          <Home_Navbar />
          <main className="main-content">
            <AnimatePresence mode="wait">
              <Routes location={location} key={location.pathname}>
                {/* Public routes */}
                <Route path="/" element={<PageLayout><Home /></PageLayout>} />
                <Route path="/about" element={<PageLayout><AboutUs /></PageLayout>} />
                <Route path="/tours" element={<PageLayout><Tours /></PageLayout>} />
                <Route path="/tours/:slug" element={<PageLayout><TourDetail /></PageLayout>} />
                <Route path="/login" element={<PageLayout><Login /></PageLayout>} />
                <Route path="/register" element={<PageLayout><Register /></PageLayout>} />
                <Route path="/news" element={<PageLayout><News /></PageLayout>} />
                {/* ... các route khác ... */}

                {/* Protected routes */}
                <Route path="/profile" element={
                  <PageLayout><ProtectedRoute><Profile /></ProtectedRoute></PageLayout>
                } />
                <Route path="/booking/:id/ticket" element={
                  <PageLayout><ProtectedRoute><BookingTicket /></ProtectedRoute></PageLayout>
                } />
              </Routes>
            </AnimatePresence>
          </main>
          <Newsletter />
          <Footer />
          <ScrollToTopButton />
          <ChatbotWidget />
        </div>
      </LanguageProvider>
    </AuthProvider>
  );
}

function App() {
  return <Router><AppContent /></Router>;
}

export default App;
```

Giải thích: App.jsx định nghĩa 17 route (15 public + 2 protected). `AnimatePresence` bọc `Routes` để tạo hiệu ứng chuyển trang mượt mà. Layout cố định gồm Navbar (trên), main content (giữa), Newsletter + Footer (dưới), ChatbotWidget (floating). `AppContent` tách riêng để `useLocation` hoạt động trong `Router`.

### 4.4.5 Cấu hình biến môi trường Frontend

Bảng 4.3: Biến môi trường Frontend (`Travel_TVB/.env`)

| Biến | Bắt buộc | Mô tả | Ví dụ |
|---|---|---|---|
| VITE_STRAPI_URL | Có | URL của Strapi Backend | `http://localhost:1337` |
| VITE_STRAPI_API_TOKEN | Có | API Token từ Strapi Admin Panel | (tạo trong Settings > API Tokens) |
| VITE_CHATBOT_ENABLED | Không | Bật/tắt chatbot widget | `true` |

## 4.5 Hướng dẫn cài đặt và sử dụng hệ thống

### 4.5.1 Yêu cầu hệ thống

- **Node.js:** Phiên bản 20.x đến 24.x
- **npm:** Phiên bản 6.x trở lên (đi kèm Node.js)
- **Python:** Phiên bản 3.8 trở lên (cho ChromaDB)
- **Git:** Bất kỳ phiên bản gần đây

### 4.5.2 Cài đặt Backend (Strapi)

```bash
# Bước 1: Di chuyển vào thư mục Backend
cd Travel_TVB_Server

# Bước 2: Cài đặt dependencies
npm install

# Bước 3: Tạo file .env từ template
cp .env.example .env
# Sau đó sửa .env, điền các giá trị bắt buộc (APP_KEYS, JWT_SECRET, ...)

# Bước 4: Tạo khóa bảo mật
node -e "console.log(require('crypto').randomBytes(16).toString('base64'))"
# Chạy 4 lần để tạo 4 APP_KEYS

# Bước 5: Khởi động server phát triển
npm run develop
# Server chạy tại http://localhost:1337
# Admin panel tại http://localhost:1337/admin
# Lần đầu sẽ yêu cầu tạo tài khoản admin
```

### 4.5.3 Cài đặt Frontend (React + Vite)

```bash
# Bước 1: Mở terminal mới, di chuyển vào thư mục Frontend
cd Travel_TVB

# Bước 2: Cài đặt dependencies
npm install

# Bước 3: Tạo/sửa file .env
# VITE_STRAPI_URL=http://localhost:1337
# VITE_STRAPI_API_TOKEN=<token từ Strapi Admin>
# VITE_CHATBOT_ENABLED=true

# Bước 4: Khởi động server phát triển
npm run dev
# Frontend chạy tại http://localhost:5173
```

### 4.5.4 Cài đặt ChromaDB (Vector Database cho Chatbot)

```bash
# Cách 1: Cài qua pip (khuyến nghị cho phát triển)
pip install chromadb
chroma run --host 0.0.0.0 --port 8000

# Cách 2: Chạy qua Docker
docker run -d --name chromadb \
  -p 8000:8000 \
  -v chroma_data:/chroma/chroma \
  chromadb/chroma:latest

# Kiểm tra ChromaDB đang chạy:
curl http://localhost:8000/api/v1/heartbeat
```

### 4.5.5 Lập chỉ mục dữ liệu Tour cho Chatbot

```bash
# Đảm bảo Strapi đang chạy và có dữ liệu tour
cd Travel_TVB_Server
node src/api/chatbot/scripts/indexTours.js

# Output mong đợi:
# [Indexer] Fetching tours for locale 'vi'...
# [Indexer] Found 9 tours for locale 'vi'
# [Indexer] Fetching tours for locale 'en'...
# [Indexer] Fetching tours for locale 'zh'...
# === Indexing Complete ===
# Indexed 9 tours, 33 chunks total
```

Bảng 4.4: Các lệnh chạy hệ thống

| Lệnh | Thư mục | Mô tả |
|---|---|---|
| `npm run develop` | Travel_TVB_Server | Khởi động Strapi (dev, auto-reload) |
| `npm run build` | Travel_TVB_Server | Build admin panel cho production |
| `npm run start` | Travel_TVB_Server | Khởi động Strapi (production) |
| `npm run dev` | Travel_TVB | Khởi động Vite dev server (port 5173) |
| `npm run build` | Travel_TVB | Build Frontend cho production |
| `npm run preview` | Travel_TVB | Preview bản build (port 3011) |
| `npm test` | Travel_TVB | Chạy test Frontend (Vitest) |
| `npm test` | Travel_TVB_Server | Chạy test Backend (Jest) |
| `npm run test:coverage` | Travel_TVB | Chạy test với báo cáo coverage |
| `npm run test:coverage` | Travel_TVB_Server | Chạy test với báo cáo coverage |

## 4.6 Kiểm thử

### 4.6.1 Kiểm thử Frontend (Vitest + React Testing Library)

Frontend sử dụng Vitest (tương thích Jest API) kết hợp React Testing Library. Các file test nằm cùng thư mục với component tương ứng.

**Danh sách test files:**

| File test | Đối tượng kiểm thử |
|---|---|
| `src/components/BookingForm/BookingForm.test.jsx` | Form đặt tour (render, tính giá, validation) |
| `src/components/TourCard/TourCard.test.jsx` | Card hiển thị tour |
| `src/components/PriceRangeSlider/PriceRangeSlider.test.jsx` | Thanh lọc giá |
| `src/components/ProtectedRoute/ProtectedRoute.test.jsx` | Bảo vệ route |
| `src/context/AuthContext.test.jsx` | Context xác thực |
| `src/context/LanguageContext.test.jsx` | Context ngôn ngữ |
| `src/hooks/useCountUp.test.js` | Hook đếm số |
| `src/config/strapi.test.js` | Cấu hình API endpoints |
| `src/page/Login/Login.test.jsx` | Trang đăng nhập |
| `src/page/Register/Register.test.jsx` | Trang đăng ký |
| `src/page/Tours/Tours.test.jsx` | Trang danh sách tour |

[Hình 4.3: Kết quả chạy test Frontend — Screenshot terminal hiển thị kết quả `npm test` trong thư mục Travel_TVB. Hiển thị danh sách các test suite (PASS màu xanh), số test cases passed/failed/total, thời gian chạy. Tất cả test PASS.]

### 4.6.2 Kiểm thử Backend (Jest)

Backend sử dụng Jest để kiểm thử các utility function. File test chính:

**`src/api/booking/utils/__tests__/vnpay-helpers.test.js`** — 21 test cases:

```javascript
// Trích đoạn test cases tiêu biểu
describe('sortObject', () => {
  test('returns empty object for empty input', () => {
    expect(sortObject({})).toEqual({});
  });

  test('sorts keys alphabetically', () => {
    const input = { c: '3', a: '1', b: '2' };
    const keys = Object.keys(sortObject(input));
    expect(keys).toEqual(['a', 'b', 'c']);
  });

  test('encodes special characters in values', () => {
    const result = sortObject({ key: 'hello world' });
    expect(result.key).toBe('hello+world');
  });

  test('handles Vietnamese text', () => {
    const result = sortObject({
      info: 'Thanh toán đặt tour'
    });
    expect(result.info).toBeDefined();
    expect(typeof result.info).toBe('string');
  });
});

describe('formatVnpDate', () => {
  test('formats date correctly (14 chars)', () => {
    const date = new Date(2026, 0, 15, 14, 30, 45);
    expect(formatVnpDate(date)).toBe('20260115143045');
  });

  test('pads single-digit values', () => {
    const date = new Date(2026, 0, 5, 8, 5, 3);
    expect(formatVnpDate(date)).toBe('20260105080503');
  });
});
```

[Hình 4.4: Kết quả chạy test Backend — Screenshot terminal hiển thị kết quả `npm test` trong thư mục Travel_TVB_Server. Hiển thị: Test Suites: 1 passed, Tests: 21 passed, Time: Xs. Tất cả 21 test cases PASS.]

### 4.6.3 CI/CD Pipeline (GitHub Actions)

Pipeline CI được cấu hình tại `.github/workflows/ci.yml`, tự động chạy khi push hoặc tạo Pull Request vào nhánh `main` hoặc `develop`.

```yaml
# .github/workflows/ci.yml
name: CI

on:
  push:
    branches: [main, develop]
  pull_request:
    branches: [main, develop]

jobs:
  # Job 1: Kiểm thử Frontend
  frontend-tests:
    name: Frontend Tests
    runs-on: ubuntu-latest
    defaults:
      run:
        working-directory: Travel_TVB
    steps:
      - uses: actions/checkout@v4
      - name: Setup Node.js
        uses: actions/setup-node@v4
        with:
          node-version: '20'
          cache: 'npm'
          cache-dependency-path: Travel_TVB/package-lock.json
      - name: Install dependencies
        run: npm ci
      - name: Run tests
        run: npm test
        env:
          VITE_STRAPI_URL: http://localhost:1337
          VITE_STRAPI_API_TOKEN: test-token-not-real
          VITE_CHATBOT_ENABLED: 'false'
      - name: Upload coverage
        if: always()
        uses: actions/upload-artifact@v4
        with:
          name: frontend-coverage
          path: Travel_TVB/coverage/
          retention-days: 7

  # Job 2: Kiểm thử Backend
  backend-tests:
    name: Backend Tests
    runs-on: ubuntu-latest
    defaults:
      run:
        working-directory: Travel_TVB_Server
    steps:
      - uses: actions/checkout@v4
      - name: Setup Node.js
        uses: actions/setup-node@v4
        with:
          node-version: '20'
          cache: 'npm'
          cache-dependency-path: Travel_TVB_Server/package-lock.json
      - name: Install dependencies
        run: npm ci
      - name: Run tests
        run: npm test
```

[Hình 4.5: Pipeline CI/CD trên GitHub Actions — Screenshot giao diện GitHub Actions hiển thị pipeline "CI" với 2 jobs chạy song song: "Frontend Tests" (✅ passed) và "Backend Tests" (✅ passed). Thời gian chạy khoảng 1-2 phút mỗi job. Hiển thị trên nhánh develop.]

---

# Chương 5 – KẾT LUẬN VÀ HƯỚNG PHÁT TRIỂN

## 5.1 Tổng kết kết quả đạt được

Sau quá trình phát triển, nhóm đã hoàn thành xây dựng hệ thống website đặt tour du lịch TravelTVB với đầy đủ các chức năng đã đề ra. Dưới đây là tổng kết các kết quả cụ thể theo từng mục tiêu:

### 5.1.1 Giao diện người dùng (Frontend)

- Xây dựng thành công giao diện SPA bằng **React 19 + Vite 7** với 17 route (15 public, 2 protected), đáp ứng tốt trên nhiều kích thước màn hình (responsive design).
- Tích hợp hiệu ứng chuyển động mượt mà bằng **Framer Motion**: hiệu ứng chuyển trang (AnimatePresence), hiệu ứng cuộn (AnimateOnScroll hỗ trợ 3 hướng), hero slider tự động xoay mỗi 7 giây.
- Xây dựng hệ thống quản lý trạng thái bằng **React Context API** với 2 provider: `AuthContext` (xác thực JWT) và `LanguageContext` (đa ngôn ngữ vi/en/zh).
- Triển khai thành phần `ProtectedRoute` bảo vệ các trang yêu cầu đăng nhập.
- Xây dựng 50+ component tái sử dụng với 54+ file CSS đi kèm.

### 5.1.2 Hệ thống Backend (Strapi CMS)

- Xây dựng Backend dựa trên **Strapi 5.36.0** với **25 content type** (tour, booking, bài viết, FAQ, navbar, footer, hero slider...) và **30 component** tái sử dụng.
- Phát triển **custom booking controller** (599 dòng) xử lý toàn bộ nghiệp vụ đặt tour: tạo đơn, thanh toán, callback VNPay, hủy đơn, hoàn tiền, thanh toán lại.
- Sử dụng **Knex transaction** để đảm bảo tính nguyên tử khi tạo booking, ngăn chặn race condition đặt trùng.
- Triển khai **cron task** (mỗi 5 phút) tự động hủy đơn Pending quá 30 phút, giải phóng chỗ cho khách khác.
- Mở rộng User schema với 2 trường tùy chỉnh: `full_name` và `phone`.

### 5.1.3 Hệ thống đặt tour và thanh toán

- Hoàn thành quy trình đặt tour end-to-end: Chọn tour → Chọn ngày → Kiểm tra chỗ trống → Chọn số lượng → Thanh toán VNPay → Nhận vé điện tử (E-ticket có mã QR).
- Tích hợp **VNPay Sandbox** với cơ chế bảo mật **HMAC SHA-512** cho cả tạo URL thanh toán và xác minh callback.
- Triển khai chính sách hoàn tiền theo thời gian: ≤24h → 100%, ≤72h → 85%, >72h → 0%.
- Đảm bảo **idempotency** trên VNPay callback — không cập nhật trùng lặp khi callback được gọi nhiều lần.
- Hỗ trợ **retry thanh toán** cho đơn Failed (kiểm tra lại chỗ trống trước khi cho phép).
- Khóa toàn bộ CRUD endpoint mặc định (trả 403), người dùng chỉ truy cập qua custom route `/my-bookings`.

### 5.1.4 Chatbot AI (RAG Pipeline)

- Xây dựng thành công chatbot sử dụng kiến trúc **RAG** (Retrieval Augmented Generation) với:
  - **Google Gemini Embedding 001** — tạo vector embedding 3072 chiều.
  - **ChromaDB** — lưu trữ 33 chunks từ 9 tour × 3 ngôn ngữ (tổng quan, mô tả, điểm nổi bật, lịch trình).
  - **Google Gemini 2.5 Flash** — sinh câu trả lời tự nhiên dựa trên ngữ cảnh.
- Chatbot hỗ trợ 3 ngôn ngữ (vi, en, zh) với chiến lược fallback: tìm đúng ngôn ngữ → tìm tiếng Anh → tìm tất cả.
- Chatbot trả về danh sách tour gợi ý kèm link đến trang chi tiết (parse `[slug]` thành clickable link).
- Triển khai **rate limiting** (15 request/phút/IP) trong bộ nhớ để chống lạm dụng.
- Duy trì ngữ cảnh hội thoại (tối đa 10 tin nhắn — 5 cặp hỏi/đáp).

### 5.1.5 Đa ngôn ngữ (i18n)

- Hỗ trợ **3 ngôn ngữ** xuyên suốt hệ thống:
  - **Backend:** Strapi i18n plugin — mỗi content type có bản dịch vi/en/zh, API trả về nội dung theo `?locale=XX`.
  - **Frontend:** Pattern `displayData` trong 15+ component — object chứa bản dịch cho mỗi chuỗi hiển thị.
- Chuyển đổi ngôn ngữ mượt mà không cần tải lại trang, lưu trữ trong `sessionStorage`.
- Phát triển script migration (`migrate-strapi-locales.mjs`, 961 dòng) để chuyển đổi 20+ content type từ đơn ngữ sang tam ngữ.

### 5.1.6 Kiểm thử và CI/CD

- **Frontend:** Vitest + React Testing Library với 11+ file test, bao phủ các component quan trọng (BookingForm, TourCard, ProtectedRoute, AuthContext, LanguageContext, Login, Register, Tours).
- **Backend:** Jest với 21 test case kiểm thử VNPay helper functions (sortObject, formatVnpDate).
- **CI/CD:** GitHub Actions pipeline tự động chạy 2 job song song (Frontend tests + Backend tests) khi push hoặc tạo PR vào nhánh `main`/`develop`. Upload báo cáo coverage tự động.

## 5.2 Ưu điểm của hệ thống

1. **Kiến trúc Headless CMS hiện đại:** Tách biệt hoàn toàn Frontend và Backend, cho phép phát triển song song, dễ mở rộng và thay đổi công nghệ Frontend mà không ảnh hưởng Backend.

2. **Tích hợp AI thông minh:** Chatbot RAG sử dụng dữ liệu thực tế từ hệ thống, không bịa đặt thông tin. Kiến trúc RAG cho phép cập nhật dữ liệu mà không cần huấn luyện lại mô hình.

3. **Bảo mật toàn diện:**
   - HMAC SHA-512 cho thanh toán VNPay.
   - JWT authentication với thời hạn 7 ngày.
   - Booking CRUD lockdown (403 mặc định).
   - CORS whitelist chỉ cho phép domain đã biết.
   - Mật khẩu hash bằng bcrypt.
   - Rate limiting cho chatbot (15 req/min/IP).
   - Không lưu thông tin thẻ thanh toán.

4. **Đa ngôn ngữ hoàn chỉnh:** Hỗ trợ 3 ngôn ngữ cho cả nội dung CMS lẫn giao diện người dùng, phục vụ cả khách nội địa và quốc tế (đặc biệt thị trường Trung Quốc).

5. **Transaction-safe booking:** Sử dụng Knex transaction đảm bảo không đặt trùng chỗ trong điều kiện nhiều người dùng đồng thời.

6. **Trải nghiệm người dùng mượt mà:** Hiệu ứng chuyển trang, scroll animation, hero slider tự động, typing indicator trên chatbot, real-time price calculation.

7. **DevOps tốt:** CI/CD pipeline tự động, test tự động, cron task dọn dẹp booking quá hạn.

## 5.3 Nhược điểm và hạn chế

1. **Thanh toán chỉ hỗ trợ VNPay Sandbox:** Chưa kết nối với môi trường production của VNPay hoặc các cổng thanh toán quốc tế (Stripe, PayPal).

2. **Rate limiter in-memory:** Rate limiter chatbot lưu trong bộ nhớ, không tồn tại qua lần khởi động lại server. Cần chuyển sang Redis cho production.

3. **Lọc tour phía client:** Trang Tours tải toàn bộ dữ liệu rồi lọc/sắp xếp trên trình duyệt. Khi số lượng tour lớn (hàng nghìn), cần chuyển sang server-side filtering.

4. **Chưa có đánh giá/review từ khách hàng:** Rating và Review_Count hiện là giá trị tĩnh do admin nhập, chưa có tính năng cho người dùng viết đánh giá.

5. **Chưa có ứng dụng di động native:** Hệ thống chỉ là responsive web, chưa có ứng dụng iOS/Android native hoặc PWA.

6. **SQLite giới hạn cho production:** SQLite phù hợp cho phát triển nhưng không hỗ trợ concurrent writes tốt. Cần chuyển sang MySQL/PostgreSQL cho triển khai thực tế.

7. **Chatbot phụ thuộc dịch vụ bên thứ ba:** Hoạt động của chatbot phụ thuộc hoàn toàn vào Google Gemini API (tính khả dụng, chi phí, rate limit).

8. **Chưa có tính năng quản lý refund cho admin:** Quản trị viên chưa có giao diện riêng để xem và xử lý các yêu cầu hoàn tiền.

## 5.4 Đề xuất hướng phát triển tương lai

### 5.4.1 Ngắn hạn (1-3 tháng)

1. **Kết nối VNPay production:** Chuyển từ Sandbox sang môi trường thực, bổ sung thêm các cổng thanh toán (MoMo, ZaloPay) để đa dạng hóa phương thức thanh toán.

2. **Server-side filtering và pagination:** Chuyển logic lọc/sắp xếp tour từ client sang Strapi API (sử dụng query parameters `filters`, `sort`, `pagination`) để cải thiện hiệu suất khi dữ liệu lớn.

3. **Tính năng đánh giá tour:** Cho phép khách hàng đã hoàn thành tour viết review và cho điểm, tự động cập nhật Rating và Review_Count.

4. **Redis cache và rate limiter:** Sử dụng Redis cho caching API responses, session management, và rate limiting chatbot thay cho in-memory.

5. **Dashboard admin cho refund:** Xây dựng giao diện quản trị hoàn tiền — xem đơn hủy, xử lý refund thủ công, báo cáo doanh thu.

### 5.4.2 Trung hạn (3-6 tháng)

6. **Progressive Web App (PWA):** Chuyển đổi website thành PWA để người dùng có thể cài đặt trên điện thoại, hỗ trợ offline browsing cho nội dung đã tải.

7. **Notification system:** Thông báo email tự động khi đặt tour thành công, nhắc nhở trước ngày khởi hành, thông báo khuyến mãi.

8. **Chatbot nâng cao:**
   - Hỗ trợ đặt tour trực tiếp qua chatbot (conversational booking).
   - Tích hợp voice input/output.
   - Fine-tune prompt cho từng mùa du lịch.

9. **SEO optimization:** Server-Side Rendering (SSR) hoặc Static Site Generation (SSG) bằng Next.js để cải thiện SEO cho trang tour và bài viết.

### 5.4.3 Dài hạn (6-12 tháng)

10. **Ứng dụng di động native:** Xây dựng ứng dụng iOS/Android bằng React Native, tái sử dụng logic từ React web.

11. **Hệ thống khuyến mãi:** Mã giảm giá (coupon), flash sale, chương trình loyalty cho khách hàng thân thiết.

12. **Analytics dashboard:** Tích hợp Google Analytics và xây dựng dashboard nội bộ theo dõi: lượng truy cập, tỷ lệ chuyển đổi, doanh thu theo tour/khu vực, hiệu quả chatbot.

13. **Multi-vendor marketplace:** Cho phép nhiều đại lý du lịch đăng ký và quản lý tour riêng trên nền tảng TravelTVB.

14. **Chuyển database sang PostgreSQL:** Triển khai PostgreSQL với connection pooling, replication cho tính sẵn sàng cao (high availability).

---

# TÀI LIỆU THAM KHẢO

1. Meta Platforms, Inc. (2024). *React Documentation — React 19*. Truy cập tại: https://react.dev/

2. Vite Team. (2024). *Vite — Next Generation Frontend Tooling*. Truy cập tại: https://vitejs.dev/

3. Strapi Solutions SAS. (2024). *Strapi Documentation — Strapi 5*. Truy cập tại: https://docs.strapi.io/

4. Google. (2024). *Gemini API Documentation*. Truy cập tại: https://ai.google.dev/docs

5. Chroma, Inc. (2024). *ChromaDB Documentation*. Truy cập tại: https://docs.trychroma.com/

6. VNPay. (2024). *Tài liệu tích hợp cổng thanh toán VNPay*. Truy cập tại: https://sandbox.vnpayment.vn/apis/

7. Lewis, P., Perez, E., Piktus, A., et al. (2020). *Retrieval-Augmented Generation for Knowledge-Intensive NLP Tasks*. Advances in Neural Information Processing Systems, 33, 9459–9474.

8. React Router Team. (2024). *React Router v7 Documentation*. Truy cập tại: https://reactrouter.com/

9. Framer B.V. (2024). *Framer Motion Documentation*. Truy cập tại: https://www.framer.com/motion/

10. Vitest Team. (2024). *Vitest — Next Generation Testing Framework*. Truy cập tại: https://vitest.dev/

11. Jest Team, Meta Platforms. (2024). *Jest Documentation*. Truy cập tại: https://jestjs.io/

12. GitHub, Inc. (2024). *GitHub Actions Documentation*. Truy cập tại: https://docs.github.com/en/actions

13. Auth0 by Okta. (2024). *JSON Web Token (JWT) — RFC 7519*. Truy cập tại: https://jwt.io/introduction

14. Kent C. Dodds et al. (2024). *Testing Library Documentation*. Truy cập tại: https://testing-library.com/

15. Knex.js Team. (2024). *Knex.js — SQL Query Builder for Node.js*. Truy cập tại: https://knexjs.org/

16. SQLite Consortium. (2024). *SQLite Documentation*. Truy cập tại: https://www.sqlite.org/docs.html

17. Tổng cục Du lịch Việt Nam. (2024). *Báo cáo tình hình du lịch Việt Nam năm 2024*. Truy cập tại: https://vietnamtourism.gov.vn/

18. Google & Kantar. (2023). *Digital Travel Consumer Trends in Vietnam*. Google Think Insights.

---

> **Ghi chú cho Claude tạo báo cáo:**
> - Tổng cộng Context.md chứa đầy đủ nội dung cho 5 chương + phần phụ lục.
> - Các vị trí đánh dấu `[Hình X.Y: ...]` cần được thay thế bằng hình ảnh thực tế hoặc tạo sơ đồ tương ứng.
> - Tổng số hình: 16 hình (Hình 1.1 → Hình 4.5)
> - Tổng số bảng: 16 bảng (Bảng 2.1 → Bảng 4.4)
> - Code blocks nên được format trong báo cáo với font Consolas hoặc Courier New, cỡ 10-11pt, có border và background xám nhạt.
> - Báo cáo nên từ 30-40 trang theo yêu cầu mẫu.

---

# PHỤ LỤC MÃ NGUỒN — CÁC FILE CÒN THIẾU

> **Ghi chú:** Phần này bổ sung toàn bộ mã nguồn quan trọng chưa được đưa vào các chương trên. Claude tạo báo cáo có thể chèn code này vào Chương 4 (Phát triển) hoặc Phụ lục tùy theo độ dài báo cáo. Nếu báo cáo đã đủ 30-40 trang, có thể trích dẫn ngắn gọn và đặt code đầy đủ vào phần phụ lục.

---

## A.1 VNPay Callback Handler — Xử lý kết quả thanh toán (Backend)

```javascript
// src/api/booking/controllers/booking.js (trích đoạn — vnpayReturn)
async vnpayReturn(ctx) {
  const vnpParams = { ...ctx.query };
  const secureHash = vnpParams.vnp_SecureHash;

  delete vnpParams.vnp_SecureHash;
  delete vnpParams.vnp_SecureHashType;

  const secretKey = process.env.VNPAY_HASH_SECRET;
  const frontendUrl = process.env.FRONTEND_URL || 'http://localhost:5173';

  // Tái tạo chữ ký từ params nhận được
  const sorted = sortObject(vnpParams);
  const signData = qs.stringify(sorted, { encode: false });
  const hmac = crypto.createHmac('sha512', secretKey);
  const checksum = hmac.update(Buffer.from(signData, 'utf-8')).digest('hex');

  const knex = strapi.db.connection;
  const txnRef = vnpParams.vnp_TxnRef;
  const bookingId = txnRef ? txnRef.split('_')[0] : null;

  // Xác minh chữ ký HMAC SHA-512
  if (secureHash !== checksum) {
    if (bookingId) {
      // Chỉ đánh Failed nếu đang Pending (không ghi đè Paid/Cancelled)
      await knex('bookings')
        .where('id', bookingId)
        .where('status', 'Pending')
        .update({ status: 'Failed', updated_at: new Date().toISOString() });
    }
    return ctx.redirect(
      `${frontendUrl}/payment-return?status=failed&bookingId=${bookingId || ''}&reason=invalid_checksum`
    );
  }

  const responseCode = vnpParams.vnp_ResponseCode;
  const transactionNo = vnpParams.vnp_TransactionNo || '';

  if (responseCode === '00') {
    if (bookingId) {
      // Fix 4: Idempotency — chỉ cập nhật nếu chưa Paid và chưa Cancelled
      // Hỗ trợ Failed → Paid (cron có thể đã expire trong lúc user đang thanh toán)
      const booking = await knex('bookings').where('id', bookingId).first();
      if (booking && booking.status !== 'Paid' && booking.status !== 'Cancelled') {
        await knex('bookings').where('id', bookingId).update({
          status: 'Paid',
          vnpay_transaction_no: transactionNo,
          updated_at: new Date().toISOString(),
        });
      }
    }
    return ctx.redirect(
      `${frontendUrl}/payment-return?status=success&bookingId=${bookingId}`
    );
  } else {
    if (bookingId) {
      await knex('bookings')
        .where('id', bookingId).whereIn('status', ['Pending'])
        .update({
          status: 'Failed', vnpay_transaction_no: transactionNo,
          updated_at: new Date().toISOString(),
        });
    }
    return ctx.redirect(
      `${frontendUrl}/payment-return?status=failed&bookingId=${bookingId}&reason=vnpay_${responseCode}`
    );
  }
},
```

## A.2 Hủy đơn với chính sách hoàn tiền theo thời gian (Backend)

```javascript
// src/api/booking/controllers/booking.js (trích đoạn — cancelBooking)
async cancelBooking(ctx) {
  const user = ctx.state.user;
  if (!user) return ctx.unauthorized('You must be logged in.');

  const bookingId = ctx.params.id;
  const knex = strapi.db.connection;

  // Xác minh quyền sở hữu đơn
  const booking = await knex('bookings')
    .join('bookings_user_lnk', 'bookings.id', 'bookings_user_lnk.booking_id')
    .where('bookings.id', bookingId)
    .where('bookings_user_lnk.user_id', user.id)
    .select('bookings.*').first();

  if (!booking) return ctx.notFound('Booking not found.');
  if (!['Pending', 'Paid'].includes(booking.status)) {
    return ctx.badRequest('Only Pending or Paid bookings can be cancelled.');
  }

  // Chặn hủy đơn đã qua ngày khởi hành
  const today = new Date().toISOString().split('T')[0];
  if (booking.travel_date < today) {
    return ctx.badRequest('Cannot cancel a booking with a past travel date.');
  }

  // Chính sách hoàn tiền theo thời gian
  const now = new Date();
  const bookingDate = new Date(booking.booking_date);
  const hoursSinceBooking = (now - bookingDate) / (1000 * 60 * 60);

  let refundPercentage = 0;
  if (hoursSinceBooking <= 24)       refundPercentage = 100;  // ≤24h → hoàn 100%
  else if (hoursSinceBooking <= 72)  refundPercentage = 85;   // ≤72h → hoàn 85%
  else                               refundPercentage = 0;    // >72h → không hoàn

  const totalPrice = parseInt(booking.total_price) || 0;
  const refundAmount = Math.floor(totalPrice * refundPercentage / 100);

  // Gọi VNPay Refund API nếu đơn đã thanh toán và có số tiền hoàn
  let vnpayRefundResult = null;
  if (booking.status === 'Paid' && refundAmount > 0 && booking.vnpay_transaction_no) {
    try {
      vnpayRefundResult = await this.processVnpayRefund(booking, refundAmount, user, ctx);
    } catch (err) {
      vnpayRefundResult = { success: false, error: err.message };
    }
  }

  // Xác định trạng thái hoàn tiền
  let refundStatus = 'none';
  if (refundAmount === 0)                  refundStatus = 'no_refund';
  else if (booking.status === 'Pending')   refundStatus = 'not_charged';
  else if (vnpayRefundResult?.success)     refundStatus = 'refunded';
  else if (vnpayRefundResult)              refundStatus = 'refund_failed';
  else                                     refundStatus = 'pending_manual';

  // Cập nhật database
  await knex('bookings').where('id', bookingId).update({
    status: 'Cancelled',
    refund_amount: refundAmount.toString(),
    refund_status: refundStatus,
    cancelled_at: now.toISOString(),
    updated_at: now.toISOString(),
  });

  ctx.body = {
    data: {
      id: parseInt(bookingId), status: 'Cancelled',
      refund_amount: refundAmount.toString(),
      refund_percentage: refundPercentage,
      refund_status: refundStatus,
      cancelled_at: now.toISOString(),
    },
  };
},
```

## A.3 VNPay Refund API (Backend)

```javascript
// src/api/booking/controllers/booking.js (trích đoạn — processVnpayRefund)
async processVnpayRefund(booking, refundAmount, user, ctx) {
  const tmnCode = process.env.VNPAY_TMN_CODE;
  const secretKey = process.env.VNPAY_HASH_SECRET;
  const createDate = formatVnpDate(new Date());

  const params = {
    vnp_RequestId: `REF_${Date.now()}_${Math.random().toString(36).substring(2, 8)}`,
    vnp_Version: '2.1.0',
    vnp_Command: 'refund',
    vnp_TmnCode: tmnCode,
    vnp_TransactionType: '02',  // 02 = hoàn toàn bộ, 03 = hoàn một phần
    vnp_TxnRef: booking.payment_ref,
    vnp_Amount: refundAmount * 100,  // VNPay yêu cầu × 100
    vnp_TransactionNo: booking.vnpay_transaction_no,
    vnp_TransactionDate: formatVnpDate(new Date(booking.updated_at)),
    vnp_CreateBy: user.email || user.username || 'system',
    vnp_CreateDate: createDate,
    vnp_IpAddr: ctx.request.ip || '127.0.0.1',
    vnp_OrderInfo: `Refund booking ${booking.id}`,
  };

  // VNPay refund signature: pipe-separated fields
  const signData = [
    params.vnp_RequestId, params.vnp_Version, params.vnp_Command,
    params.vnp_TmnCode, params.vnp_TransactionType, params.vnp_TxnRef,
    params.vnp_Amount, params.vnp_TransactionNo, params.vnp_TransactionDate,
    params.vnp_CreateBy, params.vnp_CreateDate, params.vnp_IpAddr,
    params.vnp_OrderInfo,
  ].join('|');

  const hmac = crypto.createHmac('sha512', secretKey);
  params.vnp_SecureHash = hmac.update(Buffer.from(signData, 'utf-8')).digest('hex');

  // Gửi request với timeout 25 giây
  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), 25000);

  let response;
  try {
    response = await fetch('https://sandbox.vnpayment.vn/merchant_webapi/api/transaction', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(params),
      signal: controller.signal,
    });
  } catch (err) {
    clearTimeout(timer);
    if (err.name === 'AbortError') {
      return { success: false, responseCode: 'TIMEOUT', message: 'VNPay did not respond within 25s' };
    }
    throw err;
  }
  clearTimeout(timer);

  const rawText = await response.text();
  let result;
  try { result = JSON.parse(rawText); }
  catch { return { success: false, responseCode: 'PARSE_ERROR', message: rawText.slice(0, 200) }; }

  return {
    success: result.vnp_ResponseCode === '00',
    responseCode: result.vnp_ResponseCode,
    message: result.vnp_Message,
  };
},
```

## A.4 Lấy lịch sử đặt tour của người dùng (Backend)

```javascript
// src/api/booking/controllers/booking.js (trích đoạn — myBookings)
async myBookings(ctx) {
  const user = ctx.state.user;
  if (!user) return ctx.unauthorized('You must be logged in.');

  const knex = strapi.db.connection;

  // Lấy tất cả booking của user, sắp xếp theo ngày đặt mới nhất
  const bookings = await knex('bookings')
    .join('bookings_user_lnk', 'bookings.id', 'bookings_user_lnk.booking_id')
    .where('bookings_user_lnk.user_id', user.id)
    .orderBy('bookings.booking_date', 'desc')
    .select('bookings.*');

  // Enrich với thông tin tour (tên tour, slug)
  const bookingIds = bookings.map(b => b.id);
  const tourLinks = bookingIds.length > 0
    ? await knex('bookings_tour_lnk').whereIn('booking_id', bookingIds)
    : [];
  const tourIds = [...new Set(tourLinks.map(l => l.tour_id).filter(Boolean))];
  const tours = tourIds.length > 0
    ? await knex('tours').whereIn('id', tourIds).select('id', 'tour_name', 'slug')
    : [];

  const tourMap = {};
  tours.forEach(t => { tourMap[t.id] = t; });
  const linkMap = {};
  tourLinks.forEach(l => { linkMap[l.booking_id] = l.tour_id; });

  const enrichedBookings = bookings.map(b => {
    const tour = linkMap[b.id] ? tourMap[linkMap[b.id]] : null;
    return {
      id: b.id, adult_count: b.adult_count, child_count: b.child_count,
      travel_date: b.travel_date, total_price: b.total_price,
      status: b.status, payment_ref: b.payment_ref,
      booking_date: b.booking_date, contact_name: b.contact_name,
      refund_amount: b.refund_amount, refund_status: b.refund_status,
      cancelled_at: b.cancelled_at,
      tour_name: tour?.tour_name || 'Unknown Tour',
      tour_slug: tour?.slug || '',
    };
  });

  ctx.body = { data: enrichedBookings };
},
```

## A.5 VectorStore Service — ChromaDB + Gemini Embeddings (Backend)

```javascript
// src/api/chatbot/services/vectorStore.js (toàn bộ — 216 dòng)
'use strict';

const { GoogleGenerativeAI } = require('@google/generative-ai');
const { ChromaClient } = require('chromadb');

const COLLECTION_NAME = 'tour_embeddings';
const EMBEDDING_MODEL = 'gemini-embedding-001';

let chromaClient = null;
let collection = null;
let genAI = null;

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

// Khởi tạo kết nối ChromaDB
async function initialize() {
  if (collection) return collection;

  const chromaUrl = process.env.CHROMADB_URL || 'http://localhost:8000';
  const apiKey = process.env.GOOGLE_AI_API_KEY || process.env.GEMINI_API_KEY;
  if (!apiKey) throw new Error('GOOGLE_AI_API_KEY is not set.');

  genAI = new GoogleGenerativeAI(apiKey);

  const parsedUrl = new URL(chromaUrl);
  chromaClient = new ChromaClient({
    ssl: parsedUrl.protocol === 'https:',
    host: parsedUrl.hostname,
    port: parseInt(parsedUrl.port) || (parsedUrl.protocol === 'https:' ? 443 : 8000),
  });

  collection = await chromaClient.getOrCreateCollection({
    name: COLLECTION_NAME,
    metadata: { description: 'Tour data embeddings for RAG chatbot' },
  });
  console.log(`[VectorStore] Connected to ChromaDB at ${chromaUrl}`);
  return collection;
}

// Tạo embedding vector (3072 chiều) với retry khi bị rate limit (429)
async function embedText(text) {
  if (!genAI) await initialize();
  const model = genAI.getGenerativeModel({ model: EMBEDDING_MODEL });
  const MAX_RETRIES = 5;

  for (let attempt = 1; attempt <= MAX_RETRIES; attempt++) {
    try {
      const result = await model.embedContent(text);
      return result.embedding.values;
    } catch (err) {
      const is429 = err.status === 429 || (err.message && err.message.includes('429'));
      if (is429 && attempt < MAX_RETRIES) {
        const waitMs = attempt * 5000; // Backoff: 5s, 10s, 15s, 20s
        console.log(`[VectorStore] Rate limited. Retry ${attempt + 1}/${MAX_RETRIES} in ${waitMs / 1000}s`);
        await sleep(waitMs);
      } else { throw err; }
    }
  }
}

// Batch embedding tuần tự với delay 1 giây giữa các request
async function embedBatch(texts) {
  const embeddings = [];
  for (let i = 0; i < texts.length; i++) {
    embeddings.push(await embedText(texts[i]));
    if (i < texts.length - 1) await sleep(1000); // Tôn trọng rate limit free-tier (15 RPM)
  }
  return embeddings;
}

// Thêm documents vào ChromaDB theo batch (5 docs/batch)
async function addDocuments(documents) {
  await initialize();
  if (!documents || documents.length === 0) return 0;

  const BATCH_SIZE = 5;
  let totalAdded = 0;

  for (let i = 0; i < documents.length; i += BATCH_SIZE) {
    const batch = documents.slice(i, i + BATCH_SIZE);
    const texts = batch.map(doc => doc.content);
    const embeddings = await embedBatch(texts);

    await collection.upsert({
      ids: batch.map(doc => doc.id),
      documents: texts,
      embeddings: embeddings,
      metadatas: batch.map(doc => doc.metadata),
    });
    totalAdded += batch.length;
  }
  return totalAdded;
}

// Tìm kiếm ngữ nghĩa với chiến lược fallback ngôn ngữ
async function search(query, nResults = 5, language = 'vi') {
  await initialize();
  const queryEmbedding = await embedText(query);

  // Bước 1: Tìm trong ngôn ngữ yêu cầu
  let results = await collection.query({
    queryEmbeddings: [queryEmbedding], nResults,
    where: { language: language },
  });

  // Bước 2: Fallback sang tiếng Anh
  if (!results?.documents?.[0]?.length && language !== 'en') {
    results = await collection.query({
      queryEmbeddings: [queryEmbedding], nResults,
      where: { language: 'en' },
    });
  }

  // Bước 3: Fallback tìm tất cả ngôn ngữ
  if (!results?.documents?.[0]?.length) {
    results = await collection.query({
      queryEmbeddings: [queryEmbedding], nResults,
    });
  }

  if (!results?.documents?.[0]) return [];
  return results.documents[0].map((doc, i) => ({
    content: doc,
    metadata: results.metadatas[0][i],
    distance: results.distances[0][i],
  }));
}

// Xóa và tạo lại collection (dùng khi re-index)
async function clearCollection() {
  await initialize();
  await chromaClient.deleteCollection({ name: COLLECTION_NAME });
  collection = await chromaClient.getOrCreateCollection({
    name: COLLECTION_NAME,
    metadata: { description: 'Tour data embeddings for RAG chatbot' },
  });
}

module.exports = { initialize, embedText, embedBatch, addDocuments, search, clearCollection };
```

## A.6 Chatbot Controller — Rate Limiting và Input Validation (Backend)

```javascript
// src/api/chatbot/controllers/chatbot.js (toàn bộ — 150 dòng)
'use strict';

const chatbotService = require('../services/chatbot');

// Rate limiter in-memory: IP → { timestamps: number[] }
const rateLimitMap = new Map();
const RATE_LIMIT_WINDOW_MS = 60 * 1000;   // 1 phút
const RATE_LIMIT_MAX_REQUESTS = 15;        // 15 request/phút/IP

function isRateLimited(ip) {
  const now = Date.now();
  const entry = rateLimitMap.get(ip);
  if (!entry) {
    rateLimitMap.set(ip, { timestamps: [now] });
    return false;
  }
  entry.timestamps = entry.timestamps.filter(ts => now - ts < RATE_LIMIT_WINDOW_MS);
  if (entry.timestamps.length >= RATE_LIMIT_MAX_REQUESTS) return true;
  entry.timestamps.push(now);
  return false;
}

// Dọn dẹp bộ nhớ mỗi 5 phút để tránh memory leak
setInterval(() => {
  const now = Date.now();
  for (const [ip, entry] of rateLimitMap.entries()) {
    entry.timestamps = entry.timestamps.filter(ts => now - ts < RATE_LIMIT_WINDOW_MS);
    if (entry.timestamps.length === 0) rateLimitMap.delete(ip);
  }
}, 5 * 60 * 1000);

module.exports = {
  async query(ctx) {
    // Rate limiting
    const clientIp = ctx.request.ip || ctx.request.headers['x-forwarded-for'] || 'unknown';
    if (isRateLimited(clientIp)) {
      ctx.status = 429;
      ctx.body = { error: { status: 429, message: 'Too many requests. Please wait.' } };
      return;
    }

    // Validate input
    const { message, language, history } = ctx.request.body || {};
    if (!message || typeof message !== 'string' || !message.trim()) {
      ctx.status = 400;
      ctx.body = { error: { status: 400, message: 'Message is required.' } };
      return;
    }

    // Sanitize
    const cleanMessage = message.trim().substring(0, 500);
    const cleanLanguage = ['vi', 'en', 'zh'].includes(language) ? language : 'vi';
    const cleanHistory = Array.isArray(history)
      ? history.slice(-10)
          .filter(m => m && typeof m.content === 'string' && ['user', 'bot'].includes(m.role))
          .map(m => ({ role: m.role, content: m.content.substring(0, 500) }))
      : [];

    try {
      const result = await chatbotService.chat(cleanMessage, cleanLanguage, cleanHistory);
      ctx.body = { data: { reply: result.reply, sources: result.sources } };
    } catch (err) {
      strapi.log.error('[Chatbot] Query failed:', err);
      ctx.status = 500;
      ctx.body = { error: { status: 500, message: 'An unexpected error occurred.' } };
    }
  },
};
```

## A.7 Custom Booking Routes (Backend)

```javascript
// src/api/booking/routes/01-custom-booking.js (toàn bộ — 50 dòng)
module.exports = {
  routes: [
    {
      method: 'GET',
      path: '/bookings/availability',
      handler: 'booking.getAvailability',
      config: { auth: false },           // Public — ai cũng kiểm tra được chỗ trống
    },
    {
      method: 'POST',
      path: '/bookings/create-payment-url',
      handler: 'booking.createPaymentUrl',
      config: { policies: [], middlewares: [] },  // Authenticated (mặc định)
    },
    {
      method: 'GET',
      path: '/bookings/vnpay-return',
      handler: 'booking.vnpayReturn',
      config: { policies: [], middlewares: [], auth: false },  // Public callback từ VNPay
    },
    {
      method: 'GET',
      path: '/bookings/my-bookings',
      handler: 'booking.myBookings',
      config: { policies: [], middlewares: [] },  // Authenticated
    },
    {
      method: 'POST',
      path: '/bookings/:id/cancel',
      handler: 'booking.cancelBooking',
      config: { policies: [], middlewares: [] },  // Authenticated
    },
  ],
};
```

## A.8 API Endpoints Configuration (Frontend)

```javascript
// src/config/strapi.js (toàn bộ — 55 dòng)
const config = {
  STRAPI_URL: import.meta.env.VITE_STRAPI_URL || 'https://dashboard.lamweb.fun',

  API_ENDPOINTS: {
    // Trang chủ
    HERO_SLIDER: '/api/home-hero-slider',
    STATISTIC: '/api/home-statistic',
    COMMITMENT: '/api/home-commitment',
    DIAGRAM: '/api/home-diagram',
    PORTFOLIO: '/api/home-portfolio',
    FAQ: '/api/faq',
    // Trang Giới thiệu
    ABOUT_HERO: '/api/about-hero',
    ABOUT_JOURNEY: '/api/about-journey',
    ABOUT_TEAM: '/api/about-team',
    COREVALUES: '/api/about-core-value',
    // Trang Dịch vụ
    SERVICE_HERO: '/api/service-hero',
    SERVICE_INSURANCETYPE: '/api/services-insurance-type',
    INDIVIDUAL_SERVICES: '/api/individual-services',
    // Trang Liên hệ
    CONTACT_MAP: '/api/contact-map',
    CONTACT_FORM: '/api/contact-form',
    FORM_SUBMISSION: '/api/form-submissions',
    // Trang Tin tức & Cộng đồng
    NEWS_HERO: '/api/news-hero',
    COMMUNITY_HERO: '/api/community-hero',
    SINGLE_POST: '/api/single-posts',
    SINGLE_COMMUNITY_POST: '/api/single-community-posts',
    LAYOUT_POPULAR_POSTS: '/api/layout-popular-post',
    // Layout chung
    LAYOUT_NAVBAR: '/api/layout-navbar',
    LAYOUT_FOOTER: '/api/layout-footer',
    LAYOUT_CTABANNER: '/api/layout-cta-banner',
    LAYOUT_NEWSLETTER: '/api/layout-newsletter',
    NEWSLETTER_SUBMISSION: '/api/newsletter-email-submissons/:id',
    // Xác thực
    AUTH_LOCAL: '/api/auth/local',
    AUTH_REGISTER: '/api/auth/local/register',
    USERS_ME: '/api/users/me',
    // Tour
    TOURS: '/api/tours',
    TOUR_CATEGORIES: '/api/tour-categories',
    // Booking
    BOOKINGS: '/api/bookings',
    BOOKING_CREATE_PAYMENT: '/api/bookings/create-payment-url',
    BOOKING_MY_BOOKINGS: '/api/bookings/my-bookings',
    BOOKING_AVAILABILITY: '/api/bookings/availability',
    // Chatbot
    CHATBOT_QUERY: '/api/chatbot/query',
  }
};

export default config;
```

## A.9 ChatbotWidget — Widget Chatbot AI (Frontend, 385 dòng)

```jsx
// src/components/ChatbotWidget/ChatbotWidget.jsx (toàn bộ)
import React, { useState, useRef, useEffect, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { useLanguage } from '../../context/LanguageContext';
import config from '../../config/strapi';
import './ChatbotWidget.css';

const displayData = {
  vi: {
    title: 'Trợ Lý Du Lịch', subtitle: 'Travel TVB',
    welcomeMessage: 'Xin chào! Tôi là trợ lý du lịch của Travel TVB. Hãy hỏi tôi bất cứ điều gì!',
    placeholder: 'Nhập tin nhắn...', sendBtn: 'Gửi',
    errorMessage: 'Xin lỗi, đã có lỗi xảy ra. Vui lòng thử lại.',
    rateLimitMessage: 'Bạn đã gửi quá nhiều tin nhắn. Vui lòng chờ một chút.',
    viewTour: 'Xem tour', typing: 'Đang suy nghĩ...',
  },
  en: {
    title: 'Travel Assistant', subtitle: 'Travel TVB',
    welcomeMessage: 'Hello! I\'m Travel TVB\'s tour assistant. Ask me anything!',
    placeholder: 'Type a message...', sendBtn: 'Send',
    errorMessage: 'Sorry, something went wrong. Please try again.',
    rateLimitMessage: 'You\'ve sent too many messages. Please wait.',
    viewTour: 'View tour', typing: 'Thinking...',
  },
  zh: {
    title: '旅游助手', subtitle: 'Travel TVB',
    welcomeMessage: '您好！我是Travel TVB的旅游助手。随时问我吧！',
    placeholder: '输入消息...', sendBtn: '发送',
    errorMessage: '抱歉，出现了错误。请重试。',
    rateLimitMessage: '您发送消息过于频繁，请稍候。',
    viewTour: '查看旅游', typing: '思考中...',
  },
};

// SVG Icons (ChatIcon, CloseIcon, SendIcon, BotAvatarIcon)
const ChatIcon = () => (
  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
  </svg>
);
const CloseIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" />
  </svg>
);
const SendIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <line x1="22" y1="2" x2="11" y2="13" />
    <polygon points="22 2 15 22 11 13 2 9 22 2" />
  </svg>
);
const BotAvatarIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#007bff" strokeWidth="1.5">
    <rect x="3" y="11" width="18" height="10" rx="2" />
    <circle cx="9" cy="16" r="1.5" fill="#007bff" /><circle cx="15" cy="16" r="1.5" fill="#007bff" />
    <path d="M8 11V7a4 4 0 0 1 8 0v4" />
    <line x1="12" y1="2" x2="12" y2="4" /><circle cx="12" cy="2" r="1" fill="#007bff" />
  </svg>
);

// Typing indicator — 3 chấm nhấp nháy
const TypingIndicator = ({ text }) => (
  <div className="chatbot-message bot">
    <div className="chatbot-bot-avatar"><BotAvatarIcon /></div>
    <div className="chatbot-bubble bot">
      <div className="chatbot-typing-indicator">
        <span className="chatbot-typing-dot" /><span className="chatbot-typing-dot" /><span className="chatbot-typing-dot" />
      </div>
      <span className="chatbot-typing-text">{text}</span>
    </div>
  </div>
);

// Parse [tour-slug] thành clickable link
function parseBotReply(text, sources, navigate, viewTourLabel) {
  if (!text) return null;
  const slugPattern = /\[([a-z0-9-]+)\]/g;
  const parts = [];
  let lastIndex = 0, match;

  while ((match = slugPattern.exec(text)) !== null) {
    if (match.index > lastIndex) parts.push(text.substring(lastIndex, match.index));
    const slug = match[1];
    const source = sources.find(s => s.tourSlug === slug);
    if (source) {
      parts.push(
        <a key={`link-${match.index}`} href={`/tours/${slug}`} className="chatbot-tour-link"
           onClick={e => { e.preventDefault(); navigate(`/tours/${slug}`); }}>
          {source.tourName || slug}
        </a>
      );
    } else { parts.push(match[0]); }
    lastIndex = match.index + match[0].length;
  }
  if (lastIndex < text.length) parts.push(text.substring(lastIndex));
  return parts;
}

// Main component
const ChatbotWidget = () => {
  const { currentLanguage } = useLanguage();
  const TEXT = displayData[currentLanguage.code] || displayData.en;
  const navigate = useNavigate();

  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef(null);
  const inputRef = useRef(null);
  const hasInitialized = useRef(false);

  // Auto-scroll khi có tin nhắn mới
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isLoading]);

  // Tin nhắn chào mừng khi mở lần đầu
  useEffect(() => {
    if (isOpen && !hasInitialized.current) {
      hasInitialized.current = true;
      setMessages([{ role: 'bot', content: TEXT.welcomeMessage, sources: [] }]);
    }
  }, [isOpen, TEXT.welcomeMessage]);

  // Focus input khi mở
  useEffect(() => {
    if (isOpen && inputRef.current) setTimeout(() => inputRef.current?.focus(), 300);
  }, [isOpen]);

  const toggleChat = useCallback(() => setIsOpen(prev => !prev), []);

  // Gửi tin nhắn đến chatbot API
  const sendMessage = useCallback(async () => {
    const trimmed = inputValue.trim();
    if (!trimmed || isLoading) return;

    setMessages(prev => [...prev, { role: 'user', content: trimmed }]);
    setInputValue('');
    setIsLoading(true);

    try {
      // Lấy 10 tin nhắn gần nhất (5 cặp) làm history
      const history = messages.filter(m => m.role === 'user' || m.role === 'bot')
        .slice(-10).map(m => ({ role: m.role, content: m.content }));

      const response = await fetch(`${config.STRAPI_URL}${config.API_ENDPOINTS.CHATBOT_QUERY}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: trimmed, language: currentLanguage.code, history }),
      });

      if (response.status === 429) {
        setMessages(prev => [...prev, { role: 'bot', content: TEXT.rateLimitMessage, sources: [] }]);
        return;
      }
      if (!response.ok) throw new Error(`API error: ${response.status}`);

      const json = await response.json();
      setMessages(prev => [...prev, {
        role: 'bot',
        content: json.data?.reply || TEXT.errorMessage,
        sources: json.data?.sources || [],
      }]);
    } catch (err) {
      setMessages(prev => [...prev, { role: 'bot', content: TEXT.errorMessage, sources: [] }]);
    } finally { setIsLoading(false); }
  }, [inputValue, isLoading, messages, currentLanguage.code, TEXT]);

  // Enter gửi, Shift+Enter xuống dòng
  const handleKeyDown = useCallback(e => {
    if (e.key === 'Enter' && !e.shiftKey) { e.preventDefault(); sendMessage(); }
  }, [sendMessage]);

  return (
    <>
      <button className={`chatbot-toggle-btn ${isOpen ? 'chatbot-toggle-open' : ''}`}
              onClick={toggleChat} aria-label={isOpen ? 'Close chat' : 'Open chat'}>
        {isOpen ? <CloseIcon /> : <ChatIcon />}
      </button>

      {isOpen && (
        <div className="chatbot-panel">
          <div className="chatbot-header">
            <div className="chatbot-header-info">
              <div className="chatbot-header-avatar"><BotAvatarIcon /></div>
              <div><h3 className="chatbot-header-title">{TEXT.title}</h3>
                   <span className="chatbot-header-subtitle">{TEXT.subtitle}</span></div>
            </div>
            <button className="chatbot-close-btn" onClick={toggleChat}><CloseIcon /></button>
          </div>

          <div className="chatbot-messages">
            {messages.map((msg, i) => (
              <div key={i} className={`chatbot-message ${msg.role}`}>
                {msg.role === 'bot' && <div className="chatbot-bot-avatar"><BotAvatarIcon /></div>}
                <div className={`chatbot-bubble ${msg.role}`}>
                  <div className="chatbot-bubble-text">
                    {msg.role === 'bot'
                      ? parseBotReply(msg.content, msg.sources || [], navigate, TEXT.viewTour)
                      : msg.content}
                  </div>
                  {msg.role === 'bot' && msg.sources?.length > 0 && (
                    <div className="chatbot-sources">
                      {msg.sources.map((s, j) => (
                        <a key={j} href={`/tours/${s.tourSlug}`} className="chatbot-source-link"
                           onClick={e => { e.preventDefault(); navigate(`/tours/${s.tourSlug}`); }}>
                          {s.tourName}{s.price && ` - ${s.price}`}
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            ))}
            {isLoading && <TypingIndicator text={TEXT.typing} />}
            <div ref={messagesEndRef} />
          </div>

          <div className="chatbot-input-bar">
            <input ref={inputRef} type="text" className="chatbot-input"
                   value={inputValue} onChange={e => setInputValue(e.target.value)}
                   onKeyDown={handleKeyDown} placeholder={TEXT.placeholder}
                   disabled={isLoading} maxLength={500} />
            <button className="chatbot-send-btn" onClick={sendMessage}
                    disabled={isLoading || !inputValue.trim()}>
              <SendIcon />
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default ChatbotWidget;
```

## A.10 Hình 4.2 — Trang quản trị Strapi CMS

[Hình 4.2: Trang quản trị Strapi CMS — Screenshot giao diện Strapi Admin Panel tại /admin gồm:
1. **Sidebar trái:** Logo Strapi, Content Manager (danh sách tất cả 25 content types), Content-Type Builder, Media Library, Settings.
2. **Content Manager (giữa):** Danh sách entries cho content type đang chọn (ví dụ: Tours). Hiển thị dạng bảng với các cột: ID, Tour_Name, slug, Region, Price, Status (Published/Draft), Created At. Có nút "Create new entry" phía trên.
3. **Entry Editor (khi chọn một tour):** Form chỉnh sửa với tất cả 25 trường thuộc tính của Tour. Phía trên có dropdown chọn Locale (Vietnamese / English / Chinese). Nút Save, Publish, Delete ở góc phải trên. Rich text editor cho Description và Itinerary. Media uploader cho Featured_Image và Gallery.
4. **Settings page:** Users & Permissions plugin — quản lý Roles (Authenticated, Public), API Tokens, Internationalization (danh sách locales: vi, en, zh).]

## A.11 Backend Test — VNPay Helpers (trích đoạn tiêu biểu)

```javascript
// src/api/booking/utils/__tests__/vnpay-helpers.test.js (trích đoạn — 21 test cases)
const { sortObject, formatVnpDate } = require('../vnpay-helpers');

describe('sortObject', () => {
  test('returns empty object for empty input', () => {
    expect(sortObject({})).toEqual({});
  });
  test('sorts keys alphabetically', () => {
    const result = sortObject({ c: '3', a: '1', b: '2' });
    expect(Object.keys(result)).toEqual(['a', 'b', 'c']);
  });
  test('URL-encodes special characters in keys', () => {
    const result = sortObject({ 'key with spaces': 'val' });
    expect(result['key%20with%20spaces']).toBeDefined();
  });
  test('replaces %20 with + in values', () => {
    const result = sortObject({ key: 'hello world' });
    expect(result.key).toBe('hello+world');
  });
  test('handles Vietnamese text in values', () => {
    const result = sortObject({ info: 'Thanh toán đặt tour' });
    expect(typeof result.info).toBe('string');
    expect(result.info.length).toBeGreaterThan(0);
  });
  test('handles realistic VNPay parameter set', () => {
    const params = {
      vnp_Version: '2.1.0', vnp_Command: 'pay',
      vnp_TmnCode: 'TESTCODE', vnp_Amount: '1000000',
      vnp_CurrCode: 'VND', vnp_TxnRef: 'ORDER123',
    };
    const sorted = sortObject(params);
    const keys = Object.keys(sorted);
    expect(keys[0]).toBe('vnp_Amount');
    expect(keys[keys.length - 1]).toBe('vnp_Version');
  });
  // ... 3 test cases khác cho edge cases
});

describe('formatVnpDate', () => {
  test('formats a date as 14-character YYYYMMDDHHmmss', () => {
    const d = new Date(2026, 0, 15, 14, 30, 45); // 15 Jan 2026, 14:30:45
    expect(formatVnpDate(d)).toBe('20260115143045');
  });
  test('pads single-digit month, day, hour, minute, second', () => {
    const d = new Date(2026, 0, 5, 8, 5, 3); // 5 Jan 2026, 08:05:03
    expect(formatVnpDate(d)).toBe('20260105080503');
  });
  test('handles midnight (00:00:00)', () => {
    const d = new Date(2026, 5, 1, 0, 0, 0); // 1 Jun 2026, 00:00:00
    expect(formatVnpDate(d)).toBe('20260601000000');
  });
  test('handles year boundary (31 Dec, 23:59:59)', () => {
    const d = new Date(2025, 11, 31, 23, 59, 59);
    expect(formatVnpDate(d)).toBe('20251231235959');
  });
  test('always returns a 14-character string', () => {
    const dates = [new Date(2026, 0, 1), new Date(2026, 11, 31), new Date()];
    dates.forEach(d => { expect(formatVnpDate(d)).toHaveLength(14); });
  });
  // ... 7 test cases khác cho null, undefined, edge cases
});
```
