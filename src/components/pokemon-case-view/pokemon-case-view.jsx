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



export const PokemonCaseView = () => {
  const takeaways = [
    'Improve debugging skills by practicing and using external educational resources.',
    'Stay motivated even when temporary educational difficulties occur.',
    'Improve digital self-care regarding rest time',
  ];
  const listItems = takeaways.map(takeaway => <li data-icon="&#9745; ">{takeaway}</li>);
  return (
    <Container>
        <Row>
            <Col>
            <h1 className="r3play-headings text-center">Pokemon App Case Study</h1>
      
         

<div className="projects-information_container--item">
        
        <Image src={PokemonPicture1} className="screenshot" alt="R3play Case Study hero image"></Image>
        <h2 className="fade-in-up-on-scroll r3play-headings">Overview</h2>
        <p className="fade-in-up-on-scroll">Pokemon App is a web application, developed using HTML, CSS, Javascript, and Bootstrap. It
                                provides users with
                                information about Pokemon fetched from the <a href="https://pokeapi.co/"
                                        target="_blank">Pokedex API</a>. Users can access information about
                                Pokemon ID, height, and weight, see a Pokemon's front and back image, and search for a
                                Pokemon by name.</p>
        <h2 className="fade-in-up-on-scroll r3play-headings">Purpose and Context</h2>
        <p className="fade-in-up-on-scroll">Pokemon App was a required project I developed as part of my full-stack immersion course at CareerFoundry to demonstrate my mastery of web development using JavaScript and Bootstrap.
        </p>
        <h2 className="fade-in-up-on-scroll r3play-headings">Objective</h2>
        <p className="fade-in-up-on-scroll">The project aimed to develop a fully-functioning app that I could add to my professional portfolio. The problem I wanted to solve was to build and style a web application by employing an external API and a popular CSS framework.</p>
        <h2 className="fade-in-up-on-scroll r3play-headings">Approach</h2>
        <h3 className="fade-in-up-on-scroll r3play-headings">API</h3>
        <p className="fade-in-up-on-scroll">I used the <a href="https://pokeapi.co/" target="_blank">Pokedex API</a> as part of the
                                project's required dependencies to supply the app with various information about
                                Pokemon. For this purpose, Javascript promises were used to handle asynchronous requests
                                and responses to/from the Pokedex API.</p>
                                <h3 className="fade-in-up-on-scroll r3play-headings">Client Side</h3>
        <p className="fade-in-up-on-scroll">After finishing the logic part of the app, I began the stylization phase by incorporating Bootstrap as the project's required CSS framework. The task was to use Bootstrap's grid, classes, and components to implement the required functionality and responsiveness. Finally, I tested the app on various screens, devices, and operating systems using the device/system emulators.</p>


        
        <h2 className="fade-in-up-on-scroll r3play-headings">Duration</h2>
        <p className="fade-in-up-on-scroll">4 weeks</p>
        <h2 className="fade-in-up-on-scroll r3play-headings">Retrospective</h2>
        <h3 className="fade-in-up-on-scroll r3play-headings">Challenges</h3>
        <p className="fade-in-up-on-scroll">The part requiring to use asynchronous Javascript was the most time-consuming, while the work on styling was relatively easy. Overall, it took me 1 month to complete the project which was around the average time spent. First, I had difficulties displaying the specific Pokemon information as described in the Pokedex documentation. Also, I had to troubleshoot the issue when data didn't display on the front end.</p>
        <p className="fade-in-up-on-scroll">Nevertheless, this was a fun and relatively easy project to work on. I have enjoyed diving into the basics of Javascript by learning AJAX. It was also motivating to learn styling with the help of Bootstrap. I also quickly gained useful skills in working with Javascript promises and APIs, reading documentation, styling with CSS frameworks, and troubleshooting. Thankfully, my mentor and tutor assisted me during the project and I was able to apply the gained skills later on when implementing additional features to the app.</p>
        <h3 className="fade-in-up-on-scroll r3play-headings">Conclusion and Key Takeaways</h3>
        <p className="fade-in-up-on-scroll">The Pokemon app was the first Full-Stack Immersion course project. When it was finished, I focused on enhancing my development skills, specifically diving into Node.js, Express, and APIs. Designing my own API was a useful and important step to further mastering the crucial back-end web development skills.</p>
        <h3 className="fade-in-up-on-scroll r3play-headings">Main takeaways for future projects</h3>
        <ul className="r3play-takeaways">{listItems}</ul>;
        <p className="center r3play-slider-hint fade-in-up-on-scroll">Use the slider controls to click through the testimonials
                        list. <br/>Hover over the slides' headings to read more.</p>
        <PokemonCaseSlider/>
        
        <h2 className="video-image-heading fade-in-up-on-scroll">App Preview
        </h2>
        <iframe title="vimeo-player" src="https://player.vimeo.com/video/937469265?h=b5daa5a7ff" width="100%" height="460" frameborder="0"    allowfullscreen></iframe>
        
        <h2 className="technologies-heading fade-in-up-on-scroll">Technologies used/Skills</h2>


        <p className="skills-paragraphs"><span>Ajax</span>
                        </p>
                        <p className="skills-paragraphs"><span>External
                                        API</span></p>
                        <p className="skills-paragraphs"><span>Javascript</span>
                        </p>
                        <p className="skills-paragraphs"><span>Bootstrap</span>
                        </p>
                        <p className="skills-paragraphs"><span>CSS3</span>
                        </p>
                        <p className="skills-paragraphs"><span>Responsive
                                        design</span></p>
                        <p className="skills-paragraphs"><span>HTML5</span>
                        </p>
                        <p className="skills-paragraphs"><span>jQuery</span>
                        </p>
                        <p className="skills-paragraphs"><span>Deploying
                                        a website</span></p>

        
        <h2 className="credits r3play-headings text-center fade-in-up-on-scroll">Credits</h2>
        <p className="fade-in-up-on-scroll">Role: <br/>Lead Developer</p>
        <p>Tonny Ntambaazi: <br/><a className="deployed-link fade-in-up-on-scroll" target="_blank"
                        href="https://www.linkedin.com/in/tonny-ntambaazi-97275bb2/">Creative
                        Director</a>
        </p>
        <p>Nizar Triki: <br/><a className="deployed-link fade-in-up-on-scroll" target="_blank"
                        href="https://www.linkedin.com/in/nizartriki/">Software Engineering Manager</a>
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
