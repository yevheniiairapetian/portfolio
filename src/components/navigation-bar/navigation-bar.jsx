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
								<NavDropdown className="cases-nav-container" title="Cases" id="collapsible-nav-dropdown">
              {/* <NavDropdown.Item href="#action/3.1">Resume</NavDropdown.Item> */}
			  
            
            
               <NavDropdown.Item target="_self" alt="">
			  <Link to="./../r3play-case" className="nav-cases" target="_self" >R3Play App</Link>
              </NavDropdown.Item>
              <NavDropdown.Item target="_self" alt="">
			  <Link to="./../myFlix-case" className="nav-cases" target="_self" >MyFlix App</Link>
              </NavDropdown.Item>
			  <NavDropdown.Item target="_self" alt="">
			  <Link to="./../meet-case" className="nav-cases" target="_self" >Meet App</Link>
              </NavDropdown.Item>
			  <NavDropdown.Item target="_self" alt="">
			  <Link to="./../owrite-case" className="nav-cases" target="_self" >Owrite App</Link>
              </NavDropdown.Item>
			  <NavDropdown.Item target="_self" alt="">
			  <Link to="./../pokemon-case" className="nav-cases" target="_self" >Pokemon App</Link>
              </NavDropdown.Item>
			  <NavDropdown.Item target="_self" alt="">
			  <Link to="./../to-do-case" className="nav-cases" target="_self" >To Do App</Link>
              </NavDropdown.Item>
			  
            </NavDropdown>
								<Nav.Link className="text-light pe-4" as={Link} to='/testimonials'>
									Testimonials
								</Nav.Link>
								<Nav.Link className="text-light pe-4" as={Link} to='/contact'>
									Contact
								</Nav.Link>
								<NavDropdown onClick={()=>{showMenuDownloadLinks()}} title="Resume" id="collapsible-nav-dropdown">
              {/* <NavDropdown.Item href="#action/3.1">Resume</NavDropdown.Item> */}
			  
            
            
               <NavDropdown.Item title="Klicken Sie hier, um meinen Lebenslauf auf Deutsch herunterzuladen. Möglicherweise müssen Sie einen Dateibetrachter wie Adobe Acrobat oder ähnliches verwenden" download="Yevhenii-Airapetian-DE" href="https://www.dropbox.com/scl/fi/kzn7bsab05ddugcjrkjub/Yevhenii-Airapetian-DE.pdf?rlkey=sam0r180x4qfjn7ey2rv5hd03&st=rljwq2uz&dl=0" target="_blank"><Image roundedCircle className="flags mt-3 me-3 nav-lang-cases" src={deImg} alt="An icon showing the German flag"/>
			  <Link to={"https://file.io/Mck4WxEzQGAu"} title="Download the resume version in German" className="download-de" target="_blank" ></Link>
              </NavDropdown.Item>
              <NavDropdown.Item title="Click here to download my resume in English. You might need to use a file viewer like Adobe Acrobat or similar" download="Yevhenii-Airapetian-EN" href="https://www.dropbox.com/scl/fi/y1s7krvn2tcri1495fdyb/Yevhenii-Airapetian-EN.pdf?rlkey=hxo8aghbdcdysd8otdd57c1t1&st=t0wgsfx3&dl=0" target="_blank">
			  <Image roundedCircle className="flags mt-3 me-3 nav-lang-cases" src={usImg} alt="An icon showing the USA flag"/>
			  <Link to={"https://file.io/HVTDNPEXVS7b"} title="Download the resume version in English" className="download-en" target="_blank" download="Yevhenii-Airapetian-EN"></Link>
			  </NavDropdown.Item>
              <NavDropdown.Item title="Натисніть тут, щоб завантажити моє резюме українською мовою. Можливо, вам знадобиться програма для перегляду файлів, наприклад Adobe Acrobat або подібна" download="Yevhenii-Airapetian-UK" href="https://www.dropbox.com/scl/fi/k1z3vwrnxmqux24j1m49r/Yevhenii-Airapetian-UA.pdf?rlkey=xy4vqr68rcljth5z23kp6wu7m&st=n0kmkcas&dl=0" target="_blank">
			  <Image roundedCircle className="flags mt-3 me-3 nav-lang-cases" src={ukraineImg} alt="An icon showing Ukrainian flag"/>
			  <Link to={"https://file.io/fsghnXVPdFna"} title="Download the resume zip folder" className="download-uk" target="_blank" download="https://file.io/fsghnXVPdFna"></Link>
              </NavDropdown.Item>
			  
            </NavDropdown>
								
								 
                                
                               
							
					
					</Nav>
				</Navbar.Collapse>
			</Container>
		</Navbar>
	);
};
