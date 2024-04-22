import Carousel from 'react-bootstrap/Carousel';
import { Container, Row, Col, Nav, Image } from "react-bootstrap";
import { Link } from "react-router-dom";
import { faCircleInfo, faArrowUpRightFromSquare, faCode } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { CarouselCaption } from "react-bootstrap/Carousel";
import { R3playCaseView } from "../r3play-case-view/r3play-case-view";
import React from "react";
import MeetPicture1 from "./img/meet-retrospective-1.png";
import MeetPicture2 from "./img/meet-retrospective-2.png";
import MeetPicture3 from "./img/meet-retrospective-3.png";
import sliderCSS from "./css/slider.css";


export const MeetCaseSlider = () => {
  return (
    <Container>
      <Row>
        <Col>
          <Carousel className="w-100 m-auto">


            <Carousel.Item>
              <Image className="r3play-image" src={MeetPicture1} text="First slide" />

              <Carousel.Caption className="r3play-carousel-caption">
                <h3 className="r3play-carousel-heading">General interface</h3>
                <cite>The Meet App events loaded in the app with the form fields allowing to adjust the results

                </cite>
               </Carousel.Caption>
            </Carousel.Item>


 
            <Carousel.Item>
              <Image className="r3play-image" src={MeetPicture2} text="Third slide" />
              <Carousel.Caption className="r3play-carousel-caption">
                <h3 className="r3play-carousel-heading">Errors and Warnings</h3>
                <cite>
                  The Meet App events screen demonstrated with warnings and errors due to the incorrect data entered

                </cite>

              </Carousel.Caption>
            </Carousel.Item>

                <Carousel.Item>
                  <Image className="r3play-image" src={MeetPicture3} text="Second slide" />
                  <Carousel.Caption className="r3play-carousel-caption">
                    <h3 className="r3play-carousel-heading">Event details</h3>
                    <cite>The Meet App events screen with an events card expanded
                    </cite>

                  </Carousel.Caption>
                </Carousel.Item>

            




          </Carousel>
        </Col>
      </Row>
    </Container>

  );
}
