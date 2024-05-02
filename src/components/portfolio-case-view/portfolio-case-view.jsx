import Carousel from 'react-bootstrap/Carousel';
import { Container, Col, Row, Image } from "react-bootstrap";
import { Link } from "react-router-dom";
// import {CarouselCaption} from "react-bootstrap/Carousel";
import React from "react";
import 'video-react/dist/video-react.css'; // import css
import { PortfolioCaseSlider } from '../portfolio-case-slider/portfolio-case-slider';
import { Player } from 'video-react';
import styleCSS from "./css/style.css";
import PortfolioPicture1 from './img/portfolio-case-hero-image.png'
import { useTranslation } from 'react-i18next';
import { faCircleInfo, faArrowUpRightFromSquare, faCode } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';



export const PortfolioCaseView = () => {
        const { t } = useTranslation();
        const takeaways = [
                'The API has already been built',
                'The extensive practice with React helped to progress faster',
                'I didn\'t add many additional features and stick to the basic course requirements',
                'The time left in the program was already limited',
        ];

        const listItems = takeaways.map(takeaway => <li data-icon="&#9745; ">{takeaway}</li>);
        return (
                <Container className="wrapper">
                        <Row>
                                <Col>
                                        <h1 className="r3play-headings text-center pt-4 pb-3">{t("portfolioCaseHeading")}</h1>



                                        <div className="projects-information_container--item">

                                                <Image src={PortfolioPicture1} className="screenshot" alt="Portfolio Case Study hero image"></Image>
                                                <h2 className="fade-in-up-on-scroll r3play-headings">{t("caseOverview")}</h2>
                                                <p className="fade-in-up-on-scroll">{t("portfolioCaseIntroduction")}</p>
                                                <h2 className="fade-in-up-on-scroll r3play-headings">{t("casePurpose")}</h2>
                                                <p className="fade-in-up-on-scroll">{t("portfolioCaseRequired")}
                                                </p>
                                                <h2 className="fade-in-up-on-scroll r3play-headings">{t("caseObjective")}</h2>
                                                <p className="fade-in-up-on-scroll">{t("portfolioCaseAim")}</p>
                                                <h2 className="fade-in-up-on-scroll r3play-headings">{t("caseApproach")}</h2>
                                                <h3 className="fade-in-up-on-scroll r3play-headings">{t("caseClient")}</h3>
                                                <p className="fade-in-up-on-scroll">{t("portfolioCaseAboutClient")}</p>
                                                <h3 className="fade-in-up-on-scroll r3play-headings">{t("caseWorkflow")}</h3>
                                               
                                                <p className="fade-in-up-on-scroll">{t("portfolioCaseAboutWorkflow")}
                                                </p>
                                                <a className="deployed-link fade-in-up-on-scroll" target="_blank"
                                                        href="https://github.com/jdan/tota11y">&#x2192; {t("caseTotally")}</a>
                                                <h3 className="fade-in-up-on-scroll r3play-headings">{t("caseUpgrade")}</h3>
                                                <p className="fade-in-up-on-scroll">{t("portfolioCaseAboutUpgrade1")}</p>
                                                <p className="fade-in-up-on-scroll">{t("portfolioCaseAboutUpgrade2")}</p>
                                                
                                                
                                                


                                                <p className="center r3play-slider-hint fade-in-up-on-scroll">{t("caseSliderTip")}</p>
                                                <PortfolioCaseSlider />
                                             
                                                <h2 className="fade-in-up-on-scroll r3play-headings">{t("caseDuration")}</h2>
                                                <p className="fade-in-up-on-scroll">{t("portfolioCaseDurationData")}</p>
                                                <h2 className="fade-in-up-on-scroll r3play-headings">{t("caseRetrospective")}</h2>
                                                <h3 className="fade-in-up-on-scroll r3play-headings">{t("caseChallenges")}</h3>
                                                <p className="fade-in-up-on-scroll">{t("portfolioCaseChallenge")}</p>
                                                <p className="fade-in-up-on-scroll">{t("portfolioCaseChallenge2")}</p>
                                                <ul className="r3play-takeaways">    
                                                        <li data-icon="&#9745; "> {t("portfolioCaseChallengeDetail1")}</li>
                                                        <li data-icon="&#9745; ">{t("portfolioCaseChallengeDetail2")}</li>
                                                </ul>




                                                <h3 className="fade-in-up-on-scroll r3play-headings">{t("caseConclusion")}</h3>
                                                <p className="fade-in-up-on-scroll">{t("portfolioCaseConclusionData")}</p>
                                                <p className="fade-in-up-on-scroll">{t("portfolioCaseConclusionData2")}

                                                </p>
                                                

                                                <h3 className="fade-in-up-on-scroll r3play-headings">{t("caseMainTakeaways")}</h3>
                                                <ul className="r3play-takeaways">
                                                        <li data-icon="&#9745; "> {t("portfolioMainTakeaway1")}</li>
                                                        <li data-icon="&#9745; ">{t("portfolioMainTakeaway2")}</li>
                                                        <li data-icon="&#9745; ">{t("portfolioMainTakeaway3")}</li>
                                                        <li data-icon="&#9745; ">{t("portfolioMainTakeaway4")}</li>
                                                </ul>


                                                <h2 id="video" className="video-image-heading fade-in-up-on-scroll">{t("appPreview")}
                                                </h2>
                                                <div className='iframe-container'>
                                                        
                                                <iframe className="responsive-iframe" title="vimeo-player" src="https://player.vimeo.com/video/941316936?h=a04b9f462e" width="100%" height="460" frameborder="0" allowfullscreen></iframe>
                                                </div>
                                                


                                                <h2 className="technologies-heading fade-in-up-on-scroll">
                                                        {t("caseTechnologies")}</h2>

                                                        
                                                <p className="skills-paragraphs"><span> {t("troubleshootingSkill")}</span>
                                                </p>
                                                <p className="skills-paragraphs"><span>i18n</span>
                                                </p>
                                                <p className="skills-paragraphs"><span>React Router</span>
                                                </p>
                                                <p className="skills-paragraphs"><span>React Font Awesome</span>
                                                </p>
                                                <p className="skills-paragraphs"><span>{t("testingSkill")}</span>
                                                </p>
                                                <p className="skills-paragraphs"><span>{t("accessibilitySkill")}</span>
                                                </p>
                                                <p className="skills-paragraphs"><span>{t("terminalSkill")}</span>
                                                </p>
                                                <p className="skills-paragraphs"><span>{t("copySkill")}</span>
                                                </p>
                                               
                                                <p className="skills-paragraphs"><span>
                                                        React Bootstrap</span></p>
                                                <p className="skills-paragraphs"><span>Javascript</span>
                                                </p>
                                                <p className="skills-paragraphs"><span>React.js</span>
                                                </p>
                                                <p className="skills-paragraphs"><span>{t("documentationSkill")}</span>
                                                </p>
                                              
                                                
                                                
                                               
                                               
                                                <p className="skills-paragraphs"><span>{t("feedbackSkill")}</span>
                                                </p>
                                                <p className="skills-paragraphs"><span>{t("responsiveSkill")}</span></p>
                                                <p className="skills-paragraphs"><span>CSS3</span>
                                                </p>
                                                <p className="skills-paragraphs"><span>HTML5</span>
                                                </p>
                                                
                                                <p className="skills-paragraphs"><span>{t("deploySkill")}</span></p>



                                                <h2 className="credits r3play-headings text-center fade-in-up-on-scroll">{t("caseCredits")}</h2>
                                                <p className="fade-in-up-on-scroll">{t("caseLead")}</p>
                                                <p>{t("caseTutor")}<br /><a className="deployed-link fade-in-up-on-scroll" target="_blank"
                                                        href="https://www.linkedin.com/in/tonny-ntambaazi-97275bb2/">
                                                        {t("caseTutor2")}</a>
                                                </p>
                                                <p>{t("caseMentor")}<br /><a className="deployed-link fade-in-up-on-scroll" target="_blank"
                                                        href="https://www.linkedin.com/in/nizartriki/">{t("caseMentor2")}</a>
                                                </p>

                                                <Link title="Click to open the Portfolio App Github repository" className="myFlix-external-links" to='https://github.com/yevheniiairapetian/portfolio' target="_blank" rel="noopener"><FontAwesomeIcon className="myFlix-fa-code" icon={faCode} /></Link>

                                                <Link title="Click to open the Portfolio App" className="myFlix-external-links" to='https://yevheniiairapetian.com/#/' target="_self" rel="noopener"><FontAwesomeIcon className="myFlix-fa-up" icon={faArrowUpRightFromSquare} /></Link>




                                                <div className="back-link fade-in-up-on-scroll"><a href="works.html"><i alt="An icon showing an arrow turned to the left"
                                                        className="fa-solid fa-arrow-left fa-2xl"></i></a></div>

                                        </div>

                                </Col>
                        </Row>
                </Container >

        );
}
