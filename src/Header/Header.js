import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button'
import mainLogo from '../images/main_logo.svg';
import facebookLogo from '../images/facebook-icon.png';
import instaLogo from '../images/instagram.png';
import youtubeLogo from '../images/youtube.png';
import twitterLogo from '../images/twitter.png';
import './Header.css';
import config from '../config/config';

const appRoute = config.appRoute;

const Header = ({type}) => {
  {
    return type === 'main' ? (
      <Navbar collapseOnSelect expand="lg" bg="light" variant="light" fixed="top" className="main-nav-bar">
        <Navbar.Brand href="#home">
          <img
            alt="Main Logo"
            src={mainLogo}
            width="35"
            height="50"
            className="d-inline-block align-top"
          />{''}
          <section className="main-logo-text">
            <span>பெருநகர சென்னை மாநகராட்சி</span>
            <span>Greater Chennai Coporation</span>
          </section>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <div className="font-size-chooser">
            <Button variant="dark" className="font-size-small">A</Button>
            <Button variant="dark" className="font-size-medium">A</Button>
            <Button variant="dark" className="font-size-large">A+</Button>
          </div>
          <div className="language-buttons">
            <Button variant="dark" className="english-button">English</Button>
            <Button variant="dark" className="tamil-button">தமிழ்</Button>
          </div>
          <div className="social-media-links">
            <Navbar.Brand href="#facebook">
              <img
                alt="faceboook"
                src={facebookLogo}
                width="30"
                height="30"
                className="d-inline-block align-top"
              />
            </Navbar.Brand>
            <Navbar.Brand href="#instagram">
              <img
                alt="instagram"
                src={instaLogo}
                width="30"
                height="30"
                className="d-inline-block align-top"
              />
            </Navbar.Brand>
            <Navbar.Brand href="#twitter">
              <img
                alt="twitter"
                src={twitterLogo}
                width="30"
                height="30"
                className="d-inline-block align-top"
              />
            </Navbar.Brand>
            <Navbar.Brand href="#youtube">
              <img
                alt="youtube"
                src={youtubeLogo}
                width="30"
                height="30"
                className="d-inline-block align-top"
              />
            </Navbar.Brand>
          </div>

        </Navbar.Collapse>
      </Navbar>
      ) :
      (
        <Navbar collapseOnSelect expand="lg" bg="light" variant="light" fixed="top" className="sub-nav-bar">
          <Navbar.Brand href="#home">
            <h2 className="sub-nav-logo">C-Hub</h2>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <div className="sub-nav-links">
              <Navbar.Brand href={appRoute}>
                <Button variant="warning">Home</Button>
              </Navbar.Brand>
              <Navbar.Brand href={`${appRoute}/about_us`}>
                <Button variant="warning">About Us</Button>
              </Navbar.Brand>
              <Navbar.Brand href="#twitter">
                <Button variant="warning">Council</Button>
              </Navbar.Brand>
              <Navbar.Brand href="#youtube">
                <Button variant="warning">Work with Us</Button>
              </Navbar.Brand>
              <Navbar.Brand href="#facebook">
                <Button variant="warning">Events</Button>
              </Navbar.Brand>
              <Navbar.Brand href="#instagram">
                <Button variant="warning">Projects</Button>
              </Navbar.Brand>
              <Navbar.Brand href="#twitter">
                <Button variant="warning">FAQ</Button>
              </Navbar.Brand>
              <Navbar.Brand href="#youtube">
                <Button variant="warning">Contact Us</Button>
              </Navbar.Brand>
            </div>

          </Navbar.Collapse>
        </Navbar>
      )
  }
};


export default Header;
