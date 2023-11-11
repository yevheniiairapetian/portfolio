let menu = document.querySelector('.navigation-list');
let burgerMenu = document.querySelector('.hamburger-container');
let body = document.querySelector('body');

function toggleMenu () {
  // check if the menu is visible or not
  if (menu.style.right == "-100%") {
    // if the menu is hidden, show it
    menu.style.right = "0%";
  }
  else {
    // if the menu is visible, hide it
    menu.style.right = "-100%";
  }
}

// slider

var slideIndex = 1;
              showDivs(slideIndex);
              
              function plusDivs(n) {
                showDivs(slideIndex += n);
              }
              
              function currentDiv(n) {
                showDivs(slideIndex = n);
              }
              
              function showDivs(n) {
                var i;
                var x = document.getElementsByClassName("slides");
                var dots = document.getElementsByClassName("slide-counts");
                if (n > x.length) {slideIndex = 1}    
                if (n < 1) {slideIndex = x.length}
                for (i = 0; i < x.length; i++) {
                  x[i].style.display = "none";  
                }
                for (i = 0; i < dots.length; i++) {
                  dots[i].className = dots[i].className.replace(" w3-red", "");
                }
                x[slideIndex-1].style.display = "block";  
                dots[slideIndex-1].className += " w3-red";
              }
