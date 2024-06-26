
import { Navbar, Container, Row, Col, Nav, Image } from "react-bootstrap";
import pageNotFoundViewCSS from "./css/404.css";
import image404 from './img/404.gif';
import { Link } from "react-router-dom";
import {Footer} from "../footer/footer";
import { useTranslation } from 'react-i18next';

export const PageNotFoundView = () => {
    const { t } = useTranslation();
    return(
        <>
        <Container fluid className="ps-0 pe-0 w-100 wrapper">
           
                <Col xs={10} sm={10} md={10} className=" container-404 text-center m-auto" >
        <Image src={image404} className="picture-404 m-auto w-100 mt-5 mb-5" 
        alt={t("notFoundImageAlt")} 
        />
        <div className="main-information_container m-auto">
            <h1 className="r3play-headings">{t("notFound")}</h1>
            <p className="overview-404">{t("returnHomeParagraph")}<Link className="r3play-headings" to="/">{t("returnHomeLink")}</Link></p>

        </div>
                </Col>
           
            
        </Container>
        <Footer className="footer-404 w-100" />
        </>
    )
}


