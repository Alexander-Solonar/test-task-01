import Swiper from '/node_modules/swiper/swiper-bundle.min';
import dataRocomend from '../data/sliderRecomend.json';
import icons from '../images/icons.svg';

const SwiperWrapperEl = document.querySelector(
  '.recommendation-swiper-wrapper'
);

const FilterListEl = document.querySelector('.recommendation__filter-list');
const FilterBtnEl = document.querySelectorAll('.recommendation__filter-btn');

let filter = 'House';
FilterListEl.addEventListener('click', e => {
  if (e.target.nodeName === 'BUTTON') {
    if (filter === e.target.textContent.trim()) {
      return;
    }
    for (const btn of FilterBtnEl) {
      btn.classList.remove('active');
    }
    e.target.classList.add('active');
    filter = e.target.textContent.trim();
    createMarkup();
  }
});

const createMarkup = () => {
  let iconCategory = null;
  let newClass = null;

  const data = dataRocomend.filter(({ alt }) => alt === filter);
  SwiperWrapperEl.innerHTML = data.reduce((html, slider) => {
    const { image, alt, role, title, price, avatar, name, location } = slider;

    if (role === 'New house') {
      iconCategory = 'icon-house';
      newClass = 'recommendation__slide-category--new-house';
    } else if (role === 'Best Deals') {
      iconCategory = 'icon-wallet';
      newClass = 'recommendation__slide-category--best-deals';
    } else {
      iconCategory = 'icon-fire';
      newClass = 'recommendation__slide-category--popular';
    }

    return (
      html +
      `<div class="recommendation-swiper-slide swiper-slide">
        <div class="recommendation__slide-img">
          <img
            loading=lazy
            src=${image}
            alt="${alt}"
            width="340p"
          />
          <div class="recommendation__slide-category ${newClass}">
            <svg width="16" height="16">
              <use href="${icons}#${iconCategory}"></use>
            </svg>
            <p>${role}</p>
          </div>
        </div>
        <div>
          <h3 class="recommendation__slide-title">${title}</h3>
          <p class="recommendation__slide-cost">$ ${price}</p>
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
              <p class="card-user__text">${location}</p>
            </div>
          </div>
        </div>
      </div>
    `
    );
  }, '');
};
createMarkup();

new Swiper('.recommendation-swiper', {
  navigation: {
    nextEl: '.recommendation-swiper-button-next',
    prevEl: '.recommendation-swiper-button-prev',
  },

  slidesPerView: 'auto',
  spaceBetween: 40,
});
