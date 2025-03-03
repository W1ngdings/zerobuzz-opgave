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
        image: "images/cherry-buzz-oel.png",
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
        image: "images/kortaeske-mockups.png",
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

 var cart = [];

function addtocart(a){
    cart.push({...categories[a]});
    displaycart();
}

function delElement(a){
    cart.splice(a,1);
    displaycart();
}

function displaycart(a){
    let j = 0, total=0;
    document.getElementById('count').innerHTML = cart.length;
    if (cart.length ==0){
        document.getElementById('cartItem').innerHTML = "Your cart is empty";
        document.getElementById('total').innerHTML = "€ "+0+"0.00";
    }
    else {
        document.getElementById("cartItem").innerHTML = cart.map((items) => 
            {
                var {image, title,price} = items;
                total=total+price;
                document.getElementById('total').innerHTML = "€ "+total+".00";
                return (
                    `<section class='cart-item'>
                    <section class='row-img'>
                        <img class='rowimg' src=${image}>
                    </section>
                    <p style = 'font-size:12px;'>${title}</p>
                    <h2 style = 'font-size:15px;'>${price}.00</h2>` +
                    "<i class = 'fa-solid fa-trash' onclick='delElement("+(j++)+")'></i></section>"
                );
        
        }).join('');
    }
}

document.addEventListener("DOMContentLoaded", function () {
    const cartIcon = document.querySelector(".cart"); // Kurv-ikon
    const cartSidebar = document.querySelector(".sidebar"); // Selve kurven

    // Toggle kurven, når man klikker på kurv-ikonet
    cartIcon.addEventListener("click", function (event) {
        cartSidebar.classList.toggle("active");
        event.stopPropagation(); // Forhindrer klik-eventet i at sprede sig
    });

    // Luk kurven, hvis der klikkes udenfor den
    document.addEventListener("click", function (event) {
        if (!cartSidebar.contains(event.target) && !cartIcon.contains(event.target)) {
            cartSidebar.classList.remove("active");
        }
    });
});
