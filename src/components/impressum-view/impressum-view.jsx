import { Navbar, Button, Container, Row, Col, Nav, Image } from "react-bootstrap";

import impressumCSS from './css/impressum.css';
import { Link } from "react-router-dom";

export const ImpressumView = () =>{

    return(
        <Container className="wrapper">
            <Row>
                <Col sm={10} md={10} className="m-auto">
             
            <h1 className="impressum-main-heading mt-5">Impressum</h1>
            <h4>Angaben gemäß § 5 TMG</h4>
            <p>Yevhenii Airapetian</p>
            <p>Maxim-Gorki-Strasse 26</p>
            <p>14974 Ludwigsfelde</p>
            <h4>
                <p><strong>Kontakt:</strong></p>
            </h4>
            <p>Telefon: +4915237795765</p>
            <p>E-Mail: <Link className="impressum-links" to="mailto:contact@yevheniiairapetian.com">contact@yevheniiairapetian.com</Link></p>
            <h4 className="fade-in-up-on-scroll"><strong>Haftungsausschluss: </strong></h4>
            <h4 className="fade-in-up-on-scroll">Haftung für Inhalte</h4>
            <p className="fade-in-up-on-scroll">Die Inhalte unserer Seiten wurden mit größter Sorgfalt erstellt. Für die Richtigkeit, Vollständigkeit und
                Aktualität der Inhalte können wir jedoch keine Gewähr übernehmen. Als Diensteanbieter sind wir gemäß § 7
                Abs.1 TMG für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8
                bis 10 TMG sind wir als Diensteanbieter jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde
                Informationen zu überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige Tätigkeit
                hinweisen. Verpflichtungen zur Entfernung oder Sperrung der Nutzung von Informationen nach den
                allgemeinen Gesetzen bleiben hiervon unberührt. Eine diesbezügliche Haftung ist jedoch erst ab dem
                Zeitpunkt der Kenntnis einer konkreten Rechtsverletzung möglich. Bei Bekanntwerden von entsprechenden
                Rechtsverletzungen werden wir diese Inhalte umgehend entfernen.</p><br/><br/>
            <h4 className="fade-in-up-on-scroll"><strong>Haftung für Links</strong></h4>
            Unser Angebot enthält Links zu externen Webseiten Dritter, auf deren Inhalte wir keinen Einfluss haben.
            Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der verlinkten
            Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich. Die verlinkten Seiten
            wurden zum Zeitpunkt der Verlinkung auf mögliche Rechtsverstöße überprüft. Rechtswidrige Inhalte waren zum
            Zeitpunkt der Verlinkung nicht erkennbar. Eine permanente inhaltliche Kontrolle der verlinkten Seiten ist
            jedoch ohne konkrete Anhaltspunkte einer Rechtsverletzung nicht zumutbar. Bei Bekanntwerden von
            Rechtsverletzungen werden wir derartige Links umgehend entfernen.<br/><br/>
            <h4 className="fade-in-up-on-scroll"><strong>Urheberrecht</strong></h4>
            <p>
            Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen
            Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der
            Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers.
            Downloads und Kopien dieser Seite sind nur für den privaten, nicht kommerziellen Gebrauch gestattet. Soweit
            die Inhalte auf dieser Seite nicht vom Betreiber erstellt wurden, werden die Urheberrechte Dritter beachtet.
            Insbesondere werden Inhalte Dritter als solche gekennzeichnet. Sollten Sie trotzdem auf eine
            Urheberrechtsverletzung aufmerksam werden, bitten wir um einen entsprechenden Hinweis. Bei Bekanntwerden von
            Rechtsverletzungen werden wir derartige Inhalte umgehend entfernen.</p>
            Impressum vom <Link className="impressum-links" to="https://www.impressum-generator.de">Impressum Generator</Link> der <Link
               className="impressum-links" to="https://www.kanzlei-hasselbach.de/">Kanzlei Hasselbach, Rechtsanwälte für Arbeitsrecht und
                Familienrecht</Link>
        
                </Col>
            </Row>
        </Container>


        
          
        )
        }