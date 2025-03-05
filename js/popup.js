'use strict';

document.addEventListener("DOMContentLoaded", function () {
    let popup = document.createElement("div");
    popup.id = "popup";
    popup.style.display = "none"; // Popup starter skjult

    popup.innerHTML = `
        <section class="popup-container">
            <section class="popup-content">
                <img id="tilbud" src="images/tilbuds-popup.png" alt="Popup billede med tilbud">
                <button id="closePopup">Luk</button>
            </section>
        </section>
    `;

    document.body.appendChild(popup);

    document.getElementById("closePopup").addEventListener("click", function () {
        popup.style.display = "none";
    });

    setTimeout(() => {
        popup.style.display = "block"; // Viser popuppen efter 5 sekunder
    }, 5000);
});
