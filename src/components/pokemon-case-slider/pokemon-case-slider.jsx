import Carousel from 'react-bootstrap/Carousel';
import {Container, Row, Col, Nav, Image} from "react-bootstrap";
import { Link } from "react-router-dom";
import { faCircleInfo, faArrowUpRightFromSquare, faCode} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {CarouselCaption} from "react-bootstrap/Carousel";
import {R3playCaseView} from "../r3play-case-view/r3play-case-view";
import React from "react";
import PokemonPicture1 from "./img/pokemon-case-retrospective-image-1.png";
import PokemonPicture2 from "./img/pokemon-case-retrospective-image-2.png";
import PokemonPicture3 from "./img/pokemon-case-retrospective-image-3.png";
import sliderCSS from "./css/slider.css";
import { useTranslation } from 'react-i18next';

export const PokemonCaseSlider = () => {
  const { t } = useTranslation();
  return (
    <Container>
        <Row>
            <Col>
            <Carousel className="w-100 m-auto">
      
      <Carousel.Item>
        <Image alt={t("caseSliderAlt")}
        className="r3play-image" src={PokemonPicture1} text="Second slide" />
        <Carousel.Caption className="r3play-carousel-caption">
          <h3 className="r3play-carousel-heading">{t("pokemonSlide1Heading")}</h3>
          <cite>{t("pokemonSlide1Description")}
                                                        </cite>
                                                        
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <Image alt={t("caseSliderAlt")}
        className="r3play-image" src={PokemonPicture2} text="First slide" />
        
        <Carousel.Caption className="r3play-carousel-caption">
          <h3 className="r3play-carousel-heading">{t("pokemonSlide2Heading")}</h3>
          <cite>{t("pokemonSlide2Description")}
                                                        
                                                        </cite>
                                                        
                            
                                     
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <Image alt={t("caseSliderAlt")}
        className="r3play-image" src={PokemonPicture3} text="Third slide" />
        <Carousel.Caption className="r3play-carousel-caption">
          <h3 className="r3play-carousel-heading">{t("pokemonSlide3Heading")}</h3>
          <cite>{t("pokemonSlide3Description")}
          
          
          </cite>
          
        </Carousel.Caption>
      </Carousel.Item>
      
      
      

    </Carousel>
            </Col>
        </Row>
    </Container>
    
  );
}
