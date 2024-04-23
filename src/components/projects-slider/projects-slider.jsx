import Carousel from 'react-bootstrap/Carousel';
import { Container, Row, Col, Nav, Image } from "react-bootstrap";
import { Link } from "react-router-dom";
import { faCircleInfo, faArrowUpRightFromSquare, faCode, faClipboardCheck } from '@fortawesome/free-solid-svg-icons';
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
import sliderCSS from "./css/slider.css";


export const ProjectsSlider = () => {
  const { t } = useTranslation();
  return (
    <Container>
      <Row>
        <Col>
          <Carousel className="w-100 m-auto">

            <Carousel.Item>
              <Image className="projects-testim-image" src={projectsPicture2} text="Second slide" />
              <Link className="pl-2 text-white projects-more" target="_self" to="./../r3play-case">
                <Carousel.Caption className="projects-carousel-caption">
                  <h3 className="projects-carousel-heading">R3play App</h3>
                  <cite>{t("r3playInfo")}<Link title="Click to read more about the R3play Project" className="pl-2 text-white projects-more" target="_self" to="./../r3play-case">More</Link>
                  </cite>
                  <div className="projects-work-links">
                    <Link title="Click to open the R3play App Github repository" to='https://github.com/yevheniiairapetian/r3play' target="_blank" rel="noopener"><FontAwesomeIcon className="fa-code" icon={faCode} /></Link>
                    {/* </div> */}
                    {/* <div class="work-links"> */}
                    <Link title="Click to open the R3play App" to='http://r3play.netlify.app/' target="_blank" rel="noopener"><FontAwesomeIcon className="fa-up" icon={faArrowUpRightFromSquare} /></Link>
                    {/* </div> */}
                    {/* <div class="work-links"> */}
                    <Link title="Click to read more about the R3play Project" to='./../r3play-case' target="_self" rel="noopener"><FontAwesomeIcon className="fa-circle" icon={faCircleInfo} /></Link>
                    {/* </div> */}
                  </div>


                </Carousel.Caption>
              </Link>
            </Carousel.Item>
            <Carousel.Item>
              <Image className="projects-testim-image" src={projectsPicture1} text="First slide" />
              <Link className="pl-2 text-white projects-more" target="_self" to="./../r3play-case">
                <Carousel.Caption className="projects-carousel-caption">
                  <h3 className="projects-carousel-heading">R3play Web API</h3>
                  <cite>{t("r3playAPIInfo")}
                    <Link title="Click to read more about the R3play Project" className="pl-2 text-white projects-more" target="_self" to="./../r3play-case">{t("projectsSliderMore")}</Link>
                  </cite>
                  <div className="projects-work-links">
                    <Link title="Click to open the R3play API Github repository" to='https://github.com/yevheniiairapetian/r3play' target="_blank" rel="noopener"><FontAwesomeIcon className="fa-code" icon={faCode} /></Link>
                    {/* </div> */}
                    {/* <div class="work-links"> */}
                    <Link title="Click to open the R3play API" to='https://r3play-934f9ea5664d.herokuapp.com/' target="_blank" rel="noopener"><FontAwesomeIcon className="fa-up" icon={faArrowUpRightFromSquare} /></Link>
                    {/* </div> */}
                    {/* <div class="work-links"> */}
                    <Link title="Click to read more about the R3play API" to='./../r3play-case' target="_self" rel="noopener"><FontAwesomeIcon className="fa-circle" icon={faCircleInfo} /></Link>
                    {/* </div> */}
                  </div>



                </Carousel.Caption>
              </Link>
            </Carousel.Item>
            <Carousel.Item>
              <Image className="projects-testim-image" src={projectsPicture3} text="Third slide" />
              <Link className="pl-2 text-white projects-more" target="_self" to="./../myFlix-case">
                <Carousel.Caption className="projects-carousel-caption">
                  <h3 className="projects-carousel-heading">MyFlix Angular App</h3>
                  <cite>{t("myFlixInfo")}
                    
                    <Link title="Click to read more about the MyFlix App" className="pl-2 text-white projects-more" target="_self" to="./../myFlix-case" >{t("projectsSliderMore")}</Link>
                  </cite>
                  <div className="projects-work-links">
                    <Link title="Click to open the MyFlix App Github repository" to='https://github.com/yevheniiairapetian/myFlix-Angular-client' target="_blank" rel="noopener"><FontAwesomeIcon className="fa-code" icon={faCode} /></Link>
                    {/* </div> */}
                    {/* <div class="work-links"> */}
                    <Link title="Click to open the Myflix App" to='https://yevheniiairapetian.github.io/myFlix-Angular-client/' target="_blank" rel="noopener"><FontAwesomeIcon className="fa-up" icon={faArrowUpRightFromSquare} /></Link>
                    {/* </div> */}
                    {/* <div class="work-links"> */}
                    <Link title="Click to open the myFlix App project Kanban board" to='https://trello.com/b/495tvGf9/kanban-template' target="_blank" rel="noopener"><FontAwesomeIcon className="fa-clipboard-check" icon={faClipboardCheck} /></Link>
                    <Link title="Click to read more about the MyFlix App" to='./../myFlix-case' target="_self" rel="noopener"><FontAwesomeIcon className="fa-circle" icon={faCircleInfo} /></Link>
                    {/* </div> */}

                  </div>


                </Carousel.Caption>
              </Link>
            </Carousel.Item>


            <Carousel.Item>
              <Image className="projects-testim-image" src={projectsPicture4} text="Second slide" />
              <Link className="pl-2 text-white projects-more" target="_self" to="./../meet-case">
                <Carousel.Caption className="projects-carousel-caption">
                  <h3 className="projects-carousel-heading">Meet App</h3>
                  <cite>{t("meetInfo")}<Link title="Click to read more about the Meet App" className="pl-2 text-white projects-more" target="_self" to="./../meet-case" >{t("projectsSliderMore")}</Link>
                  </cite>
                  <div className="projects-work-links">
                    <Link title="Click to open the Meet App Github repository" to='https://github.com/yevheniiairapetian/meet' target="_blank" rel="noopener"><FontAwesomeIcon className="fa-code" icon={faCode} /></Link>
                    {/* </div> */}
                    {/* <div class="work-links"> */}
                    <Link title="Click to open the Meet App" to='https://yevheniiairapetian.github.io/meet/' target="_blank" rel="noopener"><FontAwesomeIcon className="fa-up" icon={faArrowUpRightFromSquare} /></Link>
                    {/* </div> */}
                    {/* <div class="work-links"> */}
                    <Link title="Click to read more about the Meet App" to='./../meet-case' target="_self" rel="noopener"><FontAwesomeIcon className="fa-circle" icon={faCircleInfo} /></Link>
                    {/* </div> */}
                  </div>
                </Carousel.Caption>
              </Link>
            </Carousel.Item>
            <Carousel.Item>
              <Image className="projects-testim-image" src={projectsPicture5} text="First slide" />
              <Link className="pl-2 text-white projects-more" target="_self" to="./../owrite-case">
                <Carousel.Caption className="projects-carousel-caption">
                  <h3 className="projects-carousel-heading">OWrite Native App</h3>
                  <cite>{t("owriteInfo")}
                    <Link title="Click to read more about the Owrite App" className="pl-2 text-white projects-more" target="_blank" to="./../owrite-case" >{t("projectsSliderMore")}</Link>
                  </cite>
                  <div className="projects-work-links">
                    <Link title="Click to open the Owrite App Github repository" to='https://github.com/yevheniiairapetian/owrite' target="_blank" rel="noopener"><FontAwesomeIcon className="fa-code" icon={faCode} /></Link>

                    <Link title="Click to read more about the Owrite App" to='./../owrite-case' target="_self" rel="noopener"><FontAwesomeIcon className="fa-circle" icon={faCircleInfo} /></Link>

                  </div>
                </Carousel.Caption>
              </Link>
            </Carousel.Item>
            <Carousel.Item>
              <Image className="projects-testim-image" src={projectsPicture6} text="Third slide" />
              <Link className="pl-2 text-white projects-more" target="_self" to="./../pokemon-case">
              <Carousel.Caption className="projects-carousel-caption">
                <h3 className="projects-carousel-heading">Pokemon App</h3>
                <cite>{t("pokemonInfo")}
                  
                  <Link title="Click to read more about the Pokemon App" className="pl-2 text-white projects-more" target="_blank" to="./../pokemon-case" >{t("projectsSliderMore")}</Link>
                </cite>
                <div className="projects-work-links">
                  <Link title="Click to open the the Pokemon App Github repository" to='https://github.com/yevheniiairapetian/pokemon-app' target="_blank" rel="noopener"><FontAwesomeIcon className="fa-code" icon={faCode} /></Link>
                  {/* </div> */}
                  {/* <div class="work-links"> */}
                  <Link title="Click to open the Pokemon App" to='https://yevheniiairapetian.github.io/pokemon-app/' target="_blank" rel="noopener"><FontAwesomeIcon className="fa-up" icon={faArrowUpRightFromSquare} /></Link>
                  {/* </div> */}
                  {/* <div class="work-links"> */}
                  <Link title="Click to read more about the Pokemon App" to='./../pokemon-case' target="_self" rel="noopener"><FontAwesomeIcon className="fa-circle" icon={faCircleInfo} /></Link>
                  {/* </div> */}
                </div>
              </Carousel.Caption>
              </Link>
            </Carousel.Item>


            <Carousel.Item>
              <Image className="projects-testim-image" src={projectsPicture7} text="Third slide" />
              <Link title="Click to read more about the To Do App" className="pl-2 text-white projects-more" target="_self" to="./../to-do-case">
              <Carousel.Caption className="projects-carousel-caption">
                <h3 className="projects-carousel-heading">To-Do App</h3>
                <cite>{t("toDoInfo")}
                  
                  <Link title="Click to read more about the To Do App" className="pl-2 text-white projects-more" target="_self" to="./../to-do-case" >{t("projectsSliderMore")}</Link>
                </cite>
                <div className="projects-work-links">
                  <Link title="Click to open the To Do App Github repository" to='https://github.com/yevheniiairapetian/to-do-list-app' target="_blank" rel="noopener"><FontAwesomeIcon className="fa-code" icon={faCode} /></Link>
                  {/* </div> */}
                  {/* <div class="work-links"> */}
                  <Link title="Click to open the To Do App" to='https://yevheniiairapetian.github.io/to-do-list-app/' target="_blank" rel="noopener"><FontAwesomeIcon className="fa-up" icon={faArrowUpRightFromSquare} /></Link>
                  {/* </div> */}
                  {/* <div class="work-links"> */}
                  <Link title="Click to read more about the To Do App" to='./../to-do-case' target="_self" rel="noopener"><FontAwesomeIcon className="fa-circle" icon={faCircleInfo} /></Link>
                  {/* </div> */}
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
