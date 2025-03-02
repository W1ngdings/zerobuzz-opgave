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
