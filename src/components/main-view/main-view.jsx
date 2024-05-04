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
import { Row, Col, Image } from 'react-bootstrap';
import '../../../src/App.css';
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { R3playCaseView } from '../r3play-case-view/r3play-case-view';
import { MyFlixCaseView } from '../myFlix-case-view/myFlix-case-view';
import { PortfolioCaseView } from '../portfolio-case-view/portfolio-case-view';
import { MeetCaseView } from '../meet-case-view/meet-case-view';
import { OwriteCaseView } from '../owrite-case-view/owrite-case-view';
import { PokemonCaseView } from '../pokemon-case-view/pokemon-case-view';
import { ToDoCaseView } from '../to-do-case-view/to-do-case-view';
import React from "react";
import ScrollToTop from "./../scroll/scroll-to-top";
import logoDark from './img/logo512-dark.png';
import logoWhite from './img/logo512-white.png';
// import { useEffect } from 'react';
import { ScrollToTopButton } from '../scroll-to-top-button/scroll-to-top-button';

// import { UncontrolledExample } from '../Carousel/carousel';
export const MainView = () => {


  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1600);
  }, []);

  useEffect(() => {
    // 👇️ Scroll to top on page load
    window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
  }, []);


  return (
    <>
      {loading ? (
       
        <div className="loader-container">
            {/* <div className="spinner"></div> */}
            <Image className="logo-pulse" src={logoWhite}/>
        </div>
        
        
      ) : (
        <>
        <NavigationBar


        />
       
          <Routes>




            <Route
              path="/"
              element={
                <>

                  <Col>
                    <AboutView className="content"

                    />
                    <Footer />
           
                  </Col>
                  <ScrollToTop />
<ScrollToTopButton/>

                </>
              }

            />




            <Route
              path='/projects'
              element={
                <>

                  <Col>
                    {/* <NavigationBar /> */}
                    <ProjectsView className="content"
                        
                      />
            
                      <Footer /> 
                  </Col>
                  <ScrollToTop />
<ScrollToTopButton/>
                </>
              }
            />

<Route
              path='/r3play-case'
              element={
                <>

                  <Col>
                    {/* <NavigationBar /> */}
                    <R3playCaseView className="content"
                        
                      />
            
                      <Footer /> 
                  </Col>
                  <ScrollToTop />
<ScrollToTopButton/>
                </>
              }
            />


<Route
              path='/myFlix-case'
              element={
                <>

                  <Col>
                    {/* <NavigationBar /> */}
                    <MyFlixCaseView className="content"
                        
                      />
           
                      <Footer /> 
                  </Col>
                  <ScrollToTop />
<ScrollToTopButton/>
                </>
              }
            />


<Route
              path='/meet-case'
              element={
                <>

                  <Col>
                    {/* <NavigationBar /> */}
                    <MeetCaseView className="content"
                        
                      />
           
                      <Footer /> 
                  </Col>
                  <ScrollToTop />
<ScrollToTopButton/>
                </>
              }
            />


<Route
              path='/owrite-case'
              element={
                <>

                  <Col>
                    {/* <NavigationBar /> */}
                    <OwriteCaseView className="content"
                        
                      />
           
                      <Footer /> 
                  </Col>
                  <ScrollToTop />
<ScrollToTopButton/>
                </>
              }
            />

<Route
              path='/pokemon-case'
              element={
                <>

                  <Col>
                    {/* <NavigationBar /> */}
                    <PokemonCaseView className="content"
                        
                      />
            
                      <Footer /> 
                  </Col>
                  <ScrollToTop />
<ScrollToTopButton/>
                </>
              }
            />

<Route
              path='/to-do-case'
              element={
                <>

                  <Col>
                 
                    {/* <NavigationBar /> */}
                    <ToDoCaseView className="content"
                        
                      />
           
                      <Footer /> 
                  </Col>
                  <ScrollToTop />
<ScrollToTopButton/>
                </>
              }
            />


<Route
              path='/portfolio-case'
              element={
                <>

                  <Col>
                
                    {/* <NavigationBar /> */}
                    <PortfolioCaseView className="content"
                        
                      />
           
                      <Footer /> 
                  </Col>
                  <ScrollToTop />
<ScrollToTopButton/>
                </>
              }
            />

            <Route
              path='/testimonials'
              element={
                <>

                  <Col>
                    <TestimonialsView className="content"

                    />
           
                    <Footer />
                  </Col>

                  <ScrollToTop />
                  <ScrollToTopButton/>
                </>
              }
            />


            <Route
              path='/contact'
              element={
                <>

                  <Col>
                    <ContactView className="content"

                    />
           
                    <Footer />
                  </Col>

                  <ScrollToTop />
                  <ScrollToTopButton/>
                </>
              }
            />


            <Route
              path='/impressum'
              element={
                <>

                  <Col>
                    <ImpressumView className="content"

                    />
            
                    <Footer />
                  </Col>
                  <ScrollToTop />
<ScrollToTopButton/>



                </>
              }
            />

            <Route
        
              path="*"
              
              element={
              <>
              <PageNotFoundView />
          
              <ScrollToTop />
<ScrollToTopButton/>
            
              </>
            }
            
            />
            
            
          </Routes>
         
        
          
          </>
      )}
    </>
  );
};



