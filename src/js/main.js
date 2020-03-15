// document.addEventListener("DOMContentLoaded", (event) =>{ 
//   const modal = document.querySelector('.modal');
//   const modalBtn = document.querySelectorAll('[data-toggle=modal]');
//   const closeBtn = document.querySelector('.modal__close');
 
//   const switchModal = () => {
//     modal.classList.toggle('modal_visible');
//     if(modal.classList.contains('modal_visible')){
//       document.addEventListener('keydown', pressESC);
//     }
//   };

//   modalBtn.forEach(element => {
//     element.addEventListener('click', switchModal);
//   });

//   closeBtn.addEventListener('click', switchModal);

//   modal.addEventListener('click', (event)=>{
//     if(event.target.classList.contains('modal')){
//       modal.classList.remove('modal_visible');
//     }
//   });

//   const pressESC = (event) => {
//     if(event.keyCode === 27){
//       document.removeEventListener('keyup', pressESC);
//       modal.classList.remove('modal_visible');
//     }
//   };
  
// });



  $(document).ready(function () {
    var modal = $('.modal'),
        modalBtn = $('[data-toggle=modal]'),
        closeBtn = $('.modal__close');

    modalBtn.on('click', function () {
        modal.toggleClass('modal_visible');
    });
    closeBtn.on('click',function () {
        modal.toggleClass('modal_visible');
    });  
  
    var mySwiper = new Swiper ('.swiper-container', {      
      loop: true,
      effect: "fade",
      pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    })

    var next = $('.swiper-button-next');
    var prev = $('.swiper-button-prev');
    var bullets =$('.swiper-pagination');

    next.css('left', prev.width() + 20 + bullets.width() + 20)
    bullets.css('left', prev.width() + 22)

  });