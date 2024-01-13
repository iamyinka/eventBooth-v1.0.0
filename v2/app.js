const bottomNavItem = document.querySelectorAll(".bottom-nav__link span");

window.addEventListener("scroll", function (e) {
  if (this.scrollY > 50) {
    bottomNavItem.forEach((item) => {
      item.classList.add("default");
    });
  } else {
    bottomNavItem.forEach((item) => {
      item.classList.remove("default");
    });
  }
});

// Confirm Forgot Password
function showConfirmResetAlert() {
  Swal.fire({
    title: "Are you sure you want to reset your password?",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    textColor: "#fff",
    cancelButtonColor: "#d33",
    confirmButtonText: "Yes!",
  }).then((result) => {
    if (result.isConfirmed) {
      Swal.fire("Password Reset Activated!", "Pls, check your mail for a reset link.", "success");
    }
  });
}

const navBurger = document.querySelector("#navBurger");
const responsiveNav = document.querySelector(".responsiveNav__navbar");
const closeResponsiveNav = document.querySelector("#closeResponsiveNav");
const body = document.querySelector("body");
const bottomNav = document.querySelector("#bottomNav");

navBurger.addEventListener("click", function () {
  responsiveNav.classList.add("showResponsiveNav");
  closeResponsiveNav.classList.add("showResponsiveNav");
  body.classList.add("reduceBodyHeight");
  bottomNav.style.display = "none";
});

closeResponsiveNav.addEventListener("click", function () {
  responsiveNav.classList.remove("showResponsiveNav");
  closeResponsiveNav.classList.remove("showResponsiveNav");
  body.classList.remove("reduceBodyHeight");
  bottomNav.style.display = "flex";
});


// Event Details
var items = document.querySelectorAll('.item');
var totalQuantityElement = document.getElementById('totalQuantity');
var totalPriceElement = document.getElementById('totalPrice');
var totalQuantity = 0;
var totalPrice = 0;

items.forEach(function (item) {
    var quantityElement = item.querySelector('.quantity .value');
    var priceElement = item.querySelector('.sub-total');
    var pricePerTicket = parseFloat(item.querySelector('.price').innerText.split('$')[1]);

    item.querySelector('button:first-child').addEventListener('click', function () {
        updateQuantityAndPrice('-', parseInt(quantityElement.innerText), pricePerTicket);
    });

    item.querySelector('button:last-child').addEventListener('click', function () {
        updateQuantityAndPrice('+', parseInt(quantityElement.innerText), pricePerTicket);
    });
});

function updateQuantityAndPrice(operator, itemQuantity, itemPrice) {
    if (operator === '-' && itemQuantity > 0) {
        totalQuantity--;
        totalPrice -= itemPrice;
    } else if (operator === '+') {
        totalQuantity++;
        totalPrice += itemPrice;
    }

    totalQuantityElement.innerText = totalQuantity;
    totalPriceElement.innerText = '$' + totalPrice;
}

function buyNow() {
    alert('Buying now! Total Quantity: ' + totalQuantity + ', Total Price: $' + totalPrice);
    // You can add additional logic for purchasing here
}