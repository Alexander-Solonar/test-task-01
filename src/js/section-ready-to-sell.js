import Swiper from '/node_modules/swiper/swiper-bundle.min';
import dataReady from '../data/sliderReady.json';
import icons from '../images/icons.svg';

const SwiperWrapperReadyEl = document.querySelector(
  '.readyToSell-swiper-wrapper'
);

SwiperWrapperReadyEl.innerHTML = dataReady.reduce((html, data) => {
  const {
    type,
    bedrooms,
    bathrooms,
    carport,
    floors,
    name,
    position,
    middleImage,
    bigImage,
    litleImage,
    avatar,
  } = data;

  return (
    html +
    ` <div class="readyToSell-swiper-slide swiper-slide">
    <div class="description-box">
      <h2 class="description__title">Let’s tour and see our ${type}!</h2>
      <p class="description__text">
        Houses recommended by our partners that have been curated to
        become the home of your dreams!
      </p>
      <div class="detail-box">
        <h4 class="detail__title">House Detail</h4>
        <ul class="detail__list">
          <li class="detail__item">
            <svg width="24" height="24">
              <use href="${icons}#icon-bed"></use>
            </svg>
            <span>${bedrooms} Bedrooms</span>
          </li>
          <li class="detail__item">
            <svg width="24" height="24">
              <use href="${icons}#icon-bath"></use>
            </svg>
            <span>${bathrooms} Bathrooms</span>
          </li>
          <li class="detail__item">
            <svg width="24" height="24">
              <use href="${icons}#icon-car-garage"></use>
            </svg>
            <span>${carport} Carport</span>
          </li>
          <li class="detail__item">
            <svg width="24" height="24">
              <use href="${icons}#icon-stairs"></use>
            </svg>
            <span>${floors} Floors</span>
          </li>
        </ul>
      </div>
      <div class="manager-box">
       
      <div class="card-user">
      <div class="card-user__avatar">
        <img
          loading=lazy
          src="${avatar}"
          alt="user-avatar"
          width="56" 
        />
      </div>
      <div>
        <h4 class="card-user__name">${name}</h4>
        <p class="card-user__text">${position}</p>
      </div>
    </div>
        <a class="manager-box__button" href="tel:+380961111111">
          <svg width="24" height="24">
            <use href="${icons}#icon-call"></use>
          </svg>
          Contact Now
        </a>
      </div>
    </div>
    <div class="media-box">
      <img
      src="${bigImage}"
      width="488"
      height="416
      alt="${type}"
    />
      <div class="media-box-image">
        <div class="media-box-image-middle">
          <img
            src="${middleImage}"
            width="296"
            alt="${type}"
          />
        </div>
        <div class="media-box-image-litle">
          <img
            src="${litleImage}"
            width="96"
            alt="${type}"
          />
          <img
            src="${litleImage}"
            width="96"
            alt="${type}"
          />
        </div>
      </div>
    </div>
  </div>
</div> `
  );
}, '');

const swiper = new Swiper('.readyToSell-swiper', {
  loop: true,

  centeredSlides: true,
  spaceBetween: 40,

  autoplay: {
    delay: 5000,
    disableOnInteraction: false,
  },
});

SwiperWrapperReadyEl.addEventListener('mouseenter', () => {
  swiper.autoplay.stop();
});

SwiperWrapperReadyEl.addEventListener('mouseleave', () => {
  swiper.autoplay.start();
});
