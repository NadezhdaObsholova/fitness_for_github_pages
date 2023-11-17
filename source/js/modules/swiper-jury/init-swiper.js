
import Swiper from '../../vendor/swiper';

export const swiperJury = new Swiper('.swiper__slides-holder', {
  navigation: {
    nextEl: '.swiper__button-next',
    prevEl: '.swiper__button-prev',
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
