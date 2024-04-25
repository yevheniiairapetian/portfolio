import Carousel from 'react-bootstrap/Carousel';
import { Container, Col, Row, Image } from "react-bootstrap";
import { Link } from "react-router-dom";
// import {CarouselCaption} from "react-bootstrap/Carousel";
import React from "react";
import 'video-react/dist/video-react.css'; // import css
import { MeetCaseSlider } from '../meet-case-slider/meet-case-slider';
import { Player } from 'video-react';
import styleCSS from "./css/style.css";
import MeetPicture1 from "./img/meet-app-hero-image.png";
import { faArrowUpRightFromSquare, faCode } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useTranslation } from 'react-i18next';


export const MeetCaseView = () => {
        const { t } = useTranslation();
       
        return (
                <Container>
                        <Row>
                                <Col>
                                        <h1 className="r3play-headings text-center">{t("meetCaseHeading")}</h1>



                                        <div className="projects-information_container--item">

                                                <Image src={MeetPicture1} className="screenshot" alt="R3play Case Study hero image"></Image>
                                                <h2 className="fade-in-up-on-scroll r3play-headings">{t("caseOverview")}</h2>
                                                <p className="fade-in-up-on-scroll">{t("meetCaseIntroduction")}</p>
                                                <h2 className="fade-in-up-on-scroll r3play-headings">{t("casePurpose")}</h2>
                                                <p className="fade-in-up-on-scroll">{t("meetCaseRequired")}
                                                </p>
                                                <h2 className="fade-in-up-on-scroll r3play-headings">{t("caseObjective")}</h2>
                                                <p className="fade-in-up-on-scroll">{t("meetCaseAim")}</p>

                                                <h2 className="fade-in-up-on-scroll r3play-headings">{t("caseApproach")}</h2>
                                                <h3 className="fade-in-up-on-scroll r3play-headings">{t("caseTDD")}</h3>
                                                <p className="fade-in-up-on-scroll">{t("meetCaseAboutTDD")}

                                                </p>
                                                <h3 className="fade-in-up-on-scroll r3play-headings">{t("caseServerAndApi")}</h3>
                                                <p className="fade-in-up-on-scroll">{t("meetCaseAboutServerAndApi")}</p>
                                                <h3 className="fade-in-up-on-scroll r3play-headings">{t("caseClient")}</h3>
                                                <p className="fade-in-up-on-scroll">{t("meetCaseAboutClient")}</p>
                                                <p className="center r3play-slider-hint fade-in-up-on-scroll">{t("caseSliderTip")}</p>


                                                <MeetCaseSlider />
                                               
                                                <h2 className="fade-in-up-on-scroll r3play-headings">{t("caseDuration")}</h2>
                                                <p className="fade-in-up-on-scroll">{t("meetCaseDurationData")}</p>
                                                <h2 className="fade-in-up-on-scroll r3play-headings">{t("caseRetrospective")}</h2>
                                                <h3 className="fade-in-up-on-scroll r3play-headings">{t("caseChallenges")}</h3>
                                                <p className="fade-in-up-on-scroll">{t("meetCaseChallenge1")}</p>
                                                <p className="fade-in-up-on-scroll">{t("meetCaseChallenge2")}</p>
                                                <h3 className="fade-in-up-on-scroll r3play-headings">{t("caseConclusion")}</h3>
                                                <p className="fade-in-up-on-scroll">{t("meetCaseConclusionData")}</p>
                                                <h3 className="fade-in-up-on-scroll r3play-headings">{t("caseMainTakeaways")}</h3>
                                              
                                                <ul className="r3play-takeaways">
                                                        <li data-icon="&#9745; ">{t("meetMainTakeaway1")}</li>
                                                        <li data-icon="&#9745; ">{t("meetMainTakeaway2")}</li></ul>;

                                                <h2 className="video-image-heading fade-in-up-on-scroll fade-in-up-on-scroll">{t("appPreview")}
                                                </h2>


                                                <iframe title="vimeo-player" src="https://player.vimeo.com/video/937424436?h=9c75e894f9" width="100%" height="460" frameborder="0" allowfullscreen></iframe>        <h2 className="technologies-heading fade-in-up-on-scroll">{t("caseTechnologies")}</h2>


                                                <p className="skills-paragraphs"><span>Javascript</span>
                                                </p>
                                                <p className="skills-paragraphs"><span>Node.js,
                                                        Express</span></p>
                                                <p className="skills-paragraphs"><span>API</span>
                                                </p>
                                                <p className="skills-paragraphs"><span>{t("TDDSkill")}</span></p>
                                                <p className="skills-paragraphs"><span>HTML5</span>
                                                </p>
                                                <p className="skills-paragraphs"><span>AWS Lambda</span>
                                                </p>
                                                <p className="skills-paragraphs"><span>React.js</span>
                                                </p>
                                                <p className="skills-paragraphs"><span>React
                                                        Bootstrap</span></p>
                                                <p className="skills-paragraphs"><span>API</span>
                                                </p>
                                                <p className="skills-paragraphs"><span>CSS3</span>
                                                </p>
                                                <p className="skills-paragraphs"><span>{t("responsiveSkill")}</span></p>
                                                <p className="skills-paragraphs"><span>Ajax</span>
                                                </p>
                                                <p className="skills-paragraphs"><span>{t("deploySkill")}</span></p>



                                                <h2 className="credits r3play-headings text-center fade-in-up-on-scroll">{t("caseCredits")}</h2>
                                                <p className="fade-in-up-on-scroll">{t("caseLead")}</p>
                                                <p>{t("caseTutor")}<br /><a className="deployed-link fade-in-up-on-scroll" target="_blank"
                                                        href="https://www.linkedin.com/in/tonny-ntambaazi-97275bb2/">{t("caseTutor2")}</a>
                                                </p>
                                                <p>{t("caseMentor")} <br /><a className="deployed-link fade-in-up-on-scroll" target="_blank"
                                                        href="https://www.linkedin.com/in/nizartriki/">{t("caseMentor2")}</a>
                                                </p>

                                                <Link className="meet-external-links" to='https://github.com/yevheniiairapetian/meet' title="Click to open the Meet App Github repository" target="_blank" rel="noopener"><FontAwesomeIcon className="meet-fa-code" icon={faCode} /></Link>

                                                <Link className="meet-external-links" to='https://yevheniiairapetian.github.io/meet/' title="Click to open the Meet App" target="_blank" rel="noopener"><FontAwesomeIcon className="meet-fa-up" icon={faArrowUpRightFromSquare} /></Link>


                                                <div className="back-link fade-in-up-on-scroll"><a href="works.html"><i alt="An icon showing an arrow turned to the left"
                                                        className="fa-solid fa-arrow-left fa-2xl"></i></a></div>

                                        </div>




                                </Col>
                        </Row>
                </Container>

        );
}
