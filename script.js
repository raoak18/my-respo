const noBtn = document.getElementById("noBtn");
const yesBtn = document.getElementById("yesBtn");
const message = document.getElementById("loveMessage");
const music = document.getElementById("bgMusic");

const voices = [
  "Arre nahi!",
  "Pakad ke dikha 😜",
  "Galat button hai 😂",
  "YES dabao na 😏"
];

function speak(text) {
  const u = new SpeechSynthesisUtterance(text);
  u.lang = "hi-IN";
  speechSynthesis.cancel();
  speechSynthesis.speak(u);
}

function moveNoButton() {
  const parent = document.querySelector(".buttons");
  const maxX = parent.clientWidth - noBtn.offsetWidth;
  const maxY = parent.clientHeight - noBtn.offsetHeight;
  noBtn.style.left = Math.random() * maxX + "px";
  noBtn.style.top = Math.random() * maxY + "px";
  speak(voices[Math.floor(Math.random()*voices.length)]);
}

noBtn.addEventListener("mouseenter", moveNoButton);
noBtn.addEventListener("touchstart", moveNoButton);
noBtn.addEventListener("click", e => {
  e.preventDefault();
  moveNoButton();
});

yesBtn.addEventListener("click", () => {
  message.style.display = "block";
  yesBtn.style.display = "none";
  noBtn.style.display = "none";
  music.play().catch(()=>{});

  for (let i=0;i<80;i++){
    setTimeout(()=>{
      const h=document.createElement("div");
      h.className="heart";
      h.innerHTML="❤️";
      h.style.left=Math.random()*100+"vw";
      h.style.fontSize=Math.random()*30+20+"px";
      document.body.appendChild(h);
      setTimeout(()=>h.remove(),5000);
    },i*40);
  }
});
