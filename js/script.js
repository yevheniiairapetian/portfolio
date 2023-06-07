var burgerMenu = document.getElementById('burger-menu');

var overlay = document.getElementsByClassName('.navigation-list');

burgerMenu.addEventListener('click', function() {
  this.classList.toggle('close');
  overlay.classList.toggle('overlay');
});