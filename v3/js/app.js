const ticketPrice = 185.00;
let quantity = 1;

const quantityElem = document.getElementById('quantity');
const subtotalElem = document.getElementById('subtotal');
const totalQuantityElem = document.getElementById('total-quantity');
const totalPriceElem = document.getElementById('total-price');

document.getElementById('increase-btn').addEventListener('click', () => {
    quantity++;
    updateValues();
});

document.getElementById('decrease-btn').addEventListener('click', () => {
    if (quantity > 1) {
        quantity--;
        updateValues();
    }
});

function updateValues() {
    quantityElem.textContent = quantity;
    const subtotal = (quantity * ticketPrice).toFixed(2);
    subtotalElem.textContent = subtotal;
    totalQuantityElem.textContent = quantity;
    totalPriceElem.textContent = subtotal;
}

/*=============== SWIPER JS ===============*/
let swiperCards = new Swiper(".card__content", {
    loop: false,
    spaceBetween: 32,
    grabCursor: true,

    pagination: {
        el: ".swiper-pagination",
        clickable: false,
        dynamicBullets: false,
    },

    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    }
});