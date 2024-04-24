
import { Navbar, Container, Row, Col, Nav, Image } from "react-bootstrap";
import { TestimonialsSlider } from "../testimonials-slider/testimonials-slider";
import feedbackPicture from "./img/feedback.jpg";
import testimonialsViewCSS from "./css/testimonialsview.css";
import { useTranslation } from 'react-i18next';
export const TestimonialsView = () => {
        const { t } = useTranslation();
 return(
<Container>
        <Row>
            <Col>
<div className="app-container" onclick="hideMenu(); closeSidebar(); closeMenuDownloadLinks()">
                <h1 className="projects-main-heading mb-4">{t("testimonials")}</h1>
                <p className="projects-overview-paragraph">{t("wordOfMouth")}</p>
                <Image className="projects-image" src={feedbackPicture} alt="An image showing a team working" />


                <p className="slider-overview-paragraph center fade-in-up-on-scroll">{t("testimonialsViewTip")}</p>

<TestimonialsSlider />
                

               
        </div>
</Col>
</Row>
</Container>
        )
        }