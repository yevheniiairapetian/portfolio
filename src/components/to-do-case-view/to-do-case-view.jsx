import Carousel from 'react-bootstrap/Carousel';
import {Container, Col, Row, Image} from "react-bootstrap";
import { Link } from "react-router-dom";
// import {CarouselCaption} from "react-bootstrap/Carousel";
import React from "react";
import 'video-react/dist/video-react.css'; // import css
import { ToDoCaseSlider } from '../to-do-case-slider/to-do-case-slider';
import { Player } from 'video-react';
import styleCSS from "./css/style.css";
import ToDoPicture1 from "./img/to-do-case-hero-image.png";
import { faArrowUpRightFromSquare, faCode} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';



export const ToDoCaseView = () => {
  const beforeResults = [
    'Add/delete to-dos',
    'Rearrange to-dos on desktop',
    'Cross-out to-dos',
    'Show built-in browser alert notifications',
  ];
  const beforeLists = beforeResults.map(result => <li data-icon="&#9745; ">{result}</li>);

  const afterResults = [
        'Add/delete to-do lists',
        'Add/delete to-dos to/from the to-do lists (including pressing "Enter" on the keyboard)',
        'Clear the input field',
        'Rearrange and cross-out to-dos on mobile with the help of jQuery Mobile and jQuery Touch Punch',
        'Show prettier notifications with the help of Bootstrap and jQuery UI',
        'View a guide on how to use the app on different platforms with the help of Bootstrap',
      ];
      const afterLists = afterResults.map(result => <li data-icon="&#9745; ">{result}</li>);

      const takeaways = [
        'Enhance the Bootstrap skills',
        'Work on the debugging skills',
        'Extend the app\'s features later on',
      ];
      const listItems = takeaways.map(takeaway => <li data-icon="&#9745; ">{takeaway}</li>);

      
      
      



  return (
    <Container>
        <Row>
            <Col>
            <h1 className="r3play-headings text-center">To Do App Case</h1>
      
         

<div className="projects-information_container--item">
        
        <Image src={ToDoPicture1} className="screenshot" alt="R3play Case Study hero image"></Image>
        <h2 className="fade-in-up-on-scroll r3play-headings">Overview</h2>
        <p className="fade-in-up-on-scroll">To-Do-List App is a responsive web application, developed using HTML, Bootstrap, and Javascript and provides users with the ability to manage their to-dos. Users can add and delete their to-dos among other features.</p>
        <h2 className="fade-in-up-on-scroll r3play-headings">Purpose and Context</h2>
        <p className="fade-in-up-on-scroll">To-Do-List App was a required side mini-project I developed as part of my full-stack immersion course at CareerFoundry to demonstrate my mastery of working with jQuery.
        </p>
        <h2 className="fade-in-up-on-scroll r3play-headings">Objective</h2>
        <p className="fade-in-up-on-scroll">The project aimed to design a fully-functioning web app that I could add to my professional portfolio. The problem I wanted to solve was to turn plain Javascript into jQuery.</p>
        <h2 className="fade-in-up-on-scroll r3play-headings">Approach</h2>
        <h3 className="fade-in-up-on-scroll r3play-headings">Client Side</h3>
        <p className="fade-in-up-on-scroll">After receiving the initial plain Javascript code with basic app functionality, I started turning it into a jQuery one. This type of work allowed me to introduce additional features and styles.</p>
        <p className="center r3play-slider-hint fade-in-up-on-scroll">Use the slider controls to click through the testimonials
                        list. <br/>Hover over the slides' headings to read more.</p>
        
        <ToDoCaseSlider/>
        
        <h2 className="fade-in-up-on-scroll r3play-headings">Duration</h2>
        <p className="fade-in-up-on-scroll">1 day</p>
        <h2 className="fade-in-up-on-scroll r3play-headings">Retrospective</h2>
        <h3 className="fade-in-up-on-scroll r3play-headings">Challenges</h3>
        <p className="fade-in-up-on-scroll">The development of the app's basic features didn't create any difficulties and I finished the task within 1 day. However, I wasn't satisfied with the functionality it had and decided to find extra time to add improvements. These additions caused a lot of debugging because different jQuery libraries didn't function well together and as I planned them to. Thankfully, my mentor and tutor helped me to troubleshoot the work. Before introducing extra functions, the app could:</p>
        <ul className="r3play-takeaways">{beforeLists}</ul>
        <p className="fade-in-up-on-scroll">With the new features, it allows to:</p>
        <ul className="r3play-takeaways">{afterLists}</ul>
        <h3 className="fade-in-up-on-scroll r3play-headings">Conclusion and Key Takeaways</h3>
        <p className="fade-in-up-on-scroll">The To-Do-List App was only a side mini-project I did in the full-stack immersion course but I enjoyed adding new features and styling to it above the basic requirements. It quickly enhanced my skills in jQuery, Bootstrap, debugging, and working with additional libraries.</p>
        <h3 className="fade-in-up-on-scroll r3play-headings">Main takeaways for future projects</h3>
        <ul className="r3play-takeaways">{listItems}</ul>
        
        
        <h2 className="video-image-heading fade-in-up-on-scroll fade-in-up-on-scroll">App Preview
        </h2>
        
        
        <iframe title="vimeo-player" src="https://player.vimeo.com/video/937564407?h=166fbedee6" width="100%" height="460" frameborder="0"    allowfullscreen></iframe>
        <h2 className="technologies-heading fade-in-up-on-scroll">Technologies used/Skills</h2>

              

        <p className="skills-paragraphs"><span>Responsive design</span>
        </p>
        <p className="skills-paragraphs"><span>
        Javascript</span></p>
        <p className="skills-paragraphs"><span>Bootstrap</span>
        </p>
        <p className="skills-paragraphs"><span>CSS3</span></p>
        <p className="skills-paragraphs"><span>HTML5</span>
        </p>
        <p className="skills-paragraphs"><span>jQuery</span>
        </p>
        <p className="skills-paragraphs"><span>Deploying a website</span>
        </p>
        <p className="skills-paragraphs"><span>Troubleshooting</span></p>
        
        <h2 className="credits r3play-headings text-center fade-in-up-on-scroll">Credits</h2>
        <p className="fade-in-up-on-scroll">Role: <br/>Lead Developer</p>
        <p>Tonny Ntambaazi: <br/><a className="deployed-link fade-in-up-on-scroll" target="_blank"
                        href="https://www.linkedin.com/in/tonny-ntambaazi-97275bb2/">Creative
                        Director</a>
        </p>
        <p>Nizar Triki: <br/><a className="deployed-link fade-in-up-on-scroll" target="_blank"
                        href="https://www.linkedin.com/in/nizartriki/">Software Engineering Manager</a>
        </p>

        <Link className="r3play-external-links" title="Click to open the R3play App Github repository" to='https://github.com/yevheniiairapetian/to-do-list-app' target="_blank" rel="noopener"><FontAwesomeIcon title="Click to read more about the R3play App" className="r3play-fa-code" icon={faCode} /></Link>
                                                  
        <Link className="r3play-external-links" title="Click to open the R3play App" to='https://yevheniiairapetian.github.io/to-do-list-app/' target="_blank" rel="noopener"><FontAwesomeIcon className="r3play-fa-up" icon={faArrowUpRightFromSquare}/></Link>
                                      

        





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
