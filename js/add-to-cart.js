"use strict";

const product = [
    { id: 0, image: "images/zero-buzz-oel.png", title: "Zero Buzz", price: 3 },
    { id: 1, image: "images/lemon-lush-oel.png", title: "Lemon Lush", price: 3 },
    { id: 2, image: "images/cherry-buzz-oel.png", title: "Cherry Buzz", price: 3 },
    { id: 3, image: "images/sharing.pakke.png", title: "Sharing Pack", price: 15 },
    { id: 4, image: "images/kortaeske-mockups.png", title: "Ice Breakers", price: 10 }
];

const categories = [...new Set(product)];
let i = 0;

document.getElementById('root').innerHTML = categories.map((item) => {
    return `
        <section class='box'>
            <section class='img-box'>
                <img class='images' src="${item.image}">
            </section>
            <section class='bottom'>
                <p>${item.title}</p>
                <h2>${item.price}.00 €</h2>
                <button onclick='addtocart(${i++})'>Add to cart</button>
            </section>
        </section>`;
}).join('');

let cart = [];

function addtocart(id) {
    let item = cart.find((product) => product.id === id);
    if (item) {
        item.quantity += 1;
    } else {
        let product = categories.find((p) => p.id === id);
        cart.push({ ...product, quantity: 1 });
    }
    displaycart();
}

function updateQuantity(id, amount) {
    let item = cart.find((product) => product.id === id);
    if (item) {
        item.quantity += amount;
        if (item.quantity <= 0) {
            cart = cart.filter((product) => product.id !== id);
        }
    }
    displaycart();
}

function displaycart() {
    let total = 0;
    document.getElementById('count').innerText = cart.length;
    
    if (cart.length === 0) {
        document.getElementById('cartItem').innerHTML = "Your cart is empty";
        document.getElementById('total').innerText = "€ 0.00";
    } else {
        document.getElementById("cartItem").innerHTML = cart.map((item) => {
            total += item.price * item.quantity;
            return `
                <section class='cart-item'>
                    <section class='row-img'>
                        <img class='rowimg' src="${item.image}">
                    </section>
                    <p style='font-size:12px;'>${item.title}</p>
                    <h2 style='font-size:15px;'>€${item.price * item.quantity}.00</h2>
                    <button class="knapper" onclick='updateQuantity(${item.id}, -1)'>-</button>
                    <span>${item.quantity}</span>
                    <button class="knapper" onclick='updateQuantity(${item.id}, 1)'>+</button>
                    <i class='fa-solid fa-trash' onclick='updateQuantity(${item.id}, -item.quantity)'></i>
                </section>`;
        }).join('');
        document.getElementById('total').innerText = `€ ${total}.00`;
    }
}

// Tilføjer en checkout-knap i sidebar
document.querySelector(".sidebar").innerHTML += `
    <button id="checkoutButton">Checkout</button>
`;

document.getElementById("checkoutButton").addEventListener("click", function() {
    alert("Proceeding to checkout!");
    cart = []; // Tømmer kurven når man checker ud
    displaycart();
});

// Sidebar toggle
document.addEventListener("DOMContentLoaded", function () {
    const cartIcon = document.querySelector(".cart");
    const cartSidebar = document.querySelector(".sidebar");

    cartIcon.addEventListener("click", function (event) {
        cartSidebar.classList.toggle("active");
        event.stopPropagation();
    });

    document.addEventListener("click", function (event) {
        if (!cartSidebar.contains(event.target) && !cartIcon.contains(event.target)) {
            cartSidebar.classList.remove("active");
        }
    });
});
