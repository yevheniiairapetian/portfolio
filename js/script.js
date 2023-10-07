let menu = document.querySelector('.navigation-list');

// function hideMenu() {
    
//     // menu.style.display = 'none';
//   }

  // window.addEventListener('keydown', (e) => {
  //   let menu = document.querySelector('.navigation-list');
  //   if (e.key === 'Escape' && menu.classList.contains('navigation-list')) {
  //     hideMenu();  
  //   }
  // });

  // menu.addEventListener('click', (e) => {
  //   // Since this is also triggered when clicking INSIDE the modal
  //   // We only want to close if the user clicks directly on the overlay
  //   let target = e.target;
  //   if (target === menu) {
  //     hideMenu();
  //   }
  // });

  function showMenu() {
    let menu = document.querySelector('.navigation-list');
    menu.style.display = 'flex';
  }
  let burgerMenu = document.querySelector('#hamburger');

  // burgerMenu.addEventListener('click', (e) => {
  //   let menu = document.querySelector('.navigation-list');
    
  //     showMenu();  
    
  // });