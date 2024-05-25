import Carousel from 'react-bootstrap/Carousel';
import {Container, Col, Row, Image} from "react-bootstrap";
import { Link } from "react-router-dom";
// import {CarouselCaption} from "react-bootstrap/Carousel";
import React from "react";
import 'video-react/dist/video-react.css'; // import css
import { PokemonCaseSlider } from '../pokemon-case-slider/pokemon-case-slider';
import { Player } from 'video-react';
import styleCSS from "./css/style.css";
import PokemonPicture1 from "./img/pokemon-case-retrospective-image-1.png";
import PokemonPicture2 from "./img/pokemon-case-retrospective-image-2.png";
import PokemonPicture3 from "./img/pokemon-case-retrospective-image-3.png";
import { faArrowUpRightFromSquare, faCode} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useTranslation } from 'react-i18next';


export const PokemonCaseView = () => {
  const { t } = useTranslation();
  
  return (
    <Container className="wrapper">
        <Row>
            <Col>
            <h1 className="r3play-headings text-center pt-4 pb-3">{t("pokemonCaseHeading")}</h1>
      
         

<div className="projects-information_container--item">
        
        <Image src={PokemonPicture1} className="screenshot" alt={t("caseHeroAlt")}></Image>
        <h2 className="fade-in-up-on-scroll r3play-headings">{t("caseOverview")}</h2>
        <p className="fade-in-up-on-scroll">{t("pokemonCaseIntroduction")} <br/></p>
        <a className="" href="https://pokeapi.co/"
                                        target="_blank">&#x2192; {t("pokedexLink")}</a>
        <h2 className="fade-in-up-on-scroll r3play-headings pt-2">{t("casePurpose")}</h2>
        <p className="fade-in-up-on-scroll">{t("pokemonCaseRequired")}
        </p>
        <h2 className="fade-in-up-on-scroll r3play-headings">{t("caseObjective")}</h2>
        <p className="fade-in-up-on-scroll">{t("pokemonCaseAim")}</p>
        <h2 className="fade-in-up-on-scroll r3play-headings">{t("caseApproach")}</h2>
        <h3 className="fade-in-up-on-scroll r3play-headings">{t("caseApi")}</h3>
        <p className="fade-in-up-on-scroll">{t("pokemonCaseAboutApi")}<br/></p>
        <a className="" href="https://pokeapi.co/" target="_blank">&#x2192; {t("pokedexLink")}</a>
                                <h3 className="fade-in-up-on-scroll r3play-headings pt-2">{t("caseClient")}</h3>
        <p className="fade-in-up-on-scroll">{t("pokemonCaseAboutClient")}</p>


        
        <h2 className="fade-in-up-on-scroll r3play-headings">{t("caseDuration")}</h2>
        <p className="fade-in-up-on-scroll">{t("pokemonCaseDurationData")}</p>
        <h2 className="fade-in-up-on-scroll r3play-headings">{t("caseRetrospective")}</h2>
        <h3 className="fade-in-up-on-scroll r3play-headings">{t("caseChallenges")}</h3>
        <p className="fade-in-up-on-scroll">{t("pokemonCaseChallenge1")}</p>
        <p className="fade-in-up-on-scroll">{t("pokemonCaseChallenge2")}</p>
        <h3 className="fade-in-up-on-scroll r3play-headings">{t("caseConclusion")}</h3>
        <p className="fade-in-up-on-scroll">{t("pokemonCaseConclusionData")}</p>
        <h3 className="fade-in-up-on-scroll r3play-headings">{t("caseMainTakeaways")}</h3>
        {/* <ul className="r3play-takeaways">{listItems}</ul>; */}
        <ul className="r3play-takeaways">
                                                        <li data-icon="&#9745; ">{t("pokemonMainTakeaway1")}</li>
                                                        <li data-icon="&#9745; ">{t("pokemonMainTakeaway2")}</li>
                                                        <li data-icon="&#9745; ">{t("pokemonMainTakeaway3")}</li>
                                                        </ul>
        <p className="center r3play-slider-hint fade-in-up-on-scroll">{t("caseSliderTip")}</p>
        <PokemonCaseSlider/>
        
        <h2 className="video-image-heading fade-in-up-on-scroll">{t("appPreview")}
        </h2>
        <div className="iframe-container">
        <iframe className="responsive-iframe" title="vimeo-player" src="https://player.vimeo.com/video/937469265?h=b5daa5a7ff" width="100%" height="460" frameborder="0"    allowfullscreen></iframe>
        </div>
        <h2 className="technologies-heading fade-in-up-on-scroll">{t("caseTechnologies")}</h2>


        <p className="skills-paragraphs"><span>Ajax</span>
                        </p>
                        <p className="skills-paragraphs"><span>{t("externalApiSkill")}</span></p>
                        <p className="skills-paragraphs"><span>Javascript</span>
                        </p>
                        <p className="skills-paragraphs"><span>Bootstrap</span>
                        </p>
                        <p className="skills-paragraphs"><span>CSS3</span>
                        </p>
                        <p className="skills-paragraphs"><span>{t("responsiveSkill")}</span></p>
                        <p className="skills-paragraphs"><span>HTML5</span>
                        </p>
                        <p className="skills-paragraphs"><span>jQuery</span>
                        </p>
                        <p className="skills-paragraphs"><span>{t("deploySkill")}</span></p>

        
        <h2 className="credits r3play-headings text-center fade-in-up-on-scroll">{t("caseCredits")}</h2>
        <p className="fade-in-up-on-scroll">{t("caseLead")}</p>
        <p>{t("caseTutor")} <br/><a className="deployed-link fade-in-up-on-scroll" target="_blank"
                        href="https://www.linkedin.com/in/tonny-ntambaazi-97275bb2/">{t("caseTutor2")}</a>
        </p>
        <p>{t("caseMentor")} <br/><a className="deployed-link fade-in-up-on-scroll" target="_blank"
                        href="https://www.linkedin.com/in/nizartriki/">{t("caseMentor2")}</a>
        </p>

        <Link className="r3play-external-links" title="Click to open the Pokemon App Github repository" to='https://github.com/yevheniiairapetian/pokemon-app' target="_blank" rel="noopener"><FontAwesomeIcon title="Click to read more about the R3play App" className="r3play-fa-code" icon={faCode} /></Link>
                                                  
        <Link className="r3play-external-links" title="Click to open the Pokemon App" to='https://yevheniiairapetian.github.io/pokemon-app/' target="_blank" rel="noopener"><FontAwesomeIcon className="r3play-fa-up" icon={faArrowUpRightFromSquare}/></Link>
                                      

        





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
