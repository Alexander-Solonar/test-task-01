import dataHero from '../data/sliderHero';
import Swiper from '/node_modules/swiper/swiper-bundle.min';
import avatar from '../images/avatars/avatar-dianne.png';

const heroSwiperWrapper = document.querySelector('.hero__swiper-wrapper');

heroSwiperWrapper.innerHTML = dataHero.reduce((html, { like, description }) => {
  return (
    html +
    `<div class="hero__swiper-slide swiper-slide">
         <div class="box-inform">
            <img
               class="box-inform__user-avatar"
                src="${avatar}"
                alt="user-avatar"
                width="54"
             />
          <div>
               <h3 class="box-inform__fitback">${like}</h3>
               <p class="box-inform__text">${description}</p>
          </div>
        </div>
      </div>`
  );
}, '');

new Swiper('.hero__swiper', {
  loop: true,
  slidesPerView: 'auto',
  centeredSlides: true,
  spaceBetween: 30,
  width: 'auto',
  simulateTouch: false,
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
});
