import React from 'react';
import './App.css';
import Header from './Header';
import Footer from './Footer';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './Home';
import AboutUs from './AboutUs';
import config from './config/config.json';
import Council from './Council/Council';
// import WorkWithUs from './WorkWithUs/WorkWithUs';


const appRoute = config.appRoute;
const routes = {
  aboutUs: `/about_us`,
  council: `/council`
  // council: `${appRoute}/work_with_us`
};

function App() {
  return (
    <div className="App">
      <Header type="main" />
      <Header type="sub-nav" />
      <div className="content-grid">
        <BrowserRouter basename={process.env.PUBLIC_URL+ `/`}>
          <Switch>
            <Route path={routes.council} component={Council} />
            <Route path={routes.aboutUs} component={AboutUs} />
            <Route path='/home' component={Home} />
          </Switch>
        </BrowserRouter>
      </div>
      <Footer/>
    </div>
  );
}

export default App;
