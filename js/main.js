import { renderCatalog, renderAccount } from './card.js';
import { burgerOpen } from './burger.js';
import {showModal, closeModal} from './modalLogin.js';

 

document.addEventListener('DOMContentLoaded', () => {



    burgerOpen();
    showModal();
    closeModal();


  const container = document.querySelector('.catalog__main');
  if (container) {
    renderCatalog(container);
    renderAccount();
 
  }
});