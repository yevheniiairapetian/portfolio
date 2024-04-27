import Carousel from 'react-bootstrap/Carousel';
import {Container, Col, Row, Image} from "react-bootstrap";
import { Link } from "react-router-dom";
// import {CarouselCaption} from "react-bootstrap/Carousel";
import React from "react";
import 'video-react/dist/video-react.css'; // import css
import { OwriteCaseSlider } from '../owrite-case-slider/owrite-case-slider';
import OwritePicture1 from './img/owrite-case-hero-image-2.png';
import { Player } from 'video-react';
import styleCSS from "./css/style.css";
import { faArrowUpRightFromSquare, faCode} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useTranslation } from 'react-i18next';


export const OwriteCaseView = () => {
  const { t } = useTranslation();
  // const takeaways = [
    
  // ];
  // const listItems = takeaways.map(takeaway => <li data-icon="&#9745; ">{takeaway}</li>);
  return (
    <Container>
        <Row>
            <Col>
            <h1 className="r3play-headings text-center pt-4 pb-3">{t("owriteCaseHeading")}</h1>
      
         

<div className="projects-information_container--item">
        
        <Image src={OwritePicture1} className="screenshot m-auto" alt="R3play Case Study hero image"></Image>
        <h2 className="fade-in-up-on-scroll r3play-headings">{t("caseOverview")}</h2>
        <p className="fade-in-up-on-scroll">{t("owriteCaseIntroduction")}</p>
        <h2 className="fade-in-up-on-scroll r3play-headings">{t("casePurpose")}</h2>
        <p className="fade-in-up-on-scroll">{t("owriteCaseRequired")}
        </p>
        <h2 className="fade-in-up-on-scroll r3play-headings">{t("caseObjective")}</h2>
        <p className="fade-in-up-on-scroll">{t("owriteCaseAim")}</p>
        <h2 className="fade-in-up-on-scroll r3play-headings">{t("caseApproach")}</h2>
        <h3 className="fade-in-up-on-scroll r3play-headings">{t("caseServer")}</h3>
        <p className="fade-in-up-on-scroll">{t("owriteCaseAboutServer")}</p>
        <h3 className="fade-in-up-on-scroll r3play-headings">{t("caseDatabase")}</h3>
        <p className="fade-in-up-on-scroll">{t("owriteCaseAboutDatabase")}</p>
        <h3 className="fade-in-up-on-scroll r3play-headings">{t("caseInterface")}</h3>
        <p className="fade-in-up-on-scroll">{t("owriteCaseAboutInterface")}</p>
        
        <p className="center r3play-slider-hint fade-in-up-on-scroll">{t("caseSliderTip")}</p>
        <OwriteCaseSlider/>
        
        <h2 className="fade-in-up-on-scroll r3play-headings">{t("caseDuration")}</h2>
        <p className="fade-in-up-on-scroll">{t("owriteCaseDurationData")}</p>
        <h2 className="fade-in-up-on-scroll r3play-headings">{t("caseRetrospective")}</h2>
        <h3 className="fade-in-up-on-scroll r3play-headings">{t("caseChallenges")}</h3>
        <p className="fade-in-up-on-scroll">{t("owriteCaseChallenge1")}</p>
        <p className="fade-in-up-on-scroll">{t("owriteCaseChallenge2")}</p>
        <h3 className="fade-in-up-on-scroll r3play-headings">{t("caseConclusion")}</h3>
        <p className="fade-in-up-on-scroll">{t("owriteCaseConclusionData")}</p>
        <h3 className="fade-in-up-on-scroll r3play-headings">{t("caseMainTakeaways")}</h3>
        {/* <ul className="r3play-takeaways">{listItems}</ul>; */}
        <ul className="r3play-takeaways">
                                                        <li data-icon="&#9745; ">{t("owriteMainTakeaway1")}</li>
                                                        <li data-icon="&#9745; ">{t("owriteMainTakeaway2")}</li></ul>;
        <h2 className="video-image-heading fade-in-up-on-scroll fade-in-up-on-scroll">{t("appPreview")}
        </h2>
        
        
        <iframe title="vimeo-player" src="https://player.vimeo.com/video/937460973?h=cf357bcec4" width="100%" height="560" frameborder="0"    allowfullscreen></iframe>
        <h2 className="technologies-heading fade-in-up-on-scroll">{t("caseTechnologies")}</h2>

           

        <p className="skills-paragraphs"><span>React.js</span>
        </p>
        <p className="skills-paragraphs"><span>
                        React Native</span></p>
        <p className="skills-paragraphs"><span>Google Firebase</span>
        </p>
        <p className="skills-paragraphs"><span>CSS3</span></p>
        <p className="skills-paragraphs"><span>Android Studio</span>
        </p>
        <p className="skills-paragraphs"><span>{t("responsiveSkill")}</span>
        </p>
        <p className="skills-paragraphs"><span>Javascript</span>
        </p>
        <p className="skills-paragraphs"><span>{t("nativeSkill")}</span></p>
        <p className="skills-paragraphs"><span>Expo Go</span></p>

        <h2 className="credits r3play-headings text-center fade-in-up-on-scroll">{t("caseCredits")}</h2>
        <p className="fade-in-up-on-scroll">{t("caseLead")}</p>
        <p>{t("caseTutor")} <br/><a className="deployed-link fade-in-up-on-scroll" target="_blank"
                        href="https://www.linkedin.com/in/tonny-ntambaazi-97275bb2/">{t("caseTutor2")}</a>
        </p>
        <p>{t("caseMentor")} <br/><a className="deployed-link fade-in-up-on-scroll" target="_blank"
                        href="https://www.linkedin.com/in/nizartriki/">{t("caseMentor2")}</a>
        </p>

        <Link className="r3play-external-links" title="Click to open the Owrite App Github repository" to='https://github.com/yevheniiairapetian/owrite' target="_blank" rel="noopener"><FontAwesomeIcon title="Click to read more about the R3play App" className="r3play-fa-code" icon={faCode} /></Link>
                                                  

<div className="back-link fade-in-up-on-scroll"><a href="works.html"><i alt="An icon showing an arrow turned to the left"
                className="fa-solid fa-arrow-left fa-2xl"></i></a></div>

</div>


            </Col>
        </Row>
    </Container>
    
  );
}
