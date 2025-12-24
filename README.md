# 📚 FCJ - Tài Liệu Học AWS

Trang web tổng hợp tất cả tài liệu và tài nguyên học AWS cho cộng đồng FCJ.

## 🚀 Tính năng

- ✅ Tổng hợp tất cả tài liệu học AWS ở một nơi
- ✅ Giao diện đẹp, hiện đại và dễ sử dụng
- ✅ Responsive - hoạt động tốt trên cả desktop và mobile
- ✅ Tìm kiếm tài liệu nhanh chóng
- ✅ Phân loại rõ ràng theo từng danh mục

## 📁 Cấu trúc dự án

```
Buildtailieu/
├── index.html      # Trang chính
├── styles.css      # File CSS styling
├── script.js       # File JavaScript cho tính năng tìm kiếm
└── README.md       # File hướng dẫn này
```

## 🎯 Cách sử dụng

### Cách 1: Mở trực tiếp file HTML

1. Mở file `index.html` bằng trình duyệt web (Chrome, Firefox, Edge...)
2. Trang web sẽ hiển thị tất cả tài liệu
3. Sử dụng ô tìm kiếm để tìm tài liệu nhanh chóng

### Cách 2: Chạy local server (khuyến nghị)

**Với Python:**

```bash
# Python 3
python -m http.server 8000

# Sau đó mở trình duyệt và truy cập: http://localhost:8000
```

**Với Node.js:**

```bash
# Cài đặt http-server (nếu chưa có)
npm install -g http-server

# Chạy server
http-server -p 8000

# Sau đó mở trình duyệt và truy cập: http://localhost:8000
```

**Với VS Code:**

- Cài extension "Live Server"
- Click chuột phải vào file `index.html` → chọn "Open with Live Server"

## 📋 Danh mục tài liệu

### 📚 Tài Nguyên Chính Thức FCJ

- FCJ Bootcamp (Bắt buộc)
- Tài liệu tổng hợp FCJ
- Tổng hợp các module

### 📖 Tài Liệu Học AWS

- Khóa học SAA trên Udemy
- Đề thi thực hành SAA
- AWS Cheat Sheets
- Ghi chú ôn thi

### 🛠️ Công Cụ & Tài Nguyên Bổ Sung

- Thư viện AWS Diagram
- AWS Roadmap
- Quy trình FCJ

## 🔧 Tùy chỉnh

### Thêm tài liệu mới

Mở file `index.html` và thêm card mới vào section tương ứng:

```html
<div class="resource-card" data-category="aws">
  <div class="card-header">
    <h3>Tên tài liệu</h3>
    <span class="badge badge-udemy">Loại</span>
  </div>
  <p class="card-description">Mô tả tài liệu</p>
  <a href="LINK_Ở_ĐÂY" target="_blank" class="card-link"> Truy cập → </a>
</div>
```

### Thay đổi màu sắc

Chỉnh sửa file `styles.css` để thay đổi màu sắc, font chữ, kích thước...

## 📱 Responsive

Trang web được thiết kế responsive, tự động điều chỉnh giao diện trên:

- 📱 Mobile (< 480px)
- 📱 Tablet (< 768px)
- 💻 Desktop (> 768px)

## 🌐 Deploy lên web

Bạn có thể deploy trang web này lên:

- **GitHub Pages**: Miễn phí, dễ dàng
- **Netlify**: Miễn phí, tự động deploy từ Git
- **Vercel**: Miễn phí, nhanh chóng
- **AWS Amplify**: Như trong hình ảnh ban đầu

## 📝 Ghi chú

- Tất cả các link đều mở trong tab mới (`target="_blank"`)
- Trang web không cần backend, chỉ cần HTML/CSS/JS thuần
- Có thể thêm tính năng filter theo category nếu cần

## 🤝 Đóng góp

Nếu muốn thêm tài liệu mới hoặc cải thiện trang web, hãy:

1. Thêm card mới vào `index.html`
2. Cập nhật README nếu cần
3. Test trên mobile và desktop

---

Made with ❤️ for FCJ Community
