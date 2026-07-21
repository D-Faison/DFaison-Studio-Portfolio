const year = document.getElementById("year");
if (year) {
  year.textContent = new Date().getFullYear();
}

const slides = Array.from(document.querySelectorAll(".gallery-slide"));
const dots = Array.from(document.querySelectorAll(".dot"));
const buttons = Array.from(document.querySelectorAll(".gallery-btn"));

let currentSlide = 0;
let timer;

function showSlide(index) {
  currentSlide = (index + slides.length) % slides.length;

  slides.forEach((slide, slideIndex) => {
    slide.classList.toggle("active", slideIndex === currentSlide);
  });

  dots.forEach((dot, dotIndex) => {
    dot.classList.toggle("active", dotIndex === currentSlide);
  });
}

function startAutoPlay() {
  clearInterval(timer);
  timer = window.setInterval(() => showSlide(currentSlide + 1), 5000);
}

dots.forEach((dot, index) => {
  dot.addEventListener("click", () => {
    showSlide(index);
    startAutoPlay();
  });
});

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    const direction = button.textContent.includes("❯") ? 1 : -1;
    showSlide(currentSlide + direction);
    startAutoPlay();
  });
});

showSlide(0);
startAutoPlay();
