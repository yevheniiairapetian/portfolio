const elements = document.querySelectorAll('.fade-in-up-on-scroll');

const fadeInUpOnScroll = () => {
  elements.forEach((element) => {
    const elementTop = element.getBoundingClientRect().top;
    const elementBottom = element.getBoundingClientRect().bottom;

    if (elementTop < window.innerHeight && elementBottom > 0) {
      element.classList.add('is-visible');
    } else {
      element.classList.remove('is-visible');
    }
  });
};

window.addEventListener('scroll', fadeInUpOnScroll);

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

function showDownloadLinks(){
  let linkDE = $('.download-de');
  let linkEN = $('.download-en');
  let linkUK = $('.download-uk');
  // if (linkDE.style.display == "none" && linkEN.style.display == "none" && linkUK.style.display == "none") {
    
    linkDE.fadeToggle();
    linkEN.fadeToggle();
    linkUK.fadeToggle();
    


  // }else{
    // linkDE.fadeToggle();
    // linkEN.fadeToggle();
    // linkUK.fadeToggle();
  // }
  
}

function showMenuDownloadLinks(){
  let linkDE = $('.download-menu-de');
  let linkEN = $('.download-menu-en');
  let linkUK = $('.download-menu-uk');
  let caret = $('.resume-caret');
  // if (linkDE.style.display == "none" && linkEN.style.display == "none" && linkUK.style.display == "none") {
    linkDE.fadeToggle();
    linkEN.fadeToggle();
    linkUK.fadeToggle();
    caret.fadeToggle();
  // }else{
    
  // }
  
}

function showLocalize(){
  let DE = $('.german');
  let EN = $('.english');
  let UK = $('.ukrainian');
  let caret = $('.localize-caret');
  let langs = $('.langs');
  // if (linkDE.style.display == "none" && linkEN.style.display == "none" && linkUK.style.display == "none") {
    DE.fadeToggle();
    
    EN.fadeToggle();
    UK.fadeToggle();
    caret.fadeToggle();
  // }else{
    
  // }
  
}


let langs = document.querySelector(".langs"),
     link = document.querySelectorAll(".languages"),
     title = document.querySelector(".websiteTitleAbout"),
     about = document.querySelector(".aboutMenu"),
     projects = document.querySelector(".projectsMenu"),
     testimonials = document.querySelector(".testimonialsMenu"),
     contact = document.querySelector(".contactMenu"),
     resume = document.querySelector(".resumeMenu"),
     hello = document.querySelector(".hello"),
     introduction = document.querySelector(".introduction"),
     prevExperience = document.querySelector(".prevExperience"),
     myFocus = document.querySelector(".myFocus"),
     mySecondFocus = document.querySelector(".mySecondFocus"),
     availability = document.querySelector(".availability"),
     hobbies = document.querySelector(".hobbies"),
     checkOutBig = document.querySelector(".checkOutBig"),
     checkOutSmall = document.querySelector(".checkOutSmall"),
     resumeBig = document.querySelector(".resumeBig"),
     resumeSmall = document.querySelector(".resumeSmall"),
     copyright = document.querySelector(".copyright"),
     impressum = document.querySelector(".impressum")


link.forEach(el=>{
     el.addEventListener("click", ()=>{
          langs.querySelector(".active").classList.remove("active");
          el.classList.add("active");

          let attr = el.getAttribute("language")

          title.textContent = data[attr].websiteTitleAbout;
          about.textContent = data[attr].aboutMenu;
          projects.textContent = data[attr].projectsMenu;
          testimonials.textContent = data[attr].testimonialsMenu;
          contact.textContent = data[attr].contactMenu;
          resume.textContent = data[attr].resumeMenu;
          hello.textContent = data[attr].hello;
          introduction.textContent = data[attr].introduction;
          prevExperience.textContent = data[attr].prevExperience;
          myFocus.textContent = data[attr].myFocus;
          mySecondFocus.textContent = data[attr].mySecondFocus;
          availability.textContent = data[attr].availability;
          hobbies.textContent = data[attr].hobbies;
          checkOutBig.textContent = data[attr].checkOutBig;
          checkOutSmall.textContent = data[attr].checkOutSmall;
          resumeBig.textContent = data[attr].resumeBig;
          resumeSmall.textContent = data[attr].resumeSmall;
          copyright.textContent = data[attr].copyright;
          impressum.textContent = data[attr].impressum;

          
        
     })
})

