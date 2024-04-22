
import { Navbar, Container, Row, Col, Nav, Image } from "react-bootstrap";
import pageNotFoundViewCSS from "./css/404.css";
import image404 from './img/404.gif';
import { Link } from "react-router-dom";
import {Footer} from "../footer/footer";

export const PageNotFoundView = () => {
    return(
        <Container>
            <Row>
                <Col xs={10} sm={10} md={10} className="text-center m-auto" >
        <Image src={image404} className="picture-404 m-auto mt-5 mb-5" alt="An image showing an old TV" />
        <div className="main-information_container">
            <h1>We couldn't find the resource you were looking for.</h1>
            <p className="overview-404">But you can always return to the <Link to="/">home page</Link></p>

        </div>
                </Col>
            </Row>
            <Footer/>
        </Container>
        
    )
}


