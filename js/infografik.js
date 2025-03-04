"use-strict";
document.addEventListener("DOMContentLoaded", function() {
    const ingredients = document.querySelectorAll("[class^='ingredient']");
    
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
           console.log(entry) 
            if (entry.isIntersecting) {
                entry.target.classList.add("show");
            }else{
                entry.target.classList.remove("show");
           }
        });
    });

    ingredients.forEach((el) => observer.observe(el));

    ingredients.forEach(ingredient => observer.observe(ingredient));
});


