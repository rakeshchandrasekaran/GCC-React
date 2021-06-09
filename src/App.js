import React from 'react';
import './App.css';
import Header from './Header';
import { HashRouter, Switch, Route } from 'react-router-dom';
import Home from './Home';
import AboutUs from './AboutUs';
import Council from './Council/Council';
import Projects from './Projects/Projects';

// import WorkWithUs from './WorkWithUs/WorkWithUs';


const routes = {
  aboutUs: `/about_us`,
  council: `/council`,
  projects: `/projects`,
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
            <Route path={routes.projects} component={Projects} />
            <Route path={routes.council} component={Council} />
            <Route path={routes.aboutUs} component={AboutUs} />
            <Route path={routes.home} component={Home} />
          </Switch>
        </HashRouter>
      </div>
      
    </div>
  );
}

export default App;
