const inputRange = document.getElementById("range");
const vaL = document.getElementById("val");
const val2 = document.getElementById("val2");
const audio = new Audio("song1.mp3");
const songClick = document.querySelector(".names h3");
const playBtn = document.querySelector(".play-btn");

function addRange() {
  let progress = Math.floor((100 / audio.duration) * audio.currentTime);
  inputRange.style.background = `linear-gradient(to right, #0095ff ${progress}%, #ccc ${progress}%)`;
  inputRange.value = progress
  vaL.innerHTML = formatTime(audio.currentTime)
  val2.innerHTML = audio.duration ? formatTime(audio.duration) : '0:00';
}

function formatTime(seconds) {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = Math.floor(seconds % 60);
    return `${minutes}:${remainingSeconds < 10 ? '0' : ''}${remainingSeconds}`;
  }
  

playBtn.addEventListener("click", () => {
    console.log("clicked");
  
    if (audio.paused) {
      audio.play();
      playBtn.innerHTML = `<i class="fa-solid fa-pause"></i>`;
      playBtn.classList.remove('fa-play');
    } else {
        playBtn.classList.remove('fa-pause');
      playBtn.innerHTML = `<i class="fa-solid fa-play"></i>`;
      audio.pause();
    }
  });

audio.addEventListener('timeupdate', e => {
    addRange();
})

inputRange.addEventListener('input', e => {
    let newTime = (inputRange.value * audio.duration) / 100;
    audio.currentTime = newTime;
})
