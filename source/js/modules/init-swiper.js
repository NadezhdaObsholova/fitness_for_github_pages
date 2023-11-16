const swiperWrapper = document.querySelector('.swiper');
console.log(swiperWrapper);

const buttonPrev = document.querySelector('.swiper__button-prev');
console.log(buttonPrev);

const buttonNext = document.querySelector('.swiper__button-next');
console.log(buttonNext);

const slidesArray = Array.from(document.querySelectorAll('.swiper__slide'));
console.log(slidesArray);

const swiper = () => {

  return new window.Swiper(swiperWrapper, {
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
};

console.log(swiper());
export {swiper};


/////////////////
/*
const sliderJury = document.querySelector('.swiper');
const buttonNext = document.querySelector('.swiper__button-next');
const buttonPrev = document.querySelector('.swiper__button-prev');

const swiper = () => {
  return new window.Swiper(sliderJury, {
    loop: true,
    speed: 700,

    navigation: {
      nextEl: buttonNext,
      prevEl: buttonPrev,
    },

    breakpoints: {
      1366: {
        slidesPerView: 4,
        spaceBetween: 40,
        allowTouchMove: false,
      },

      768: {
        slidesPerView: 2,
        spaceBetween: 32,
        allowTouchMove: true,
      },

      0: {
        slidesPerView: 1,
        spaceBetween: 20,
        allowTouchMove: true,
      },
    },
  });
};

const initJurySlider = () => {
  if (document.body.contains(sliderJury)) {
    swiper();
  }
};

export {initJurySlider};
*/
