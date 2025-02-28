"use strict"

/*
document.getElementById("login-container").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form submission

    const name = document.getElementById("name").value;
    localStorage.setItem("username", name); // Store name in LocalStorage

    window.location.href = "min-profil.html"; // Redirect to the welcome page
});



const name = localStorage.getItem("username") || "Guest"; 
        document.getElementById("greeting").textContent = "Hello " + name + "!";
*/


document.addEventListener("DOMContentLoaded", function () {
    const loginForm = document.querySelector(".login-form");
    const nameInput = document.getElementById("name");
    const emailInput = document.getElementById("email");
    const passwordInput = document.getElementById("code");

    if (loginForm) {
        loginForm.addEventListener("submit", function (event) {
            event.preventDefault(); // Prevent form submission

            const userName = nameInput.value.trim();
            const userEmail = emailInput.value.trim();
            const userPassword = passwordInput.value.trim();

            if (userName && userEmail && userPassword) {
                // Save user info to localStorage
                localStorage.setItem("userName", userName);
                localStorage.setItem("userEmail", userEmail);

                // Redirect to profile page
                window.location.href = "min-profil.html"; // Ensure this matches your actual profile page filename
            } else {
                alert("Please fill in all fields.");
            }
        });
    }

    // Profile page logic
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