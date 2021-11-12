if (window.NodeList && !NodeList.prototype.forEach) {
  NodeList.prototype.forEach = Array.prototype.forEach
}

const spyEls = document.querySelectorAll('.scroll-spy');
spyEls.forEach(function (spyEl) {
  new ScrollMagic
    .Scene({
      triggerElement: spyEl,
      triggerHook: 0.8
    })
    .setClassToggle(spyEl, 'show')
    .addTo(new ScrollMagic.Controller());
});
//section-animation

AOS.init();
// aos

const searchOpen = document.querySelector('header .searchBtn')
const searchClose = document.querySelector('header .closeBtn')
const searchArea = document.querySelector('header .searchArea')

$(searchOpen).on('click', function () {
  $(searchArea).slideDown()
})

$(searchClose).on('click', function () {
  $(searchArea).slideUp()
})

const mobMenu = document.querySelector('header .mobMenu');
const mobMenuClose = document.querySelector('header .mobNavClose');
const nav = document.querySelector('header nav');
const navList = document.querySelectorAll('header nav ul li');

if (window.matchMedia("max-width: 640px")) {
  mobMenu.addEventListener('click', function() {
    nav.classList.add('slide-right')
  })
  mobMenuClose.addEventListener('click', function() {
    nav.classList.remove('slide-right')
  })
}
// header

$('.counBtn .btn').each(function () {
  var counBtn = $(this)
  counBtn.click(function (e) {
    e.preventDefault();

    var target = $(this);

    target.addClass('active');
    target.siblings().removeClass('active')
  });
});
// mainCon

const toTopEl = document.querySelector('#topBtn');

window.addEventListener('scroll', _.throttle(function () {
  if (window.scrollY == 0) {
    gsap.to('#topBtn', 0.2, {
      x: 100
    });
  } else {
    gsap.to('#topBtn', 0.2, {
      x: 0
    });
  }
}, 300));

toTopEl.addEventListener('click', function () {
  gsap.to(window, 0.7, {
    scrollTo: 0
  });
});
// topBtn