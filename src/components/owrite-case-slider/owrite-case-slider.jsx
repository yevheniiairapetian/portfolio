import Carousel from 'react-bootstrap/Carousel';
import {Container, Row, Col, Nav, Image} from "react-bootstrap";
import { Link } from "react-router-dom";
import { faCircleInfo, faArrowUpRightFromSquare, faCode} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {CarouselCaption} from "react-bootstrap/Carousel";
import {OwriteCaseView} from "../owrite-case-view/owrite-case-view";
import React from "react";
import OwritePicture1 from "./img/owrite-case-hero-image-1.png";
import OwritePicture2 from "./img/owrite-case-hero-image-2.png";
import sliderCSS from "./css/slider.css";


export const OwriteCaseSlider = () => {
  return (
    <Container>
        <Row>
            <Col>
            <Carousel className="w-100 m-auto">
      
      <Carousel.Item>
        <Image className="r3play-image" src={OwritePicture2} text="Second slide" />
        <Carousel.Caption className="r3play-carousel-caption">
          <h3 className="r3play-carousel-heading">Welcome Screen</h3>
          <cite>The Owrite App Welcome screen where users can pick a theme and enter the chat room
                                                        </cite>
                                                        
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <Image className="r3play-image" src={OwritePicture1} text="First slide" />
        
        <Carousel.Caption className="r3play-carousel-caption">
          <h3 className="r3play-carousel-heading">Chat Screen</h3>
          <cite>The Owrite App Chat screen where users can chat, including sending audio and image files
                                                        
                                                        </cite>
                                                        
                            
                                     
        </Carousel.Caption>
      </Carousel.Item>
  
      
      

    </Carousel>
            </Col>
        </Row>
    </Container>
    
  );
}
