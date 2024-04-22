import Carousel from 'react-bootstrap/Carousel';
import {Container, Row, Col, Nav, Image} from "react-bootstrap";
import { Link } from "react-router-dom";
import { faCircleInfo, faArrowUpRightFromSquare, faCode} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {CarouselCaption} from "react-bootstrap/Carousel";
import {R3playCaseView} from "../r3play-case-view/r3play-case-view";
import React from "react";
import ToDoPicture1 from "./img/to-do-case-retrospective-1.png";
import ToDoPicture2 from "./img/to-do-case-retrospective-2.png";
import ToDoPicture3 from "./img/to-do-case-retrospective-3.png";
import sliderCSS from "./css/slider.css";


export const ToDoCaseSlider = () => {
  return (
    <Container>
        <Row>
            <Col>
            <Carousel className="w-75 m-auto">
      
      <Carousel.Item>
        <Image className="r3play-image" src={ToDoPicture1} text="Second slide" />
        <Carousel.Caption className="r3play-carousel-caption">
          <h3 className="r3play-carousel-heading">Initial View</h3>
          <cite>The To Do App initial view where users view tips on how to use the app and add a first list
                                                        </cite>
                                                        
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <Image className="r3play-image" src={ToDoPicture2} text="First slide" />
        
        <Carousel.Caption className="r3play-carousel-caption">
          <h3 className="r3play-carousel-heading">New List</h3>
          <cite>A new list of to-dos have been added
                                                        
                                                        </cite>
                                                        
                            
                                     
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <Image className="r3play-image" src={ToDoPicture3} text="Third slide" />
        <Carousel.Caption className="r3play-carousel-caption">
          <h3 className="r3play-carousel-heading">Notification</h3>
          <cite>
          When the user leaves the input fieled blank and tries to add a new task, an notification message appears
          
          </cite>
          
        </Carousel.Caption>
      </Carousel.Item>
      
      
      

    </Carousel>
            </Col>
        </Row>
    </Container>
    
  );
}
