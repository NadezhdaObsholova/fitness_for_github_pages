
import Swiper from '../../vendor/swiper';

const swiper = document.querySelector('[data-swiper="reviews-swiper"]');
const buttonNext = document.querySelector('[data-button="reviews-button-next"]');
const buttonPrev = document.querySelector('[data-button="reviews-button-prev"]');

export const swiperJury = new Swiper(swiper, {
  navigation: {
    nextEl: buttonNext,
    prevEl: buttonPrev,
  },
  loop: true,
  breakpoints: {
    320: {
      slidesPerView: 1,
      spaceBetween: 20,
    },
  },
});
