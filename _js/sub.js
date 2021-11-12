const header = document.querySelector('header')
const logo = document.querySelector('.logo img')
window.addEventListener('scroll', _.throttle(function () {
  if (window.scrollY < 100) {
    header.classList.remove('move-down')
    logo.setAttribute('src', '../_img/logo02_w.png')

  } else {
    header.classList.add('move-down')
    logo.setAttribute('src', '../_img/logo02.png')
  }
}, 300));
// header

$('.docuBtn li').each(function () {
  var docuBtn = $(this);
  var docuCon = $('.docuCon td');
  docuBtn.click(function (e) {
    e.preventDefault();

    var target = $(this);
    var index = target.index() + 1;

    docuCon.eq(index).addClass('active');
    docuCon.eq(index).siblings().removeClass('active');

    target.addClass('active');
    target.siblings().removeClass('active')
  });
});

$('.mobDocuBtn li').each(function () {
  var mobDocuBtn = $(this);
  var mobDocuCon = $('.mobDocuCon table');
  mobDocuCon.eq(0).siblings().hide();
  mobDocuBtn.click(function (e) {
    e.preventDefault();

    var target = $(this);
    var index = target.index();

    mobDocuCon.eq(index).show();
    mobDocuCon.eq(index).siblings().hide();

    target.addClass('active');
    target.siblings().removeClass('active')
  });
});
// document