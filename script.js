// --- KONFIGURASI FOTO ---
// Ganti data di bawah ini dengan foto dan kata-kata kalian!
const photos = [
    {
        src: "WhatsApp Image 2025-12-27 at 19.47.09.jpeg" , // Pastikan nama file sama dengan di folder
        date: "27-12-2025 ",
        caption: "Awal kita bertemu, canggung tapi manis."
    },
    {
        src: "Dia.jpeg",
        date: "Lucuuuu",
        caption: "Valentine pertama kita!"
    },
    {
        src: "her1.jpeg",
        date: "Kecil bangett",
        caption: "Aku simpen semuaa."
    },
    {
        src: "her2.jpeg",
        date: "rawwwrr",
        caption: "Anak kecil yang baik hati."
    },
    {
        src: "her3.jpeg",
        date: "imuttt",
        caption: "Manusia ko bisa seimut kamu."
    },
     {
        src: "kby1.jpeg",
        date: "cantikkk",
        caption: "dan bisa cantik banget."
    },
    {
        src: "Polaroid1.jpeg",
        date: "Seruu wkwkk",
        caption: "Menutup tahun bersamamu."
    },
     {
        src: "bothmnhr.jpeg",
        date: "Comfort pic ",
        caption: "i'll never forget you."
    },
    // Tambahkan objek baru di sini jika ingin nambah foto
];

// --- LOGIKA UTAMA ---

document.addEventListener("DOMContentLoaded", () => {
    const galleryContainer = document.getElementById("gallery");
    const overlay = document.getElementById("overlay");
    const mainContent = document.getElementById("main-content");
    const startBtn = document.getElementById("start-btn");
    const audio = document.getElementById("bg-music");

    // 1. Render Galeri Foto
    photos.forEach((photo, index) => {
        const card = document.createElement("div");
        card.classList.add("photo-card");
        // Memberikan sedikit rotasi acak agar terlihat natural
        const rotation = Math.random() * 6 - 3; // Antara -3deg sampai 3deg
        card.style.transform = `rotate(${rotation}deg)`;

        card.innerHTML = `
            <img src="${photo.src}" alt="${photo.date}">
            <div class="date">${photo.date}</div>
        `;
        
        // Event klik untuk membuka Lightbox
        card.addEventListener("click", () => openLightbox(photo));
        
        galleryContainer.appendChild(card);
    });

    // 2. Tombol Start (Buka Hadiah)
    startBtn.addEventListener("click", () => {
        overlay.style.opacity = "0";
        setTimeout(() => {
            overlay.style.display = "none";
            mainContent.classList.remove("hidden");
            // Putar Musik
            audio.volume = 0.5; // Volume setengah
            audio.play().catch(error => console.log("Playback failed:", error));
        }, 1000);
    });

    // 3. Logika Lightbox
    const lightbox = document.getElementById("lightbox");
    const lightboxImg = document.getElementById("lightbox-img");
    const captionText = document.getElementById("caption");
    const closeBtn = document.getElementsByClassName("close")[0];

    function openLightbox(photo) {
        lightbox.style.display = "flex";
        lightboxImg.src = photo.src;
        captionText.innerHTML = photo.caption;
    }

    closeBtn.onclick = function() {
        lightbox.style.display = "none";
    }

    // Tutup jika klik di luar area foto
    window.onclick = function(event) {
        if (event.target == lightbox) {
            lightbox.style.display = "none";
        }
    }
});