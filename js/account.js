import { burgerOpen } from "./burger.js";
import { showModal, closeModal } from "./modalLogin.js";

let mainContainer = document.querySelector(".main__container");
let info = JSON.parse(sessionStorage.getItem("account"));

console.log(info.img);

function createAccountInfo(info) {
  return `
    <div class="account">
      <img src="${info.img}" class="account__img" alt="${info.title}">
      <h2 class="account__title">${info.title}</h2>
      <p class="account__text account__class">${info.className}</p>
      <p class="account__text account__server">${info.server}</p>
      <p class="account__text account__price">${info.price}</p>
      <a href="https://vk.com/ipixel" target="_blank"><button class="account__btn">Купить</button></a>
    </div>
  `;
}

function renderAccount() {
  mainContainer.insertAdjacentHTML("beforeend", createAccountInfo(info));
}

renderAccount();
burgerOpen();
showModal();
closeModal();
// sessionStorage.removeItem('account');
