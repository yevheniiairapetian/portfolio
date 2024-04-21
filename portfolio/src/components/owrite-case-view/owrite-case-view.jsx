import Carousel from 'react-bootstrap/Carousel';
import {Container, Col, Row, Image} from "react-bootstrap";
import { Link } from "react-router-dom";
// import {CarouselCaption} from "react-bootstrap/Carousel";
import React from "react";
import 'video-react/dist/video-react.css'; // import css
import { OwriteCaseSlider } from '../owrite-case-slider/owrite-case-slider';
import OwritePicture1 from './img/owrite-case-hero-image-2.png';
import { Player } from 'video-react';
import styleCSS from "./css/style.css";
import { faArrowUpRightFromSquare, faCode} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';



export const OwriteCaseView = () => {
  const takeaways = [
    'Discover more about Native app development',
    'Practice creating real-time applications on side projects',
  ];
  const listItems = takeaways.map(takeaway => <li data-icon="&#9745; ">{takeaway}</li>);
  return (
    <Container>
        <Row>
            <Col>
            <h1 className="r3play-headings text-center">Owrite App Case Study</h1>
      
         

<div className="projects-information_container--item">
        
        <Image src={OwritePicture1} className="screenshot m-auto" alt="R3play Case Study hero image"></Image>
        <h2 className="fade-in-up-on-scroll r3play-headings">Overview</h2>
        <p className="fade-in-up-on-scroll">OWrite is a React Native real-time chat application, developed using React Native, Expo CLI, accessibility guidelines, and Android Studio for the app itself, and Google Firebase and Firestore for the database. It provides users with real-time chatting features, including viewing message history thanks to the AsyncStorage, sending messages, photos, audio recordings, and geolocation data. Users can set their username and choose the app's background color.</p>
        <h2 className="fade-in-up-on-scroll r3play-headings">Purpose and Context</h2>
        <p className="fade-in-up-on-scroll">OWrite was a required project I developed as part of my full-stack immersion course at CareerFoundry to demonstrate my mastery of native app development using React Native, Expo CLI, Android Studio, and Google Firebase/Firestore.
        </p>
        <h2 className="fade-in-up-on-scroll r3play-headings">Objective</h2>
        <p className="fade-in-up-on-scroll">The project aimed to develop a fully-functioning native app that I could add to my professional portfolio. The problem I wanted to solve was to build the complete native application by connecting the Google Firebase/Firestore database to the app's interface designed with React Native.</p>
        <h2 className="fade-in-up-on-scroll r3play-headings">Approach</h2>
        <h3 className="fade-in-up-on-scroll r3play-headings">Server</h3>
        <p className="fade-in-up-on-scroll">Creating the server logic started with setting up an account at Google Firebase and configuring it. I proceeded then to add the Google Firebase configuration settings to the codebase.</p>
        <h3 className="fade-in-up-on-scroll r3play-headings">Database</h3>
        <p className="fade-in-up-on-scroll">I developed the database using Google Firebase to store two users required for testing. Later on, I employed Google Firestore to contain the users' chat data.</p>
        <h3 className="fade-in-up-on-scroll r3play-headings">App Interface</h3>
        <p className="fade-in-up-on-scroll">For the interface, Android Studio and Expo Go Android App were incorporated for testing purposes. React Native was used to design two app screens: a welcome and a chat screen. The welcome screen was designed with accessible elements as per React Native recommendations, allows to set a username and choose a background color for the chat screen. The chat screen displays the user's name, message history, a text field, and a menu with additional file options. To develop the required features, I incorporated such libraries as Gifted Chat, Expo Media, Expo Image Picker, Stack Navigation, and others. To allow for an offline use, AsyncStorage was used.</p>
        
        <p className="center r3play-slider-hint fade-in-up-on-scroll">Use the slider controls to click through the testimonials
                        list. <br/>Hover over the testimonials' headings to read more.</p>
        <OwriteCaseSlider/>
        
        <h2 className="fade-in-up-on-scroll r3play-headings">Duration</h2>
        <p className="fade-in-up-on-scroll">1 week</p>
        <h2 className="fade-in-up-on-scroll r3play-headings">Retrospective</h2>
        <h3 className="fade-in-up-on-scroll r3play-headings">Challenges</h3>
        <p className="fade-in-up-on-scroll">The challenges that I faced during this project were more related to the course timeline itself than the actual work on the codebase. As mentioned earlier, since I dedicated extra effort to improving the R3play API and App, it left less time for the end of the Immersion course. As a result, I had to plan my schedule to finish the project on time and concentrate only on the required and recommended features.</p>
        <p className="fade-in-up-on-scroll">Nevertheless, this was my favorite project. I have enjoyed developing the user interface and
                working with database information. I also quickly enhanced my terminal skills,
                understanding of querying the MongoDB NoSQL database, conditional rendering, filtering
                data, customization of React Bootstrap components, as well as time-management and
                prioritization skills. Thankfully, my skilled tutor and
                mentor assisted me during the project and I was able to apply the gained skills later on
                when implementing additional features to the app.</p>
                <p className="fade-in-up-on-scroll">I particularly enjoyed developing the app because I've always wanted to dive into native app development, and React Native was on my checklist. Additionally, it was pleasing to know that the previously gained skills (time management and prioritization) helped me to complete the project very quickly and add new native development skills to my toolbox.</p>
        <h3 className="fade-in-up-on-scroll r3play-headings">Conclusion and Key Takeaways</h3>
        <p className="fade-in-up-on-scroll">The OWrite app was the penultimate project I worked on in the Full-Stack web development course. When it was finished, I focused on further enhancing my development skills, specifically adding another front-end framework and design system to my skillset, Angular and Material UI respectively. The next project required recreating the front end for the R3play API with Angular and Material UI this time.</p>
        <h3 className="fade-in-up-on-scroll r3play-headings">Main takeaways for future projects</h3>
        <ul className="r3play-takeaways">{listItems}</ul>;
        
        <h2 className="video-image-heading fade-in-up-on-scroll fade-in-up-on-scroll">App Preview
        </h2>
        
        
        <iframe title="vimeo-player" src="https://player.vimeo.com/video/937460973?h=cf357bcec4" width="100%" height="560" frameborder="0"    allowfullscreen></iframe>
        <h2 className="technologies-heading fade-in-up-on-scroll">Technologies used/Skills</h2>

           

        <p className="skills-paragraphs"><span>React.js</span>
        </p>
        <p className="skills-paragraphs"><span>
                        React Native</span></p>
        <p className="skills-paragraphs"><span>Google Firebase</span>
        </p>
        <p className="skills-paragraphs"><span>CSS3</span></p>
        <p className="skills-paragraphs"><span>Android Studio</span>
        </p>
        <p className="skills-paragraphs"><span>Responsive design</span>
        </p>
        <p className="skills-paragraphs"><span>Javascript</span>
        </p>
        <p className="skills-paragraphs"><span>Native App Development</span></p>
        <p className="skills-paragraphs"><span>Expo Go</span></p>

        <h2 className="credits r3play-headings text-center fade-in-up-on-scroll">Credits</h2>
        <p className="fade-in-up-on-scroll">Role: <br/>Lead Developer</p>
        <p>Tonny Ntambaazi: <br/><a class="deployed-link fade-in-up-on-scroll" target="_blank"
                        href="https://www.linkedin.com/in/tonny-ntambaazi-97275bb2/">Creative
                        Director</a>
        </p>
        <p>Nizar Triki: <br/><a className="deployed-link fade-in-up-on-scroll" target="_blank"
                        href="https://www.linkedin.com/in/nizartriki/">Software Engineering Manager</a>
        </p>

        <Link className="r3play-external-links" title="Click to open the Owrite App Github repository" to='https://github.com/yevheniiairapetian/owrite' target="_blank" rel="noopener"><FontAwesomeIcon title="Click to read more about the R3play App" className="r3play-fa-code" icon={faCode} /></Link>
                                                  
                                      

        





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
