import Carousel from 'react-bootstrap/Carousel';
import {Container, Col, Row, Image} from "react-bootstrap";
import { Link } from "react-router-dom";
// import {CarouselCaption} from "react-bootstrap/Carousel";
import React from "react";
import 'video-react/dist/video-react.css'; // import css
import { MeetCaseSlider } from '../meet-case-slider/meet-case-slider';
import { Player } from 'video-react';
import styleCSS from "./css/style.css";
import R3playPicture4 from "./img/r3play-hero-image.png";
import R3playPicture5 from "./img/retrospective-1.gif";
import R3playPicture6 from "./img/retrospective-2.gif";
import { faArrowUpRightFromSquare, faCode} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';



export const MeetCaseView = () => {
  const takeaways = [
    'Practice the TDD approach on side projects',
    'Discover more about data visualization',
  ];
  const listItems = takeaways.map(takeaway => <li data-icon="&#9745; ">{takeaway}</li>);
  return (
    <Container>
        <Row>
            <Col>
            <h1 className="r3play-headings text-center">Meet App Case Study</h1>
      
         

<div className="projects-information_container--item">
        
        <Image src={R3playPicture4} className="screenshot" alt="R3play Case Study hero image"></Image>
        <h2 className="fade-in-up-on-scroll r3play-headings">Overview</h2>
        <p className="fade-in-up-on-scroll">Meet App is a responsive Progressive Web Application, developed using the test-driven development approach using the AWS Serverless Lambda functions, OAuth2 Google authentication and authorization screen, and the Recharts library to allow users to view the Google Calendar API events. Users can authenticate with Google, specify the city and number of events to display the events, and read more about them. The app can be installed on desktop/mobile thanks to the PWA recommendations, used both online and offline, and shows notifications when incorrect data is entered and/or the internet connection is lost.</p>
        <h2 className="fade-in-up-on-scroll r3play-headings">Purpose and Context</h2>
        <p className="fade-in-up-on-scroll">Meet App was a required project I developed as part of my full-stack immersion course at CareerFoundry to demonstrate my mastery of test-driven full-stack web development skills using JavaScript and serverless technologies.
        </p>
        <h2 className="fade-in-up-on-scroll r3play-headings">Objective</h2>
        <p className="fade-in-up-on-scroll">The project aimed to develop a fully-functioning full-stack app that I could add to my professional portfolio. The problem I wanted to solve was to build a complete full-stack web application by employing the test-driven development approach using the AWS serverless Lambda functions, React.js, and the Progressive Web App requirements.</p>
        
        <h2 className="fade-in-up-on-scroll r3play-headings">Approach</h2>
                        <h3 class="fade-in-up-on-scroll">Test-Driven Development</h3>
                        <p class="fade-in-up-on-scroll">I developed the application by first writing the user stories. With the help of the
                                test-driven development approach, I incorporated the unit, integration, user acceptance,
                                and end-to-end testing methods to write the required tests before implementing the code.

                        </p>
                        <h3 class="fade-in-up-on-scroll">Server-Side and API</h3>
                        <p class="fade-in-up-on-scroll">I developed the server side using the AWS serverless Lambda functions as the requirement for
                                the project. The use of serverless allows for the reduction of extra work for managing a
                                server and
                                makes scalability easier. For the app's events data, CareerFoundry's Google Calendar
                                was used. The Google OAuth2 authentication screen was set up to authenticate and
                                authorize users to the app. In the final stages of development, I made use of React's
                                service worker to transform the app into a Progressive Web Application. The
                                Recharts library allows the visualization of event data in the form of two types of
                                charts
                                (Scatter and Pie).</p>
                        <h3 class="fade-in-up-on-scroll">Client-Side</h3>
                        <p class="fade-in-up-on-scroll">For the visual part, the frontend was responsively styled with regular CSS and JSX.</p>
                        <p class="center r3play-slider-hint fade-in-up-on-scroll">Use the slider controls to click through the testimonials
                        list. <br/>Hover over the testimonials' headings to read more.</p>
        
        
        
      
        
        <MeetCaseSlider/>
        {/* <Image className="screenshot img-third-width fade-in-up-on-scroll" src={R3playPicture1}
                alt="R3play app case interface screenshot 1"></Image>
        <Image className="screenshot img-third-width fade-in-up-on-scroll" src={R3playPicture2}
                alt="R3play app case interface screenshot 2"></Image>
        <Image className="screenshot img-third-width fade-in-up-on-scroll" src={R3playPicture3}
                alt="R3play app case interface screenshot 3"></Image> */}
        <h2 className="fade-in-up-on-scroll r3play-headings">Duration</h2>
        <p className="fade-in-up-on-scroll">Almost 1 month (28 days)</p>
        <h2 className="fade-in-up-on-scroll r3play-headings">Retrospective</h2>
        <h3 className="fade-in-up-on-scroll r3play-headings">Challenges</h3>
        <p className="fade-in-up-on-scroll">The biggest challenge for me in this project was the test-driven development approach itself. Having written code in the behavior-driven style before, I had to spend some time getting used to the new method. However, the work on the app went quite well and I got used to the new topic quickly. One of the issues while working on the project was the users' inability to authenticate to the app. After reaching out to my tutor, I solved the problem by adding manually the test users through the Google Developer console.</p>
        <p className="fade-in-up-on-scroll">After troubleshooting the app's installation on a smartphone, I successfully turned it into a Progressive Web App. I also enjoyed working with the user notifications and the Recharts library. I also improved my knowledge and skills of the TDD approach and setting up the AWS and Google Developer accounts, as well as confirming the domain's ownership.</p>
        <h3 className="fade-in-up-on-scroll r3play-headings">Conclusion and Key Takeaways</h3>
        <p className="fade-in-up-on-scroll">The Meet app was one of the last projects in the Full-Stack web development course. When it was finished, I focused on enhancing my React development skills, specifically by diving into a new topic - Native app development with React Native and Android Studio.</p>
        <h3 className="fade-in-up-on-scroll r3play-headings">Main takeaways for future projects</h3>
        <ul className="r3play-takeaways">{listItems}</ul>;
                
        <h2 className="video-image-heading fade-in-up-on-scroll fade-in-up-on-scroll">App Preview
        </h2>
        
        
        <iframe title="vimeo-player" src="https://player.vimeo.com/video/937424436?h=9c75e894f9" width="100%" height="460" frameborder="0"    allowfullscreen></iframe>        <h2 className="technologies-heading fade-in-up-on-scroll">Technologies used/Skills</h2>

        
                        <p className="skills-paragraphs"><span>Javascript</span>
                        </p>
                        <p className="skills-paragraphs"><span>Node.js,
                                        Express</span></p>
                        <p className="skills-paragraphs"><span>API</span>
                        </p>
                        <p className="skills-paragraphs"><span>Test-driven development</span></p>
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
                        <p className="skills-paragraphs"><span>Responsive
                                        design</span></p>
                        <p className="skills-paragraphs"><span>Ajax</span>
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

        <Link className="meet-external-links" to='https://github.com/yevheniiairapetian/meet' title="Click to open the Meet App Github repository" target="_blank" rel="noopener"><FontAwesomeIcon className="meet-fa-code" icon={faCode} /></Link>
                                                  
        <Link className="meet-external-links" to='https://yevheniiairapetian.github.io/meet/' title="Click to open the Meet App" target="_blank" rel="noopener"><FontAwesomeIcon className="meet-fa-up" icon={faArrowUpRightFromSquare}/></Link>
                                      

        





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
