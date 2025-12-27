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