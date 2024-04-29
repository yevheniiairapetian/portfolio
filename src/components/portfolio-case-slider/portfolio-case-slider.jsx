import Carousel from 'react-bootstrap/Carousel';
import {Container, Row, Col, Nav, Image} from "react-bootstrap";
import { Link } from "react-router-dom";
import { faCircleInfo, faArrowUpRightFromSquare, faCode} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {CarouselCaption} from "react-bootstrap/Carousel";
import {PortfolioCaseView} from "../portfolio-case-view/portfolio-case-view";
import React from "react";
import PortfolioPicture1 from "./img/portfolio-case-hero-image.png";
import PortfolioPicture2 from "./img/portfolio-case-example-2.png";
import PortfolioPicture3 from "./img/portfolio-case-example-3.png";
import sliderCSS from "./css/slider.css";
import { useTranslation } from 'react-i18next';

export const PortfolioCaseSlider = () => {
  const { t } = useTranslation();
  return (
    <Container>
        <Row>
            <Col>
            <Carousel className="w-100 m-auto">
      
      <Carousel.Item>
        <Image className="r3play-image" src={PortfolioPicture1} text="Second slide" />
        <Carousel.Caption className="r3play-carousel-caption">
          <h3 className="r3play-carousel-heading">{t("portfolioSlide1Heading")}</h3>
          <cite>{t("portfolioSlide1Description")}
                                                        </cite>
                                                        
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <Image className="r3play-image" src={PortfolioPicture2} text="First slide" />
        
        <Carousel.Caption className="r3play-carousel-caption">
          <h3 className="r3play-carousel-heading">{t("portfolioSlide2Heading")}</h3>
          <cite>{t("portfolioSlide2Description")}
                                                        
                                                        </cite>
                                                        
                            
                                     
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <Image className="r3play-image" src={PortfolioPicture3} text="Third slide" />
        <Carousel.Caption className="r3play-carousel-caption">
          <h3 className="r3play-carousel-heading">{t("portfolioSlide3Heading")}</h3>
          <cite>
          {t("portfolioSlide3Description")}
          
          </cite>
          
        </Carousel.Caption>
      </Carousel.Item>
      
      
      

    </Carousel>
            </Col>
        </Row>
    </Container>
    
  );
}
