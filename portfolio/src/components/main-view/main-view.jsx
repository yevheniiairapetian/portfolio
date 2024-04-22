// import { useEffect, useState } from 'react';
// import { ScrollToTop } from '../ScrollToTop/scroll-to-top';
// import { Spin } from '../spinner/spinner';
import { NavigationBar } from '../navigation-bar/navigation-bar';
import { ProjectsView } from '../projects-view/projects-view';
import { Fragment } from 'react';
// import { ScrollButton } from '../scroll-button/ScrollButton';
import { ImpressumView } from '../impressum-view/impressum-view';
import { PageNotFoundView } from '../page-not-found-view/page-not-found-view';
import { Footer } from '../footer/footer';
import { ContactView } from '../contact-view/contact-view';
import { AboutView } from '../about-view/about-view';
import { TestimonialsView } from '../testimonials-view/testimonials-view';
import { Row, Col, InputGroup, Form } from 'react-bootstrap';
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { R3playCaseView } from '../r3play-case-view/r3play-case-view';
import { MyFlixCaseView } from '../myFlix-case-view/myFlix-case-view';
import { MeetCaseView } from '../meet-case-view/meet-case-view';
import { OwriteCaseView } from '../owrite-case-view/owrite-case-view';
import { PokemonCaseView } from '../pokemon-case-view/pokemon-case-view';
import { ToDoCaseView } from '../to-do-case-view/to-do-case-view';

// import { UncontrolledExample } from '../Carousel/carousel';
export const MainView = () => {






  return (
    <>
      <BrowserRouter>
        {/* <ScrollButton />
        <ScrollToTop />  */}
        <NavigationBar


        />
        <Row className="justify-content-center">
          <Routes>




            <Route
              path="/"
              element={
                <>

                  <Col>

                    <AboutView

                    />
                    <Footer />
                  </Col>


                </>
              }

            />




            <Route
              path='/projects'
              element={
                <>

                  <Col>
                    {/* <NavigationBar /> */}
                    <ProjectsView
                        
                      />
                      <Footer /> 
                  </Col>


                </>
              }
            />

<Route
              path='/r3play-case'
              element={
                <>

                  <Col>
                    {/* <NavigationBar /> */}
                    <R3playCaseView
                        
                      />
                      <Footer /> 
                  </Col>


                </>
              }
            />


<Route
              path='/myFlix-case'
              element={
                <>

                  <Col>
                    {/* <NavigationBar /> */}
                    <MyFlixCaseView
                        
                      />
                      <Footer /> 
                  </Col>


                </>
              }
            />


<Route
              path='/meet-case'
              element={
                <>

                  <Col>
                    {/* <NavigationBar /> */}
                    <MeetCaseView
                        
                      />
                      <Footer /> 
                  </Col>


                </>
              }
            />


<Route
              path='/owrite-case'
              element={
                <>

                  <Col>
                    {/* <NavigationBar /> */}
                    <OwriteCaseView
                        
                      />
                      <Footer /> 
                  </Col>


                </>
              }
            />

<Route
              path='/pokemon-case'
              element={
                <>

                  <Col>
                    {/* <NavigationBar /> */}
                    <PokemonCaseView
                        
                      />
                      <Footer /> 
                  </Col>


                </>
              }
            />

<Route
              path='/to-do-case'
              element={
                <>

                  <Col>
                    {/* <NavigationBar /> */}
                    <ToDoCaseView
                        
                      />
                      <Footer /> 
                  </Col>


                </>
              }
            />

            <Route
              path='/testimonials'
              element={
                <>

                  <Col>

                    <TestimonialsView

                    />
                    <Footer />
                  </Col>


                </>
              }
            />


            <Route
              path='/contact'
              element={
                <>

                  <Col>

                    <ContactView

                    />
                    <Footer />
                  </Col>


                </>
              }
            />


            <Route
              path='/impressum'
              element={
                <>

                  <Col>

                    <ImpressumView

                    />
                    <Footer />
                  </Col>


                </>
              }
            />

            <Route
              path="*"
              element={<PageNotFoundView />}
            />

          </Routes>

        </Row>

      </BrowserRouter>

    </>

  )

}



