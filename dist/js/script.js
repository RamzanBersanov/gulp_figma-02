"use strict"

const isMobile = { 
    Android: function() { 
         return navigator.userAgent.match(/Android/i); 
        },
    BlackBerry: function() {  
         return navigator.userAgent.match(/BlackBerry/i); 
        },
    iOS: function() {
         return navigator.userAgent.match(/iPhone|iPad|iPod/i); 
        },
    Opera: function() {
         return navigator.userAgent.match(/Opera Mini/i); 
        },
    Windows: function() {
         return navigator.userAgent.match(/IEMobile/i); 
        },
    any: function() {
     return (
           isMobile.Android() ||
           isMobile.BlackBerry() ||
           isMobile.iOS() ||
           isMobile.Opera() ||
           isMobile.Windows()); 
    } 
};

// Меню бургера при клике 

const iconMenu = document.querySelector('.menu__icon');
const menuBody = document.querySelector('.menu__body');
if (iconMenu) {
    iconMenu.addEventListener("click", function(e) {
        document.body.classList.toggle('_lock');
        iconMenu.classList.toggle('_active');
        menuBody.classList.toggle('_active');
    });
}


// Прокрутка при клике

const menuLinks = document.querySelectorAll('.menu__link[data-goto]');
    if(menuLinks.length > 0) {
        menuLinks.forEach(menuLink =>{
            menuLink.addEventListener("click", onMenuLinkClick);
        });

        function onMenuLinkClick(e) {
            const menuLink = e.target;
            if (menuLink.dataset.goto && document.querySelector(menuLink.dataset.goto)){
                const gotoBlock = document.querySelector(menuLink.dataset.goto);
                const gotoBlockValue = gotoBlock.getBoundingClientRect().top + pageYOffset - document.querySelector('header').offsetHeight;

                if(iconMenu.classList.contains('_active')) {
                    document.body.classList.remove('_lock');
                    iconMenu.classList.remove('_active');
                    menuBody.classList.remove('_active');
                }

                // Сама прокрутка
                window.scrollTo({
                    top: gotoBlockValue,
                    behavior: 'smooth'
                });
                e.preventDefault();
            }
        }
    }



new Swiper('.reviews__container',{
  //Стрелки
  navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev'
  },
  //Навигация
  //Буллеты, текущее положение, пргрессбар
  pagination: {
      el: '.swiper-pagination',
      //Буллеты
      clickable: true,

      //Динамические буллеты
      dynamicBullets: true,
  },

  //Рука курсор
  // grabCursor: true,

  //Переключение img при клике
  slideToClickedSlide: true,

  //Переключать слайдер стрелками браузера
  hashNavigation: {
      watchState: true,
    },

    //Управление слайдером
    keyboard: {
        //включить\выключить
        enabled: true,

        //включить\выключить
        //Только когда слайдер
        //в пределах вьюпорта
        onlyInViewport: true,

        //включить\выключить
        //Управление клавишами
        //pageUp, pageDown
        pageUpDown: true,
    },

      slidesPerView: 1,
      loop: true,
      spaceBetween: 30,

      //Автовысота
      autoHeight: true,

      //Отключение функционала
      //если слайдов меньше чем нужно

      speed: 800,

      breakpoints: { 
          767: {
              slidesPerView: 2,
              spaceBetween: -40,
          },
          900: {
              slidesPerView: 3,
          }
      },
     
});
let element = document.querySelector('.special__number');
let maskOptions = {
  mask: '+7(000)000-00-00',
  lazy:false
}

let mask = new IMask(element, maskOptions);
new Swiper('.autopark__container',{
    //Стрелки
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
    },
    //Навигация
    //Буллеты, текущее положение, пргрессбар
    pagination: {
        el: '.swiper-pagination',
        //Буллеты
        type: "fraction",
        clickable: true,
  
        //Динамические буллеты
        dynamicBullets: true,
    },
  
    //Рука курсор
    // grabCursor: true,
  
    //Переключение img при клике
    slideToClickedSlide: true,
  
    //Переключать слайдер стрелками браузера
    hashNavigation: {
        watchState: true,
      },
  
      //Управление слайдером
      keyboard: {
          //включить\выключить
          enabled: true,
  
          //включить\выключить
          //Только когда слайдер
          //в пределах вьюпорта
          onlyInViewport: true,
  
          //включить\выключить
          //Управление клавишами
          //pageUp, pageDown
          pageUpDown: true,
      },
  
        slidesPerView: 1,
        loop: true,
        spaceBetween: 30,
  
        //Автовысота
        autoHeight: true,
  
        //Отключение функционала
        //если слайдов меньше чем нужно
  
        speed: 800,
  
        breakpoints: { 
            767: {
                slidesPerView: 2,
                spaceBetween: -40,
            },
            900: {
                slidesPerView: 3,
            }
        },
       
  });
