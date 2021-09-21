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