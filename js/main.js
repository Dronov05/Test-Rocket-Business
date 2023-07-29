const body = document.body
const menuBtn = document.querySelector('.menu__btn')
const headerMenu = document.querySelector('.header__bg-bottom')

const headerBtn = document.getElementById('header-btn')
const checkUpBtn = document.getElementById('check-up-btn')
const mobBtn = document.getElementById('mob-btn')
const modalOpen = document.querySelector('.modal__overlay')
const modalClose = document.querySelector('.modal__close')
const modalBtnClose = document.getElementById('modal-btn-close')

menuBtn.addEventListener('click', () => {
   menuBtn.classList.toggle('menu__btn--active')
   headerMenu.classList.toggle('header__bg-bottom--active')
   body.classList.toggle('noscroll')
})


headerBtn.addEventListener('click', () => {
   modalOpen.classList.add('open')
})

checkUpBtn.addEventListener('click', () => {
   modalOpen.classList.add('open')
})

mobBtn.addEventListener('click', () => {
   modalOpen.classList.add('open')
})

modalBtnClose.addEventListener('click', () => {
   modalOpen.classList.remove('open')
})

modalClose.addEventListener('click', () => {
   modalOpen.classList.remove('open')
})

window.onclick = e => {
   if (e.target == modalOpen) {
      modalOpen.classList.remove('open')
   }
}

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
