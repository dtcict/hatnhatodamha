// js/video.js
// 1. KHO DỮ LIỆU ĐỘNG: Danh sách hơn 10 Video tư liệu Hát Múa Cửa Đình [cite: 157]
const videoData = [
    {
        id: "V1",
        title: "Tổng quan Di sản Nghệ thuật Hát Cửa Đình",
        youtubeId: "dQw4w9WgXcQ", // Mã ID sau cụm "watch?v=" hoặc trong link share [cite: 157]
        duration: "15:20",
        description: "Thước phim tư liệu tổng quan khảo cứu về nguồn gốc lịch sử, không gian diễn xướng và giá trị văn hóa tâm linh cốt lõi của nghệ thuật Hát cửa đình (Hát nhà tơ) trong dòng chảy văn hóa Việt."
    },
    {
        id: "V2",
        title: "Kỹ nghệ diễn xướng của Đào nương & Kép đàn",
        youtubeId: "dQw4w9WgXcQ",
        duration: "12:45",
        description: "Phân tích chuyên sâu về lề lối hát, cách gõ phách điêu luyện của các Đào nương hòa nhịp cùng tiếng đàn đáy trầm hùng của tiếng Kép. Trích đoạn phỏng vấn nghệ nhân ưu tú."
    },
    {
        id: "V3",
        title: "Nghi lễ Tế Thần và Các Chặng múa cổ truyền",
        youtubeId: "dQw4w9WgXcQ",
        duration: "18:10",
        description: "Ghi hình trọn vẹn nghi thức múa dâng hoa, múa bài bông tế thần trước cửa đình cổ linh. Thể hiện sự tôn kính của cộng đồng và tính kết nối tâm linh sâu sắc."
    },
    {
        id: "V4",
        title: "Lễ hội bơi chèo và Diễn xướng dân gian vùng biển",
        youtubeId: "dQw4w9WgXcQ",
        duration: "09:30",
        description: "Mối liên kết chặt chẽ giữa không gian lễ hội đại đình vùng ven biển và các câu hát cầu mùa, chúc tụng bình an cho ngư dân bám biển."
    },
    {
        id: "V5",
        title: "Bảo tồn di sản trong đời sống đương đại",
        youtubeId: "dQw4w9WgXcQ",
        duration: "14:15",
        description: "Ghi nhận nỗ lực của các giáo phường thế hệ trẻ tại Đầm Hà trong việc truyền dạy bài bản cổ, xây dựng câu lạc bộ số hóa tư liệu lưu trữ lâu dài."
    },
    {
        id: "V6",
        title: "Hát giai trong nghi thức mừng thọ đình làng",
        youtubeId: "dQw4w9WgXcQ",
        duration: "08:50",
        description: "Thước phim tư liệu ngắn về điệu hát giai cổ, ca ngợi công đức tổ tiên và chúc phúc trường thọ cho các bậc cao niên trong ngày hội làng."
    },
    {
        id: "V7",
        title: "Sắc màu y phục Đào nương qua các thời kỳ",
        youtubeId: "dQw4w9WgXcQ",
        duration: "11:05",
        description: "Khảo cứu phục trang áo dài năm thân, khăn vấn mỏ quạ và nét thẩm mỹ trang nghiêm, thanh lịch khi thực hiện nghi lễ diễn xướng cửa thần."
    },
    {
        id: "V8",
        title: "Nghệ thuật gõ phách tre trong hát nhà tơ",
        youtubeId: "dQw4w9WgXcQ",
        duration: "07:40",
        description: "Góc quay cận cảnh hướng dẫn cách cầm phách, giữ nhịp phức tạp của nghệ nhân lão thành, giúp người xem thấu hiểu sự tinh tế của nhạc cụ thô sơ này."
    },
    {
        id: "V9",
        title: "Khám phá kiến trúc các ngôi Đình cổ di sản",
        youtubeId: "dQw4w9WgXcQ",
        duration: "20:15",
        description: "Hành trình máy quay đi qua các chi tiết chạm khắc rồng phượng, kiến trúc mái đao - nơi che chở cho dòng chảy âm nhạc di sản qua nhiều thế kỷ."
    },
    {
        id: "V10",
        title: "Tập tục đón nhận Đào nương vào Giáo phường",
        youtubeId: "dQw4w9WgXcQ",
        duration: "13:22",
        description: "Phục dựng tư liệu về ngày lễ ra mắt khắt khe của một tân Đào nương, vượt qua các thử thách xướng ca trước sự chứng kiến của các bậc trùm phường."
    }
];

