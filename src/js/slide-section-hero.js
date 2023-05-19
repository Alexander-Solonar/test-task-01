import Swiper from '/node_modules/swiper/swiper-bundle.min';

new Swiper('.hero__swiper', {
  loop: true,
  slidesPerView: 'auto',
  centeredSlides: true,
  spaceBetween: 30,
  width: 'auto',
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
});
