let burger = document.querySelector(".burger");
let burgerLines = document.querySelectorAll(".burger__line");
let mobileMenu = document.querySelector(".mobile-menu");








export function burgerOpen() {
  burger.addEventListener("click", () => {
    burgerLines[1].classList.toggle("burger__active-middle");
    burgerLines[0].classList.toggle("burger__active-first");
    burgerLines[2].classList.toggle("burger__active-twice");
    mobileMenu.classList.toggle("mobile-menu-active");
  });
}
