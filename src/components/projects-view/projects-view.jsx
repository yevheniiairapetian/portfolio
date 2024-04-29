
import { Navbar, Container, Row, Col, Nav, Image } from "react-bootstrap";
import { ProjectsSlider } from "../projects-slider/projects-slider";
import { useTranslation } from 'react-i18next';
import projectsPicture from "./img/projects.jpg";
import projectsViewCSS from "./css/projectsview.css";
export const ProjectsView = () => {
        const { t } = useTranslation();
 return(
<Container className="wrapper">
        <Row>
            <Col>
<div className="app-container" onclick="hideMenu(); closeSidebar(); closeMenuDownloadLinks()">
                <h1 className="projects-main-heading mb-4">{t("projects")}</h1>
                <p className="projects-overview-paragraph">{t("projectsInfo")}</p>
                <Image className="projects-image" src={projectsPicture} alt="An image showing a team working" />


                <p className="slider-overview-paragraph center fade-in-up-on-scroll">{t("projectsViewTip")}</p>

                
                {/* <div class="slider-outer-wrapper fade-in-up-on-scroll">
                        <div class="slider-container">
                                <div class="testimonials-slides">

                                       
                                        <div class="testimonial-slides-info">
                                                <cite class="testimonial-cite">I had the opportunity to mentor Yevhenii
                                                        throughout his web development training at CareerFoundry.
                                                        Yevhenii's self-sufficiency, rapid grasp of concepts, and
                                                        meticulousness stood out throughout the six-month journey. He
                                                        demonstrated exceptional proficiency in both front-end and
                                                        back-end development. Despite the challenging nature of the
                                                        course, Yevhenii could complete it on time, which is a testament
                                                        to his dedication and hard work. I wholeheartedly endorse
                                                        Yevhenii for a web developer position.

                                                </cite>
                                                <p>Nizar Triki, Software Engineering Manager chez Expensya</p>
                                                <Image src="./img/testimonial-1.jpeg?v=9314" class="testimonial-picture-1"
                                        alt="A portrait photo showing a man" />
                                        </div>
                                        
                                       
                                </div>
                                <div class="testimonials-slides">

                                        
                                        <div class="testimonial-slides-info">
                                                <cite class="testimonial-cite">Yevhenii is someone that is so easy to
                                                        collaborate with. He always strives for excellence. Every time I
                                                        give him feedback he would be willing to listen and adjust the
                                                        submission. His skills in Web Dev are also very impressive,
                                                        which is why he has been able to complete many projects in his
                                                        portfolio. I genuinely believe that Yevhenii will be a valuable
                                                        asset to any company.

                                                </cite>
                                                <p>Maya Septriana, Career Consultant, Assisted 100+ of European clients
                                                        in career transition and career preparation</p>
                                                        <Image src="./img/testimonial-2.jpeg?v=9315" class="testimonial-picture-2"
                                        alt="A portrait photo showing a woman" />
                                        </div>
                                        
                                        

                                </div>

                                <div class="testimonials-slides">

                                        
                                        <div class="testimonial-slides-info">
                                                <cite class="testimonial-cite">During our 6-month Fullstack bootcamp, Yevhenii consistently showed a positive and friendly demeanor. He approached tasks with determination, and his willingness to seek solutions online demonstrated resourcefulness. A great team player

                                                </cite>
                                                <p>Dejan Gogov, Web Developer, Wild Code School</p>
                                                <Image src="./img/testimonial-3.jpeg?v=9315" class="testimonial-picture-2"
                                        alt="A portrait photo showing a man" />
                                        </div>
                                        
                                        

                                </div>

                        </div>
                </div> */}

<ProjectsSlider />
                

               
        </div>
</Col>
</Row>
</Container>
        )
        }