import Carousel from 'react-bootstrap/Carousel';
import {Container, Col, Row, Image} from "react-bootstrap";
import { Link } from "react-router-dom";
// import {CarouselCaption} from "react-bootstrap/Carousel";
import React from "react";
import 'video-react/dist/video-react.css'; // import css
import { MyFlixCaseSlider } from '../myFlix-case-slider/myFlix-case-slider';
import { Player } from 'video-react';
import styleCSS from "./css/style.css";
import MyFlixPicture1 from './img/myFlix-hero-image.png'

import { faCircleInfo, faArrowUpRightFromSquare, faCode} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';



export const MyFlixCaseView = () => {
  const takeaways = [
    'The API has already been built',
    'The extensive practice with React helped to progress faster',
    'I didn\'t add many additional features and stick to the basic course requirements',
    'The time left in the program was already limited',
  ];

  const listItems = takeaways.map(takeaway => <li data-icon="&#9745; ">{takeaway}</li>);
  return (
    <Container>
        <Row>
            <Col>
            <h1 className="r3play-headings text-center">MyFlix-Angular-App Case Study</h1>
      
         

<div className="projects-information_container--item">
        
        <Image src={MyFlixPicture1} className="screenshot" alt="R3play Case Study hero image"></Image>
        <h2 className="fade-in-up-on-scroll r3play-headings">Overview</h2>
        <p className="fade-in-up-on-scroll">MyFlix-Angular-App is a web app, developed using the MEAN stack, that provides users with
                                information about movies. Users can access information about
                                movies, directors, and genres. Users can create an account, update their information,
                                and create a list of favorite movies.</p>
        <h2 className="fade-in-up-on-scroll r3play-headings">Purpose and Context</h2>
        <p className="fade-in-up-on-scroll">MyFlix-Angular-App was a required project I developed as part of my full-stack immersion
                                course at
                                CareerFoundry to demonstrate my mastery of full-stack web development using JavaScript.
                                Additionally,
                                I practiced Agile project management, feedback providing, and documentation generation
                                skills.
        </p>
        <h2 className="fade-in-up-on-scroll r3play-headings">Objective</h2>
        <p className="fade-in-up-on-scroll">The project aimed to develop a fully-functioning full-stack app that I could add to my
                                professional portfolio. The problem I wanted to solve was to build the complete
                                full-stack web application by connecting the previously designed server-side and the
                                client-side for the application from scratch.</p>
        <h2 className="fade-in-up-on-scroll r3play-headings">Approach</h2>

                        <h3 class="fade-in-up-on-scroll">Agile project management</h3>
                        <p class="fade-in-up-on-scroll">The work on the project started with creating the Kanban board and filling it with
                                the project requirements and user stories. When a project task was completed, it was
                                moved
                                to the "Done" section. As well, I generated detailed documentation with Typedoc as per
                                the project's requirements.
                        </p>
                        <h3 class="fade-in-up-on-scroll">Server-Side</h3>
                        <p class="fade-in-up-on-scroll">I developed a RESTful API using Node.js and Express that interacts with a non-relational
                                database (MongoDB). The API employs common HTTP methods like GET, PUT, POST, and DELETE.
                                To retrieve data from and store data in the database, CRUD methods are used. The API
                                provides movie, TV series, and anime information in JSON format.</p>
                        <a class="deployed-link fade-in-up-on-scroll" target="_blank"
                                href="https://r3play-934f9ea5664d.herokuapp.com/#user">&#x2192; View Endpoints</a>
                        <p class="fade-in-up-on-scroll pt-4">I used Postman to test responses and requests to the API. I also made use of basic HTTP
                                authentication and JWT authentication to provide for the authentication and
                                authorization features.</p>
                        <h3 class="fade-in-up-on-scroll">Client-Side</h3>
                        <p class="fade-in-up-on-scroll">I built the front-end interface for users to be able to interact
                                with the logic and data from the API and the database. It is a
                                single-page, responsive web application, developed with Angular and Material UI. It
                                displays several interface views, including a main view (shows a
                                list of all movies, a button to manage favorites, and buttons to view additional movie
                                information),
                                a login/signup view, and a
                                profile view (where users can update their user data).</p>


        <p className="center r3play-slider-hint fade-in-up-on-scroll">Use the slider controls to click through the testimonials
                        list. <br/>Hover over the testimonials' headings to read more.</p>
        <MyFlixCaseSlider/>
        {/* <Image className="screenshot img-third-width fade-in-up-on-scroll" src={R3playPicture1}
                alt="R3play app case interface screenshot 1"></Image>
        <Image className="screenshot img-third-width fade-in-up-on-scroll" src={R3playPicture2}
                alt="R3play app case interface screenshot 2"></Image>
        <Image className="screenshot img-third-width fade-in-up-on-scroll" src={R3playPicture3}
                alt="R3play app case interface screenshot 3"></Image> */}
        <h2 className="fade-in-up-on-scroll r3play-headings">Duration</h2>
        <p className="fade-in-up-on-scroll">Almost 1.5 weeks (10 days)</p>
        <h2 className="fade-in-up-on-scroll r3play-headings">Retrospective</h2>
        <h3 className="fade-in-up-on-scroll r3play-headings">Challenges</h3>
        <p className="fade-in-up-on-scroll">The development of the myFlix app took much less time and effort as compared to the R3play
                                React app since:</p>
        <h3 className="fade-in-up-on-scroll r3play-headings">Conclusion and Key Takeaways</h3>
        <p className="fade-in-up-on-scroll">The movie app was only the second full web application I developed in the Full-Stack
                web development course. When it was finished, I focused on enhancing my development
                skills, specifically the test-driven development approach. It requires
                implementing the testing phase before adding the actual functional logic, allowing for
                safer, bug-free, and quicker development.</p>
                <p class="fade-in-up-on-scroll">The difficulties I encountered happened at the end of the project and related more to the
                                peculiarities of Angular and Github. One issue occurred when Github pages refused to
                                deploy the app
                                for a long time. The other one happened when the local changes to the codebase didn't
                                display in the deployed app. To troubleshoot this, I reached out to my mentor and tutor
                                and, during a pair programming session, we managed to fix the problems.

                        </p>
                        <p class="fade-in-up-on-scroll">It was also a useful experience in debugging and troubleshooting, using git terminal
                                commands, specifics of working with Angular, and pair programming sessions. I also added
                                new skills to my arsenal, such as
                                Typescript, Angular, Material UI, proper code commenting, collaboration, and others.
                        </p>
                        <h3 class="fade-in-up-on-scroll r3play-headings">Conclusion and Key Takeaways</h3>
                        <p class="fade-in-up-on-scroll">The myFlix app was the last full web application I developed in the Full-Stack
                                web development course. When it was finished, I proceeded to enhance my portfolio.</p>
                        
        <h3 className="fade-in-up-on-scroll r3play-headings">Main takeaways for future projects</h3>
        <ul className="r3play-takeaways">{listItems}</ul>;
        
        {/* <Image className="screenshot img-full-width fade-in-up-on-scroll"
                alt="A gif image showing additional features of the R3play app"
                src={R3playPicture5}></Image>
        <Image className="screenshot img-full-width fade-in-up-on-scroll"
                alt="A gif image showing additional features of the R3play app"
                src={R3playPicture6}></Image> */}
        <h2 className="video-image-heading fade-in-up-on-scroll">App Preview
        </h2>
        <iframe title="vimeo-player" src="https://player.vimeo.com/video/937405621?h=5a76577b85" width="100%" height="460" frameborder="0"    allowfullscreen></iframe>
        
        <h2 className="video-image-heading fade-in-up-on-scroll fade-in-up-on-scroll">API Preview
        </h2>
        
        
        <iframe title="vimeo-player" src="https://player.vimeo.com/video/937369818?h=28da240343" width="100%" height="460" frameborder="0"    allowfullscreen></iframe>        <h2 className="technologies-heading fade-in-up-on-scroll">Technologies used/Skills</h2>
        
        
        <p class="skills-paragraphs"><span>Angular</span>
                        </p>
                        <p className="skills-paragraphs"><span>
                                        Material UI</span></p>
                        <p className="skills-paragraphs"><span>Javascript</span>
                        </p>
                        <p className="skills-paragraphs"><span>CSS3</span>
                        </p>
                        <p className="skills-paragraphs"><span>Documentation</span>
                        </p>
                        <p className="skills-paragraphs"><span>Typedoc</span>
                        </p>
                        <p className="skills-paragraphs"><span>Agile workflow</span>
                        </p>
                        <p className="skills-paragraphs"><span>Kanban board</span>
                        </p>
                        <p className="skills-paragraphs"><span>User stories</span>
                        </p>
                        <p className="skills-paragraphs"><span>Collaboration</span>
                        </p>
                        <p className="skills-paragraphs"><span>Contributing</span>
                        </p>
                        <p className="skills-paragraphs"><span>Providing feedback</span>
                        </p>
                        <p class="skills-paragraphs"><span>Teamwork</span>
                        </p>
                        <p className="skills-paragraphs"><span>Responsive
                                        design</span></p>
                        <p className="skills-paragraphs"><span>CSS3</span>
                        </p>
                        <p className="skills-paragraphs"><span>HTML5</span>
                        </p>
                        <p class="skills-paragraphs"><span>Ajax</span>
                        </p>
                        <p className="skills-paragraphs"><span>Deploying
                                        a website</span></p>
        
        
        
        <h2 className="credits r3play-headings text-center fade-in-up-on-scroll">Credits</h2>
        <p className="fade-in-up-on-scroll">Role: <br/>Lead Developer</p>
        <p>Tonny Ntambaazi: <br/><a class="deployed-link fade-in-up-on-scroll" target="_blank"
                        href="https://www.linkedin.com/in/tonny-ntambaazi-97275bb2/">Creative
                        Director</a>
        </p>
        <p>Nizar Triki: <br/><a className="deployed-link fade-in-up-on-scroll" target="_blank"
                        href="https://www.linkedin.com/in/nizartriki/">Software Engineering Manager</a>
        </p>

        <Link className="myFlix-external-links" to='https://github.com/yevheniiairapetian/myFlix-Angular-client' target="_blank" rel="noopener"><FontAwesomeIcon className="myFlix-fa-code" icon={faCode} /></Link>
                                                  
        <Link className="myFlix-external-links" to='https://yevheniiairapetian.github.io/myFlix-Angular-client/' target="_blank" rel="noopener"><FontAwesomeIcon className="myFlix-fa-up" icon={faArrowUpRightFromSquare}/></Link>
                                      
        <Link className="myFlix-external-links" to='https://trello.com/b/495tvGf9/kanban-template' target="_blank" rel="noopener"><FontAwesomeIcon className="myFlix-fa-info" icon={faCircleInfo}/></Link>
       
        




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