let data = {
     german: {
      websiteTitleAbout:"Yevhenii Airapetian - About",
      aboutMenu:"Über",
      projectsMenu:"Projekte",
      testimonialsMenu:"Empfehlungsschreiben",
      contactMenu:"Kontakt",
      resumeMenu:"Lebenslauf",
      hello: "Hallo, ich bin Yevhenii!",
      introduction: "Ich bin ein Webentwickler mit Leidenschaft für Technologie",
      prevExperience: "Nachdem ich bereits Erfahrung im Unterrichten von Fremdsprachen und im wissenschaftlichen Schreiben gesammelt habe, freue ich mich darauf, eine Karriere als Webentwickler anzustreben.",
      myFocus:"Ich habe mich immer darauf konzentriert, qualitativ hochwertige Arbeit zu liefern, Fristen einzuhalten und meine ausgefeilten Fähigkeiten zur Problemlösung, zum Zeitmanagement und zum logischen Denken einzusetzen.",
      mySecondFocus:"Mein Fokus liegt darauf, mein Fachwissen mit meinen beruflichen Bestrebungen zu kombinieren, um funktionale, reaktionsschnelle und zugängliche Softwarelösungen zu schaffen.",
      availability:"Ich stehe für Vorort- und Hybrideinsätze im Raum Berlin und Potsdam oder remote zur Verfügung.",
      hobbies:"Neben meinen Leidenschaften in der Webentwicklung bin ich auch ein aktiver Hobbyfotograf und Fitness-Enthusiast, und an jedem anderen Tag kann man mich draußen beim Fotografieren oder Heben schwerer Gewichte antreffen.",
      checkOutBig:"Code",
      checkOutSmall:"Code",
      resumeBig:"Lebenslauf",
      resumeSmall:"CV",
      copyright:"© Yevhenii Airapetian. Alle Rechte vorbehalten.",
      impressum:"Impressum",
     },
     english: {
          websiteTitleAbout:"Yevhenii Airapetian - About",
          aboutMenu:"About",
          projectsMenu:"Projects",
          testimonialsMenu:"Testimonials",
          contactMenu:"Contact",
          resumeMenu:"Resume",
          hello: "Hi, I'm Yevhenii!",
          introduction: "I'm a web developer passionate about technology",
          prevExperience: "With previous experience in teaching foreign languages and academic writing, I'm excited to pursue a career as a web developer.",
          myFocus:"I have always focused on delivering high-quality work that met deadlines, employing my refined problem-solving, time-management, and logical thinking skills.",
          mySecondFocus:"My focus is to combine my expertise with my professional aspirations to help create functional, responsive, and accessible software solutions.",
          availability:"I'm available for on-site and hybrid employment in the Berlin and Potsdam area or remotely.",
          hobbies:"In addition to my passions in web development, I'm also an active hobby photographer and fitness enthusiast, and any other day you can find me outside taking photos or lifting heavy weights.",
          checkOutBig:"Check out Code",
          checkOutSmall:"Code",
          resumeBig:"Download Resume",
          resumeSmall:"Resume",
          copyright:"© Yevhenii Airapetian. All rights reserved.",
          impressum:"Impressum",








     },
     ukrainian: {
      websiteTitleAbout:"Євгеній Айрапетян - Про мене",
      aboutMenu:"Про мене",
      projectsMenu:"Проекти",
      testimonialsMenu:"Відгуки",
      contactMenu:"Зв'язок",
      resumeMenu:"Резюме",
      hello: "Привіт, мене звати Євгеній!",
      introduction: "Я веб-розробник і захоплююся технологіями",
      prevExperience: "Маючи попередній досвід викладання іноземних мов та академічного письма, я з радістю продовжую кар'єру веб-розробника.",
      myFocus:"Я завжди зосереджувався на виконанні високоякісної роботи, дотримуючись дедлайнів, використовуючи мої навички вирішення проблем, тайм-менеджмент і логічне мислення.",
      mySecondFocus:"Я зосереджений на тому, щоб об'єднати свій досвід роботи із професійними прагненнями, щоб допомагати створювати функціональні, адаптивні та доступні програмні рішення.",
      availability:"Я доступний для роботи в офісі та в гібридному режимі в районі Берліна та Потсдама або віддалено.",
      hobbies:"Окрім моєї пристрасті до веб-розробки, я також активний фотограф-любитель та фітнес ентузіаст, і у вільний час Ви можете побачити мене на вулиці, де я фотографую або займаюсь фітнесом.",
      checkOutBig:"Глянути Код",
      checkOutSmall:"Код",
      resumeBig:"Завантажити резюме",
      resumeSmall:"Резюме",
      copyright:"© Євгеній Айрапетян. Усі права захищено.",
      impressum:"Відбиток",          
     }
}

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
    // menuBars.style.display = "none";
    menuBars.style.fontSize = "0px"
    menuBars.style.transition = "all 0.3s ease-out";
    menuClose.style.display = "inline";
    menuClose.style.fontSize = "30px";
    menuClose.style.transition = "all 0.3s ease-out";
  }
  else {
    // if the menu is visible, hide it
    menu.style.right = "-100%";
    // hide close button, show hamburger bars
    menuBars.style.display = "inline";
    menuBars.style.fontSize = "30px"
    menuBars.style.transition = "all 0.3s ease-out";
    // menuClose.style.display = "none";
    menuClose.style.fontSize = "0px";
    menuClose.style.transition = "all 0.3s ease-out";
  }
}

