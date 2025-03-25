const audio = document.getElementById("audio");
const vinyl = document.querySelector(".vinyl");
const tonearm = document.getElementById("tonearm");
const playPauseBtn = document.getElementById("playPause");
const volumeControl = document.getElementById("volumeControl");

let isPlaying = false;

// Vinyl collection
const albums = [
    { cover: "album1.jpg", track: "track1.mp3" },
    { cover: "album2.jpg", track: "track2.mp3" },
    { cover: "album3.jpg", track: "track3.mp3" }
];

// Generate vinyl records in the library
const library = document.querySelector(".vinyl-list");

albums.forEach(album => {
    const record = document.createElement("div");
    record.classList.add("vinyl-record");
    record.style.backgroundImage = `url(${album.cover})`;
    record.draggable = true;
    record.dataset.track = album.track;

    record.addEventListener("dragstart", (e) => {
        e.dataTransfer.setData("track", album.track);
    });

    library.appendChild(record);
});

// Drop vinyl on turntable
const turntable = document.getElementById("turntable");

turntable.addEventListener("dragover", (e) => e.preventDefault());

turntable.addEventListener("drop", (e) => {
    e.preventDefault();
    const track = e.dataTransfer.getData("track");

    audio.src = track;
    playVinyl();
});

// Play / Pause function
function playVinyl() {
    if (!isPlaying) {
        audio.play();
        isPlaying = true;
        vinyl.style.animationDuration = "3s";
        tonearm.style.transform = "rotate(20deg)";
        playPauseBtn.textContent = "⏸";
    } else {
        audio.pause();
        isPlaying = false;
        vinyl.style.animationDuration = "0s";
        tonearm.style.transform = "rotate(0deg)";
        playPauseBtn.textContent = "▶️";
    }
}

playPauseBtn.addEventListener("click", playVinyl);

// Volume control
volumeControl.addEventListener("input", () => {
    audio.volume = volumeControl.value;
});