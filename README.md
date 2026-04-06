# DevOps Lab 01: GitHub Workflow, CI & Branch Protection 🧪

Repository này là kết quả của bài thực hành mô phỏng quy trình làm việc chuẩn mực trong môi trường phát triển phần mềm (DevOps). Dự án áp dụng Git workflow thực tế kết hợp với tích hợp liên tục (CI) bằng GitHub Actions và các thiết lập bảo vệ mã nguồn.

## 🎯 Mục tiêu dự án
- Quản lý mã nguồn với Git (Branch, Commit, Pull Request).
- Viết Unit Test cho ứng dụng Node.js sử dụng thư viện `jest`.
- Tự động hóa kiểm thử (CI pipeline) bằng **GitHub Actions**.
- Áp dụng các quy tắc bảo mật: Cấu hình **Branch Protection** để bảo vệ nhánh `main`.

## ⚙️ Cài đặt và Chạy dự án ở local

### 1. Clone repository về máy
```bash
git clone [https://github.com/thaihuulongvu/devops-lab-01.git](https://github.com/thaihuulongvu/devops-lab-01.git)
cd devops-lab-01
2. Cài đặt dependencies
Dự án yêu cầu cài đặt Node.js và sử dụng jest làm test runner.

Bash
npm install
3. Chạy Unit Test
Bash
npm test
Hệ thống sẽ chạy các kịch bản kiểm thử cho các hàm toán học cơ bản (Cộng, Trừ, Nhân, Chia) và trả về kết quả PASS hoặc FAIL.

📂 Cấu trúc thư mục
Plaintext
devops-lab-01/
├── .github/workflows/
│   └── ci.yml                 # Cấu hình GitHub Actions CI pipeline
├── src/
│   └── calculator.js          # Mã nguồn chứa logic các hàm toán học
├── tests/
│   └── calculator.test.js     # Các kịch bản kiểm thử (Unit tests)
├── package.json               # Quản lý thông tin dự án, dependencies và scripts
└── README.md                  # Tài liệu hướng dẫn
🔄 Quy trình Workflow đã triển khai
Khởi tạo Codebase: Viết mã nguồn cho ứng dụng máy tính bỏ túi cơ bản và các unit test tương ứng.

Branching Model: Sử dụng các nhánh riêng biệt để phát triển tính năng (ví dụ: tạo nhánh feature/add-logging tách ra từ nhánh gốc).

Continuous Integration (CI): Thiết lập file ci.yml để mỗi khi có thao tác push hoặc mở Pull Request, hệ thống GitHub Actions sẽ tự động cấp phát máy chủ Ubuntu, cài đặt Node.js, cài dependencies và chạy lệnh npm test.

Pull Request (PR): Thực hành mở PR, theo dõi quá trình CI tự động kiểm tra code. Nếu CI báo lỗi (Fail), code sẽ không được phép gộp. Khi CI báo xanh (Pass), tiến hành gộp code.

Branch Protection: Nhánh main được thiết lập bảo vệ nghiêm ngặt:

Từ chối mọi thao tác git push trực tiếp.

Bắt buộc mọi thay đổi phải thông qua Pull Request.

Yêu cầu các bài test (status checks) phải pass trước khi gộp nhánh.

👨‍💻 Tác giả
Long Vu


Sau khi dán xong và lưu file `README.md`, bạn copy dòng lệnh này dán vào terminal để đẩy lên GitHub nhé:

```bash
git add README.md && git commit -m "docs: update README with project details" && git