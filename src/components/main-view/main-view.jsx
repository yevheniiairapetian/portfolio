import { useEffect, useState } from 'react';
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
import { Row, Col } from 'react-bootstrap';
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { R3playCaseView } from '../r3play-case-view/r3play-case-view';
import { MyFlixCaseView } from '../myFlix-case-view/myFlix-case-view';
import { MeetCaseView } from '../meet-case-view/meet-case-view';
import { OwriteCaseView } from '../owrite-case-view/owrite-case-view';
import { PokemonCaseView } from '../pokemon-case-view/pokemon-case-view';
import { ToDoCaseView } from '../to-do-case-view/to-do-case-view';
import React from "react";
import ScrollToTop from "./../scroll/scroll-to-top";
// import { useEffect } from 'react';

// import { UncontrolledExample } from '../Carousel/carousel';
export const MainView = () => {



  useEffect(() => {
    // 👇️ Scroll to top on page load
    window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
  }, []);


  return (
    <>
      
        {/* <ScrollButton />
        <ScrollToTop />  */}
        
        <NavigationBar


        />
       
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
                  <ScrollToTop />

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
                  <ScrollToTop />

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
                  <ScrollToTop />

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
                  <ScrollToTop />

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
                  <ScrollToTop />

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
                  <ScrollToTop />

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
                  <ScrollToTop />

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
                  <ScrollToTop />

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

                  <ScrollToTop />
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

                  <ScrollToTop />
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
                  <ScrollToTop />




                </>
              }
            />

            <Route
        
              path="*"
              
              element={
              <>
              <PageNotFoundView />
              <ScrollToTop />

            
              </>
            }
            
            />
            
            
          </Routes>
         

      

    </>

  )

}



