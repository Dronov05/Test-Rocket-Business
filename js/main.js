const menuBtn = document.querySelector('.menu__btn')
const geolocStreet = document.querySelector('.header__geoloc-street')
const headerBtn = document.querySelector('.header__button')
const headerMenu = document.querySelector('.header__bg-bottom')

menuBtn.addEventListener('click', () => {
   menuBtn.classList.toggle('menu__btn--active')
   headerMenu.classList.toggle('header__bg-bottom--active')
})

const swiper = new Swiper(".swiper", {
   pagination: {
      el: ".swiper-pagination",
      type: "fraction",
   },
   navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
   },
});
