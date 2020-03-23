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
  $('form').each(function(){
    $(this).validate({
      errorClass: "invalid",
      rules: {
        // строчное правило
        userName: {
          required: true,
          minlength: 2,
          maxlength: 15
        },
        userPhone: {
          required: true,
          minlength: 17
        },
        // правило-обьект (блок)
        userEmail: {
          required: true,
          email: true
        },
        policy: {
          required: true
        }
      }, // сообщение
      messages: {
        userName: {
          required: "Имя обязательно",
          minlength: "Имя не короче двух букв",
          maxlength: "Имя не больше 15 букв"
        },
        userPhone: {
          required: "Телефон обязателен",
          minlength: "Слишком короткий номер",
        },
        userEmail: {
          required: "Обязательно укажите email",
          email: "Введите в формате: name@domain.com"
        },
        policy: {
          required: "Поле обязательно"
        }
      }
    });
  })

  // маска для телефона
  $('[type=tel]').mask('+7(000) 000-00-00');

  // yandex map
  ymaps.ready(function () {
    var myMap = new ymaps.Map('map', {
            center: [47.244729, 39.723187],
            zoom: 18
        }, {
            searchControlProvider: 'yandex#search'
        }),

        // Создаём макет содержимого.
        MyIconContentLayout = ymaps.templateLayoutFactory.createClass(
            '<div style="color: #FFFFFF; font-weight: bold;">$[properties.iconContent]</div>'
        ),

        myPlacemark = new ymaps.Placemark(myMap.getCenter(), {
            hintContent: 'Наш офис',
            balloonContent: 'Вход со двора'
        }, {
            // Опции.
            // Необходимо указать данный тип макета.
            iconLayout: 'default#image',
            // Своё изображение иконки метки.
            iconImageHref: 'img/marker.png',
            // Размеры метки.
            iconImageSize: [32, 32],
            // Смещение левого верхнего угла иконки относительно
            // её "ножки" (точки привязки).
            iconImageOffset: [-5, -38]
        });
        //офф зум скрол
        myMap.behaviors.disable('scrollZoom');
        // привести свои размеры к размерам контейнера.
        myMap.container.fitToViewport();
        
    myMap.geoObjects
        .add(myPlacemark);
  });
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