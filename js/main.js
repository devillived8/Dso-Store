import { renderCatalog, renderAccount, cardsData } from './card.js';
import { burgerOpen } from './burger.js';
import {showModal, closeModal} from './modalLogin.js';
import { initSortButtons } from './filter.js';
 

document.addEventListener('DOMContentLoaded', () => {


    initSortButtons();
    burgerOpen();
    showModal();
    closeModal();


  const container = document.querySelector('.catalog__main');
  if (container) {
    renderCatalog(container);
    renderAccount();
 
  }
});