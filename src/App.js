import React from 'react';
import './App.css';
import Header from './Header';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './Home';
import AboutUs from './AboutUs';
import config from './config/config.json';
import Faq from "./Faq";


const appRoute = config.appRoute;
const routes = {
  aboutUs: `${appRoute}/about_us`,
  faq: `${appRoute}/faq`
};

function App() {
  return (
    <div className="App">
      <Header type="main"/>
      <Header type="sub-nav"/>
      <div className="content-grid">
        <BrowserRouter>
          <Switch>
            <Route path={routes.aboutUs} component={AboutUs} />
            <Route path={routes.faq} component={Faq} />
            <Route path='/' component={Home} />
          </Switch>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
