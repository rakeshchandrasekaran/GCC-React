import React from 'react';
import './App.css';
import Header from './Header';
import { HashRouter, Switch, Route } from 'react-router-dom';
import Home1 from "./Home1";
import AboutUs from './AboutUs';
import Council from './Council/Council';
import Projects from './Projects/Projects';
import ProjectsNew from "./ProjectsNew";
import ContactUs from './ContactUs/ContactUs';
import Events from './Events/Events';
import WorkWithUs from './WorkWithUs/WorkWithUs';
import FAQ from "./Faq";
import FooterSection from "./FooterSection";
import AboutUsNew from "./AboutUsNew";

const routes = {
  aboutUs: `/about_us`,
  council: `/council`,
  projects: `/projects`,
  contactUs: `/contact_us`,
  faq: `/faq`,
  events: `/events`,
  workWithUs: `/workWithUs`,
  home: `/`
};


const publicUrl = process.env.PUBLIC_URL ? process.env.PUBLIC_URL : '/';

function App() {
  return (
    <div className="App">
      <Header type="main" />
      <Header type="sub-nav" />
      <div className="content-grid">
        <HashRouter basename={publicUrl}>
          <Switch>
            <Route path={routes.workWithUs} component={WorkWithUs} />
            <Route path={routes.events} component={Events} />
            <Route path={routes.faq} component={FAQ} />
            <Route path={routes.contactUs} component={ContactUs} />
            <Route path={routes.projects} component={ProjectsNew} />
            <Route path={routes.council} component={Council} />
            <Route path={routes.aboutUs} component={AboutUsNew} />
            <Route path={routes.home} component={Home1} />
          </Switch>
        </HashRouter>
      </div>
      <FooterSection />
    </div>
  );
}

export default App;
