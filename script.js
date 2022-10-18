const navbar = document.querySelector('.second-header');
const btn_menu = document.querySelector('#menu-btn');

btn_menu.addEventListener('click', ()=>{
  navbar.classList.toggle('change');
})

window.onscroll = () =>{
  navbar.classList.remove('change');
}

var swiper = new Swiper(".reviews-slider", {
    loop:true,
    grabCursor:true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
 });
 