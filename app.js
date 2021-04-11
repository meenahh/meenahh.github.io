const burgerMenu = document.getElementsByClassName('burger-menu')[0]
const navlinks = document.getElementsByClassName('nav-links')[0]

burgerMenu.addEventListener('click', () => {
  navlinks.classList.toggle('active')
})