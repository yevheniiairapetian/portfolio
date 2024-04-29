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
                                                {/* <Image className="screenshot img-third-width fade-in-up-on-scroll" src={R3playPicture1}
                alt="R3play app case interface screenshot 1"></Image>
        <Image className="screenshot img-third-width fade-in-up-on-scroll" src={R3playPicture2}
                alt="R3play app case interface screenshot 2"></Image>
        <Image className="screenshot img-third-width fade-in-up-on-scroll" src={R3playPicture3}
                alt="R3play app case interface screenshot 3"></Image> */}
                                                <h2 className="fade-in-up-on-scroll r3play-headings">{t("caseDuration")}</h2>
                                                <p className="fade-in-up-on-scroll">{t("myFlixCaseDurationData")}</p>
                                                <h2 className="fade-in-up-on-scroll r3play-headings">{t("caseRetrospective")}</h2>
                                                <h3 className="fade-in-up-on-scroll r3play-headings">{t("caseChallenges")}</h3>
                                                <p className="fade-in-up-on-scroll">{t("myFlixCaseChallenge")}</p>
                                                <ul className="r3play-takeaways">    
                                                        <li data-icon="&#9745; "> {t("myFlixCaseChallengeDetail1")}</li>
                                                        <li data-icon="&#9745; ">{t("myFlixCaseChallengeDetail2")}</li>
                                                        <li data-icon="&#9745; ">{t("myFlixCaseChallengeDetail3")}</li>
                                                        <li data-icon="&#9745; ">{t("myFlixCaseChallengeDetail4")}</li>
                                                </ul>




                                                <h3 className="fade-in-up-on-scroll r3play-headings">{t("caseConclusion")}</h3>
                                                <p className="fade-in-up-on-scroll">{t("myFlixCaseConclusionData")}</p>
                                                <p className="fade-in-up-on-scroll">{t("myFlixCaseConclusionData2")}

                                                </p>
                                                <p className="fade-in-up-on-scroll">{t("myFlixCaseConclusionData3")}
                                                </p>

                                                <h3 className="fade-in-up-on-scroll r3play-headings">{t("caseMainTakeaways")}</h3>
                                                <ul className="r3play-takeaways">
                                                        <li data-icon="&#9745; "> {t("myFlixMainTakeaway1")}</li>
                                                        <li data-icon="&#9745; ">{t("myFlixMainTakeaway2")}</li>
                                                        <li data-icon="&#9745; ">{t("myFlixMainTakeaway3")}</li>
                                                        <li data-icon="&#9745; ">{t("myFlixMainTakeaway4")}</li>
                                                </ul>


                                                <h2 className="video-image-heading fade-in-up-on-scroll">{t("appPreview")}
                                                </h2>
                                                <div className='iframe-container'>
                                                <iframe className="responsive-iframe" title="vimeo-player" src="https://player.vimeo.com/video/937405621?h=5a76577b85" width="100%" height="460" frameborder="0" allowfullscreen></iframe>
                                                </div>
                                                <h2 className="video-image-heading fade-in-up-on-scroll fade-in-up-on-scroll">{t("apiPreview")}
                                                </h2>

<div className='iframe-container'>
                                                <iframe className="responsive-iframe" title="vimeo-player" src="https://player.vimeo.com/video/937369818?h=28da240343" width="100%" height="460" frameborder="0" allowfullscreen></iframe>        
                                                </div>
                                                <h2 className="technologies-heading fade-in-up-on-scroll">
                                                        {t("caseTechnologies")}</h2>

                                                        
                                                <p className="skills-paragraphs"><span>Angular</span>
                                                </p>
                                                <p className="skills-paragraphs"><span>
                                                        Material UI</span></p>
                                                <p className="skills-paragraphs"><span>Javascript</span>
                                                </p>
                                                <p className="skills-paragraphs"><span>CSS3</span>
                                                </p>
                                                <p className="skills-paragraphs"><span>{t("documentationSkill")}</span>
                                                </p>
                                                <p className="skills-paragraphs"><span>Typedoc</span>
                                                </p>
                                                <p className="skills-paragraphs"><span>{t("agileSkill")}</span>
                                                </p>
                                                <p className="skills-paragraphs"><span>{t("kanbanSkill")}</span>
                                                </p>
                                                <p className="skills-paragraphs"><span>{t("userStoriesSkill")}</span>
                                                </p>
                                                <p className="skills-paragraphs"><span>{t("collabSkill")}</span>
                                                </p>
                                                <p className="skills-paragraphs"><span>{t("contributeSkill")}</span>
                                                </p>
                                                <p className="skills-paragraphs"><span>{t("feedbackSkill")}</span>
                                                </p>
                                                <p className="skills-paragraphs"><span>{t("responsiveSkill")}</span></p>
                                                <p className="skills-paragraphs"><span>CSS3</span>
                                                </p>
                                                <p className="skills-paragraphs"><span>HTML5</span>
                                                </p>
                                                <p className="skills-paragraphs"><span>Ajax</span>
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

                                                <Link title="Click to open the MyFlix App Github repository" className="myFlix-external-links" to='https://github.com/yevheniiairapetian/myFlix-Angular-client' target="_blank" rel="noopener"><FontAwesomeIcon className="myFlix-fa-code" icon={faCode} /></Link>

                                                <Link title="Click to open the MyFlix App app" className="myFlix-external-links" to='https://yevheniiairapetian.github.io/myFlix-Angular-client/' target="_blank" rel="noopener"><FontAwesomeIcon className="myFlix-fa-up" icon={faArrowUpRightFromSquare} /></Link>

                                                <Link title="Click to open the MyFlix App project Kanban board" className="myFlix-external-links" to='https://trello.com/b/495tvGf9/kanban-template' target="_blank" rel="noopener"><FontAwesomeIcon className="myFlix-fa-info" icon={faCircleInfo} /></Link>



                                                <div className="back-link fade-in-up-on-scroll"><a href="works.html"><i alt="An icon showing an arrow turned to the left"
                                                        className="fa-solid fa-arrow-left fa-2xl"></i></a></div>

                                        </div>

                                </Col>
                        </Row>
                </Container >

        );
}
