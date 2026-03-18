function startExperience(playMusic) {
    document.getElementById('music-modal').style.display = 'none';
    
    if (playMusic) {
        let audio = document.getElementById('bgm');
        audio.play().catch(e => console.log("Audio diblokir: ", e));
    }

    createBalloons(30);
}

function createBalloons(num) {
    const container = document.getElementById('balloon-container');
    const colors = ['#ff9a9e', '#fad0c4', '#a18cd1', '#fbc2eb', '#ffacc5'];

    for (let i = 0; i < num; i++) {
        const balloon = document.createElement('div');
        balloon.className = 'balloon';
        
        const color = colors[Math.floor(Math.random() * colors.length)];
        const left = Math.random() * 100;
        const delay = Math.random() * 5;
        const duration = 6 + Math.random() * 4;

        balloon.style.backgroundColor = color;
        balloon.style.color = color;
        balloon.style.left = left + 'vw';
        balloon.style.animationDelay = delay + 's';
        balloon.style.animationDuration = duration + 's';

        container.appendChild(balloon);
    }
}
