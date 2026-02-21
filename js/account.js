import { burgerOpen } from "./burger.js";
import { showModal, closeModal } from "./modalLogin.js";
import { paintClass } from "./card.js";
import { openGallery, closeGallery } from "./gallery.js";

let mainContainer = document.querySelector(".main__container");
let info = JSON.parse(sessionStorage.getItem("account"));

function createAccountInfo(info) {
  const colorClass = paintClass(info.className);

  return `
    <div class="account">
  <div  class="account__wrapper">
      <img src="${info.img}" class="account__img" alt="${info.title}">
  </div>
      <h2 class="account__title">${info.title}</h2>
      <p class="account__text account__class">Класс: <span class="${colorClass} card__span">${info.className}</span></p>
      <p class="account__text account__server">${info.server}</p>
      <div class="account__price-wrapper">
      <p class="account__text account__price">${info.price}</p>
      <a href="https://vk.com/ipixel" target="_blank"><button class="account__btn">Купить</button></a>
      </div>
    </div>
  `;
}

function renderAccount() {
  mainContainer.insertAdjacentHTML("beforeend", createAccountInfo(info));
  openGallery();
  closeGallery();
}

renderAccount();
burgerOpen();
showModal();
closeModal();

// sessionStorage.removeItem('account');
