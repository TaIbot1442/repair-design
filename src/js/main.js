document.addEventListener("DOMContentLoaded", (event) =>{ 
  // const modal = document.querySelector('.modal');
  // const modalBtn = document.querySelectorAll('[data-toggle=modal]');
  // const closeBtn = document.querySelector('.modal__close');
 
  // const switchModal = () => {
  //   modal.classList.toggle('modal_visible');
  //   if(modal.classList.contains('modal_visible')){
  //     document.addEventListener('keydown', pressESC);
  //   }
  // };

  // modalBtn.forEach(element => {
  //   element.addEventListener('click', switchModal);
  // });

  // closeBtn.addEventListener('click', switchModal);

  // modal.addEventListener('click', (event)=>{
  //   if(event.target.classList.contains('modal')){
  //     modal.classList.remove('modal_visible');
  //   }
  // });

  // const pressESC = (event) => {
  //   if(event.keyCode === 27){
  //     document.removeEventListener('keyup', pressESC);
  //     modal.classList.remove('modal_visible');
  //   }
  // };
  
  new WOW().init();

  // Валидация формы
  $('.modal__form').validate({
    errorClass: "invalid",
    rules: {
      // строчное правило
      userName: {
        required: true,
        minlength: 2
      },
      userPhone: "required",
      // правило-обьект (блок)
      userEmail: {
        required: true,
        email: true
      }
    }, // сообщение
    messages: {
      userName: {
        required: "Имя обязательно",
        minlength: "Имя не короче двух букв"
      },
      userPhone: "Телефон обязателен",
      userEmail: {
        required: "Обязательно укажите email",
        email: "Введите в формате: name@domain.com"
      }
    }
  });

  // маска для телефона

  $('[type=tel]').mask('+7(000) 00-00-000', {placeholder: "+7 (___) __-__-___"});

});



  $(document).ready(function () {
    
    var modal = $('.modal'),
        modalBtn = $('[data-toggle=modal]'),
        closeBtn = $('.modal__close');
    
    var pressEsc = ()=>{
      if(modal.hasClass('modal_visible')){
        $(document).on('keydown', (event)=>{
          if(event.keyCode === 27){
            modal.removeClass('modal_visible');
          }
        });
      }
    };

    modalBtn.click(()=> {
        modal.toggleClass('modal_visible');
        pressEsc();
    });

    closeBtn.click(()=> {
        modal.toggleClass('modal_visible');
    }); 
    
    modal.click((event)=> {
      if($(event.target).hasClass('modal_visible')){
        modal.removeClass('modal_visible');
      }
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

    var topBtn = $('.to-top')

    if($(window).scrollTop()>300){
      topBtn.addClass('active');
    }else{
      topBtn.removeClass('active');
    };
    topBtn.click(function(e){
      e.preventDefault();
      $('body,html').animate({scrollTop: 0}, 1000)
    });

  });

  var scrollDown = $('.hero__scroll-down');
  if($(window).scrollTop()>$(window).height()){
    scrollDown.removeClass('active');
  }else{
    scrollDown.addClass('active');
  };

   

  $(window).scroll(function () {
    var topBtn = $('.to-top'),
        windowHeight = $(window).height();

    if($(window).scrollTop()>300){
      topBtn.addClass('active');
    }else{
      topBtn.removeClass('active');
    };    
    var scrollDown = $('.hero__scroll-down');
    if($(window).scrollTop()>$(window).height()){
      scrollDown.removeClass('active');
    }else{
      scrollDown.addClass('active');
    };
  })