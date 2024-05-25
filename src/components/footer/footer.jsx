import { useTranslation } from "react-i18next";
import { Navbar, Button, Container, Row, Col, Nav, Image } from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin, faDev, faTwitter, faMedium } from '@fortawesome/free-brands-svg-icons';
import footerCSS from './css/footer.css';
import { Link } from "react-router-dom";
import { ImpressumView } from '../impressum-view/impressum-view';

export const Footer = () =>{
  const { t } = useTranslation();
	const footer = [
		{
		  title: t("footer.copy"),
		  // ...
		},
	  ];
    function toggleSidebar() {
        let sidebar = document.querySelector('.social-container');
        // let menuBars = document.querySelector('.fa-arrow-right');
        let menuClose = document.querySelector('.fa-caret-right');
        // let menuClose = document.querySelector('.close-sidebar');
        
        // check if the menu is visible or not
        if (sidebar.style.left === "-37px") {
         
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
    return (
    <>
<footer className="main-footer footer-404 pt-5 pb-4 w-100">
    
    <div className="social-container" 
    onMouseEnter={()=>{showSidebar()}}
    >
        <div className="sidebar-close">
            <Button title={t("footer.toggleTitle")}
            className="sidebar-toggler sidebar-pulse" onClick={()=>toggleSidebar()}>
                <label for="sidebar">
                    
                    <i className="fa-solid fa-xl fa-caret-right close-sidebar"></i>
        
                </label>
            </Button>
        </div>
        
        <Link to='https://www.linkedin.com/in/yevheniiairapetian/' target="_blank" rel="noopener"><FontAwesomeIcon className="fa-dev" icon={faDev}/></Link>
        <Link to='https://twitter.com/airapetian_dev' target="_blank" rel="noopener"><FontAwesomeIcon className="fa-twitter" icon={faTwitter} /></Link>
        <Link to='https://github.com/yevheniiairapetian' target="_blank" rel="noopener"><FontAwesomeIcon className="fa-github" icon={faGithub} /></Link>
        <Link to='https://dev.to/yevheniiairapetian' target="_blank" rel="noopener"><FontAwesomeIcon className="fa-linkedin" icon={faLinkedin} /></Link>
        <Link to='https://medium.com/@yevheniiairapetian' target="_blank" rel="noopener"><FontAwesomeIcon className="fa-medium" icon={faMedium} /></Link>

    </div>
    <p className="fade-in-up-on-scroll copyright text-center">{t("footer.copy")}</p>
    <div className="footer-links-container">
   
    <Nav.Link className="text-light footer-links" as={Link} to={"https://www.freeprivacypolicy.com/live/13aaa5dd-c830-46ce-8e8a-010efe1a66f1"} target="_blank" >{t("menu.cookies")}</Nav.Link>
    <Nav.Link className="text-light footer-links" as={Link} to='/impressum'>{t("footer.impressumFooter")}</Nav.Link>
    <Nav.Link className="text-light footer-links" as={Link} to={"https://www.freeprivacypolicy.com/live/72425419-22ef-4dd3-893a-0e012dba1688"} target="_blank" >{t("menu.privacy")}</Nav.Link>
    </div>
    {/* <Link to={ImpressumView} className="impressum fade-in-up-on-scroll" >Impressum</Link> */}


</footer>
</>

  
    );
};


