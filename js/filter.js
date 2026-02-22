import { cardsData, createCard } from "./card.js";

const filterSortMax = document.querySelector(".filter__sort-max");
const filterSortMin = document.querySelector(".filter__sort-min");
const catalogMain = document.querySelector(".catalog__main");
const selectServer = document.querySelector(".filter__select--server");
const selectClass = document.querySelector(".filter__select--class");

// ------Сортировка по кнопке (мин/макс цена)------

const filterFlag = {
  sortByServer: false,
  sortByClass: false,
  lastFilteredData: [],
  sortByPrice: false,
  priceMin: "",
  priceMax: "",
};

// Достаёт число из строки
function getPriceNumber(priceString) {
  let numbersOnly = priceString.replace(/[^0-9]/g, "");
  return parseInt(numbersOnly);
}

// Сортировка по кнопке мин цена
function sortByMinPrice() {
  const dataToSort =
    filterFlag.lastFilteredData.length > 0
      ? filterFlag.lastFilteredData
      : cardsData;

  return [...dataToSort].sort((a, b) => {
    const priceA = getPriceNumber(a.price);
    const priceB = getPriceNumber(b.price);
    return priceA - priceB;
  });
}

// Сортировка по кнопке макс цена
function sortByMaxPrice() {
  const dataToSort =
    filterFlag.lastFilteredData.length > 0
      ? filterFlag.lastFilteredData
      : cardsData;

  return [...dataToSort].sort((a, b) => {
    const priceA = getPriceNumber(a.price);
    const priceB = getPriceNumber(b.price);
    return priceB - priceA;
  });
}

// Функция очищения каталога
function clearCatalog() {
  if (catalogMain) {
    catalogMain.replaceChildren();
  }
}

// Функция для отображения карточек
function displayCards(cards) {
  clearCatalog();

  cards.forEach((card) => {
    const cardHTML = createCard(card);
    catalogMain.insertAdjacentHTML("beforeend", cardHTML);
  });
}

// Инициализация сортировки по макс цене
export function initSortByMax() {
  filterSortMax?.addEventListener("click", () => {
    console.log("Сортировка по макс цене");
    const sortedCards = sortByMaxPrice();
    displayCards(sortedCards);
  });
}

// Инициализация сортировки по мин цене
export function initSortByMin() {
  filterSortMin?.addEventListener("click", () => {
    console.log("Сортировка по мин цене");
    const sortedCards = sortByMinPrice();
    displayCards(sortedCards);
  });
}
// ------Сортировка по кнопке (мин/макс цена)------

// ------Сортировка по серверу------

// Функция для показа, что таких аккаунтов нету
function notFound() {
  let catalogMain = document.querySelector(".catalog__main");
  let msgNotFound = `<div class="catalog__error">Таких аккаунтов нету</div>`;
  clearCatalog();
  catalogMain.insertAdjacentHTML("beforeend", msgNotFound);
}

// Инициализация селекта по серверу
function initSortByServer() {
  selectServer?.addEventListener("change", () => {
    filterFlag.sortByServer = selectServer.value !== "any";
    applyAllFilters(); // ← вызываем общую функцию
  });
}
// ------Сортировка по серверу------

// Сортировка по классу

// Инициализация селекта по классу
function initSortByClass() {
  selectClass?.addEventListener("change", () => {
    filterFlag.sortByClass = selectClass.value !== "any";
    applyAllFilters(); // ← вызываем общую функцию
  });
}


// Сортировка по классу



// Фильтрация по цене
function filterByPrice(cards) {
  let result = [...cards];
  
  // Фильтр по минимальной цене
  if (filterFlag.priceMin !== "") {
    const minPrice = parseInt(filterFlag.priceMin);
    result = result.filter(card => {
      const cardPrice = getPriceNumber(card.price);
      return cardPrice >= minPrice;
    });
  }
  
  // Фильтр по максимальной цене
  if (filterFlag.priceMax !== "") {
    const maxPrice = parseInt(filterFlag.priceMax);
    result = result.filter(card => {
      const cardPrice = getPriceNumber(card.price);
      return cardPrice <= maxPrice;
    });
  }
  
  console.log(`💰 После фильтра по цене: ${result.length} карточек`);
  return result;
}


function initPriceFilter() {
  const priceMin = document.querySelector(".filter__price-min");
  const priceMax = document.querySelector(".filter__price-max");
  const applyBtn = document.querySelector(".filter__price-apply");
  
  applyBtn?.addEventListener("click", () => {
    console.log("💰 Применяем фильтр по цене");
    
    filterFlag.priceMin = priceMin?.value || "";
    filterFlag.priceMax = priceMax?.value || "";
    filterFlag.sortByPrice = filterFlag.priceMin !== "" || filterFlag.priceMax !== "";
    
    applyAllFilters(); // ← вызываем общую функцию
  });
  
  // Сброс при двойном клике
  [priceMin, priceMax].forEach(input => {
    input?.addEventListener("dblclick", () => {
      input.value = "";
      filterFlag.priceMin = "";
      filterFlag.priceMax = "";
      filterFlag.sortByPrice = false;
      applyAllFilters();
    });
  });
}



// Главная функция применения всех фильтров
function applyAllFilters() {
  console.log("🔍 Применяем все фильтры:", {
    server: filterFlag.sortByServer ? selectServer.value : "any",
    class: filterFlag.sortByClass ? selectClass.value : "any",
    price: filterFlag.sortByPrice ? `${filterFlag.priceMin}-${filterFlag.priceMax}` : "any"
  });
  
  // Начинаем со всех карточек
  let result = [...cardsData];
  
  // Фильтр по классу
  if (filterFlag.sortByClass && selectClass.value !== "any") {
    result = result.filter(card => card.class === selectClass.value);
  }
  
  // Фильтр по серверу
  if (filterFlag.sortByServer && selectServer.value !== "any") {
    result = result.filter(card => card.server === selectServer.value);
  }
  
  // Фильтр по цене
  if (filterFlag.sortByPrice) {
    result = filterByPrice(result);
  }
  
  // Сохраняем результат
  filterFlag.lastFilteredData = result;
  
  // Отображаем
  if (result.length === 0) {
    notFound();
  } else {
    displayCards(result);
  }
}



// Общая инициализация всех сортировок
export function initFilter() {
  initSortByClass();
  initSortByServer();
  initPriceFilter();  // ← добавить
  initSortByMax();
  initSortByMin();
  
  // Показываем все карточки при загрузке
  applyAllFilters();
}
