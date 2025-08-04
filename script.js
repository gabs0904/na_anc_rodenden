const fortunes = [
  "You're a gift to everyone around you 🎁",
  "May your birthday be as sweet as cake 🍰",
  "Your smile lights up rooms like candles on cake 🕯️",
  "Big hugs and even bigger dreams 💫",
  "You’re magic in human form ✨",
  "Wishing you endless laughter and love 💕",
  "Your kindness makes the world brighter 🌈",
];

function revealFortune() {
  const fortuneText = document.getElementById("fortuneText");
  const fortuneMessage = document.getElementById("fortuneMessage");

  const randomFortune = fortunes[Math.floor(Math.random() * fortunes.length)];
  fortuneMessage.textContent = randomFortune;
  fortuneText.classList.add("show");

  setTimeout(() => {
    cookieImage.src = "cookie-closed.png";
  }, 1000);
}



let letterOpened = false;

function openLetter() {
  const envelopeImg = document.getElementById("envelopeImage");
  const letterReveal = document.getElementById("letterReveal");

  if (!letterOpened) {
    envelopeImg.src = "envelope-closed.png"; // make sure this image exists
    letterReveal.classList.add("show");
    letterOpened = true;
  }
}

function spotlight(type) {
  const letterReveal = document.getElementById("letterReveal");
  letterReveal.classList.add("spotlight");

  const items = letterReveal.querySelectorAll(".item");
  items.forEach(item => {
    item.classList.remove("spotlight-active");
  });

  if (type === 'letter') {
    letterReveal.querySelector(".letter-item").classList.add("spotlight-active");
  } else if (type === 'photo') {
    letterReveal.querySelector(".photo-item").classList.add("spotlight-active");
  }
}