// 2. KHỞI TẠO LOGIC ĐIỀU KHIỂN VIDEO ĐỘNG [cite: 157]
document.addEventListener("DOMContentLoaded", () => {
    const mainVideoPlayer = document.getElementById("main-video-player");
    const videoDisplayTitle = document.getElementById("video-display-title");
    const videoDisplayDesc = document.getElementById("video-display-desc");
    const videoPlaylistContainer = document.getElementById("video-playlist-container");
    const videoCounter = document.getElementById("video-counter");

    let currentVideoIndex = 0;

    // Hàm thực thi nạp dữ liệu và xử lý link nhúng Youtube [cite: 157]
    function loadVideoTrack(index) {
        if (index < 0 || index >= videoData.length || !mainVideoPlayer) return;
        currentVideoIndex = index;
        const video = videoData[currentVideoIndex];

        // Dùng tham số ?autoplay=1 để tự phát khi người dùng click đổi bài từ danh sách [cite: 157]
        const autoplayParam = index === 0 ? "" : "?autoplay=1";
        mainVideoPlayer.src = `https://www.youtube.com/embed/${video.youtubeId}${autoplayParam}`;

        // Đổ thông tin tiêu đề & mô tả động ngay dưới khung phát [cite: 157, 160]
        if (videoDisplayTitle) videoDisplayTitle.innerText = video.title;
        if (videoDisplayDesc) videoDisplayDesc.innerText = video.description;

        // Cập nhật bộ đếm số lượng tệp phát [cite: 157]
        if (videoCounter) videoCounter.innerText = `${currentVideoIndex + 1}/${videoData.length} tệp`;

        // Render lại danh sách để cập nhật trạng thái Active [cite: 157]
        renderVideoPlaylist();
    }

    // Hàm tạo giao diện danh sách cuộn bên cánh phải [cite: 157]
    function renderVideoPlaylist() {
        if (!videoPlaylistContainer) return;
        videoPlaylistContainer.innerHTML = ""; // Làm sạch danh sách cũ [cite: 157]
        
        videoData.forEach((video, index) => {
            const isActive = index === currentVideoIndex;
            
            const videoItem = document.createElement("button");
            videoItem.className = `w-full text-left p-3 rounded-sm border transition-all duration-300 flex items-start gap-3 group ${
                isActive 
                ? "border-heritage-gold/60 bg-stone-950 text-white shadow-md shadow-black/40" 
                : "border-stone-900 bg-stone-900/40 text-stone-400 hover:border-stone-800 hover:bg-stone-900 hover:text-stone-200"
            }`;
            
            videoItem.innerHTML = `
                <div class="mt-1 flex-shrink-0 w-5 h-5 flex items-center justify-center text-xs rounded-full ${
                    isActive ? "bg-heritage-primary text-heritage-gold animate-pulse" : "bg-stone-800 text-stone-500 group-hover:bg-stone-700"
                }">
                    ${isActive ? "▶" : (index + 1)}
                </div>
                <div class="flex-1 min-w-0">
                    <p class="text-xs font-semibold leading-tight truncate ${isActive ? "text-heritage-gold" : "text-stone-300"}" title="${video.title}">
                        ${video.title}
                    </p>
                    <span class="text-[10px] text-stone-500 block mt-1">🕒 Thời lượng: ${video.duration}</span>
                </div>
            `;
            
            // Xử lý hành động bấm chọn đổi video [cite: 157]
            videoItem.addEventListener("click", () => {
                if (currentVideoIndex !== index) {
                    loadVideoTrack(index);
                }
            });
            
            videoPlaylistContainer.appendChild(videoItem);
        });
    }

    // Nạp mặc định video đầu tiên khi vừa tải trang xong [cite: 157]
    loadVideoTrack(0);
});