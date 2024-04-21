import Carousel from 'react-bootstrap/Carousel';
import { Container, Row, Col, Nav, Image } from "react-bootstrap";
import { Link } from "react-router-dom";
import { faCircleInfo, faArrowUpRightFromSquare, faCode, faClipboardCheck } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { CarouselCaption } from "react-bootstrap/Carousel";
import { R3playCaseView } from "../r3play-case-view/r3play-case-view";
import React from "react";
import projectsPicture1 from "./img/r3play-api-hero-image.png";
import projectsPicture2 from "./img/r3play-hero-image.png";
import projectsPicture3 from "./img/myFlix-hero-image.png";
import projectsPicture4 from "./img/meet-app-hero-image.png";
import projectsPicture5 from "./img/owrite-case-hero-image-2.png";
import projectsPicture6 from "./img/pokemon-hero-image.png";
import projectsPicture7 from "./img/to-do-hero-image.png";
import sliderCSS from "./css/slider.css";


export const ProjectsSlider = () => {
  return (
    <Container>
      <Row>
        <Col>
          <Carousel className="w-75 m-auto">

            <Carousel.Item>
              <Image className="projects-testim-image" src={projectsPicture2} text="Second slide" />
              <Link className="pl-2 text-white projects-more" target="_self" to="./../r3play-case">
                <Carousel.Caption className="projects-carousel-caption">
                  <h3 className="projects-carousel-heading">R3play App</h3>
                  <cite>The front end of the R3play Web API that allows users to
                    register and deregister, view information about movies, TV series, and
                    anime, and manage their favorites list.<Link title="Click to read more about the R3play Project" className="pl-2 text-white projects-more" target="_self" to="./../r3play-case">More</Link>
                  </cite>
                  <div class="projects-work-links">
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
                  <cite>A Web API developed with Node.js, Express, and MongoDB, allowing
                    users to register, deregister, view information about movies, TV series,
                    and anime, and manage favorites.
                    <Link title="Click to read more about the R3play Project" className="pl-2 text-white projects-more" target="_self" to="./../r3play-case">More</Link>
                  </cite>
                  <div class="projects-work-links">
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
                  <cite>
                    A front-end part for the R3play Web API designed with Angular,
                    Typescript, and Material UI allowing users to register, view information
                    about movies, and add favorites.
                    <Link title="Click to read more about the MyFlix App" className="pl-2 text-white projects-more" target="_self" to="./../myFlix-case" >More</Link>
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
                  <cite>A Progressive Web App written with AWS Lambda functions that
                    employs OAuth2 authorization and authentication and displays events from
                    CareerFoundry's Google Calendar API.<Link title="Click to read more about the Meet App" className="pl-2 text-white projects-more" target="_self" to="./../meet-case" >More</Link>
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
                  <cite>A React Native application that allows users to chat. Users can
                    set a username, choose the chat background color, and send text
                    messages, pictures, and audio recordings.
                    <Link title="Click to read more about the Owrite App" className="pl-2 text-white projects-more" target="_blank" to="./../owrite-case" >More</Link>
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
                <cite>
                  A responsive Pokemon App fetching Pokemon with Ajax from an
                  external Pokedex API and displaying their info such as Pokemon height,
                  weight, ID, and front and back images
                  <Link title="Click to read more about the Pokemon App" className="pl-2 text-white projects-more" target="_blank" to="./../pokemon-case" >More</Link>
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
              <Carousel.Caption className="projects-carousel-caption">
                <h3 className="projects-carousel-heading">To-Do App</h3>
                <cite>
                  A jQuery and Bootstrap to-do app that allows users to manage to-dos. Users can add, delete, and rearrange to-dos, create and
                  delete to-do lists, and see a guide on how to use the app.
                  <Link className="pl-2 text-white projects-more" target="_blank" to="https://www.linkedin.com/in/yevheniiairapetian/" >More</Link>
                </cite>
                <div className="projects-work-links">
                  <Link to='https://github.com/yevheniiairapetian' target="_blank" rel="noopener"><FontAwesomeIcon className="fa-code" icon={faCode} /></Link>
                  {/* </div> */}
                  {/* <div class="work-links"> */}
                  <Link to='https://www.linkedin.com/in/yevheniiairapetian/' target="_blank" rel="noopener"><FontAwesomeIcon className="fa-up" icon={faArrowUpRightFromSquare} /></Link>
                  {/* </div> */}
                  {/* <div class="work-links"> */}
                  <Link to='https://twitter.com/airapetian_dev' target="_blank" rel="noopener"><FontAwesomeIcon className="fa-circle" icon={faCircleInfo} /></Link>
                  {/* </div> */}
                </div>
              </Carousel.Caption>
            </Carousel.Item>

          </Carousel>
        </Col>
      </Row>
    </Container>

  );
}
