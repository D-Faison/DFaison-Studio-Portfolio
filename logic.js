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
