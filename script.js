function onMenuClick() {
    var navbar = document.getElementById("navigation-bar");
    var responsive_class_name = "responsive";

    navbar.classList.toggle(responsive_class_name);
}

function goToPage(page) {
    window.location.href = page;
}

fetch('header.html')
  .then(res => res.text())
  .then(html => {
    document.getElementById('header-placeholder').innerHTML = html;
  });

const swiper = new Swiper('.slider-wrapper', {
    loop: true,
    grabcursor: true,
    centeredSlides: true,
    spaceBetween: 40,
    autoplay: {
        delay: 5000,
        disableOnInteraction: false,
    },
    
    pagination: {
        el: '.swiper-pagination',
        clickable:true,
        dynamicBullets: true,
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    breakpoints: { 
      0:{
        slidesPerView: 1,
      },
      620:{
        slidesPerView: 1,
      },
      1024:{
        slidesPerView: 1,
      },
    }
});
