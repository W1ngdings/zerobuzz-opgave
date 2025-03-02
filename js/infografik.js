"use-strict";

document.addEventListener("DOMContentLoaded", function() {
    console.log("JavaScript is running!");

    const ingredients = document.querySelectorAll(".ingredient");
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            console.log("Observer registrerer:", entry.target); 
            if (entry.isIntersecting) {
                console.log("Element er synligt:", entry.target);
                entry.target.classList.add("show");
            }
        });
    }, { threshold: 0.5 });

    ingredients.forEach(ingredient => observer.observe(ingredient));
});