// toggle siebar menu

function toggleSidebar() {
  let sidebar = document.querySelector('.social-container');
  // let menuBars = document.querySelector('.fa-arrow-right');
  let menuClose = document.querySelector('.fa-caret-right');
  // let menuClose = document.querySelector('.close-sidebar');
  
  // check if the menu is visible or not
  if (sidebar.style.left == "-37px") {
   
    // if the menu is hidden, show it
    sidebar.style.left = "0px";
    sidebar.style.transition = "all 0.4s ease-in-out";
    // menu.style.top = "30%";
    // menu.style.height = "calc(100vh - 250px)";
    
    // hide arrow button, show close button
    // menuBars.style.display = "inline";
    menuClose.style.display = "inline";
    
  }
  else {
    // if the menu is visible, hide it
    sidebar.style.transition = "all 0.4s ease-in-out";
    sidebar.style.left = "-37px";
    // hide close button, show arrow button
    // menuBars.style.display = "inline";
    menuClose.style.display = "inline";
  }
}

//expands sidebar menu
function showSidebar() {
  let sidebar = document.querySelector('.social-container');
  // let menuBars = document.querySelector('.fa-arrow-right');
  // let menuClose = document.querySelector('.close-sidebar');
  let menuClose = document.querySelector('.fa-caret-right');
  
    // show sidebar menu
    sidebar.style.left = "0px";
    sidebar.style.transition = "all 0.4s ease-in-out";
    // menu.style.top = "30%";
    // menu.style.height = "calc(100vh - 250px)";
    
    // hide arrow button, show close button
    // menuBars.style.display = "inline";
    menuClose.style.display = "inline";
    
  }

  // collapses sidebar menu
  function closeSidebar() {
    let sidebar = document.querySelector('.social-container');
    // let menuBars = document.querySelector('.fa-arrow-right');
    // let menuClose = document.querySelector('.close-sidebar');
    let menuClose = document.querySelector('.fa-caret-right');
      // hide sidebar menu
      sidebar.style.left = "-37px";
      sidebar.style.transition = "all 0.4s ease-in-out";
      // menu.style.top = "30%";
      // menu.style.height = "calc(100vh - 250px)";
      
      // show arrow button
      // menuBars.style.display = "inline";
      menuClose.style.display = "inline";
      
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
    menuBars.style.fontSize = "30px"
    menuBars.style.transition = "all 0.3s ease-out";
    menuClose.style.fontSize = "0px";
    menuClose.style.transition = "all 0.3s ease-out";
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



