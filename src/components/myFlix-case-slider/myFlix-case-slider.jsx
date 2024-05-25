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
import { useTranslation } from 'react-i18next';

export const MyFlixCaseSlider = () => {
  const { t } = useTranslation();
  return (
    <Container>
        <Row>
            <Col>
            <Carousel className="w-100 m-auto">
      
      <Carousel.Item>
        <Image alt={t("caseSliderAlt")}
        className="r3play-image" src={MyFlixPicture1} text="Second slide" />
        <Carousel.Caption className="r3play-carousel-caption">
          <h3 className="r3play-carousel-heading">{t("myFlixSlide1Heading")}</h3>
          <cite>{t("myFlixSlide1Description")}
                                                        </cite>
                                                        
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <Image alt={t("caseSliderAlt")}
        className="r3play-image" src={MyFlixPicture2} text="First slide" />
        
        <Carousel.Caption className="r3play-carousel-caption">
          <h3 className="r3play-carousel-heading">{t("myFlixSlide2Heading")}</h3>
          <cite>{t("myFlixSlide2Description")}
                                                        
                                                        </cite>
                                                        
                            
                                     
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <Image alt={t("caseSliderAlt")}
        className="r3play-image" src={MyFlixPicture3} text="Third slide" />
        <Carousel.Caption className="r3play-carousel-caption">
          <h3 className="r3play-carousel-heading">{t("myFlixSlide3Heading")}</h3>
          <cite>
          {t("myFlixSlide3Description")}
          
          </cite>
          
        </Carousel.Caption>
      </Carousel.Item>
      
      
      

    </Carousel>
            </Col>
        </Row>
    </Container>
    
  );
}
