"use strict"

document.addEventListener("DOMContentLoaded", function () {
    const loginForm = document.querySelector(".login-form");
    const nameInput = document.getElementById("name");
    const emailInput = document.getElementById("email");
    const passwordInput = document.getElementById("code");

    if (loginForm) {
        loginForm.addEventListener("submit", function (event) {
            event.preventDefault(); 

            const userName = nameInput.value.trim();
            const userEmail = emailInput.value.trim();
            const userPassword = passwordInput.value.trim();

            if (userName && userEmail && userPassword) {
                
                localStorage.setItem("userName", userName);
                localStorage.setItem("userEmail", userEmail);

                
                window.location.href = "min-profil.html"; 
            } else {
                alert("Please fill in all fields.");
            }
        });
    }

    
    const greeting = document.getElementById("greeting");
    if (greeting) {
        const storedName = localStorage.getItem("userName");

        if (storedName) {
            greeting.textContent = `Welcome to your profile, ${storedName}`;
        } else {
            console.log("No stored name found.");
        }
    }
});