import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {MainView} from '../src/components/main-view/main-view';
// import App from './App';
import reportWebVitals from './reportWebVitals';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { HashRouter } from 'react-router-dom';
import "./i18n";
import { Suspense } from "react";
import { faArrowUpRightFromSquare, faSpinner} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Row, Col } from 'react-bootstrap';
import CookieConsent from "react-cookie-consent";


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <HashRouter>
    <Suspense fallback={<div className="m-auto text-center">Loading...<FontAwesomeIcon icon={faSpinner} spinPulse style={{"--fa-primary-color": "#183153", "--fa-secondary-color": "#418fde"}} /></div>}></Suspense>
    <MainView />
    <CookieConsent 
    expires={365}
    >

      This site uses cookies and users' personal data. Read more about the <a target="_blank" href="https://www.freeprivacypolicy.com/live/13aaa5dd-c830-46ce-8e8a-010efe1a66f1">Cookie</a> and <a target="_blank" href="https://www.freeprivacypolicy.com/live/72425419-22ef-4dd3-893a-0e012dba1688">Privacy</a> policies</CookieConsent>
  </HashRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
