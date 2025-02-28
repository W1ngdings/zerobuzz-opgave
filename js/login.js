"use strict"

document.getElementById("login-container").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form submission

    const name = document.getElementById("name").value;
    localStorage.setItem("username", name); // Store name in LocalStorage

    window.location.href = "min-profil.html"; // Redirect to the welcome page
});



const name = localStorage.getItem("username") || "Guest"; 
        document.getElementById("greeting").textContent = "Hello " + name + "!";
