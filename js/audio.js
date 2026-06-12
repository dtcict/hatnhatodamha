// js/audio.js
document.addEventListener("DOMContentLoaded", function() {
    // KHO DỮ LIỆU ĐỘNG: Nạp sẵn 20 làn điệu di sản tiêu biểu
    const audioData = [
        {
            id: 1,
            title: "01. Điệu Gấm Bàn Thờ (Hát Tế Thần)",
            author: "Giáo phường Đầm Hà",
            src: "https://docs.google.com/uc?export=download&id=1_SampleAudioID_01", 
            lyrics: `<b>[Lời Gốc Chữ Nôm]</b>\nNhang khói phụng thờ đấng tôn nghiêm...\nGấm vóc trải bàn đón anh linh...\n\n<b>[Bản Dịch Nghĩa]</b>\nKhói hương nghi ngút hướng về bậc linh thiêng kính cẩn.\nChiếu gấm sẵn sàng cung nghinh bóng dáng tiên tổ.`
        },
        {
            id: 2,
            title: "02. Điệu Hát Mở Cửa Đình (Giọng Chúc)",
            author: "Giáo phường Đầm Hà",
            src: "https://docs.google.com/uc?export=download&id=1_SampleAudioID_02",
            lyrics: `<b>[Lời Gốc Chữ Nôm]</b>\nTịch mịch khua chiêng mở cửa đình...\nĐón lộc đón tài đón vạn xuân...\n\n<b>[Bản Dịch Nghĩa]</b>\nTiếng chiêng vang vọng đánh thức không gian nghiêm trang để mở hội.\nCầu chúc quốc thái dân an, vạn vật hanh thông trường tồn.`
        },
        {
            id: 3,
            title: "03. Điệu Thét Nhạc Uy Nghi",
            author: "Đội nhạc công tế lễ",
            src: "https://docs.google.com/uc?export=download&id=1_SampleAudioID_03",
            lyrics: `<b>[Lời Gốc Chữ Nôm]</b>\nTrống điểm ba hồi nghiêm hiệu lệnh...\nNhạc thét uy nghi rộn cửa đền...\n\n<b>[Bản Dịch Nghĩa]</b>\nHồi trống vang lên báo hiệu nghi lễ chính thức bắt đầu.\nDàn nhạc tấu khúc uy nghiêm, rộn ràng khắp không gian linh thánh.`
        },
        {
            id: 4,
            title: "04. Lối Hát Chúc Thánh Hoàng",
            author: "Nghệ nhân lão thành",
            src: "https://docs.google.com/uc?export=download&id=1_SampleAudioID_04",
            lyrics: `<b>[Lời Gốc Chữ Nôm]</b>\nKính chúc minh thần vạn vạn tuế...\nBảo hộ vương dân mãi thái bình...\n\n<b>[Bản Dịch Nghĩa]</b>\nKính cẩn cầu chúc đức thần hoàng vạn tuổi.\nXin ngài che chở cho dân làng luôn được bình an, no ấm.`
        },
        {
            id: 5,
            title: "05. Nghệ Thuật Múa Bài Bông (Dâng Hoa)",
            author: "Đội Đào nương chủ tế",
            src: "https://docs.google.com/uc?export=download&id=1_SampleAudioID_05",
            lyrics: `<b>[Lời Gốc Chữ Nôm]</b>\nTay nâng đôi đóa hoa dâng tiến...\nNhịp phách khoan thai uốn nếp gấm...\n\n<b>[Bản Dịch Nghĩa]</b>\nĐôi tay thành kính nâng đóa hoa tươi dâng lên bệ thờ thần linh.\nBước đi nhịp nhàng theo tiếng phách tre gõ nhịp mộc mạc.`
        },
        {
            id: 6,
            title: "06. Giọng Hát Chơi Giải Trí Khóa Đình",
            author: "Nghệ nhân dân gian",
            src: "https://docs.google.com/uc?export=download&id=1_SampleAudioID_06",
            lyrics: `<b>[Lời Gốc Chữ Nôm]</b>\nTế lễ xong xuôi chén rượu mừng...\nThầy trò hòa giọng khúc xuân sang...\n\n<b>[Bản Dịch Nghĩa]</b>\nKhi đại khóa tế đã hoàn thành viên mãn, cùng nâng chén rượu vui.\nNghệ nhân và thế hệ kế cận cùng hát vang làn điệu giao duyên.`
        },
        {
            id: 7,
            title: "07. Điệu Giao Duyên Cửa Buồng",
            author: "Giáo phường Đầm Hà",
            src: "https://docs.google.com/uc?export=download&id=1_SampleAudioID_07",
            lyrics: `<b>[Lời Gốc Chữ Nôm]</b>\nĐứng bên rèm lụa tỏ lời ca...\nTiếng đàn đằm thắm đượm tình quê...\n\n<b>[Bản Dịch Nghĩa]</b>\nĐào nương đứng nép sau tấm rèm lụa cất lên giọng hát ngọt ngào.\nHòa cùng tiếng đàn đáy trầm ấm vang vọng khắp làng quê cổ.`
        },
        {
            id: 8,
            title: "08. Hát Giai Đoạn Thờ Mẫu",
            author: "Đội Đào nương chủ tế",
            src: "https://docs.google.com/uc?export=download&id=1_SampleAudioID_08",
            lyrics: `<b>[Lời Gốc Chữ Nôm]</b>\nMẫu nghi thiên hạ đức bao la...\nĐộ trì con cháu vạn đời an...\n\n<b>[Bản Dịch Nghĩa]</b>\nThần Mẫu thiên hạ ban ơn đức rộng lớn như trời biển.\nCầu xin ngài độ trì cho muôn đời con cháu được thái bình.`
        },
        {
            id: 9,
            title: "09. Điệu Nhịp Ba Khua Trống",
            author: "Đội nhạc công tế lễ",
            src: "https://docs.google.com/uc?export=download&id=1_SampleAudioID_09",
            lyrics: `<b>[Lời Gốc Chữ Nôm]</b>\nTay gõ trống sến nhịp liên hồi...\nGiữ cốt cho nương tử ngân nga...\n\n<b>[Bản Dịch Nghĩa]</b>\nNhạc công cầm dùi gõ vang tiếng trống sến giữ nhịp vững vàng.\nLàm điểm tựa cho giọng ca thanh thoát của Đào nương vang xa.`
        },
        {
            id: 10,
            title: "10. Lối Hát Tế Vua Thần Linh Cổ Cốt",
            author: "Nghệ nhân lão thành",
            src: "https://docs.google.com/uc?export=download&id=1_SampleAudioID_10",
            lyrics: `<b>[Lời Gốc Chữ Nôm]</b>\nCúi đầu kính lạy đức thánh vương...\nChứng giám lòng thành lễ mọn dâng...\n\n<b>[Bản Dịch Nghĩa]</b>\nKính cẩn cúi đầu trước anh linh của đức vua thần thánh.\nXin ngài chứng giám cho lễ vật trang nghiêm và tấm lòng son.`
        },
        {
            id: 11,
            title: "11. Điệu Phú Chúc Thọ Làng Cổ",
            author: "Giáo phường Đầm Hà",
            src: "https://docs.google.com/uc?export=download&id=1_SampleAudioID_11",
            lyrics: `<b>[Lời Gốc Chữ Nôm]</b>\nChúc cho bô lão thọ trường xuân...\nChúc cho con trẻ học hành thông...\n\n<b>[Bản Dịch Nghĩa]</b>\nCầu chúc cho các bậc cao niên trong làng sức khỏe dồi dào.\nCầu chúc thế hệ trẻ học hành đỗ đạt, làm rạng danh quê hương.`
        },
        {
            id: 12,
            title: "12. Hát Thơ Chuốc Rượu Lễ Nghi",
            author: "Nghệ nhân dân gian",
            src: "https://docs.google.com/uc?export=download&id=1_SampleAudioID_12",
            lyrics: `<b>[Lời Gốc Chữ Nôm]</b>\nRượu quỳnh một chén kính dâng lên...\nLòng thành gửi gắm tấc lòng son...\n\n<b>[Bản Dịch Nghĩa]</b>\nDâng lên thần linh chén rượu quỳnh thơm ngát tinh khiết.\nGửi gắm tất cả sự tôn kính và lòng trung nghĩa khát vọng.`
        },
        {
            id: 13,
            title: "13. Điệu Múa Quạt Tiên Khúc dâng Đình",
            author: "Đội Đào nương chủ tế",
            src: "https://docs.google.com/uc?export=download&id=1_SampleAudioID_13",
            lyrics: `<b>[Lời Gốc Chữ Nôm]</b>\nXòe quạt lụa hồng tựa cánh tiên...\nDập dìu trước điện khói trầm hương...\n\n<b>[Bản Dịch Nghĩa]</b>\nĐào nương xòe đôi quạt lụa hồng uyển chuyển như cánh tiên hạ giới.\nDập dìu múa lượn trước cung điện rực rỡ làn khói hương trầm.`
        },
        {
            id: 14,
            title: "14. Giọng Hát Vặt Giao Duyên Ngày Hội",
            author: "Nghệ nhân dân gian",
            src: "https://docs.google.com/uc?export=download&id=1_SampleAudioID_14",
            lyrics: `<b>[Lời Gốc Chữ Nôm]</b>\nGặp nhau ngày hội chớ quên nhau...\nLời ca hẹn ước buổi xuân thì...\n\n<b>[Bản Dịch Nghĩa]</b>\nBén duyên nhau giữa hội đình, xin người chớ vội lãng quên.\nLời ca trao duyên gửi gắm lời hẹn ước của tuổi thanh xuân.`
        },
        {
            id: 15,
            title: "15. Điệu Kể Chuyện Tích Cổ Răn Đời",
            author: "Nghệ nhân lão thành",
            src: "https://docs.google.com/uc?export=download&id=1_SampleAudioID_15",
            lyrics: `<b>[Lời Gốc Chữ Nôm]</b>\nLấy điều nhân nghĩa giữ gia phong...\nChớ tham phú quý phụ tình thâm...\n\n<b>[Bản Dịch Nghĩa]</b>\nLuôn lấy đạo lý nhân nghĩa làm cốt lõi để giữ gìn nếp nhà.\nTuyệt đối không vì tiền tài vật chất mà phụ nghĩa tình sâu nặng.`
        },
        {
            id: 16,
            title: "16. Hát Thơ Đường Luật Tôn Kính Thần",
            author: "Giáo phường Đầm Hà",
            src: "https://docs.google.com/uc?export=download&id=1_SampleAudioID_16",
            lyrics: `<b>[Lời Gốc Chữ Nôm]</b>\nThần uy chói lọi cõi trời nam...\nVạn cổ lưu danh thế miếu thờ...\n\n<b>[Bản Dịch Nghĩa]</b>\nUy vũ của vị minh thần tỏa sáng rực rỡ khắp trời Nam.\nMôn thuở lưu danh trong đền miếu, khói hương tôn kính.`
        },
        {
            id: 17,
            title: "17. Điệu Trống Chiến Uy Hùng Đại Tế",
            author: "Đội nhạc công tế lễ",
            src: "https://docs.google.com/uc?export=download&id=1_SampleAudioID_17",
            lyrics: `<b>[Lời Gốc Chữ Nôm]</b>\nTùng tùng tiếng trống giục quân hành...\nTái hiện oai linh thuở dẹp mang...\n\n<b>[Bản Dịch Nghĩa]</b>\nTiếng trống chiến thúc vang rộn rã như thúc giục đoàn quân ra trận.\nTái hiện lại khí thế oai hùng đánh giặc ngoại xâm thuở xưa.`
        },
        {
            id: 18,
            title: "18. Lối Hát Ru Đào Nương Cổ Bản",
            author: "Nghệ nhân lão thành",
            src: "https://docs.google.com/uc?export=download&id=1_SampleAudioID_18",
            lyrics: `<b>[Lời Gốc Chữ Nôm]</b>\nẦu ơ tiếng nhịp võng tre đưa...\nNôi nguồn di sản giữ ngàn năm...\n\n<b>[Bản Dịch Nghĩa]</b>\nTiếng ru hời hòa cùng tiếng đưa võng tre kẽo kẹt mộc mạc.\nLà cái nôi nuôi dưỡng và giữ gìn dòng chảy di sản ngàn năm.`
        },
        {
            id: 19,
            title: "19. Hát Chúc Vua Khang Cát Quốc Gia",
            author: "Giáo phường Đầm Hà",
            src: "https://docs.google.com/uc?export=download&id=1_SampleAudioID_19",
            lyrics: `<b>[Lời Gốc Chữ Nôm]</b>\nKinh đô mở hội mừng khang cát...\nXã tắc vững bền muôn năm thọ...\n\n<b>[Bản Dịch Nghĩa]</b>\nCả nước mở hội hân hoan chúc mừng quốc gia hưng thịnh.\nGiang sơn bờ cõi vững bền, trường tồn cùng thời gian.`
        },
        {
            id: 20,
            title: "20. Điệu Hát Giã Bạn Đêm Cuối Hội",
            author: "Giáo phường Đầm Hà",
            src: "https://docs.google.com/uc?export=download&id=1_SampleAudioID_20",
            lyrics: `<b>[Lời Gốc Chữ Nôm]</b>\nTiễn bạn lòng đau chẳng muốn rời...\nHẹn kỳ hội tới lại chung vui...\n\n<b>[Bản Dịch Nghĩa]</b>\nGiờ phút chia tay lòng bùi ngùi lưu luyến không nỡ rời xa.\nXin hẹn đến mùa lễ hội năm sau, chúng ta lại cùng sum vầy.`
        }
    ];

    let currentIndex = -1;
    let rotationInterval = null;
    let currentRotation = 0;
    

    // Các thành phần kết nối DOM (Giữ nguyên logic điều khiển thông minh từ tệp cũ)
    const player = document.getElementById("main-audio-player");
    const playlistContainer = document.getElementById("audio-playlist-container");
    const playBtn = document.getElementById("btn-play-audio");
    const iconPlay = document.getElementById("icon-play");
    const iconPause = document.getElementById("icon-pause");
    const prevBtn = document.getElementById("btn-prev-audio");
    const nextBtn = document.getElementById("btn-next-audio");
    
    const currentTitle = document.getElementById("current-audio-title");
    const currentAuthor = document.getElementById("current-audio-author");
    const lyricsBox = document.getElementById("audio-lyrics-box");
    const audioDisk = document.getElementById("audio-disk");
    const counterText = document.getElementById("audio-counter");
    
    const progressRange = document.getElementById("audio-progress");
    const timeCurrentText = document.getElementById("time-current");
    const timeDurationText = document.getElementById("time-duration");

    // Khai báo thêm các phần tử DOM phục vụ tính năng đóng mở Lyric
    const toggleLyricBtn = document.getElementById("toggle-lyric-btn");
    const lyricBtnText = document.getElementById("lyric-btn-text");
    const lyricBtnIcon = document.getElementById("lyric-btn-icon");

    counterText.innerText = `0/${audioData.length} tệp`;
    
    // Hàm khởi tạo danh sách nạp tự động bằng vòng lặp
    function initPlaylist() {
        if(!playlistContainer) return;
        playlistContainer.innerHTML = "";
        audioData.forEach((track, index) => {
            const row = document.createElement("div");
            row.className = `audio-track-item flex items-center justify-between bg-stone-900/60 border border-stone-800 hover:border-heritage-gold/40 p-3 rounded-sm cursor-pointer transition-all group duration-300`;
            row.setAttribute("data-index", index);
            row.innerHTML = `
                <div class="flex items-center space-x-3 min-w-0 flex-1">
                    <div class="w-7 h-7 rounded-sm bg-stone-800 group-hover:bg-heritage-primary/20 flex items-center justify-center border border-stone-700 shrink-0 transition-colors">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-3.5 w-3.5 text-stone-500 group-hover:text-heritage-gold transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3"/></svg>
                    </div>
                    <div class="min-w-0 flex-1">
                        <h4 class="text-xs font-medium text-stone-300 group-hover:text-white transition-colors tracking-wide truncate line-clamp-1">${track.title}</h4>
                        <p class="text-[10px] text-stone-500">${track.author}</p>
                    </div>
                </div>
                <span class="text-[10px] text-stone-600 font-mono group-hover:text-heritage-gold transition-colors shrink-0 ml-2">Chọn phát ♫</span>
            `;
            
            row.addEventListener("click", () => {
                loadAndPlayTrack(index);
            });
            playlistContainer.appendChild(row);
        });
    }

    function loadAndPlayTrack(index) {
        if (index < 0 || index >= audioData.length) return; // [cite: 115]
        currentIndex = index;
        const track = audioData[currentIndex];

        // Cập nhật trạng thái hiển thị Active cho danh sách bài hát 
        document.querySelectorAll(".audio-track-item").forEach((el, i) => {
            if (i === currentIndex) {
                el.classList.add("border-heritage-gold/60", "bg-stone-900");
                el.querySelector("span").innerText = "Đang phát ▶";
                el.querySelector("span").classList.add("text-heritage-gold");
            } else {
                el.classList.remove("border-heritage-gold/60", "bg-stone-900");
                el.querySelector("span").innerText = "Chọn phát ♫";
                el.querySelector("span").classList.remove("text-heritage-gold");
            }
        });

        // Nạp nguồn nhạc và thông tin bài hát 
        player.src = track.src;
        currentTitle.innerText = track.title;
        currentAuthor.innerText = track.author;
        counterText.innerText = `${currentIndex + 1}/${audioData.length} tệp`;
        
        lyricsBox.style.justifyContent = "flex-start";
        // Ép khối hiển thị lời tôn trọng các ký tự xuống dòng từ JSON [cite: 272]
        lyricsBox.innerHTML = `<div class="whitespace-pre-line text-center w-full px-2">${track.lyrics}</div>`;

        playAudio(); // Kích hoạt phát nhạc 
    }

    // XỬ LÝ SỰ KIỆN CLICK NÚT BẤM ĐÓNG/MỞ LYRIC TRÊN MOBILE
    if (toggleLyricBtn && lyricsBox) {
        toggleLyricBtn.addEventListener("click", function() {
            const isHidden = lyricsBox.classList.contains("hidden");
            
            if (isHidden) {
                // Thực hiện mở rộng
                lyricsBox.classList.remove("hidden");
                lyricsBox.classList.add("flex");
                lyricBtnText.innerText = "Thu gọn lời";
                lyricBtnIcon.classList.add("rotate-180");
                
                // Cuộn mượt màn hình tới vùng lời vừa mở để thuận tiện theo dõi
                setTimeout(() => {
                    lyricsBox.scrollIntoView({ behavior: "smooth", block: "nearest" });
                }, 50);
            } else {
                // Thực hiện thu gọn
                lyricsBox.classList.add("hidden");
                lyricsBox.classList.remove("flex");
                lyricBtnText.innerText = "Xem lời bài hát";
                lyricBtnIcon.classList.remove("rotate-180");
            }
        });
    }

    function startDiskRotation() {
        if (rotationInterval) clearInterval(rotationInterval);
        rotationInterval = setInterval(() => {
            currentRotation += 1;
            if(audioDisk) audioDisk.style.transform = `rotate(${currentRotation}deg)`;
        }, 30);
    }

    function stopDiskRotation() {
        if (rotationInterval) clearInterval(rotationInterval);
    }

    function playAudio() {
        player.play().then(() => {
            if(iconPlay) iconPlay.classList.add("hidden");
            if(iconPause) iconPause.classList.remove("hidden");
            startDiskRotation();
        }).catch(err => console.log("Hệ thống chờ tương tác: ", err));
    }

    function pauseAudio() {
        player.pause();
        if(iconPlay) iconPlay.classList.remove("hidden");
        if(iconPause) iconPause.classList.add("hidden");
        stopDiskRotation();
    }

    if(playBtn) {
        playBtn.addEventListener("click", function() {
            if (currentIndex === -1) {
                loadAndPlayTrack(0);
            } else {
                if (player.paused) playAudio(); else pauseAudio();
            }
        });
    }

    if(prevBtn) {
        prevBtn.addEventListener("click", () => {
            if (currentIndex > 0) loadAndPlayTrack(currentIndex - 1);
            else if (currentIndex === 0) loadAndPlayTrack(audioData.length - 1);
        });
    }

    if(nextBtn) {
        nextBtn.addEventListener("click", () => {
            if (currentIndex < audioData.length - 1) loadAndPlayTrack(currentIndex + 1);
            else loadAndPlayTrack(0);
        });
    }

    player.addEventListener("timeupdate", () => {
        if (player.duration) {
            const progress = (player.currentTime / player.duration) * 100;
            if(progressRange) progressRange.value = progress;
            if(timeCurrentText) timeCurrentText.innerText = formatTime(player.currentTime);
        }
    });

    player.addEventListener("loadedmetadata", () => {
        if(timeDurationText) timeDurationText.innerText = formatTime(player.duration);
    });

    if(progressRange) {
        progressRange.addEventListener("input", () => {
            if (player.duration) {
                player.currentTime = (progressRange.value / 100) * player.duration;
            }
        });
    }

    player.addEventListener("ended", () => {
        if (currentIndex < audioData.length - 1) loadAndPlayTrack(currentIndex + 1);
        else loadAndPlayTrack(0);
    });

    function formatTime(seconds) {
        if (isNaN(seconds)) return "00:00";
        const m = Math.floor(seconds / 60).toString().padStart(2, '0');
        const s = Math.floor(seconds % 60).toString().padStart(2, '0');
        return `${m}:${s}`;
    }

    initPlaylist();
});