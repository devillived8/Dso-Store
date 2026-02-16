let catalogMain = document.querySelector(".catalog__main");

const cardsData = [
  {
    title: "Маг 80 уровня",
    price: "15000р",
    class: "mage",
    image: "./img/mage1.jpg",
    server: "grimmage",
  },
  {
    title: "Воин 90 уровня",
    price: "20000р",
    class: "warrior",
    image: "./img/mage2.jpg",
    server: "grimmage",
  },
    {
    title: "Воин 90 уровня",
    price: "20000р",
    class: "warrior",
    image: "./img/mage2.jpg",
    server: "grimmage",
  },
    {
    title: "Воин 90 уровня",
    price: "20000р",
    class: "warrior",
    image: "./img/mage2.jpg",
    server: "grimmage",
  },
    {
    title: "Воин 90 уровня",
    price: "20000р",
    class: "warrior",
    image: "./img/mage2.jpg",
    server: "grimmage",
  },
 
];

function createCard(cardData) {
  return `
    <div class="card">
      <img src="${cardData.image}" class="card__img" alt="${cardData.title}">
      <h2 class="card__title">${cardData.title}</h2>
      <p class="card__text card__class">Класс: ${cardData.class}</p>
      <p class="card__text card__server">Сервер: ${cardData.server}</p>
      <p class="card__text card__price">${cardData.price}</p>
    </div>
  `;
}

export function renderCatalog() {
  cardsData.forEach((card) => {
    catalogMain.insertAdjacentHTML("beforeend", createCard(card));
  });
}

export function renderAccount() {
  let catalogMain = document.querySelector(".catalog__main");
  catalogMain.addEventListener("click", (e) => {
      if (e.target.tagName == "IMG") {
      let infoAccount =  e.target.closest(".card");
      if(infoAccount){
        let title = infoAccount.querySelector('.card__title').textContent;
        let className = infoAccount.querySelector('.card__class').textContent;
        let server = infoAccount.querySelector('.card__server').textContent;
        let price = infoAccount.querySelector('.card__price').textContent;
        let img = infoAccount.querySelector('.card__img').src;

        let info = {title, className, server, price, img};
        
        sessionStorage.setItem('account', JSON.stringify(info));
        window.location.href = 'account.html';

      }
  };
  });

}
