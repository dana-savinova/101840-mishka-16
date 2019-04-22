var headerNav = document.querySelector('.page-header__nav');
var headerToggle = document.querySelector('.page-header__toggle');

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
