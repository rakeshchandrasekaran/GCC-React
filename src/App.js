import React from 'react';
import './App.css';
import Header from './Header';
import Footer from './Footer';
import { HashRouter, Switch, Route } from 'react-router-dom';
import Home from './Home';
import AboutUs from './AboutUs';
import config from './config/config.json';
import Council from './Council/Council';
// import WorkWithUs from './WorkWithUs/WorkWithUs';


const appRoute = config.appRoute;
const routes = {
  aboutUs: `/about_us`,
  council: `/council`,
  home: `/home`
  // council: `${appRoute}/work_with_us`
};

console.log('.....public url..wthput switch update', process.env.PUBLIC_URL);

const publicUrl = process.env.PUBLIC_URL ? process.env.PUBLIC_URL : '/';

console.log('....publicUrl', publicUrl);
function App() {
  return (
    <div className="App">
      <Header type="main" />
      <Header type="sub-nav" />
      <div className="content-grid">
        <HashRouter basename={publicUrl}>
          <Switch>
            <Route path={routes.council} component={Council} />
            <Route path={routes.aboutUs} component={AboutUs} />
            <Route path={routes.home} component={Home} />
          </Switch>
        </HashRouter>
      </div>
      <Footer/>
    </div>
  );
}

export default App;
