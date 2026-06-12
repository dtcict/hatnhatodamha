// js/interaction.js
document.addEventListener("DOMContentLoaded", function() {
    
    // 1. TÍNH NĂNG GỘP: THẢ TIM KÍCH HOẠT CHIA SẺ FACEBOOK
    const btnLoveShare = document.getElementById("btn-love-share");
    const iconHeartShare = document.getElementById("icon-heart-share");
    const heartPopAnimation = document.getElementById("heart-pop-animation");

    if (btnLoveShare) {
        btnLoveShare.addEventListener("click", function() {
            // Bước 1: Kích hoạt hiệu ứng thị giác (Tô đỏ trái tim)
            iconHeartShare.classList.replace("text-stone-400", "text-heritage-primary");
            iconHeartShare.classList.replace("group-hover:text-heritage-primary", "text-heritage-primary");
            iconHeartShare.setAttribute("fill", "currentColor");
            
            // Bước 2: Hiệu ứng trái tim bay lên
            heartPopAnimation.classList.remove("opacity-0", "scale-50", "-top-4");
            heartPopAnimation.classList.add("opacity-100", "scale-150", "-top-10");
            
            // Ẩn hiệu ứng bay đi sau 500ms
            setTimeout(() => {
                heartPopAnimation.classList.remove("opacity-100", "scale-150", "-top-10");
                heartPopAnimation.classList.add("opacity-0", "scale-50", "-top-4");
                
                // Khôi phục lại trạng thái icon viền rỗng để họ có thể bấm lại lần sau
                setTimeout(() => {
                    iconHeartShare.classList.replace("text-heritage-primary", "text-stone-400");
                    iconHeartShare.classList.add("group-hover:text-heritage-primary");
                    iconHeartShare.setAttribute("fill", "none");
                }, 1000);
            }, 500);

            // Bước 3: THỰC THI CHIA SẺ (Đẩy ra khung share FB sau 300ms)
            setTimeout(() => {
                const currentUrl = encodeURIComponent(window.location.href);
                const fbShareUrl = `https://www.facebook.com/sharer/sharer.php?u=${currentUrl}`;
                window.open(fbShareUrl, 'facebook-share-dialog', 'width=800,height=600');
            }, 300);
        });
    }

    // 2. TÍNH NĂNG SAO CHÉP LIÊN KẾT (Giữ nguyên)
    const btnCopyLink = document.getElementById("btn-copy-link");
    const tooltipCopied = document.getElementById("tooltip-copied");
    let tooltipTimeout;

    if (btnCopyLink && tooltipCopied) {
        btnCopyLink.addEventListener("click", function() {
            const currentUrl = window.location.href;
            
            navigator.clipboard.writeText(currentUrl).then(() => {
                tooltipCopied.classList.remove("opacity-0");
                tooltipCopied.classList.add("opacity-100");
                
                clearTimeout(tooltipTimeout);
                tooltipTimeout = setTimeout(() => {
                    tooltipCopied.classList.remove("opacity-100");
                    tooltipCopied.classList.add("opacity-0");
                }, 2000);
            }).catch(err => console.error('Lỗi sao chép: ', err));
        });
    }
});