import { renderCatalog, renderAccount } from './card.js';
import { burgerOpen } from './burger.js';


document.addEventListener('DOMContentLoaded', () => {
  const container = document.querySelector('.catalog__main');
  if (container) {
    renderCatalog(container);
    renderAccount();
    burgerOpen();
  }
});