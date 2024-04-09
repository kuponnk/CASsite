// script.js

const videoFrame = document.getElementById('videoFrame');
const videos = ['https://www.youtube.com/embed/DhKJai6I8p4', 'https://www.youtube.com/embed/ZSzaEqAyAEc'];

let currentVideoIndex = 0;

function nextVideo() {
    currentVideoIndex = (currentVideoIndex + 1) % videos.length;
    updateVideo();
}

function prevVideo() {
    currentVideoIndex = (currentVideoIndex - 1 + videos.length) % videos.length;
    updateVideo();
}

function updateVideo() {
    videoFrame.src = videos[currentVideoIndex];
}
