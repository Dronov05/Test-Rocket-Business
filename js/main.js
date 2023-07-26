// const swiper = new Swiper(".swiper", {
//    pagination: {
//       el: ".swiper-pagination",
//       type: "fraction",
//    },
//    navigation: {
//       nextEl: ".swiper-button-next",
//       prevEl: ".swiper-button-prev",
//    },
// });

const menuBtn = document.querySelector('.header__btn')
const geolocStreet = document.querySelector('.header__geoloc-street')
const headerBtn = document.querySelector('.header__button')
const headerMenu = document.querySelector('.header__bg-bottom')

menuBtn.addEventListener('click', () => {
   menuBtn.classList.toggle('header__btn--active')
   headerMenu.classList.toggle('header__bg-bottom--active')
   geolocStreet.classList.toggle('header__geoloc-street--active')
   headerBtn.classList.toggle('header__button--active')
})