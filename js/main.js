import { renderCatalog, renderAccount, cardsData } from './card.js';
import { burgerOpen } from './burger.js';
import {showModal, closeModal} from './modalLogin.js';
import { initFilter } from './filter.js';
 

document.addEventListener('DOMContentLoaded', () => {


    initFilter();
    burgerOpen();
    showModal();
    closeModal();



    renderAccount();
 
  
});