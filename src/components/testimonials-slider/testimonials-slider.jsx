import Carousel from 'react-bootstrap/Carousel';
import {Container, Col, Row, Image} from "react-bootstrap";
import { Link } from "react-router-dom";
// import {CarouselCaption} from "react-bootstrap/Carousel";
import React from "react";
import testimonialsPicture1 from "./img/testimonial-1.jpeg";
import testimonialsPicture2 from "./img/testimonial-2.jpeg";
import testimonialsPicture3 from "./img/testimonial-3.jpeg";
import sliderCSS from "./css/slider.css";


export const TestimonialsSlider = () => {
  return (
    <Container>
        <Row>
            <Col>
            <Carousel className="w-100 m-auto">
      
      <Carousel.Item>
        <Image className="testim-image" src={testimonialsPicture2} roundedCircle circular text="Second slide" />
        <Carousel.Caption className="carousel-caption">
          <h3 className="carousel-heading">Maya Septriana, Career Consultant, CareerFoundry</h3>
          <cite>Yevhenii is someone that is so easy to
                                                        collaborate with. He always strives for excellence. Every time I
                                                        give him feedback he would be willing to listen and adjust the
                                                        submission...<Link className="pl-2 text-white more" target="_blank" to="https://www.linkedin.com/in/yevheniiairapetian/" >More</Link>
                                                        </cite>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <Image className="testim-image" src={testimonialsPicture1} roundedCircle text="First slide" />
        <Carousel.Caption className="carousel-caption">
          <h3 className="carousel-heading">Nizar Triki, Software Engineering Manager chez Expensya</h3>
          <cite>I had the opportunity to mentor Yevhenii
                                                        throughout his web development training at CareerFoundry.
                                                        Yevhenii's self-sufficiency, rapid grasp of concepts...
                                                        <Link className="pl-2 text-white more" target="_blank" to="https://www.linkedin.com/in/yevheniiairapetian/" >More</Link>
                                                        </cite>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <Image className="testim-image" src={testimonialsPicture3} roundedCircle text="Third slide" />
        <Carousel.Caption className="carousel-caption">
          <h3 className="carousel-heading">Dejan Gogov, Web Developer, Wild Code School</h3>
          <cite>
          During our 6-month Fullstack bootcamp, Yevhenii consistently showed a positive and friendly demeanor. He approached tasks with determination...
          <Link className="pl-2 text-white more" target="_blank" to="https://www.linkedin.com/in/yevheniiairapetian/" >More</Link>
          </cite>
        </Carousel.Caption>
      </Carousel.Item>
      
      
    </Carousel>
            </Col>
        </Row>
    </Container>
    
  );
}
