"use-strict";

document.addEventListener("DOMContentLoaded", function() {
    const ingredients = document.querySelectorAll("[class^='ingredient']");
    
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
           console.log("Observer registrerer:", entry.target); 
            if (entry.isIntersecting) {
                console.log("Element er synligt:", entry.target);
                entry.target.classList.add("show");
           }
        });
    }, { threshold: 1 });

    ingredients.forEach(ingredient => observer.observe(ingredient));
});








//document.addEventListener("DOMContentLoaded", function() {
   // const ingredients = document.querySelectorAll("[class^='ingredient']");
    
    //const observer = new IntersectionObserver(entries => {
      //  entries.forEach(entry => {
         //  console.log("Observer registrerer:", entry.target); 
           // if (entry.isIntersecting) {
              //console.log("Element er synligt:", entry.target);
               // entry.target.classList.add("show");
          // }
        //});
    //}, { threshold: 1 });

  //  ingredients.forEach(ingredient => observer.observe(ingredient));
//});
