import { Navbar, Container, Row, Col, Nav, Image } from "react-bootstrap";
import NavDropdown from 'react-bootstrap/NavDropdown';
import ukraineImg from "./img/ukraine.svg";
import usImg from "./img/united-states.svg";
import deImg from "./img/germany.svg";
import navigationCSS from './css/navigation.css';
import { Link } from "react-router-dom";
import $ from 'jquery';

export const NavigationBar = () => {
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
	  
	  function closeMenuDownloadLinks(){
		let linkDE = $('.download-menu-de');
		let linkEN = $('.download-menu-en');
		let linkUK = $('.download-menu-uk');
		let caret = $('.resume-caret');
		// if (linkDE.style.display == "none" && linkEN.style.display == "none" && linkUK.style.display == "none") {
		  linkDE.fadeOut();
		  linkEN.fadeOut();
		  linkUK.fadeOut();
		  caret.fadeOut();
		// }else{
		  
		// }
		
	  }
	return (

		<Navbar onClick={()=>{closeMenuDownloadLinks()}} className="page-header" expand="lg" id="navigation">
			<Container className="navigation">
				<Navbar.Brand className="p-2" as={Link} to="/" expand="lg">
                {/* <Nav.Link className="" as={Link} to='/'> */}
                <Image  className="img-responsive logo" alt="logo" src={"../../logo.svg"} />
								{/* </Nav.Link> */}
            
                
					
				</Navbar.Brand>
				<Navbar.Toggle />
				<Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
					<Nav>
					
								<Nav.Link className="text-light pe-4" as={Link} to='/'>
									About
								</Nav.Link>
								<Nav.Link className="text-light pe-4" as={Link} to='/projects'>
									Projects
								</Nav.Link>
								<Nav.Link className="text-light pe-4" as={Link} to='/testimonials'>
									Testimonials
								</Nav.Link>
								<Nav.Link className="text-light pe-4" as={Link} to='/contact'>
									Contact
								</Nav.Link>
								<NavDropdown onClick={()=>{showMenuDownloadLinks()}} title="Resume" id="collapsible-nav-dropdown">
              {/* <NavDropdown.Item href="#action/3.1">Resume</NavDropdown.Item> */}
			  
            
            
              <NavDropdown.Item download="Yevhenii-Airapetian-DE" href="#action/3.1"><Image roundedCircle className="flags mt-3 me-3" src={deImg} alt="An icon showing the German flag"/>
			  <Link to="img/germany.svg" title="Download the resume version in German" className="download-de" target="_blank" download="Yevhenii-Airapetian-DE"></Link>
              </NavDropdown.Item>
              <NavDropdown.Item download="Yevhenii-Airapetian-EN" href="#action/3.2">
			  <Image roundedCircle className="flags mt-3 me-3" src={usImg} alt="An icon showing the USA flag"/>
			  <Link to="img/united-states.svg" title="Download the resume version in English" className="download-en" target="_blank" download="Yevhenii-Airapetian-EN"></Link>
			  </NavDropdown.Item>
              <NavDropdown.Item download="Yevhenii-Airapetian-UK" href="#action/3.3">
			  <Image roundedCircle className="flags mt-3 me-3" src={ukraineImg} alt="An icon showing Ukrainian flag"/>
			  <Link to="img/ukraine.svg" title="Download the resume version in Ukrainian" className="download-uk" target="_blank" download="Yevhenii-Airapetian-UK"></Link>
              </NavDropdown.Item>
            </NavDropdown>
								
								 
                                
                               
							
					
					</Nav>
				</Navbar.Collapse>
			</Container>
		</Navbar>
	);
};
