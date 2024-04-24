import Carousel from 'react-bootstrap/Carousel';
import {Container, Col, Row, Image} from "react-bootstrap";
import { Link } from "react-router-dom";
// import {CarouselCaption} from "react-bootstrap/Carousel";
import React from "react";
import testimonialsPicture1 from "./img/testimonial-1.jpeg";
import testimonialsPicture2 from "./img/testimonial-2.jpeg";
import testimonialsPicture3 from "./img/testimonial-3.jpeg";
import sliderCSS from "./css/slider.css";
import { useTranslation } from 'react-i18next';

export const TestimonialsSlider = () => {
  const { t } = useTranslation();
  return (
    <Container>
        <Row>
            <Col>
            <Carousel className="w-100 m-auto">
      
      <Carousel.Item>
        <Image className="testim-image" src={testimonialsPicture2} roundedCircle circular text="Second slide" />
        <Carousel.Caption className="carousel-caption">
          <h3 className="carousel-heading">{t("testimonial1")}</h3>
          <cite>{t("testimonial1Text")}<Link className="pl-2 text-white more" target="_blank" to="https://www.linkedin.com/in/yevheniiairapetian/" >{t("testimonialsMore")}</Link>
                                                        </cite>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <Image className="testim-image" src={testimonialsPicture1} roundedCircle text="First slide" />
        <Carousel.Caption className="carousel-caption">
          <h3 className="carousel-heading">{t("testimonial2")}</h3>
          <cite>{t("testimonial2Text")}
                                                        <Link className="pl-2 text-white more" target="_blank" to="https://www.linkedin.com/in/yevheniiairapetian/" >{t("testimonialsMore")}</Link>
                                                        </cite>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <Image className="testim-image" src={testimonialsPicture3} roundedCircle text="Third slide" />
        <Carousel.Caption className="carousel-caption">
          <h3 className="carousel-heading">{t("testimonial3")}</h3>
          <cite>{t("testimonial3Text")}
          
          <Link className="pl-2 text-white more" target="_blank" to="https://www.linkedin.com/in/yevheniiairapetian/" >{t("testimonialsMore")}</Link>
          </cite>
        </Carousel.Caption>
      </Carousel.Item>
      
      
    </Carousel>
            </Col>
        </Row>
    </Container>
    
  );
}
