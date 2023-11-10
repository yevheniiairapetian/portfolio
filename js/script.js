let menu = document.querySelector('.navigation-list');
let burgerMenu = document.querySelector('.hamburger-container');
let body = document.querySelector('body');
// document.getElementById('hamburger').click(function(){
//     menu.style.display = 'flex';
//   });
  
//   document.querySelector('body').click(function(){
//     menu.style.display = 'none';
//  });

// function hideMenu () {
//   menu.style.right = "-100%";
   

//   }
  
   
  
  

function toggleMenu () {
  // get the menu element by its id
  // check if the menu is visible or not
  if (menu.style.right == "-100%") {
    // if the menu is visible, hide it
    menu.style.right = "0%";
  }
  else {
    // if the menu is hidden, show it
    menu.style.right = "-100%";
  }
}



