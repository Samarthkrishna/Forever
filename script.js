const textEl = document.getElementById("text");
const imageEl = document.getElementById("image");
const nextBtn = document.getElementById("nextBtn");
const playBtn = document.getElementById("playBtn");
const audio = document.getElementById("audio");

const messages = [
  "You know what I like the most?",
  "Peaceful skies ☁️",
  "Silent nights 🌙",
  "And… you ❤️"
];

const images = [
  "day.jpg",
  "night.jpg",
  "day.jpg",
  "night.jpg"
];

let index = 0;
let charIndex = 0;
let typingInterval;

// 💌 Typing effect function
function typeText(text) {
  clearInterval(typingInterval);
  textEl.textContent = "";
  charIndex = 0;

  typingInterval = setInterval(() => {
    if (charIndex < text.length) {
      textEl.textContent += text.charAt(charIndex);
      charIndex++;
    } else {
      clearInterval(typingInterval);
    }
  }, 60); // typing speed (romantic slow)
}

// Initial typing
typeText(messages[0]);

nextBtn.addEventListener("click", () => {
  index++;

  // change image with fade
  imageEl.style.opacity = 0;
  setTimeout(() => {
    imageEl.src = images[index % images.length];
    imageEl.style.opacity = 1;
  }, 200);

  // typing animation for text
  typeText(messages[index % messages.length]);
});

playBtn.addEventListener("click", () => {
  audio.play();
  playBtn.innerText = "🎶 Playing...";
  playBtn.disabled = true;
});
