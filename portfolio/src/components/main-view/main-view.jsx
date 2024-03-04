// import { useEffect, useState } from 'react';
// import { ScrollToTop } from '../ScrollToTop/scroll-to-top';
// import { Spin } from '../spinner/spinner';
import { NavigationBar } from '../navigation-bar/navigation-bar';
import { ProjectsView } from '../projects-view/projects-view';
import { Fragment } from 'react';
// import { ScrollButton } from '../scroll-button/ScrollButton';

import { Footer } from '../footer/footer';
import { ContactView } from '../contact-view/contact-view';
import { AboutView } from '../about-view/about-view';
import { TestimonialsView } from '../testimonials-view/testimonials-view';
import { Row, Col, InputGroup, Form } from 'react-bootstrap';
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
// import { UncontrolledExample } from '../Carousel/carousel';
export const MainView = () => {




  

  return (
    <>
      <BrowserRouter>
        {/* <ScrollButton /> */}
        {/* <ScrollToTop /> */}
        <NavigationBar
          

        />
        <Row className="justify-content-center">
          <Routes>
            
            


          <Route
              path="/"
              element={
                <>
                  
                    <Col>
                    <NavigationBar />
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
                    <NavigationBar />
                      <ProjectsView
                        
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
                    <NavigationBar />
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
                    <NavigationBar />
                      <ContactView
                        
                      />
                      <Footer />
                    </Col>
                  
                
                </>
              }
            />

          </Routes>

        </Row>

      </BrowserRouter>

    </>

  )

}

         

