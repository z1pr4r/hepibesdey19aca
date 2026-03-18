function startExperience(playMusic) {
    document.getElementById('music-modal').style.display = 'none';
    
    if (playMusic) {
        let audio = document.getElementById('bgm');
        audio.play().catch(e => console.log("Audio diblokir: ", e));
    }

    // Mulai membuat balon setelah modal ditutup
    createBalloons(30);
}

// Fungsi untuk membuat balon acak
function createBalloons(num) {
    const container = document.getElementById('balloon-container');
    // Palette warna balon yang estetik
    const colors = ['#ff9a9e', '#fad0c4', '#a18cd1', '#fbc2eb', '#ffacc5'];

    for (let i = 0; i < num; i++) {
        const balloon = document.createElement('div');
        balloon.className = 'balloon';
        
        // Atur posisi acak, warna, dan kecepatan
        const color = colors[Math.floor(Math.random() * colors.length)];
        const left = Math.random() * 100; // Posisi horizontal (0-100vw)
        const delay = Math.random() * 5; // Penundaan animasi acak
        const duration = 6 + Math.random() * 4; // Kecepatan acak (6-10 detik)

        balloon.style.backgroundColor = color;
        balloon.style.color = color; // Untuk ekor balon
        balloon.style.left = left + 'vw';
        balloon.style.animationDelay = delay + 's';
        balloon.style.animationDuration = duration + 's';

        container.appendChild(balloon);
    }
}

/* Opsional: Jika kamu ingin animasi teks (text-pop) terpicu HANYA 
  saat slide itu aktif di scroll, kamu bisa menggunakan IntersectionObserver 
  seperti di kode sebelumnya. Tapi untuk sekarang, animasi akan berjalan 
  saat halaman dimuat (setelah modal ditutup).
*/
