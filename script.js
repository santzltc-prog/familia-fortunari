const audio = document.getElementById("audio");
const playBtn = document.getElementById("play");
const volume = document.getElementById("volume");

audio.volume = volume.value;

playBtn.onclick = () => {
    if (audio.paused) {
        audio.play();
        playBtn.textContent = "⏸️";
    } else {
        audio.pause();
        playBtn.textContent = "▶️";
    }
};

volume.oninput = () => {
    audio.volume = volume.value;
};
