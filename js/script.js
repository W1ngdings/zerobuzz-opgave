"use strict";

let currentIndex = 0;
const slides = document.querySelectorAll('.slide');
const totalSlides = slides.length;
const slider = document.querySelector('.slider');

// Clone the first slide and append it to the end of the slider
const firstSlide = slides[0].cloneNode(true);
slider.appendChild(firstSlide);

function moveSlide(direction) {
  // Calculate the new index based on the direction
  if (direction === 'left') {
    currentIndex = (currentIndex === 0) ? totalSlides - 1 : currentIndex - 1;
  } else if (direction === 'right') {
    currentIndex = (currentIndex === totalSlides) ? 0 : currentIndex + 1;
  }

  // Apply the transform to move the slides
  const offset = -currentIndex * 100;
  slider.style.transition = "transform 0.5s ease-in-out";
  slider.style.transform = `translateX(${offset}%)`;

  // When we reach the last slide (which is a clone), jump back to the first slide without animation
  if (currentIndex === totalSlides) {
    setTimeout(() => {
      slider.style.transition = "none"; // Remove transition
      slider.style.transform = "translateX(0%)"; // Jump to the first slide
      currentIndex = 0; // Reset index to the first slide
      setTimeout(() => {
        slider.style.transition = "transform 0.5s ease-in-out"; // Restore transition
      }, 50);
    }, 500); // Wait for the transition to finish
  }
}
