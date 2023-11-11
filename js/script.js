let menu = document.querySelector('.navigation-list');
let burgerMenu = document.querySelector('.hamburger-container');
let body = document.querySelector('body');

function toggleMenu() {
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

let slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
  showDivs(slideIndex += n);
}

function currentDiv(n) {
  showDivs(slideIndex = n);
}

function showDivs(n) {
  let i;
  let x = document.getElementsByClassName("slides");
  // var dots = document.getElementsByClassName("slide-counts");
  if (n > x.length) { slideIndex = 1 }
  if (n < 1) { slideIndex = x.length }
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  // for (i = 0; i < dots.length; i++) {
  //   dots[i].className = dots[i].className.replace(" w3-red", "");
  // }
  x[slideIndex - 1].style.display = "block";
  // dots[slideIndex-1].className += " w3-red";
}

// projects more buttons

function myFunction() {
  let dots1 = document.getElementById("dots-1");
  let dots2 = document.getElementById("dots-2");
  let dots3 = document.getElementById("dots-3");
  let dots4 = document.getElementById("dots-4");
  let dots5 = document.getElementById("dots-5");
  let dots6 = document.getElementById("dots-6");
  let dots7 = document.getElementById("dots-7");
  let dots = $(".dots");
  let myBtn = $(".myBtn");
  let readMore = $(".read-more");
  
  if (dots1.style.display === "none"||dots2.style.display === "none"||dots3.style.display === "none"||dots4.style.display === "none"||dots5.style.display === "none"||dots6.style.display === "none"||dots7.style.display === "none") {
          dots.fadeToggle();
          myBtn.text("More");
          readMore.fadeToggle();
        }
        else {
          dots.fadeToggle();
          myBtn.text("Less");
          readMore.fadeToggle();
        }

}

