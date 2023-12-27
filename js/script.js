
// Get the backToTop button
let backToTopBtn = document.querySelector(".backToTop");

//Listens for the scroll event and shows the button when the user scrolls down by more than 20 pixels.
window.addEventListener("scroll", () => {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    backToTopBtn.style.display = "block";
  } else {
    backToTopBtn.style.display = "none";
  }
});

// When the button is clicked, it smoothly scrolls the page back to the top.
backToTopBtn.addEventListener("click", () => {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
});


// toggles menu
function toggleMenu() {
  let menu = document.querySelector('.navigation-list');
  let menuBars = document.querySelector('.fa-bars');
  let menuClose = document.querySelector('.fa-xmark');
  
  // check if the menu is visible or not
  if (menu.style.right == "-100%") {
   
    // if the menu is hidden, show it
    menu.style.right = "0%";
    // menu.style.top = "30%";
    // menu.style.height = "calc(100vh - 250px)";
    
    // hide hamburger bars, show close button
    menuBars.style.display = "inline";
    menuClose.style.display = "none";
    
  }
  else {
    // if the menu is visible, hide it
    menu.style.right = "-100%";
    // hide close button, show hamburger bars
    menuBars.style.display = "inline";
    menuClose.style.display = "none";
  }
}

// toggle siebar menu

function toggleSidebar() {
  let sidebar = document.querySelector('.social-container');
  let menuBars = document.querySelector('.fa-arrow-right');
  let menuClose = document.querySelector('.close-sidebar');
  
  // check if the menu is visible or not
  if (sidebar.style.left == "-30px") {
   
    // if the menu is hidden, show it
    sidebar.style.left = "0px";
    sidebar.style.transition = "all 0.4s ease-in-out";
    // menu.style.top = "30%";
    // menu.style.height = "calc(100vh - 250px)";
    
    // hide arrow button, show close button
    menuBars.style.display = "inline";
    // menuClose.style.display = "inline";
    
  }
  else {
    // if the menu is visible, hide it
    sidebar.style.transition = "all 0.4s ease-in-out";
    sidebar.style.left = "-30px";
    // hide close button, show arrow button
    menuBars.style.display = "inline";
    menuClose.style.display = "none";
  }
}

//expands sidebar menu
function showSidebar() {
  let sidebar = document.querySelector('.social-container');
  let menuBars = document.querySelector('.fa-arrow-right');
  let menuClose = document.querySelector('.close-sidebar');
  
    // show sidebar menu
    sidebar.style.left = "0px";
    sidebar.style.transition = "all 0.4s ease-in-out";
    // menu.style.top = "30%";
    // menu.style.height = "calc(100vh - 250px)";
    
    // hide arrow button, show close button
    menuBars.style.display = "inline";
    menuClose.style.display = "none";
    
  }

  // collapses sidebar menu
  function closeSidebar() {
    let sidebar = document.querySelector('.social-container');
    let menuBars = document.querySelector('.fa-arrow-right');
    let menuClose = document.querySelector('.close-sidebar');
         
      // hide sidebar menu
      sidebar.style.left = "-30px";
      sidebar.style.transition = "all 0.4s ease-in-out";
      // menu.style.top = "30%";
      // menu.style.height = "calc(100vh - 250px)";
      
      // show arrow button
      menuBars.style.display = "inline";
      menuClose.style.display = "none";
      
    }



const body = document.body;
const header = document.querySelector("header");
const main = document.querySelector(".app-container");
const headerHeight = document.querySelector("header").offsetHeight;
main.style.top = headerHeight + "px";
let lastScroll = 0;
window.addEventListener("scroll", () => {
  let currentScroll = window.pageYOffset;
  if (currentScroll - lastScroll > 0) {
    // header.classList.add("scroll-down");
    // header.classList.remove("scroll-up");
  } else {
    // scrolled up -- header show
    // header.classList.add("scroll-up");
    
    // header.classList.remove("scroll-down");
  }
  lastScroll = currentScroll;
})

// hides menu
function hideMenu() {
  let menu = document.querySelector('.navigation-list');
  let menuBars = document.querySelector('.fa-bars');
  let menuClose = document.querySelector('.fa-xmark');
  menu.style.right = "-100%";
  menuBars.style.display = "inline";
  menuClose.style.display = "none";
}

// slider

let slideIndex = 1;
let testimSlideIndex = 1;
showDivs(slideIndex);
showTestimonials(testimSlideIndex);

function plusDivs(n) {
  showDivs(slideIndex += n);
  showTestimonials(testimSlideIndex += n);
}

function currentDiv(n) {
  showDivs(slideIndex = n);
  showTestimonials(testimSlideIndex = n);
}

function showDivs(n) {
  let i;
  let x = document.getElementsByClassName("slides");
  if (n > x.length) { slideIndex = 1 }
  if (n < 1) { slideIndex = x.length }
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
    x[slideIndex - 1].style.display = "block";
  }
}

// show testimonials
function showTestimonials(n) {
  let i;
  let x = document.getElementsByClassName("testimonials-slides");
  if (n > x.length) { testimSlideIndex = 1 }
  if (n < 1) { testimSlideIndex = x.length }
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
    x[testimSlideIndex - 1].style.display = "block";
  }
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

  if (dots1.style.display === "none" || dots2.style.display === "none" || dots3.style.display === "none" || dots4.style.display === "none" || dots5.style.display === "none" || dots6.style.display === "none" || dots7.style.display === "none") {
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



