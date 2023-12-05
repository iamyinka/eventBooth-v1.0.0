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
