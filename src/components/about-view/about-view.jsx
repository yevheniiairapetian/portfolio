import { Navbar, Button, Container, Row, Col, Nav, Image } from "react-bootstrap";
import { Link } from 'react-router-dom';
import $ from 'jquery';
import aboutCSS from './css/about.css';

import uaCV from "./img/Yevhenii-Airapetian-UK.pdf";
import usCV from "./img/Yevhenii-Airapetian-EN.pdf";
import deCV from "./img/Yevhenii-Airapetian-DE.pdf";
import { useTranslation } from 'react-i18next';

export const AboutView = () => {
	function showDownloadLinks(){
        
        let resumes = $('.resumes');
        
          resumes.fadeToggle();
        
      }

      function closeDownloadLinks(){
        let resumes = $('.resumes');
        let content = $('.close-notification');
        content.on("click", function(){$(".notification").fadeOut()});
        
          // notification.fadeOut();
          resumes.fadeOut();
        
      }
      const { t } = useTranslation();
	return (

		<Container fluid className="aboutAnimation wrapper close-notification aboutContainer pt-5">
			<Row >
				<Col  xs={12} md={5}>
                <Image alt={t("profileImageAlt")} onClick={()=>{closeDownloadLinks()}} className="img-responsive profile-picture pt-3 pb-3 pe-2" fluid roundedCircle src="https://i.ibb.co/0KR5Hb9/yevhenii-airapetian-profile-picture-cr-cr.jpg" />
                </Col>
                <Col className="h-100" xs={12} md={7}>
                <h1 className="r3play-headings">{t("welcome text")}</h1>
            <p onClick={()=>{closeDownloadLinks()}} className="introduction">{t("introduction")}</p>
            <p onClick={()=>{closeDownloadLinks()}} className="prevExperience">{t("experience")}</p>
            <p onClick={()=>{closeDownloadLinks()}} className="myFocus">{t("first focus")}</p>
            <p onClick={()=>{closeDownloadLinks()}} className="mySecondFocus">{t("second focus")}</p>
            <p onClick={()=>{closeDownloadLinks()}} className="availability">{t("availability")}</p>
            <p onClick={()=>{closeDownloadLinks()}} className="fade-in-up-on-scroll hobbies mb-4">{t("hobbies")}</p>
            
            <Button variant="primary" className="check-out fade-in-up-on-scroll ps-3 pe-3" href="https://github.com/yevheniiairapetian" target="_blank" rel="noopener noreferrer"><span title={t("checkOutCodeTitle")} className="about-buttons-small-screen checkOutSmall">{t("code")}</span></Button>
            <Button 
            variant="dark" 
            onClick={()=>{showDownloadLinks()}} 
            className="resume fade-in-up-on-scroll ps-3 pe-3 ms-2">
                <span title={t("toggleResumeTitle")} className="about-buttons-big-screen resumeBig">{t("resume")}</span>
            
                </Button><br/>
                <div className="resumes">
                  
                <Link to={"https://www.dropbox.com/scl/fi/fdlz8us0v7vg4hv4nfyvi/Yevhenii-Airapetian-Lebenslauf-DE.docx?rlkey=t1n3cmi6no66ow0ozkpgc9zuh&st=7j5ci3cy&dl=0?3324"} title={t("aboutCvDeTitle")} className="download-de" target="_blank" download="Yevhenii-Airapetian-DE.pdf">
                <img className="flags mt-3 me-3" alt={t("aboutCvDeAlt")} src="https://hatscripts.github.io/circle-flags/flags/de.svg" width="29"/>
                  {/* <Image roundedCircle className="flags mt-3 me-3" src={deImg} alt="An icon showing the German flag"/>*/}</Link> 
            <Link to={"https://www.dropbox.com/scl/fi/y1s7krvn2tcri1495fdyb/Yevhenii-Airapetian-EN.pdf?rlkey=hxo8aghbdcdysd8otdd57c1t1&st=t0wgsfx3&dl=0"} title={t("aboutCvEnTitle")} className="download-en" target="_blank" download="Yevhenii-Airapetian-EN.pdf">
            <img className="flags mt-3 me-3" alt={t("aboutCvEnAlt")} src="https://hatscripts.github.io/circle-flags/flags/us.svg" width="29"/>
              {/* <Image roundedCircle className="flags mt-3 me-3" src={usImg} alt="An icon showing the USA flag"/>*/}</Link> 
            <Link to={"https://www.dropbox.com/scl/fi/k1z3vwrnxmqux24j1m49r/Yevhenii-Airapetian-UA.pdf?rlkey=xy4vqr68rcljth5z23kp6wu7m&st=n0kmkcas&dl=0"} title={t("aboutCvUkTitle")} className="download-uk" target="_blank" download="Yevhenii-Airapetian-UK.pdf">
            <img className="flags mt-3 me-3" alt={t("aboutCvUkAlt")} src="https://hatscripts.github.io/circle-flags/flags/ua.svg" width="29"/>
              {/* <Image roundedCircle className="flags mt-3 me-3" src={ukraineImg} alt="An icon showing Ukrainian flag"/>*/}</Link> 
                
            </div>    
                </Col>
            </Row>
            
            
                
					
				
				
				
					
					
								
								
								 
                                
                               
							
					
					
				
			</Container>
		
	);

};