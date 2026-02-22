let catalogMain = document.querySelector(".catalog__main");

// Моковые данные для карточек
export const cardsData = [
  {
    title: "Маг 80 уровня",
    price: "15000р",
    class: "Spellweaver",
    image: "./img/mage1.jpg",
    server: "Grimmag",
  },
  {
    title: "Воин 90 уровня",
    price: "10000р",
    class: "Ranger",
    image: "./img/mage2.jpg",
    server: "Werian",
  },
  {
    title: "Воин 90 уровня",
    price: "5000р",
    class: "Steam-mechanicus",
    image: "./img/mage2.jpg",
    server: "Heredur",
  },
  {
    title: "Воин 90 уровня",
    price: "200р",
    class: "Dragonknight",
    image: "./img/mage2.jpg",
    server: "Grimmag",
  },
  {
    title: "Воин 90 уровня",
    price: "6000р",
    class: "Dragonknight",
    image: "./img/mage2.jpg",
    server: "Grimmag",
  },
];

// Форматирование цены для карточек
function formatPrice(price) {
  let numberPart = price.replace("р", "");
  let length = numberPart.length;

  switch (length) {
    case 4:
      return numberPart[0] + "." + numberPart.slice(1) + "р";

    case 5:
      return numberPart.slice(0, 2) + "." + numberPart.slice(2) + "р";

    default:
      return price;
  }
}

// Цвет классов
export function paintClass(className) {
  switch (className) {
    case "Dragonknight":
      return "card--warrior";
    case "Spellweaver":
      return "card--mage";
    case "Ranger":
      return "card--ranger";
    case "Steam-mechanicus":
      return "card--dwarf";
    default:
      return "";
  }
}

// Создание карточек
export function createCard(cardData) {
  const formattedPrice = formatPrice(cardData.price);
  const cardClass = `card card--${cardData.class}`;
  const colorClass = paintClass(cardData.class);

  return `
    <div class="${cardClass}">
      <img src="${cardData.image}" class="card__img" alt="${cardData.title}">
      <h2 class="card__title">${cardData.title}</h2>
      <p class="card__text card__class">Класс: <span class="${colorClass} card__span">${cardData.class}</span></p>
      <p class="card__text card__server">Сервер: ${cardData.server}</p>
      <div class="card__price-wrapper">
        <p class="card__text card__price">${formattedPrice}</p>
        <button class="card__text card__btn">Подробнее</button>
      </div>
    </div>
  `;
}

// Вставка карточек на страницу
export function renderCatalog() {
  
  cardsData.forEach((card) => {
    
    catalogMain.insertAdjacentHTML("beforeend", createCard(card));
  });
}

// Создание страниц для карточек, при клике по ним
export function renderAccount() {
  let catalogMain = document.querySelector(".catalog__main");
  catalogMain.addEventListener("click", (e) => {
    if (e.target.tagName == "IMG" || e.target.tagName == "BUTTON") {
      let infoAccount = e.target.closest(".card");
      if (infoAccount) {
        let title = infoAccount.querySelector(".card__title").textContent;
        let className = infoAccount.querySelector(".card__class>span").textContent;
        let server = infoAccount.querySelector(".card__server").textContent;
        let price = infoAccount.querySelector(".card__price").textContent;
        let img = infoAccount.querySelector(".card__img").src;

        let info = { title, className, server, price, img };

        sessionStorage.setItem("account", JSON.stringify(info));
        window.location.href = "account.html";
      }
    }
  });
}
