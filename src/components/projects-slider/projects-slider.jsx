import Carousel from 'react-bootstrap/Carousel';
import { Container, Row, Col, Nav, Image } from "react-bootstrap";
import { Link } from "react-router-dom";
import { faCircleInfo, faUpRightAndDownLeftFromCenter, faArrowUpRightFromSquare, faCode, faClipboardCheck } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { CarouselCaption } from "react-bootstrap/Carousel";
import { R3playCaseView } from "../r3play-case-view/r3play-case-view";
import React from "react";
import { useTranslation } from 'react-i18next';
import projectsPicture1 from "./img/r3play-api-hero-image.png";
import projectsPicture2 from "./img/r3play-hero-image.png";
import projectsPicture3 from "./img/myFlix-hero-image.png";
import projectsPicture4 from "./img/meet-app-hero-image.png";
import projectsPicture5 from "./img/owrite-case-hero-image-2.png";
import projectsPicture6 from "./img/pokemon-hero-image.png";
import projectsPicture7 from "./img/to-do-hero-image.png";
import projectsPicture8 from "./img/portfolio-hero-image.png";
import sliderCSS from "./css/slider.css";


export const ProjectsSlider = () => {
  function showCaption(){
    let caption = document.querySelector('.slide-plus');
    caption.style.opacity = '1';
    caption.style.fontSize = "14px";
  }
  const { t } = useTranslation();
  return (
    <Container>
      <Row>
        <Col>
          <Carousel className="w-100 m-auto">

            <Carousel.Item>
            

              <Image alt={t("projectsSliderImageAlt")}
              className="projects-testim-image" src={projectsPicture2} text="Second slide" />
              
              <Link className="pl-2 text-white projects-more" target="_self" to="">
              <FontAwesomeIcon title={t("sliderExpandInfoTitle")}
              onClick={()=>{showCaption()}} className="slide-plus" 
              style={{color: "#529fcc",}}
              icon={faUpRightAndDownLeftFromCenter} 
              size="lg" />
                <Carousel.Caption className="projects-carousel-caption">
                  <h3 className="projects-carousel-heading">R3play App</h3>
                  <cite>{t("r3playInfo")}<Link title={t("r3playInfoTitle")}
                  className="pl-2 text-white projects-more" target="_self" to="./../r3play-case">{t("projectsSliderMore")}</Link>
                  </cite>
                  <div className="projects-work-links">
                    <Link title={t("r3playInfoTitleGithub")}
                    to='https://github.com/yevheniiairapetian/r3play' target="_blank" rel="noopener"><FontAwesomeIcon className="fa-code" icon={faCode} /></Link>
               
                    <Link title={t("r3playInfoTitleAPIDeployed")}
                    to='http://r3play.netlify.app/' target="_blank" rel="noopener"><FontAwesomeIcon className="fa-up" icon={faArrowUpRightFromSquare} /></Link>
               
                    <Link title={t("r3playInfoTitle")}
                    to='./../r3play-case' target="_self" rel="noopener"><FontAwesomeIcon className="fa-circle" icon={faCircleInfo} /></Link>
                  </div>


                </Carousel.Caption>
              </Link>
            </Carousel.Item>
            <Carousel.Item>
              <Image className="projects-testim-image" alt={t("projectsSliderImageAlt")}
              src={projectsPicture1} text="First slide" />
              <Link className="pl-2 text-white projects-more" 
              target="_self" to="">
              <FontAwesomeIcon onClick={()=>{showCaption()}} title={t("sliderExpandInfoTitle")}
              className="slide-plus" style={{color: "#529fcc",}} 
              icon={faUpRightAndDownLeftFromCenter} 
              size="lg" />
                <Carousel.Caption className="projects-carousel-caption">
                  <h3 className="projects-carousel-heading">R3play Web API</h3>
                  <cite>{t("r3playAPIInfo")}
                    <Link title={t("r3playInfoTitle")}
                    className="pl-2 text-white projects-more" target="_self" to="./../r3play-case">{t("projectsSliderMore")}</Link>
                  </cite>
                  <div className="projects-work-links">
                    <Link title={t("r3playInfoTitleGithub")}
                    to='https://github.com/yevheniiairapetian/r3play' target="_blank" rel="noopener"><FontAwesomeIcon className="fa-code" icon={faCode} /></Link>
                    
                    <Link title={t("r3playInfoTitleAPIDeployed")}
                    to='https://r3play-934f9ea5664d.herokuapp.com/' target="_blank" rel="noopener"><FontAwesomeIcon className="fa-up" icon={faArrowUpRightFromSquare} /></Link>
                   
                    <Link title={t("r3playInfoTitle")}
                     
                    to='./../r3play-case' target="_self" rel="noopener"><FontAwesomeIcon className="fa-circle" icon={faCircleInfo} /></Link>
                  </div>



                </Carousel.Caption>
              </Link>
            </Carousel.Item>
            <Carousel.Item>
              <Image className="projects-testim-image" alt={t("projectsSliderImageAlt")}
              src={projectsPicture3} text="Third slide" />
              <Link className="pl-2 text-white projects-more" 
              target="_self" to="">
              <FontAwesomeIcon onClick={()=>{showCaption()}} title={t("sliderExpandInfoTitle")}
              className="slide-plus" style={{color: "#529fcc",}}
              icon={faUpRightAndDownLeftFromCenter} 
              size="lg" />
                <Carousel.Caption className="projects-carousel-caption">
                  <h3 className="projects-carousel-heading">MyFlix Angular App</h3>
                  <cite>{t("myFlixInfo")}
                    
                    <Link title={t("myFlixInfoTitle")}
                    className="pl-2 text-white projects-more" target="_self" to="./../myFlix-case" >{t("projectsSliderMore")}</Link>
                  </cite>
                  <div className="projects-work-links">
                    <Link title={t("myFlixInfoTitleGithub")}
                    to='https://github.com/yevheniiairapetian/myFlix-Angular-client' target="_blank" rel="noopener"><FontAwesomeIcon className="fa-code" icon={faCode} /></Link>
                   
                    <Link title={t("myFlixInfoTitleDeployed")}
                    to='https://yevheniiairapetian.github.io/myFlix-Angular-client/' target="_blank" rel="noopener"><FontAwesomeIcon className="fa-up" icon={faArrowUpRightFromSquare} /></Link>
                    
                    <Link title={t("myFlixInfoTitleKanban")}
                    to='https://trello.com/b/495tvGf9/kanban-template' target="_blank" rel="noopener"><FontAwesomeIcon className="fa-clipboard-check" icon={faClipboardCheck} /></Link>
                    <Link title={t("myFlixInfoTitle")}
                    to='./../myFlix-case' target="_self" rel="noopener"><FontAwesomeIcon className="fa-circle" icon={faCircleInfo} /></Link>

                  </div>


                </Carousel.Caption>
              </Link>
            </Carousel.Item>


            <Carousel.Item>
              <Image className="projects-testim-image" alt={t("projectsSliderImageAlt")}
              src={projectsPicture4} text="Second slide" />
              <Link className="pl-2 text-white projects-more" 
              target="_self" to="">
              <FontAwesomeIcon onClick={()=>{showCaption()}} title={t("sliderExpandInfoTitle")}
              className="slide-plus" style={{color: "#529fcc",}} 
              icon={faUpRightAndDownLeftFromCenter} 
              size="lg" />
                <Carousel.Caption className="projects-carousel-caption">
                  <h3 className="projects-carousel-heading">Meet App</h3>
                  <cite>{t("meetInfo")}<Link title={t("meetInfoTitle")}
                  className="pl-2 text-white projects-more" target="_self" to="./../meet-case" >{t("projectsSliderMore")}</Link>
                  </cite>
                  <div className="projects-work-links">
                    <Link title={t("meetInfoTitleGithub")}
                    to='https://github.com/yevheniiairapetian/meet' target="_blank" rel="noopener"><FontAwesomeIcon className="fa-code" icon={faCode} /></Link>
                    
                    <Link title={t("meetInfoTitleDeployed")}
                    to='https://yevheniiairapetian.github.io/meet/' target="_blank" rel="noopener"><FontAwesomeIcon className="fa-up" icon={faArrowUpRightFromSquare} /></Link>
                    
                    <Link title={t("meetInfoTitle")}
                    to='./../meet-case' target="_self" rel="noopener"><FontAwesomeIcon className="fa-circle" icon={faCircleInfo} /></Link>
                  </div>
                </Carousel.Caption>
              </Link>
            </Carousel.Item>
            <Carousel.Item>
              <Image className="projects-testim-image" alt={t("projectsSliderImageAlt")}
              src={projectsPicture5} text="First slide" />
              <Link className="pl-2 text-white projects-more" 
              target="_self" to="">
              <FontAwesomeIcon onClick={()=>{showCaption()}} title={t("sliderExpandInfoTitle")}
               className="slide-plus" style={{color: "#529fcc",}}
              icon={faUpRightAndDownLeftFromCenter} 
              size="lg" />
                <Carousel.Caption className="projects-carousel-caption">
                  <h3 className="projects-carousel-heading">OWrite Native App</h3>
                  <cite>{t("owriteInfo")}
                    <Link title={t("owriteInfoTitle")}
                    className="pl-2 text-white projects-more" target="_blank" to="./../owrite-case" >{t("projectsSliderMore")}</Link>
                  </cite>
                  <div className="projects-work-links">
                    <Link title={t("owriteInfoTitleGithub")}
                    to='https://github.com/yevheniiairapetian/owrite' target="_blank" rel="noopener"><FontAwesomeIcon className="fa-code" icon={faCode} /></Link>

                    <Link title={t("owriteInfoTitle")}
                    to='./../owrite-case' target="_self" rel="noopener"><FontAwesomeIcon className="fa-circle" icon={faCircleInfo} /></Link>

                  </div>
                </Carousel.Caption>
              </Link>
            </Carousel.Item>
            <Carousel.Item>
              <Image className="projects-testim-image" alt={t("projectsSliderImageAlt")}
              src={projectsPicture6} text="Third slide" />
              <Link className="pl-2 text-white projects-more" target="_self" to="">
              <FontAwesomeIcon onClick={()=>{showCaption()}} title={t("sliderExpandInfoTitle")}
              className="slide-plus" style={{color: "#529fcc",}}
              icon={faUpRightAndDownLeftFromCenter} 
              size="lg" />
              <Carousel.Caption className="projects-carousel-caption">
                <h3 className="projects-carousel-heading">Pokemon App</h3>
                <cite>{t("pokemonInfo")}
                  
                  <Link title={t("pokemonInfoTitle")}
                  className="pl-2 text-white projects-more" target="_blank" to="./../pokemon-case" >{t("projectsSliderMore")}</Link>
                </cite>
                <div className="projects-work-links">
                  <Link title={t("pokemonInfoTitleGithub")}
                  to='https://github.com/yevheniiairapetian/pokemon-app' target="_blank" rel="noopener"><FontAwesomeIcon className="fa-code" icon={faCode} /></Link>
                 
                  <Link title={t("pokemonInfoTitleDeployed")}
                  to='https://yevheniiairapetian.github.io/pokemon-app/' target="_blank" rel="noopener"><FontAwesomeIcon className="fa-up" icon={faArrowUpRightFromSquare} /></Link>
                  
                  <Link title={t("pokemonInfoTitle")}
                  to='./../pokemon-case' target="_self" rel="noopener"><FontAwesomeIcon className="fa-circle" icon={faCircleInfo} /></Link>
                </div>
              </Carousel.Caption>
              </Link>
            </Carousel.Item>


            <Carousel.Item>
              <Image className="projects-testim-image" alt={t("projectsSliderImageAlt")}
               src={projectsPicture7} text="Third slide" />
              <Link title={t("toDoInfoTitle")}
              // "Click to read more about the To Do App" 
              className="pl-2 text-white projects-more" target="_self" to="">
                <FontAwesomeIcon onClick={()=>{showCaption()}} title={t("sliderExpandInfoTitle")}
                className="slide-plus" style={{color: "#529fcc",}}
              icon={faUpRightAndDownLeftFromCenter} 
              size="lg" />
              <Carousel.Caption className="projects-carousel-caption">
                <h3 className="projects-carousel-heading">To-Do App</h3>
                <cite>{t("toDoInfo")}
                  
                  <Link title={t("toDoInfoTitle")}
                  className="pl-2 text-white projects-more" target="_self" to="./../to-do-case" >{t("projectsSliderMore")}</Link>
                </cite>
                <div className="projects-work-links">
                  <Link title={t("toDoInfoTitleGithub")}
                  to='https://github.com/yevheniiairapetian/to-do-list-app' target="_blank" rel="noopener"><FontAwesomeIcon className="fa-code" icon={faCode} /></Link>
                  
                  <Link title={t("toDoInfoTitleDeployed")}
                  to='https://yevheniiairapetian.github.io/to-do-list-app/' target="_blank" rel="noopener"><FontAwesomeIcon className="fa-up" icon={faArrowUpRightFromSquare} /></Link>
                 
                  <Link title={t("toDoInfoTitle")}
                  to='./../to-do-case' target="_self" rel="noopener"><FontAwesomeIcon className="fa-circle" icon={faCircleInfo} /></Link>
                </div>
              </Carousel.Caption>
              </Link>
            </Carousel.Item>


            <Carousel.Item>
              <Image className="projects-testim-image" alt={t("projectsSliderImageAlt")}
              src={projectsPicture8} text="Third slide" />
              <Link title={t("portfolioInfoTitle")}
               className="pl-2 text-white projects-more" target="_self" to="">
                <FontAwesomeIcon onClick={()=>{showCaption()}} title={t("sliderExpandInfoTitle")}
                 className="slide-plus" style={{color: "#529fcc",}}
              icon={faUpRightAndDownLeftFromCenter} 
              size="lg" />
              <Carousel.Caption className="projects-carousel-caption">
                <h3 className="projects-carousel-heading">Portfolio App</h3>
                <cite>{t("portfolioInfo")}
                  
                  <Link title={t("portfolioInfoTitle")}
                  className="pl-2 text-white projects-more" target="_self" to="./../portfolio-case" >{t("projectsSliderMore")}</Link>
                </cite>
                <div className="projects-work-links">
                  <Link title={t("portfolioInfoTitleGithub")}
                  to='https://github.com/yevheniiairapetian/portfolio' target="_blank" rel="noopener"><FontAwesomeIcon className="fa-code" icon={faCode} /></Link>
                  
                  <Link title={t("portfolioInfoTitleDeployed")}
                  to='https://yevheniiairapetian.com/#/' target="_self" rel="noopener"><FontAwesomeIcon className="fa-up" icon={faArrowUpRightFromSquare} /></Link>
               
                  <Link title={t("portfolioInfoTitle")}
                  to='./../portfolio-case' target="_self" rel="noopener"><FontAwesomeIcon className="fa-circle" icon={faCircleInfo} /></Link>
                </div>
              </Carousel.Caption>
              </Link>
            </Carousel.Item>


          </Carousel>
        </Col>
      </Row>
    </Container>

  );
}
