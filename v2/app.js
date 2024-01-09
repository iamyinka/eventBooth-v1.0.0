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
