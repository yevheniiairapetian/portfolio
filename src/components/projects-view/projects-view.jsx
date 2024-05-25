
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
                <Image className="projects-image" src={projectsPicture} alt={t("projectsImageAlt")}
                />


                <p className="slider-overview-paragraph center fade-in-up-on-scroll">{t("projectsViewTip")}</p>

<ProjectsSlider />
                

               
        </div>
</Col>
</Row>
</Container>
        )
        }