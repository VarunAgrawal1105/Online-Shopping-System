var swiper = new Swiper('.swiper-container',{
     grabCursor: true,
     slidesPerView: 'auto',
     coverflowEffect: {
          rotate: 60,
          stretch: 0,
          depth: 500,
          modifier: 1,
          slideShadows: true,
     },
     pagination: {
          el: '.swiper-pagination',
     },
});
