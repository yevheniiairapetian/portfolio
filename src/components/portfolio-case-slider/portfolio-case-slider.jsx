import Carousel from 'react-bootstrap/Carousel';
import {Container, Row, Col, Nav, Image} from "react-bootstrap";
import { Link } from "react-router-dom";
import { faPlus} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {CarouselCaption} from "react-bootstrap/Carousel";
import {PortfolioCaseView} from "../portfolio-case-view/portfolio-case-view";
import React from "react";
import PortfolioLight from "./img/portfolio-light.png";
import PortfolioDark from "./img/portfolio-dark.png";
import PortfolioLocalized from "./img/portfolio-localized.png";
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
      
        <Image className="r3play-image" src={PortfolioLight} text="Second slide" />
        <Carousel.Caption className="r3play-carousel-caption">
          <h3 className="r3play-carousel-heading">{t("portfolioSlide1Heading")}</h3>
          <cite>{t("portfolioSlide1Description")}
                                                        </cite>
                                                        
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <Image className="r3play-image" src={PortfolioDark} text="First slide" />
        
        <Carousel.Caption className="r3play-carousel-caption">
          <h3 className="r3play-carousel-heading">{t("portfolioSlide2Heading")}</h3>
          <cite>{t("portfolioSlide2Description")}
                                                        
                                                        </cite>
                                                        
                            
                                     
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <Image className="r3play-image" src={PortfolioLocalized} text="Third slide" />
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
