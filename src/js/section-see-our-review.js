import Swiper from '/node_modules/swiper/swiper-bundle.min';
import dataSeeOurReview from '../data/sliderOurReview.json';
import icons from '../images/icons.svg';
import avatar from '../images/avatars/avatar-dianne.png';

const SwiperWrapperReviewEl = document.querySelector(
  '.seeOurReview__swiper-wrapper'
);

SwiperWrapperReviewEl.innerHTML = dataSeeOurReview.reduce((html, slide) => {
  const { title, text, image, name, position, mark } = slide;

  return (
    html +
    `<div class="seeOurReview__swiper-slide swiper-slide">
    <div class="seeOurReview__image">
      <img src="${image}" alt="house" width="740" height="400" />
    </div>
    <div class="seeOurReview-desc">
      <h3 class="seeOurReview-desc__title">${title}</h3>
      <p class="seeOurReview-desc__text">${text}</p>
      <div class="seeOurReview-desc__manager-box">
        <div class="card-user">
          <div class="card-user__avatar">
            <img loading="lazy" src="${avatar}" alt="user-avatar" width="56" />
          </div>
          <div>
            <h4 class="card-user__name">${name}</h4>
            <p class="card-user__text">${position}</p>
          </div>
        </div>
        <div class="seeOurReview-desc__mark">
          <svg width="28" height="28">
            <use href="${icons}#icon-star"></use>
          </svg>
          <p>${mark}</p>
        </div>
      </div>
    </div>
  </div>`
  );
}, '');

new Swiper('.seeOurReview__swiper', {
  initialSlide: 1,
  slidesPerView: 'auto',
  spaceBetween: 56,
  centeredSlides: true,

  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  keyboard: {
    enabled: true,
    onlyInViewport: true,
  },
});
