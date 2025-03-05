"use strict";

let currentIndex = 0;
const slides = document.querySelectorAll('.slide');
const totalSlides = slides.length;
const slider = document.querySelector('.slider');

// Kloner det første slide og tilføjer det til slut i slider. 
const firstSlide = slides[0].cloneNode(true);
slider.appendChild(firstSlide);

function moveSlide(direction) {
  // Beregner det nye index baseret på retningen.
  if (direction === 'left') {
    currentIndex = (currentIndex === 0) ? totalSlides - 1 : currentIndex - 1;
  } else if (direction === 'right') {
    currentIndex = (currentIndex === totalSlides) ? 0 : currentIndex + 1;
  }

  // Anvender transform til at flytte mellem slides.
  const offset = -currentIndex * 100;
  slider.style.transition = "transform 0.5s ease-in-out";
  slider.style.transform = `translateX(${offset}%)`;

  // Slide går tilbage til start uden animation når vi når til det klonede slide.
  if (currentIndex === totalSlides) {
    setTimeout(() => {
      slider.style.transition = "none"; 
      slider.style.transform = "translateX(0%)"; 
      currentIndex = 0; 
      setTimeout(() => {
        slider.style.transition = "transform 0.5s ease-in-out"; 
      }, 50);
    }, 500); 
  }
}
