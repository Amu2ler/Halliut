const slide = ["fondgris.jpg", "fondbleu.jpg", "fondnoir.jpg"];
let numero = 0;

function ChangeSlide(sens) {
    numero = numero + sens;
    if (numero < 0)
        numero = slide.length - 1;
    if (numero > slide.length - 1)
        numero = 0;
    document.getElementById("slide").src = slide[numero];
}

setInterval("ChangeSlide(1)", 4000);

const menuHamburger = document.querySelector(".menu-burger")
  const navLinks = document.querySelector(".nav_ul_link")

  menuHamburger.addEventListener('click',()=>{
  navLinks.classList.toggle('mobile-menu')
  })
