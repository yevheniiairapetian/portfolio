import Carousel from 'react-bootstrap/Carousel';
import { Container, Col, Row, Image } from "react-bootstrap";
import { Link } from "react-router-dom";
// import {CarouselCaption} from "react-bootstrap/Carousel";
import React from "react";
import 'video-react/dist/video-react.css'; // import css
import { R3playCaseSlider } from '../r3play-case-slider/r3play-case-slider';
import { Player } from 'video-react';
import styleCSS from "./css/style.css";
import R3playPicture4 from "./img/r3play-hero-image.png";
import R3playPicture5 from "./img/retrospective-1.gif";
import R3playPicture6 from "./img/retrospective-2.gif";
import { faArrowUpRightFromSquare, faCode } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useTranslation } from 'react-i18next';


export const R3playCaseView = () => {
        const { t } = useTranslation();




        // const listItems = takeaways.map(takeaway => <li data-icon="&#9745; ">{takeaway}</li>);
        return (
                <Container>
                        <Row>
                                <Col>
                                        <h1 className="r3play-headings text-center">{t("r3playCaseHeading")}</h1>



                                        <div className="projects-information_container--item">

                                                <Image src={R3playPicture4} className="screenshot" alt="R3play Case Study hero image"></Image>
                                                <h2 className="fade-in-up-on-scroll r3play-headings">{t("caseOverview")}</h2>
                                                <p className="fade-in-up-on-scroll">{t("r3playCaseIntroduction")}</p>
                                                <h2 className="fade-in-up-on-scroll r3play-headings">{t("casePurpose")}</h2>
                                                <p className="fade-in-up-on-scroll">{t("r3playCaseRequired")}
                                                </p>
                                                <h2 className="fade-in-up-on-scroll r3play-headings">{t("caseObjective")}</h2>
                                                <p className="fade-in-up-on-scroll">{t("r3playCaseAim")}</p>
                                                <h2 className="fade-in-up-on-scroll r3play-headings">{t("caseApproach")}</h2>
                                                <h3 className="fade-in-up-on-scroll">{t("caseServer")}</h3>
                                                <p className="fade-in-up-on-scroll">{t("r3playCaseAboutServer")}</p>

                                                <a className="deployed-link fade-in-up-on-scroll" target="_blank"
                                                        href="https://r3play-934f9ea5664d.herokuapp.com/#user">{t("caseViewEndpoints")}&#x2192; </a>
                                                <p className="fade-in-up-on-scroll pt-4">{t("r3playCasePostman")}</p>
                                                <h3 className="fade-in-up-on-scroll">{t("caseClient")}</h3>
                                                <p className="fade-in-up-on-scroll">{t("r3playCaseAboutClient")}</p>
                                                <p className="center r3play-slider-hint fade-in-up-on-scroll">{t("caseSliderTip")}</p>

                                                <R3playCaseSlider />

                                                <h2 className="fade-in-up-on-scroll r3play-headings">{t("caseDuration")}</h2>
                                                <p className="fade-in-up-on-scroll">{t("r3playCaseDurationData")}</p>
                                                <h2 className="fade-in-up-on-scroll r3play-headings">{t("caseRetrospective")}</h2>
                                                <h3 className="fade-in-up-on-scroll r3play-headings">{t("caseChallenges")}</h3>
                                                <p className="fade-in-up-on-scroll">{t("r3playCaseChallenge1")}</p>
                                                <p className="fade-in-up-on-scroll">{t("r3playCaseChallenge2")}</p>
                                                <h3 className="fade-in-up-on-scroll r3play-headings">{t("caseConclusion")}</h3>
                                                <p className="fade-in-up-on-scroll">{t("r3playCaseConclusionData")}</p>
                                                <h3 className="fade-in-up-on-scroll r3play-headings">{t("caseMainTakeaways")}</h3>
                                                <ul className="r3play-takeaways">
                                                        <li data-icon="&#9745; ">{t("r3playMainTakeaway1")}</li>
                                                        <li data-icon="&#9745; ">{t("r3playMainTakeaway2")}</li>
                                                        <li data-icon="&#9745; ">{t("r3playMainTakeaway3")}</li>
                                                        <li data-icon="&#9745; ">{t("r3playMainTakeaway4")}</li></ul>;


                                                <h2 className="video-image-heading fade-in-up-on-scroll">{t("caseApiPreview")}
                                                </h2>
                                                <iframe title="vimeo-player" src="https://player.vimeo.com/video/937369818?h=28da240343" width="100%" height="460" frameborder="0" allowfullscreen></iframe>

                                                <h2 className="video-image-heading fade-in-up-on-scroll fade-in-up-on-scroll">{t("caseAppPreview")}
                                                </h2>


                                                <iframe title="vimeo-player" src="https://player.vimeo.com/video/937371451?h=037f9a15fe" width="100%" height="460" frameborder="0" allowfullscreen></iframe>
                                                <h2 className="technologies-heading fade-in-up-on-scroll">{t("caseTechnologies")}</h2>
                                                <p className="skills-paragraphs"><span>React.js</span>
                                                </p>
                                                <p className="skills-paragraphs"><span>
                                                        React Bootstrap</span></p>
                                                <p className="skills-paragraphs"><span>{t("testingSkill")}</span>
                                                </p>
                                                <p className="skills-paragraphs"><span>{t("apiSkill")}</span></p>
                                                <p className="skills-paragraphs"><span>CSS3</span>
                                                </p>
                                                <p className="skills-paragraphs"><span>HTML5</span>
                                                </p>
                                                <p className="skills-paragraphs"><span>Ajax</span>
                                                </p>
                                                <p className="skills-paragraphs"><span>{t("responsiveSkill")}</span></p>
                                                <p className="skills-paragraphs"><span>OAuth2</span>
                                                </p>
                                                <p className="skills-paragraphs"><span>{t("deploySkill")}</span></p>
                                                <h2 className="credits r3play-headings text-center fade-in-up-on-scroll">{t("caseCredits")}</h2>
                                                <p className="fade-in-up-on-scroll">{t("caseLead")}</p>
                                                <p>{t("caseTutor")} <br /><a className="deployed-link fade-in-up-on-scroll" target="_blank"
                                                        href="https://www.linkedin.com/in/tonny-ntambaazi-97275bb2/">{t("caseTutor2")}</a>
                                                </p>
                                                <p>{t("caseMentor")} <br /><a className="deployed-link fade-in-up-on-scroll" target="_blank"
                                                        href="https://www.linkedin.com/in/nizartriki/">{t("caseMentor2")}</a>
                                                </p>

                                                <Link className="r3play-external-links" title="Click to open the R3play App Github repository" to='https://github.com/yevheniiairapetian/r3play-client' target="_blank" rel="noopener"><FontAwesomeIcon title="Click to read more about the R3play App" className="r3play-fa-code" icon={faCode} /></Link>

                                                <Link className="r3play-external-links" title="Click to open the R3play App" to='https://r3play.netlify.app/' target="_blank" rel="noopener"><FontAwesomeIcon className="r3play-fa-up" icon={faArrowUpRightFromSquare} /></Link>


                                                <div className="back-link fade-in-up-on-scroll"><a href="works.html"><i alt="An icon showing an arrow turned to the left"
                                                        className="fa-solid fa-arrow-left fa-2xl"></i></a></div>

                                        </div>




                                </Col>
                        </Row>
                </Container>

        );
}
