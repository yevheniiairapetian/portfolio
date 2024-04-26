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
import { useTranslation } from 'react-i18next';

export const OwriteCaseSlider = () => {
  const { t } = useTranslation();
  return (
    <Container>
        <Row>
            <Col>
            <Carousel className="w-100 m-auto">
      
      <Carousel.Item>
        <Image className="r3play-image" src={OwritePicture2} text="Second slide" />
        <Carousel.Caption className="r3play-carousel-caption">
          <h3 className="r3play-carousel-heading">{t("owriteSlide1Heading")}</h3>
          <cite>{t("owriteSlide1Description")}
                                                        </cite>
                                                        
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <Image className="r3play-image" src={OwritePicture1} text="First slide" />
        
        <Carousel.Caption className="r3play-carousel-caption">
          <h3 className="r3play-carousel-heading">{t("owriteSlide2Heading")}</h3>
          <cite>{t("owriteSlide2Description")}
                                                        
                                                        </cite>
                                                        
                            
                                     
        </Carousel.Caption>
      </Carousel.Item>
  
      
      

    </Carousel>
            </Col>
        </Row>
    </Container>
    
  );
}
