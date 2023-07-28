const body = document.body
const menuBtn = document.querySelector('.menu__btn')
const headerMenu = document.querySelector('.header__bg-bottom')

menuBtn.addEventListener('click', () => {
   menuBtn.classList.toggle('menu__btn--active')
   headerMenu.classList.toggle('header__bg-bottom--active')
   body.classList.toggle('noscroll')
})

headerMenu.querySelectorAll('menu__list-link').forEach(link => {
   link.addEventListener('click', () => {
      menuBtn.classList.remove('menu__btn--active')
      headerMenu.classList.remove('header__bg-bottom--active')
      body.classList.remove('noscroll')
   })
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
