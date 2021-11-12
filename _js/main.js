const header = document.querySelector("header");
const logo = document.querySelector(".logo img");
window.addEventListener(
  "scroll",
  _.throttle(function () {
    if (window.scrollY < 100) {
      header.classList.remove("move-down");
      logo.setAttribute("src", "./_img/logo02_w.png");
    } else {
      header.classList.add("move-down");
      logo.setAttribute("src", "./_img/logo02.png");
    }
  }, 300)
);
// header

new Swiper(".mainVisual .swiper-container", {
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  autoplay: {
    delay: 7000,
    disableOnInteraction: false,
  },
  loop: true,
});
// mainCon

// $(".counter").counterUp({
//   delay: 10,
//   time: 1000,
// });

$(".roofSell").vTicker("init", {
  speed: 1000,
  pause: 1000,
  showItems: 10,
  height: 210,
  margin: 5,
});
// counseling

new Swiper("#review .swiper-container", {
  slidesPerView: 2.01,
  spaceBetween: 20,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  autoplay: {
    delay: 7000,
    disableOnInteraction: false,
  },
  loop: true,
  breakpoints: {
    769: {
      slidesPerView: 2,
    },
    640: {
      slidesPerView: 1,
    },
  },
});
// review
