import { Navbar, Container, Row, Col, Nav, Image } from "react-bootstrap";

import navigationCSS from './css/navigation.css';
import { Link } from "react-router-dom";


export const NavigationBar = () => {
	
	return (

		<Navbar className="page-header" expand="lg" id="navigation">
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
								
								 
                                
                               
							
					
					</Nav>
				</Navbar.Collapse>
			</Container>
		</Navbar>
	);
};
