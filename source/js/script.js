var headerNav = document.querySelector('.page-header__nav');
var headerToggle = document.querySelector('.page-header__toggle');
var promoBtn = document.querySelector('.promo__button');
var popUpOverlay = document.querySelector('.modal-overlay');
var popUp = document.querySelector('.modal-cart');

headerNav.classList.remove('page-header__nav--nojs');
// Открытие меню
headerToggle.addEventListener('click', function() {
    if (headerNav.classList.contains('page-header__nav--closed')) {
      headerNav.classList.remove('page-header__nav--closed');
      headerNav.classList.add('page-header__nav--opened');
    } else {
      headerNav.classList.add('page-header__nav--closed');
      headerNav.classList.remove('page-header__nav--opened');
    }
  });

//Открытие попапа
promoBtn.addEventListener('click', function (evt) {
  evt.preventDefault();
  popUpOverlay.classList.add('modal-overlay--show');
});

popUpOverlay.addEventListener('click', function() {
  popUpOverlay.classList.remove('modal-overlay--show');
});

popUp.addEventListener('click', function (evt) {
  evt.stopPropagation();
});

window.addEventListener('keydown', function (evt) {
  if (evt.keyCode === 27) {
    evt.preventDefault();
    if (popUpOverlay.classList.contains('modal-overlay--show')) {
      popUpOverlay.classList.remove('modal-overlay--show');
    }
  }
});
