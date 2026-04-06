# Lịch sử Thay đổi Dự án (Project History)

Tài liệu này tổng hợp lại toàn bộ các bước và thay đổi thiết lập đã được thực hiện cho dự án `devops-lab-01` dưới sự hỗ trợ của AI, nhằm đảm bảo tuân thủ 100% tài liệu **LAB 07**.

## 1. Khởi tạo dự án Node.js
- Di chuyển vào thư mục dự án và chạy `npm init -y` để tạo `package.json`.
- Chạy lệnh `npm install --save-dev jest` để cài đặt **jest** phục vụ cho Unit Testing.
- Thay đổi `scripts.test` trong `package.json` thành `"jest"`.

## 2. Viết mã nguồn và kịch bản Test
- Tạo thư mục `src/` và tệp `src/calculator.js` chứa các logic toán học: `add`, `subtract`, `multiply`, `divide`.
- Tạo thư mục `tests/` và tệp `tests/calculator.test.js` chứa các kịch bản test tương ứng bằng cách sử dụng `expect` và `toBe`, `toThrow` của Jest.
- Đã chạy thành công lệnh `npm test` với **100% test case PASS**.

## 3. Cấu hình Continuous Integration (CI)
- Tạo thư mục con `.github/workflows` và file `ci.yml`.
- Thiết lập hành vi GitHub Actions tự động cài đặt `node v18`, `npm install`, và chạy `npm test` mỗi khi có sự kiện đẩy code lên hoặc tạo Pull Request.

## 4. Quản lý hệ thống Git ban đầu
- Viết file `.gitignore` để loại bỏ `node_modules/` và các file cấu hình tạm tránh đưa lên GitHub.
- Khởi tạo repo `git init`, thêm các files và thực hiện Initial Commit đầu tiên lên nhánh `main`.
- Đẩy lên kho lưu trữ từ xa: `https://github.com/thaihuulongvu/devops-lab-01.git`.

## 5. Tinh chỉnh mã nguồn (Khớp đề bài Lab 07)
- Chỉnh sửa lại từng dòng code của `calculator.js` và `calculator.test.js` để khớp từng dấu câu, từ khóa so với đề bài Lab 07.
- Tinh chỉnh tên Job trong `ci.yml` thành `Node CI`.

## 6. Thiết lập mô hình Branching (Git Workflow)
- Từ `main`, tạo và chuyển hướng sang branch `develop`. Tiến hành push branch này lên GitHub.
- Từ `develop`, tạo branch mới `feature/add-logging` nhằm mục đích mô phỏng phát triển một tính năng mới.

## 7. Phát triển tính năng & Format Code
- Trong nhánh `feature/add-logging`, bổ sung log hệ thống: `console.log("Adding:", a, b);` vào hàm `add()` ở `src/calculator.js`.
- Tiến hành chạy công cụ Format để căn lề tự động, giúp các file JavaScript thụt lề chuẩn và dễ đọc.
- Thực hiện Commit lại toàn bộ thay đổi này với các nội dung `"feat: add logging to add()"` và `"style: format js files"`, tiếp tục push nhánh này lên GitHub. 

---
👉 **Tình trạng hiện tại:** Mã nguồn của bạn trên nhánh `feature/add-logging` đã sẵn sàng để tạo Pull Request trên giao diện GitHub đúng với hướng dẫn tại **Bước 9** của bài Lab.
