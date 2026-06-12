// js/book.js
document.addEventListener("DOMContentLoaded", function() {
    // Kết nối các phần tử HTML
    const btnReadOnline = document.getElementById("btn-read-online");
    const pdfModal = document.getElementById("pdf-viewer-modal");
    const btnClosePdf = document.getElementById("close-pdf-modal");

    // Hàm mở Modal đọc sách
    function openPdfModal() {
        if (!pdfModal) return;
        
        // Hiện Modal (thay hidden bằng flex)
        pdfModal.classList.remove("hidden");
        pdfModal.classList.add("flex");
        
        // Tạo độ trễ nhỏ để hiệu ứng Fade-in hoạt động mượt mà
        setTimeout(() => {
            pdfModal.classList.remove("opacity-0");
            pdfModal.classList.add("opacity-100");
        }, 15);
        
        // Khóa cuộn trang web nền bên ngoài khi đang đọc sách
        document.body.style.overflow = "hidden";
    }

    // Hàm đóng Modal đọc sách
    function closePdfModal() {
        if (!pdfModal) return;
        
        // Chạy hiệu ứng Fade-out
        pdfModal.classList.remove("opacity-100");
        pdfModal.classList.add("opacity-0");
        
        // Chờ hiệu ứng mờ kết thúc rồi mới ẩn hoàn toàn khối div
        setTimeout(() => {
            pdfModal.classList.remove("flex");
            pdfModal.classList.add("hidden");
            document.body.style.overflow = ""; // Cho phép cuộn trang trở lại
        }, 300);
    }

    // Gắn sự kiện Click cho nút bấm
    if (btnReadOnline) btnReadOnline.addEventListener("click", openPdfModal);
    if (btnClosePdf) btnClosePdf.addEventListener("click", closePdfModal);

    // Tính năng bổ trợ: Click ra vùng tối mờ bên ngoài khung sách để Đóng
    if (pdfModal) {
        pdfModal.addEventListener("click", function(e) {
            if (e.target === pdfModal) {
                closePdfModal();
            }
        });
    }

    // Tính năng bổ trợ: Bấm phím ESC trên bàn phím để Đóng
    document.addEventListener("keydown", function(e) {
        if (e.key === "Escape" && pdfModal && !pdfModal.classList.contains("hidden")) {
            closePdfModal();
        }
    });
});