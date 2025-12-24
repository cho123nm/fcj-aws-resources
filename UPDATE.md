# 🔄 Hướng Dẫn Cập Nhật Website

## Quy Trình Cập Nhật Đơn Giản

Sau khi đã deploy lên GitHub Pages, mỗi khi cần cập nhật:

### 1. Sửa Code

- Mở file `index.html`
- Thêm/sửa/xóa tài liệu theo ý muốn
- Lưu file

### 2. Push Lên GitHub

Mở terminal trong thư mục dự án:

```bash
# Thêm tất cả thay đổi
git add .

# Commit với message mô tả
git commit -m "Thêm tài liệu mới"
# hoặc
git commit -m "Sửa link diagram"
# hoặc
git commit -m "Cập nhật nội dung"

# Push lên GitHub
git push
```

### 3. Đợi Tự Động Cập Nhật

- GitHub Pages sẽ tự động build và deploy
- Thường mất **1-2 phút** để cập nhật
- Refresh lại trang web để xem thay đổi

## ✅ Ví Dụ Cập Nhật

### Thêm Tài Liệu Mới:

1. Mở `index.html`
2. Tìm section phù hợp (ví dụ: "Tài Liệu Học AWS")
3. Copy một card có sẵn và sửa:
   ```html
   <div class="resource-card" data-category="aws">
     <div class="card-header">
       <h3>Tên tài liệu mới</h3>
       <span class="badge badge-udemy">Loại</span>
     </div>
     <p class="card-description">Mô tả tài liệu</p>
     <a href="LINK_MỚI" target="_blank" class="card-link"> Truy cập → </a>
   </div>
   ```
4. Lưu file
5. `git add .` → `git commit -m "Thêm tài liệu mới"` → `git push`

### Sửa Link:

1. Mở `index.html`
2. Tìm link cần sửa
3. Sửa `href="..."` thành link mới
4. Lưu file
5. `git add .` → `git commit -m "Sửa link"` → `git push`

## 🎯 Lưu Ý

- ✅ **Không cần** vào Settings hay làm gì thêm
- ✅ **Tự động** cập nhật sau khi push
- ✅ **An toàn**: Có thể xem lại lịch sử commit trên GitHub
- ✅ **Nhanh**: Chỉ mất 1-2 phút để cập nhật

## 📝 Tips

- Commit message nên rõ ràng để dễ nhớ sau này
- Có thể xem lịch sử thay đổi trên GitHub
- Nếu lỡ sửa sai, có thể revert về commit trước

---

**Tóm lại: Sửa code → Push → Xong! 🚀**
