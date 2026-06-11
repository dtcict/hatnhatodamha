// js/gallery.js
document.addEventListener("DOMContentLoaded", function() {
    const filterButtons = document.querySelectorAll(".gallery-filter-btn");
    const galleryItems = document.querySelectorAll(".gallery-item");
    const loadMoreBtn = document.getElementById("load-more-photos");
    let isExpanded = false;

    // Hàm điều phối hiển thị lưới ảnh và nút Xem thêm nội bộ
    function renderGallery() {
        const activeFilter = document.querySelector(".gallery-filter-btn.active").getAttribute("data-filter");
        let shownCount = 0;

        galleryItems.forEach(item => {
            const itemCat = item.getAttribute("data-category");
            const isMatch = (activeFilter === "all" || itemCat === activeFilter);

            if (isMatch) {
                if (isExpanded) {
                    item.classList.remove("hidden");
                    item.style.opacity = "1";
                } else {
                    if (shownCount < 4) { // Chỉ hiển thị mặc định 4 ảnh
                        item.classList.remove("hidden");
                        item.style.opacity = "1";
                        shownCount++;
                    } else {
                        item.classList.add("hidden");
                    }
                }
            } else {
                item.classList.add("hidden");
            }
        });

        // Đếm tổng số ảnh thuộc nhóm đang chọn để ẩn/hiện nút "Xem thêm" hợp lý
        const totalMatch = Array.from(galleryItems).filter(item => activeFilter === "all" || item.getAttribute("data-category") === activeFilter).length;
        if (totalMatch <= 4) {
            if (loadMoreBtn) loadMoreBtn.classList.add("hidden");
        } else {
            if (loadMoreBtn) {
                loadMoreBtn.classList.remove("hidden");
                loadMoreBtn.querySelector("span").innerText = isExpanded ? "Thu gọn bớt kho tư liệu" : "Xem thêm ảnh tư liệu";
                loadMoreBtn.querySelector("svg").style.transform = isExpanded ? "rotate(180deg)" : "rotate(0deg)";
            }
        }
    }

    // Gắn sự kiện click cho các nút lọc danh mục
    filterButtons.forEach(btn => {
        btn.addEventListener("click", function() {
            filterButtons.forEach(b => b.classList.remove("active", "bg-heritage-primary", "text-white"));
            filterButtons.forEach(b => b.classList.add("border", "border-heritage-primary", "text-heritage-primary"));
            
            this.classList.add("active", "bg-heritage-primary", "text-white");
            this.classList.remove("border", "border-heritage-primary", "text-heritage-primary");
            
            isExpanded = false; // Reset trạng thái thu gọn khi lọc tab mới
            renderGallery();
        });
    });

    // Gắn sự kiện click nút Xem thêm nội bộ
    if (loadMoreBtn) {
        loadMoreBtn.addEventListener("click", function() {
            isExpanded = !isExpanded;
            renderGallery();
        });
    }

    renderGallery(); // Chạy khởi tạo ban đầu

    // --- LOGIC PHÓNG TO ẢNH (LIGHTBOX MODAL) ---
    const lightbox = document.getElementById("photo-lightbox");
    const lightboxImg = document.getElementById("lightbox-img");
    const lightboxCaption = document.getElementById("lightbox-caption");
    const closeBtn = document.getElementById("close-lightbox");

    galleryItems.forEach(item => {
        item.addEventListener("click", function() {
            const innerImg = this.querySelector("img");
            if (innerImg) {
                lightboxImg.src = innerImg.src;
                lightboxCaption.innerText = innerImg.alt;

                lightbox.classList.remove("hidden");
                lightbox.classList.add("flex");
                setTimeout(() => {
                    lightbox.classList.remove("opacity-0");
                    lightbox.classList.add("opacity-100");
                    lightboxImg.classList.remove("scale-95");
                    lightboxImg.classList.add("scale-100");
                }, 15);
                document.body.style.overflow = "hidden"; // Khóa cuộn trang nền
            }
        });
    });

    function hideLightbox() {
        if (!lightbox) return;
        lightbox.classList.remove("opacity-100");
        lightbox.classList.add("opacity-0");
        lightboxImg.classList.remove("scale-100");
        lightboxImg.classList.add("scale-95");
        setTimeout(() => {
            lightbox.classList.remove("flex");
            lightbox.classList.add("hidden");
            document.body.style.overflow = ""; // Cho phép cuộn trang trở lại
        }, 300);
    }

    if (closeBtn) closeBtn.addEventListener("click", hideLightbox);
    if (lightbox) {
        lightbox.addEventListener("click", function(e) {
            if (e.target === lightbox || e.target.id === "photo-lightbox") hideLightbox();
        });
    }
    document.addEventListener("keydown", function(e) {
        if (e.key === "Escape" && lightbox && !lightbox.classList.contains("hidden")) hideLightbox();
    });
});