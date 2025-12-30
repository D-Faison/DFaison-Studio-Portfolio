//Slideshow Functionality

let slideImageIndex = 1;
showSlides(slideImageIndex);
//Next and Previous buttons
function plusSlides(n){
    showSlides(slideImageIndex += n);
}

function showSlides(n){
    let slides = document.getElementsByClassName("individualSlide");
    if (n > slides.length) {slideImageIndex = 1}
    if (n < 1) {slideImageIndex = slides.length}
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[slideImageIndex-1].style.display = "block";
}


//Hamburger Menu Functionality
const heroSection = document.querySelector(".heroSection");
const menu = document.querySelector(".menu");
const hamburger = document.querySelector(".hamburgerMenu");

let menuOpen = false;

// Hamburger click toggle
hamburger.addEventListener("click", () => {
  menuOpen = !menuOpen;
  menu.classList.toggle("open", menuOpen);
});

// Observe hero section
const observer = new IntersectionObserver(
  ([entry]) => {
    if (entry.isIntersecting) {
      // HERO VISIBLE
      hamburger.style.display = "none";
      menu.classList.remove("collapsed", "overlay", "open");
      menuOpen = false;
    } else {
      // SCROLLED PAST HERO
      hamburger.style.display = "block";
      menu.classList.add("collapsed", "overlay");
    }
  },
  { threshold: 0.25 }
);

observer.observe(heroSection);

// Starfield Background
const canvas = document.getElementById("starfield");
const ctx = canvas.getContext("2d");

let stars = [];
const STAR_COUNT = 120;

function resizeCanvas() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
}
window.addEventListener("resize", resizeCanvas);
resizeCanvas();

function createStars() { // Initialize star positions and properties
  stars = [];
  for (let i = 0; i < STAR_COUNT; i++) {
    stars.push({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      radius: Math.random() * 1.5 + 0.5, // Star size
      alpha: Math.random(),   // Initial brightness 
      twinkle: Math.random() * 0.02 + 0.005 // Twinkle speed
    });
  }
}

function drawStars() { // Draw and animate stars
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  for (let star of stars) {
    star.alpha += star.twinkle; // Update brightness
    if (star.alpha <= 0 || star.alpha >= 1) { // Reverse twinkle direction
      star.twinkle *= -1;
    }

    ctx.beginPath(); // Draw star
    ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);// Full circle
    ctx.fillStyle = `rgba(255, 255, 255, ${star.alpha})`;
    ctx.fill();
  }

  requestAnimationFrame(drawStars);// Loop the animation
}

createStars();
drawStars();
