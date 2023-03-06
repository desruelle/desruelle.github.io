import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import AppHeader from './AppHeader';
import AppFooter from './AppFooter';
import ResumePage from './ResumePage';
import UnderConstructionPage from './UnderConstructionPage';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AppHeader id="header"/>
    <section id="resume">
      <ResumePage/>
    </section>
    <section id="uct">
      <UnderConstructionPage/>
    </section>
    <AppFooter id="footer"/>
  </React.StrictMode>
);
