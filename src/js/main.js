/*
document.addEventListener("DOMContentLoaded", function(event) { 
    const modal = document.querySelector('.modal');
    const modalBtn = document.querySelectorAll('[data-toggle=modal]');
    const closeBtn = document.querySelector('.modal__close');
    const modalContent = document.querySelector('.modal__dialog');
    const switchModal = () => {
        modal.classList.toggle('modal_visible');
    }
    modalBtn.forEach(element => {
        element.addEventListener('click', switchModal);    
    });

    
    closeBtn.addEventListener('click', switchModal);
    
   
  });
  */

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
  });