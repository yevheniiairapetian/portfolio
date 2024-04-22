import Carousel from 'react-bootstrap/Carousel';
import {Container, Col, Row, Image} from "react-bootstrap";
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
import { faArrowUpRightFromSquare, faCode} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';



export const R3playCaseView = () => {
  const takeaways = [
    'Focus on the required functionality first',
    'Enhance the time-management skills',
    'Deepen the knowledge of the used technologies by reading and practicing more',
    'Not doubting to reach out for help in case of technical issues',
  ];
  const listItems = takeaways.map(takeaway => <li data-icon="&#9745; ">{takeaway}</li>);
  return (
    <Container>
        <Row>
            <Col>
            <h1 className="r3play-headings text-center">R3play App Case Study</h1>
      
         

<div className="projects-information_container--item">
        
        <Image src={R3playPicture4} className="screenshot" alt="R3play Case Study hero image"></Image>
        <h2 className="fade-in-up-on-scroll r3play-headings">Overview</h2>
        <p className="fade-in-up-on-scroll">R3play is a web application, developed using the MERN stack, that provides users with
                information about movies, TV series, and anime. Users can access information about
                movies, directors, and genres. Users can create an account, update their information,
                and create a list of favorite movies, TV series, and anime.</p>
        <h2 className="fade-in-up-on-scroll r3play-headings">Purpose and Context</h2>
        <p className="fade-in-up-on-scroll">R3play was a required project I developed as part of my full-stack immersion course at
                CareerFoundry to demonstrate my mastery of full-stack web development using JavaScript.
        </p>
        <h2 className="fade-in-up-on-scroll r3play-headings">Objective</h2>
        <p className="fade-in-up-on-scroll">The project aimed to develop a fully-functioning full-stack app that I could add to my
                professional portfolio. The problem I wanted to solve was to build the complete
                full-stack web application by connecting the previously designed server-side and the
                client-side for the application from scratch.</p>
        <h2 className="fade-in-up-on-scroll r3play-headings">Approach</h2>
        <h3 className="fade-in-up-on-scroll">Server-Side</h3>
        <p className="fade-in-up-on-scroll">I developed a RESTful API using Node.js and Express, that interacts with a non-relational
                database (MongoDB). The API employs common HTTP methods like GET, PUT, POST, and DELETE.
                To retrieve data from and store data in the database, CRUD methods are used. The API
                provides movie, TV series, and anime information in JSON format.</p>

        <a className="deployed-link fade-in-up-on-scroll" target="_blank"
                href="https://r3play-934f9ea5664d.herokuapp.com/#user">&#x2192; View Endpoints</a>
        <p className="fade-in-up-on-scroll pt-4">I used Postman to test responses and requests to the API. I also made use of basic HTTP
                authentication and JWT authentication to provide for the authentication and
                authorization features.</p>
        <h3 className="fade-in-up-on-scroll">Client-Side</h3>
        <p className="fade-in-up-on-scroll">After completing the API project, I proceeded to build the front-end interface users would
                need when interacting with the logic and data from the API and the database. It is a
                single-page, responsive web application, developed with React and React-Redux. It
                displays several interface views, including (but not limited to) a main view (shows a
                list of all movies, TV series, and anime), single movie, TV series, and anime views
                (shows data about a single movie, TV series, and anime, and allows users to add or
                delete them to or from their list of favorites), a login view, a registration view and a
                profile view (where users can update their user data and list of favorites).</p>
        <p className="center r3play-slider-hint fade-in-up-on-scroll">Use the slider controls to click through the testimonials
                        list. <br/>Hover over the slides' headings to read more.</p>
        <R3playCaseSlider/>
        {/* <Image className="screenshot img-third-width fade-in-up-on-scroll" src={R3playPicture1}
                alt="R3play app case interface screenshot 1"></Image>
        <Image className="screenshot img-third-width fade-in-up-on-scroll" src={R3playPicture2}
                alt="R3play app case interface screenshot 2"></Image>
        <Image className="screenshot img-third-width fade-in-up-on-scroll" src={R3playPicture3}
                alt="R3play app case interface screenshot 3"></Image> */}
        <h2 className="fade-in-up-on-scroll r3play-headings">Duration</h2>
        <p className="fade-in-up-on-scroll">12 weeks in total (backend: 7 weeks, frontend: 5 weeks)</p>
        <h2 className="fade-in-up-on-scroll r3play-headings">Retrospective</h2>
        <h3 className="fade-in-up-on-scroll r3play-headings">Challenges</h3>
        <p className="fade-in-up-on-scroll">The development of the backend side was the most time-consuming, while the work on the client
                side was the most challenging technically. As a result, it took me longer to complete
                the full stack as compared to the usual duration of two CareerFoundry achievements. The
                reason for this was that I concentrated on the functional and visual improvements of
                both achievements above the basic requirements, and needed more time to troubleshoot the
                conditional rendering of JSX elements, how to implement Redux in React, and the
                conditional logic behind rendering the movie suggestions to the user.</p>
        <p className="fade-in-up-on-scroll">Nevertheless, this was my favorite project. I have enjoyed developing the user interface and
                working with database information. I also quickly enhanced my terminal skills,
                understanding of querying the MongoDB NoSQL database, conditional rendering, filtering
                data, customization of React Bootstrap components, as well as time-management and
                prioritization skills. Thankfully, my skilled tutor and
                mentor assisted me during the project and I was able to apply the gained skills later on
                when implementing additional features to the app.</p>
        <h3 className="fade-in-up-on-scroll r3play-headings">Conclusion and Key Takeaways</h3>
        <p className="fade-in-up-on-scroll">The movie app was only the second full web application I developed in the Full-Stack
                web development course. When it was finished, I focused on enhancing my development
                skills, specifically the test-driven development approach. It requires
                implementing the testing phase before adding the actual functional logic, allowing for
                safer, bug-free, and quicker development.</p>
        <h3 className="fade-in-up-on-scroll r3play-headings">Main takeaways for future projects</h3>
        <ul className="r3play-takeaways">{listItems}</ul>;
        
        {/* <Image className="screenshot img-full-width fade-in-up-on-scroll"
                alt="A gif image showing additional features of the R3play app"
                src={R3playPicture5}></Image>
        <Image className="screenshot img-full-width fade-in-up-on-scroll"
                alt="A gif image showing additional features of the R3play app"
                src={R3playPicture6}></Image> */}
        <h2 className="video-image-heading fade-in-up-on-scroll">API Preview
        </h2>
        <iframe title="vimeo-player" src="https://player.vimeo.com/video/937369818?h=28da240343" width="100%" height="460" frameborder="0"    allowfullscreen></iframe>
        
        <h2 className="video-image-heading fade-in-up-on-scroll fade-in-up-on-scroll">App Preview
        </h2>
        
        
        <iframe title="vimeo-player" src="https://player.vimeo.com/video/937371451?h=037f9a15fe" width="100%" height="460" frameborder="0"    allowfullscreen></iframe>
        <h2 className="technologies-heading fade-in-up-on-scroll">Technologies used/Skills</h2>
        <p className="skills-paragraphs"><span>React.js</span>
        </p>
        <p className="skills-paragraphs"><span>
                        React Bootstrap</span></p>
        <p className="skills-paragraphs"><span>Testing</span>
        </p>
        <p className="skills-paragraphs"><span>Google
                        Calendar API</span></p>
        <p className="skills-paragraphs"><span>CSS3</span>
        </p>
        <p className="skills-paragraphs"><span>HTML5</span>
        </p>
        <p className="skills-paragraphs"><span>Ajax</span>
        </p>
        <p className="skills-paragraphs"><span>Progressive
                        Web Apps</span></p>
        <p className="skills-paragraphs"><span>AWS Lambda</span></p>
        <p className="skills-paragraphs"><span>Responsive
                        design</span></p>
        <p className="skills-paragraphs"><span>OAuth2</span>
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

        <Link className="r3play-external-links" title="Click to open the R3play App Github repository" to='https://github.com/yevheniiairapetian/r3play-client' target="_blank" rel="noopener"><FontAwesomeIcon title="Click to read more about the R3play App" className="r3play-fa-code" icon={faCode} /></Link>
                                                  
        <Link className="r3play-external-links" title="Click to open the R3play App" to='https://r3play.netlify.app/' target="_blank" rel="noopener"><FontAwesomeIcon className="r3play-fa-up" icon={faArrowUpRightFromSquare}/></Link>
                                      

        





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
