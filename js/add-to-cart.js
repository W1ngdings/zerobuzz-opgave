"use-strict";

const product = [
    {
        id:0,
        image: "images/zero-buzz-oel.png",
        title: "Zero Buzz",
        price: 3,
    },
    {
        id:1,
        image: "images/lemon-lush-oel.png",
        title: "Lemon Lush",
        price: 3,
    },
    {
        id:2,
        image: "images/cherry-buzz.oel.png",
        title: "Cherry Buzz",
        price: 3,
    },
    {
        id:3,
        image: "images/sharing.pakke.png",
        title: "Sharing Pack",
        price: 15,
    },
    {
        id:4,
        image: "images/kortaeske.png",
        title: "Ice Breakers",
        price: 10,
    }
]

const categories = [ ...new Set(product.map(item => 
    { return item}))]
    let i = 0;
document.getElementById('root').innerHTML = categories.map((item) =>
 {
    var {image, title, price} = item;
    return (
        `<section class='box'>
        <section class='img-box'>
            <img class='images' src=${image}></img>
        </section>
        <section class='bottom'>
        <p>${title}</p>
        <h2>${price}.00 €</h2>` +
        "<button onclick='addtocart(" + i++ + ")'>Add to cart</button>" +
        `</section>
        </section>`
    )
 }).join('');

