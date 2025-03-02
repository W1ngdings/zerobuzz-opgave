

document.addEventListener("DOMContentLoaded", function() {
    const ingredients = document.querySelectorAll(".ingredient");
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("show");
            }
        });
    }, { threshold: 0.5 }); 

    ingredients.forEach(ingredient => observer.observe(ingredient));
});