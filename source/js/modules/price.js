const priceOptions = document.querySelectorAll('[data-price-option]');
const prices = document.querySelectorAll('[data-price]');
const pricesShadow = document.querySelectorAll('[data-price-shadow]');
const lessonsCount = document.querySelector('[data-lessonsCount]');

const PRICES = [
  [5000, 1700, 2700],

  [30000, 10200, 16200],

  [60000, 20400, 32400]
];

// количество занятий с тренером для разных периодов
const lessonsCountsOfOptions = ['12 занятий', '72 занятия', '144 занятия'];

const changePrices = () => {
  priceOptions[0].classList.add('is-active');

  priceOptions.forEach((button, index) => {

    button.addEventListener('click', function () {
      lessonsCount.textContent = lessonsCountsOfOptions[index];

      prices.forEach((price, indexPrice) => {
        price.textContent = PRICES[index][indexPrice];
      });

      pricesShadow.forEach((price, indexPrice) => {
        price.textContent = PRICES[index][indexPrice];
      });

      priceOptions.forEach((btn) => {
        btn.classList.remove('is-active');
      });

      button.classList.add('is-active');
    });
  });
};

changePrices();

export {changePrices};
