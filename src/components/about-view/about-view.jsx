import { Navbar, Button, Container, Row, Col, Nav, Image } from "react-bootstrap";
import { Link } from 'react-router-dom';
import $ from 'jquery';
import aboutCSS from './css/about.css';
import profileImg from "./img/yevhenii_airapetian_profile_picture.jpg";
import ukraineImg from "./img/ukraine.svg";
import usImg from "./img/united-states.svg";
import deImg from "./img/germany.svg";
import uaCV from "./img/Yevhenii-Airapetian-UK.pdf";
import usCV from "./img/Yevhenii-Airapetian-EN.pdf";
import deCV from "./img/Yevhenii-Airapetian-DE.pdf";
import { useTranslation } from 'react-i18next';

export const AboutView = () => {
	function showDownloadLinks(){
        // let linkDE = $('.download-de');
        // let linkEN = $('.download-en');
        // let linkUK = $('.download-uk');
        let resumes = $('.resumes');
        // if (linkDE.style.display == "none" && linkEN.style.display == "none" && linkUK.style.display == "none") {
          
          // linkDE.fadeToggle();
          // linkEN.fadeToggle();
          // linkUK.fadeToggle();
          resumes.fadeToggle();
      
      
        // }else{
          // linkDE.fadeToggle();
          // linkEN.fadeToggle();
          // linkUK.fadeToggle();
        // }
        
      }

      function closeDownloadLinks(){
        let resumes = $('.resumes');
        // let linkDE = $('.download-de');
        // let linkEN = $('.download-en');
        // let linkUK = $('.download-uk');
        // if (linkDE.style.display == "none" && linkEN.style.display == "none" && linkUK.style.display == "none") {
          
          // linkDE.fadeOut();
          // linkEN.fadeOut();
          // linkUK.fadeOut();
          resumes.fadeOut();
          
      
      
        // }else{
          // linkDE.fadeToggle();
          // linkEN.fadeToggle();
          // linkUK.fadeToggle();
        // }
        
      }
      const { t } = useTranslation();
	return (

		<Container className="aboutContainer pt-5">
			<Row>
				<Col xs={12} md={5}>
                <Image  onClick={()=>{closeDownloadLinks()}} className="img-responsive profile-picture pt-3 pb-3 pe-2" fluid roundedCircle alt="logo" src={profileImg} />
                </Col>
                <Col xs={12} md={7}>
                <h1>{t("welcome text")}</h1>
            <p onClick={()=>{closeDownloadLinks()}} className="introduction">{t("introduction")}</p>
            <p onClick={()=>{closeDownloadLinks()}} className="prevExperience">{t("experience")}</p>
            <p onClick={()=>{closeDownloadLinks()}} className="myFocus">{t("first focus")}</p>
            <p onClick={()=>{closeDownloadLinks()}} className="mySecondFocus">{t("second focus")}</p>
            <p onClick={()=>{closeDownloadLinks()}} className="availability">{t("availability")}</p>
            <p onClick={()=>{closeDownloadLinks()}} className="fade-in-up-on-scroll hobbies mb-4">{t("hobbies")}</p>
            
            <Button variant="primary" className="check-out fade-in-up-on-scroll ps-3 pe-3" href="https://github.com/yevheniiairapetian" target="_blank" rel="noopener noreferrer"><span title="Check out code on Github" className="about-buttons-small-screen checkOutSmall">{t("code")}</span></Button>
            <Button 
            variant="dark" 
            onClick={()=>{showDownloadLinks()}} 
            className="resume fade-in-up-on-scroll ps-3 pe-3 ms-2">
                <span title="Toggle resume files" className="about-buttons-big-screen resumeBig">{t("resume")}</span>
            
                </Button><br/>
                <div className="resumes">
                <Link to={deCV} title="Klicken Sie hier, um meinen Lebenslauf auf Deutsch herunterzuladen. Möglicherweise müssen Sie einen Dateibetrachter wie Adobe Acrobat oder ähnliches verwenden" className="download-de" target="_blank" download="Yevhenii-Airapetian-DE.pdf"><Image roundedCircle className="flags mt-3 me-3" src={deImg} alt="An icon showing the German flag"/></Link>
            <Link to={usCV} title="Click here to download my resume in English. You might need to use a file viewer like Adobe Acrobat or similar" className="download-en" target="_blank" download="Yevhenii-Airapetian-EN.pdf"><Image roundedCircle className="flags mt-3 me-3" src={usImg} alt="An icon showing the USA flag"/></Link>
            <Link to={uaCV} title="Натисніть тут, щоб завантажити моє резюме українською мовою. Можливо, вам знадобиться програма для перегляду файлів, наприклад Adobe Acrobat або подібна" className="download-uk" target="_blank" download="Yevhenii-Airapetian-UK.pdf"><Image roundedCircle className="flags mt-3 me-3" src={ukraineImg} alt="An icon showing Ukrainian flag"/></Link>
                
            </div>    
                </Col>
            </Row>
            
            
                
					
				
				
				
					
					
								
								
								 
                                
                               
							
					
					
				
			</Container>
		
	);

};