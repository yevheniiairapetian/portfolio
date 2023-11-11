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

function myFunction() {
  var dots1 = document.getElementById("dots-1");
  var dots2 = document.getElementById("dots-2");
  var dots3 = document.getElementById("dots-3");
  var dots4 = document.getElementById("dots-4");
  var dots5 = document.getElementById("dots-5");
  var dots6 = document.getElementById("dots-6");
  var dots7 = document.getElementById("dots-7");
  var readMore1 = document.getElementById("read-more-1");
  var readMore2 = document.getElementById("read-more-2");
  var readMore3 = document.getElementById("read-more-3");
  var readMore4 = document.getElementById("read-more-4");
  var readMore5 = document.getElementById("read-more-5");
  var readMore6 = document.getElementById("read-more-6");
  var readMore7 = document.getElementById("read-more-7");
  var myBtn1 = document.getElementById("myBtn1");
  var myBtn2 = document.getElementById("myBtn2");
  var myBtn3 = document.getElementById("myBtn3");
  var myBtn4 = document.getElementById("myBtn4");
  var myBtn5 = document.getElementById("myBtn5");
  var myBtn6 = document.getElementById("myBtn6");
  var myBtn7 = document.getElementById("myBtn7");

  if (dots1.style.display === "none"||dots2.style.display === "none"||dots3.style.display === "none"||dots4.style.display === "none"||dots5.style.display === "none"||dots6.style.display === "none"||dots7.style.display === "none") {
    dots1.style.display = "inline";
    dots2.style.display = "inline";
    dots3.style.display = "inline";
    dots4.style.display = "inline";
    dots5.style.display = "inline";
    dots6.style.display = "inline";
    dots7.style.display = "inline";
    myBtn1.innerHTML = "More";
    myBtn2.innerHTML = "More";
    myBtn3.innerHTML = "More";
    myBtn4.innerHTML = "More";
    myBtn5.innerHTML = "More";
    myBtn6.innerHTML = "More";
    myBtn7.innerHTML = "More";
    readMore1.style.display = "none";
    readMore2.style.display = "none";
    readMore3.style.display = "none";
    readMore4.style.display = "none";
    readMore5.style.display = "none";
    readMore6.style.display = "none";
    readMore7.style.display = "none";
  }
  else{
    dots1.style.display = "none";
    dots2.style.display = "none";
    dots3.style.display = "none";
    dots4.style.display = "none";
    dots5.style.display = "none";
    dots6.style.display = "none";
    dots6.style.display = "none";
    myBtn1.innerHTML = "Less";
    myBtn2.innerHTML = "Less";
    myBtn3.innerHTML = "Less";
    myBtn4.innerHTML = "Less";
    myBtn5.innerHTML = "Less";
    myBtn6.innerHTML = "Less";
    myBtn7.innerHTML = "Less";
    readMore1.style.display = "inline";
    readMore2.style.display = "inline";
    readMore3.style.display = "inline";
    readMore4.style.display = "inline";
    readMore5.style.display = "inline";
    readMore6.style.display = "inline";
    readMore7.style.display = "inline";
  }
}


