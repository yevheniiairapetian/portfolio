import { Navbar, Button, Container, Row, Col, Nav, Image } from "react-bootstrap";
import { Link } from 'react-router-dom';
import aboutCSS from './css/about.css';
import profileImg from "./img/yevhenii_airapetian_profile_picture.jpg";
import ukraineImg from "./img/ukraine.svg";
import usImg from "./img/united-states.svg";
import deImg from "./img/germany.svg";

export const AboutView = () => {
	
	return (

		<Container className="aboutContainer pt-5">
			<Row>
				<Col xs={12} md={5}>
                <Image  className="img-responsive profile-picture pt-3 pb-3 pe-2" fluid roundedCircle alt="logo" src={profileImg} />
                </Col>
                <Col xs={12} md={7}>
                <h1 className="hello-heading hello text-primary mt-4 mb-4">Hi, I'm Yevhenii!</h1>
            <p className="introduction">I'm a web developer passionate about technology</p>
            <p className="prevExperience">With previous experience in teaching foreign languages and academic writing, I'm excited to pursue a
                career as a web developer.</p>
            <p className="myFocus">I have always focused on delivering high-quality work
                that met deadlines, employing my refined problem-solving, time-management, and
                logical thinking skills.</p>
            <p className="mySecondFocus">My focus is to combine my
                expertise with my professional aspirations to help create functional, responsive, and accessible
                software solutions.</p>
            <p className="availability">I'm available for on-site and hybrid employment in the Berlin and Potsdam area or remotely.</p>
            <p className="fade-in-up-on-scroll hobbies mb-4">In addition to my passions in web development, I'm also an active hobby photographer and fitness
                enthusiast, and any other day
                you can find me outside taking photos or lifting heavy weights.</p>
            
            <Button variant="primary" className="check-out fade-in-up-on-scroll ps-3 pe-3" href="https://github.com/yevheniiairapetian" target="_blank" rel="noopener noreferrer"><span title="Check out code on Github" className="about-buttons-small-screen checkOutSmall">Code</span></Button>
            <Button variant="dark" 
            // onClick={showDownloadLinks()} 
            className="resume fade-in-up-on-scroll ps-3 pe-3 ms-2" target="_blank">
                <span title="* Download zip folder with resumes. You might need to use a file archiver to view the files" className="about-buttons-big-screen resumeBig">Resume</span>
            
                </Button><br/>
                
                <Link to="img/germany.svg" title="Download the resume version in German" className="download-de" target="_blank" download="Yevhenii-Airapetian-DE"><Image roundedCircle className="flags mt-3 me-3" src={deImg} alt="An icon showing the German flag"/></Link>
            <Link to="img/united-states.svg" title="Download the resume version in English" className="download-en" target="_blank" download="Yevhenii-Airapetian-EN"><Image roundedCircle className="flags mt-3 me-3" src={usImg} alt="An icon showing the USA flag"/></Link>
            <Link to="img/ukraine.svg" title="Download the resume version in Ukrainian" className="download-uk" target="_blank" download="Yevhenii-Airapetian-UK"><Image roundedCircle className="flags mt-3 me-3" src={ukraineImg} alt="An icon showing Ukrainian flag"/></Link>
                
                    
                </Col>
            </Row>
            
            
                
					
				
				
				
					
					
								
								
								 
                                
                               
							
					
					
				
			</Container>
		
	);

};