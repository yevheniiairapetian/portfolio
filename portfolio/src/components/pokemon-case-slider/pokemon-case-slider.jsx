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


export const PokemonCaseSlider = () => {
  return (
    <Container>
        <Row>
            <Col>
            <Carousel className="w-75 m-auto">
      
      <Carousel.Item>
        <Image className="r3play-image" src={PokemonPicture1} text="Second slide" />
        <Carousel.Caption className="r3play-carousel-caption">
          <h3 className="r3play-carousel-heading">Welcome Message</h3>
          <cite>The Pokemon App main page with a welcome message
                                                        </cite>
                                                        
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <Image className="r3play-image" src={PokemonPicture2} text="First slide" />
        
        <Carousel.Caption className="r3play-carousel-caption">
          <h3 className="r3play-carousel-heading">Pokemon results</h3>
          <cite>The Pokemon App filtered Pokemon results displayed as a list
                                                        
                                                        </cite>
                                                        
                            
                                     
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <Image className="r3play-image" src={PokemonPicture3} text="Third slide" />
        <Carousel.Caption className="r3play-carousel-caption">
          <h3 className="r3play-carousel-heading">Pokemon card</h3>
          <cite>
          The Pokemon card with data that the user can see upon clicking on a Pokemon name
          
          </cite>
          
        </Carousel.Caption>
      </Carousel.Item>
      
      
      

    </Carousel>
            </Col>
        </Row>
    </Container>
    
  );
}
