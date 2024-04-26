import Carousel from 'react-bootstrap/Carousel';
import {Container, Col, Row, Image} from "react-bootstrap";
import { Link } from "react-router-dom";
// import {CarouselCaption} from "react-bootstrap/Carousel";
import React from "react";
import 'video-react/dist/video-react.css'; // import css
import { ToDoCaseSlider } from '../to-do-case-slider/to-do-case-slider';
import { Player } from 'video-react';
import styleCSS from "./css/style.css";
import ToDoPicture1 from "./img/to-do-case-hero-image.png";
import { faArrowUpRightFromSquare, faCode} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useTranslation } from 'react-i18next';


export const ToDoCaseView = () => {
  const { t } = useTranslation();
  

      // const takeaways = [
      //   'Enhance the Bootstrap skills',
      //   'Work on the debugging skills',
      //   'Extend the app\'s features later on',
      // ];
      // const listItems = takeaways.map(takeaway => <li data-icon="&#9745; ">{takeaway}</li>);

      
      
      



  return (
    <Container>
        <Row>
            <Col>
            <h1 className="r3play-headings text-center pt-4 pb-3">{t("toDoCaseHeading")}</h1>
      
         

<div className="projects-information_container--item">
        
        <Image src={ToDoPicture1} className="screenshot" alt="R3play Case Study hero image"></Image>
        <h2 className="fade-in-up-on-scroll r3play-headings">{t("caseOverview")}</h2>
        <p className="fade-in-up-on-scroll">{t("toDoCaseIntroduction")}</p>
        <h2 className="fade-in-up-on-scroll r3play-headings">{t("casePurpose")}</h2>
        <p className="fade-in-up-on-scroll">{t("toDoCaseRequired")}
        </p>
        <h2 className="fade-in-up-on-scroll r3play-headings">{t("caseObjective")}</h2>
        <p className="fade-in-up-on-scroll">{t("toDoCaseAim")}</p>
        <h2 className="fade-in-up-on-scroll r3play-headings">{t("caseApproach")}</h2>
        <h3 className="fade-in-up-on-scroll r3play-headings">{t("caseClient")}</h3>
        <p className="fade-in-up-on-scroll">{t("toDoCaseAboutClient")}</p>
        <p className="center r3play-slider-hint fade-in-up-on-scroll">{t("caseSliderTip")}</p>
        <ToDoCaseSlider/>
        
        <h2 className="fade-in-up-on-scroll r3play-headings">{t("caseDuration")}</h2>
        <p className="fade-in-up-on-scroll">{t("toDoCaseDurationData")}</p>
        <h2 className="fade-in-up-on-scroll r3play-headings">{t("caseRetrospective")}</h2>
        <h3 className="fade-in-up-on-scroll r3play-headings">{t("caseChallenges")}</h3>
        <p className="fade-in-up-on-scroll">{t("toDoCaseChallenge1")}</p>
        {/* <ul className="r3play-takeaways">{beforeLists}</ul> */}
        <ul className="r3play-takeaways">
                                                        <li data-icon="&#9745; ">{t("toDoBeforeFeature1")}</li>
                                                        <li data-icon="&#9745; ">{t("toDoBeforeFeature2")}</li>
                                                        <li data-icon="&#9745; ">{t("toDoBeforeFeature3")}</li>
                                                        <li data-icon="&#9745; ">{t("toDoBeforeFeature4")}</li></ul>;
        <p className="fade-in-up-on-scroll">{t("toDoCaseChallenge2")}</p>
        {/* <ul className="r3play-takeaways">{afterLists}</ul> */}
        <ul className="r3play-takeaways">
                                                        <li data-icon="&#9745; ">{t("toDoAfterFeature1")}</li>
                                                        <li data-icon="&#9745; ">{t("toDoAfterFeature2")}</li>
                                                        <li data-icon="&#9745; ">{t("toDoAfterFeature3")}</li>
                                                        <li data-icon="&#9745; ">{t("toDoAfterFeature4")}</li>
                                                        <li data-icon="&#9745; ">{t("toDoAfterFeature5")}</li>
                                                        <li data-icon="&#9745; ">{t("toDoAfterFeature6")}</li></ul>;
        <h3 className="fade-in-up-on-scroll r3play-headings">{t("caseConclusion")}</h3>
        <p className="fade-in-up-on-scroll">{t("toDoCaseConclusionData")}</p>
        <h3 className="fade-in-up-on-scroll r3play-headings">{t("caseMainTakeaways")}</h3>
        {/* <ul className="r3play-takeaways">{listItems}</ul> */}
        
        <ul className="r3play-takeaways">
                                                        <li data-icon="&#9745; ">{t("toDoMainTakeaway1")}</li>
                                                        <li data-icon="&#9745; ">{t("toDoMainTakeaway2")}</li>
                                                        <li data-icon="&#9745; ">{t("toDoMainTakeaway3")}</li>
                                                        </ul>;
        <h2 className="video-image-heading fade-in-up-on-scroll fade-in-up-on-scroll">{t("appPreview")}
        </h2>
        
        
        <iframe title="vimeo-player" src="https://player.vimeo.com/video/937564407?h=166fbedee6" width="100%" height="460" frameborder="0"    allowfullscreen></iframe>
        <h2 className="technologies-heading fade-in-up-on-scroll">{t("caseTechnologies")}</h2>

              

        <p className="skills-paragraphs"><span>{t("responsiveSkill")}</span>
        </p>
        <p className="skills-paragraphs"><span>
        Javascript</span></p>
        <p className="skills-paragraphs"><span>Bootstrap</span>
        </p>
        <p className="skills-paragraphs"><span>CSS3</span></p>
        <p className="skills-paragraphs"><span>HTML5</span>
        </p>
        <p className="skills-paragraphs"><span>jQuery</span>
        </p>
        <p className="skills-paragraphs"><span>{t("deploySkill")}</span>
        </p>
        <p className="skills-paragraphs"><span>{t("troubleshootingSkill")}</span></p>
        
        <h2 className="credits r3play-headings text-center fade-in-up-on-scroll">{t("caseCredits")}</h2>
        <p className="fade-in-up-on-scroll">{t("caseLead")}</p>
        <p>{t("caseTutor")} <br/><a className="deployed-link fade-in-up-on-scroll" target="_blank"
                        href="https://www.linkedin.com/in/tonny-ntambaazi-97275bb2/">{t("caseTutor2")}</a>
        </p>
        <p>{t("caseMentor")} <br/><a className="deployed-link fade-in-up-on-scroll" target="_blank"
                        href="https://www.linkedin.com/in/nizartriki/">{t("caseMentor2")}</a>
        </p>

        <Link className="r3play-external-links" title="Click to open the R3play App Github repository" to='https://github.com/yevheniiairapetian/to-do-list-app' target="_blank" rel="noopener"><FontAwesomeIcon title="Click to read more about the R3play App" className="r3play-fa-code" icon={faCode} /></Link>
                                                  
        <Link className="r3play-external-links" title="Click to open the R3play App" to='https://yevheniiairapetian.github.io/to-do-list-app/' target="_blank" rel="noopener"><FontAwesomeIcon className="r3play-fa-up" icon={faArrowUpRightFromSquare}/></Link>
                                      

        





{/* <div className="cases-container">
<a className="prev-case fade-in-up-on-scroll" href="to-do-app-case.html" target="_self" rel="noopener"><i
                className="arrow-l fa-solid fa-arrow-left"></i>Prev</a>
<a className="next-case fade-in-up-on-scroll" href="myFlix-app-case.html" target="_self" rel="noopener">Next<i
                className="arrow-r fa-solid fa-arrow-right"></i></a>
</div> */}

<div className="back-link fade-in-up-on-scroll"><a href="works.html"><i alt="An icon showing an arrow turned to the left"
                className="fa-solid fa-arrow-left fa-2xl"></i></a></div>

</div>


      
    
            </Col>
        </Row>
    </Container>
    
  );
}
