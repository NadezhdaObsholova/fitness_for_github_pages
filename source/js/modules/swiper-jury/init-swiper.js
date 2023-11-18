
import Swiper from '../../vendor/swiper';

const swiper = document.querySelector('[data-swiper="jury-swiper"]');
const buttonNext = document.querySelector('[data-button="jury-button-next"]');
const buttonPrev = document.querySelector('[data-button="jury-button-prev"]');

export const swiperJury = new Swiper(swiper, {
  navigation: {
    nextEl: buttonNext,
    prevEl: buttonPrev,
  },
  loop: true,
  breakpoints: {
    1366: {
      slidesPerView: 4,
      spaceBetween: 40,
    },

    768: {
      initialSlide: 2,
      slidesPerView: 2,
      spaceBetween: 32,
    },

    320: {
      initialSlide: 2,
      slidesPerView: 1,
      spaceBetween: 20,
    },
  },
});
