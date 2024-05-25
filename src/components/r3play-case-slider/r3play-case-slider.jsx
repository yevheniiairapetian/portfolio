import Carousel from 'react-bootstrap/Carousel';
import {Container, Row, Col, Nav, Image} from "react-bootstrap";
import { Link } from "react-router-dom";
import { faCircleInfo, faArrowUpRightFromSquare, faCode} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {CarouselCaption} from "react-bootstrap/Carousel";
import {R3playCaseView} from "../r3play-case-view/r3play-case-view";
import React from "react";
import projectsPicture1 from "./img/r3play-api-hero-image.png";
import projectsPicture2 from "./img/r3play-hero-image.png";
import projectsPicture3 from "./img/myFlix-hero-image.png";
import projectsPicture4 from "./img/meet-app-hero-image.png";
import projectsPicture5 from "./img/owrite-case-hero-image-2.png";
import projectsPicture6 from "./img/pokemon-hero-image.png";
import projectsPicture7 from "./img/to-do-hero-image.png";
import R3playPicture1 from "./img/r3play-case-example-1.png";
import R3playPicture2 from "./img/r3play-case-example-2.png";
import R3playPicture3 from "./img/r3play-case-example-3.png";
import sliderCSS from "./css/slider.css";
import { useTranslation } from 'react-i18next';

export const R3playCaseSlider = () => {
  const { t } = useTranslation();
  return (
    <Container>
        <Row>
            <Col>
            <Carousel className="w-100 m-auto">
      
      <Carousel.Item>
        <Image alt={t("caseSliderAlt")}
        className="r3play-image" src={R3playPicture1} text="Second slide" />
        <Carousel.Caption className="r3play-carousel-caption">
          <h3 className="r3play-carousel-heading">{t("r3playSlide1Heading")}</h3>
          <cite>{t("r3playSlide1Description")}
                                                        </cite>
                                                        
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <Image alt={t("caseSliderAlt")}
        className="r3play-image" src={R3playPicture2} text="First slide" />
        
        <Carousel.Caption className="r3play-carousel-caption">
          <h3 className="r3play-carousel-heading">{t("r3playSlide2Heading")}</h3>
          <cite>{t("r3playSlide2Description")}
                                                        
                                                        </cite>
                                                        
                            
                                     
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <Image alt={t("caseSliderAlt")}
        className="r3play-image" src={R3playPicture3} text="Third slide" />
        <Carousel.Caption className="r3play-carousel-caption">
          <h3 className="r3play-carousel-heading">{t("r3playSlide3Heading")}</h3>
          <cite>{t("r3playSlide3Description")}
          
          
          </cite>
          
        </Carousel.Caption>
      </Carousel.Item>
      
      
      

    </Carousel>
            </Col>
        </Row>
    </Container>
    
  );
}
