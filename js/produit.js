const menuHamburger = document.querySelector(".menu-burger")
  const navLinks = document.querySelector(".nav_ul_link")

  menuHamburger.addEventListener('click',()=>{
  navLinks.classList.toggle('mobile-menu')
  })