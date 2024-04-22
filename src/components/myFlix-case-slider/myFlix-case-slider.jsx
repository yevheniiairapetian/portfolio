import Carousel from 'react-bootstrap/Carousel';
import {Container, Row, Col, Nav, Image} from "react-bootstrap";
import { Link } from "react-router-dom";
import { faCircleInfo, faArrowUpRightFromSquare, faCode} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {CarouselCaption} from "react-bootstrap/Carousel";
import {R3playCaseView} from "../r3play-case-view/r3play-case-view";
import React from "react";
import MyFlixPicture1 from "./img/myFlix-retrospective-1.png";
import MyFlixPicture2 from "./img/myFlix-retrospective-2.png";
import MyFlixPicture3 from "./img/myFlix-retrospective-3.png";
import sliderCSS from "./css/slider.css";


export const MyFlixCaseSlider = () => {
  return (
    <Container>
        <Row>
            <Col>
            <Carousel className="w-75 m-auto">
      
      <Carousel.Item>
        <Image className="r3play-image" src={MyFlixPicture1} text="Second slide" />
        <Carousel.Caption className="r3play-carousel-caption">
          <h3 className="r3play-carousel-heading">Login View</h3>
          <cite>The MyFlix App login view where users can log in to the app
                                                        </cite>
                                                        
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <Image className="r3play-image" src={MyFlixPicture2} text="First slide" />
        
        <Carousel.Caption className="r3play-carousel-caption">
          <h3 className="r3play-carousel-heading">Movie View</h3>
          <cite>The MyFlix App movie view that displays a list of movies available in the app
                                                        
                                                        </cite>
                                                        
                            
                                     
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <Image className="r3play-image" src={MyFlixPicture3} text="Third slide" />
        <Carousel.Caption className="r3play-carousel-caption">
          <h3 className="r3play-carousel-heading">Profile View</h3>
          <cite>
          The MyFlix App profile view where users can alter their account information
          
          </cite>
          
        </Carousel.Caption>
      </Carousel.Item>
      
      
      

    </Carousel>
            </Col>
        </Row>
    </Container>
    
  );
}
