window.addEventListener("keydown", e => {
  const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
  const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
  if (!audio) return; // stop the function from running all together
  audio.currentTime = 0;
  audio.play();
  key.classList.add("playing");
  setTimeout(() => {}, 0.07);
});

function removeTransition(key) {
    if (key.propertyName !== "transform") return; 
    this.classList.remove("playing");
}

const keys = document.querySelectorAll(".key");
keys.forEach((key) => key.addEventListener("transitionend", removeTransition));
