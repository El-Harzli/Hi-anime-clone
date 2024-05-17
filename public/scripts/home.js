let swiper = new Swiper('#swiper1', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    speed: 400,
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.myNext',
      prevEl: '.myPrevious',
    },
    autoplay: {
        delay: 4000,
      },
  });




  let swiper2 = new Swiper('.anime-content', {
    // Optional parameters
    // direction: 'horizontal',
    slidesPerView: 6,
    slidesPerGroup:1,
    loop: false,
    spaceBetween: 20,
    grabCursor: true,

  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
      dynamicBullets: true,
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.trending-navigator .next',
      prevEl: '.trending-navigator .previous',
    },
    breakpoints: {
      576: {
        slidesPerView: 3,
        spaceBetween: 20,
      },
      768: {
        slidesPerView: 4,
        spaceBetween: 40,
      },
      992: {
        slidesPerView: 5,
        spaceBetween: 20,
      },
      1200: {
        slidesPerView: 6,
        spaceBetween: 20,
      },
    },
  
  });

