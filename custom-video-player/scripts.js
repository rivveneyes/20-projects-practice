const video = document.getElementById("video");
const play = document.getElementById("play");
const stopvideo = document.getElementById("stop");
const progress = document.getElementById("progress");
const timestamp = document.getElementById("timestamp");

function updateProgress() {
  progress.value = (video.currentTime / video.duration) * 100;

  let mins = Math.floor(video.currentTime / 60);
  if (mins < 10) {
    mins = "0" + String(mins);
  }
  let seconds = Math.floor(video.currentTime % 60);
  if (mins < 10) {
    seconds = "0" + String(seconds);
  }
  console.log("hit");
  timestamp.innerHTML = `${mins}:${seconds}`;
}

function toggleVideoStatus() {
  if (video.paused) {
    video.play();
  } else {
    video.pause();
  }
}
function updatePLayIcon() {
  if (video.paused) {
    play.innerHTML = '<i class="fas fa-play fa-2x"></i>';
  } else {
    play.innerHTML = '<i class="fas fa-pause fa-2x"></i>';
  }
}

function setVideoProgress() {
  video.currentTime = +(progress.value * video.duration) / 100;
}
function stopVideo() {
  video.currentTime = 0;
  video.pause();
}

video.addEventListener("click", toggleVideoStatus);
video.addEventListener("pause", updatePLayIcon);
video.addEventListener("play", updatePLayIcon);
video.addEventListener("timeupdate", updateProgress);

play.addEventListener("click", toggleVideoStatus);

stopvideo.addEventListener("click", stopVideo);

progress.addEventListener("change", setVideoProgress);
