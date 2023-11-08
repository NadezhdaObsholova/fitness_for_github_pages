import Swiper from '../../vendor/swiper';

const swiperWrapper = document.querySelector('.swiper');
console.log(swiperWrapper);

const buttonPrev = document.querySelector('.swiper__button-prev');
console.log(buttonPrev);

const buttonNext = document.querySelector('.swiper__button-next');
console.log(buttonNext);

const slidesArray = Array.from(document.querySelectorAll('.swiper__slide'));
console.log(slidesArray);

const swiper = new Swiper(swiperWrapper, {
  direction: 'horizontal',
  loop: true,
  slidesPerView: 4,
  spaceBetween: 40,
  navigation: {
    nextEl: buttonNext,
    prevEl: buttonPrev,
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
      spaceBetween: 40,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 32,
    },
    1366: {
      slidesPerView: 4,
      spaceBetween: 40,
    },
  },
});

export {swiper};
