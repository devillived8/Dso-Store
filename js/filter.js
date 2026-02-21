import { cardsData, createCard } from "./card.js";

const filterSortMax = document.querySelector(".filter__sort-max");
const filterSortMin = document.querySelector(".filter__sort-min");
const catalogMain = document.querySelector(".catalog__main");

// Достаёт число из строки
function getPriceNumber(priceString) {
    let numbersOnly = priceString.replace(/[^0-9]/g, ''); 
    return parseInt(numbersOnly);
}

// Сортировка по возрастанию (сначала дешевле)
function sortByMinPrice() {
    return [...cardsData].sort((a, b) => {
        const priceA = getPriceNumber(a.price);
        const priceB = getPriceNumber(b.price);
        return priceA - priceB;
    });
}

// Сортировка по убыванию (сначала дорогие)
function sortByMaxPrice() {
    return [...cardsData].sort((a, b) => {
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
    
    cards.forEach(card => {
        const cardHTML = createCard(card);
        catalogMain.insertAdjacentHTML("beforeend", cardHTML);
    });
}

// Инициализация сортировки по макс цене
export function initSortByMax() {
    if (filterSortMax) {
        filterSortMax.addEventListener("click", () => {
            console.log("Сортировка по макс цене");
            const sortedCards = sortByMaxPrice();
            displayCards(sortedCards);
        });
    }
}

// Инициализация сортировки по мин цене
export function initSortByMin() {
    if (filterSortMin) {
        filterSortMin.addEventListener("click", () => {
            console.log("Сортировка по мин цене");
            const sortedCards = sortByMinPrice();
            displayCards(sortedCards);
        });
    }
}

// Общая инициализация всех сортировок
export function initSortButtons() {
    initSortByMax();
    initSortByMin();
}