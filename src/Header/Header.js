/* eslint-disable no-lone-blocks */
import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button'
import L from '../utils/localization';
import config from '../config/config';

import './Header.css';

import mainLogo from '../images/main_logo.svg';
import facebookLogo from '../images/facebook-icon.png';
import instaLogo from '../images/instagram.png';
import youtubeLogo from '../images/youtube.png';
import twitterLogo from '../images/twitter.png';

const appRoute = config.appRoute;

const Header = ({ type }) => {
  if(type === 'main') {
    return (
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
            <Button variant="dark" className="font-size-small btn-cs">A</Button>
            <Button variant="dark" className="font-size-medium btn-cs">A</Button>
            <Button variant="dark" className="font-size-large btn-cs">A+</Button>
          </div>
          <div className="language-buttons">
            <Button variant="dark" className="english-button btn-cs" onClick={() => { window.sessionStorage.setItem("language", "english"); window.location.reload() }}>English</Button>
            <Button variant="dark" className="tamil-button btn-cs" onClick={() => { window.sessionStorage.setItem("language", "tamil"); window.location.reload() }}>தமிழ்</Button>
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
    )
  } else {
    return (
      <Navbar collapseOnSelect expand="lg" bg="light" variant="light" fixed="top" className="sub-nav-bar">
        <Navbar.Brand href={`${appRoute}/`}>
          <h2 className="sub-nav-logo">Chennai Innovation Hub</h2>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <div className="sub-nav-links">
            <Navbar.Brand href={`${appRoute}/`}>
              <Button variant="warning">{L.t('subNav.home')}</Button>
            </Navbar.Brand>
            <Navbar.Brand href={`${appRoute}/about_us`}>
              <Button variant="warning">{L.t('subNav.aboutUs')}</Button>
            </Navbar.Brand>
            <Navbar.Brand href={`${appRoute}/council`}>
              <Button variant="warning">{L.t('subNav.council')}</Button>
            </Navbar.Brand>
            <Navbar.Brand href={`${appRoute}/workWithUs`}>
              <Button variant="warning">{L.t('subNav.workWithUs')}</Button>
            </Navbar.Brand>
            <Navbar.Brand href={`${appRoute}/events`}>
              <Button variant="warning">{L.t('subNav.events')}</Button>
            </Navbar.Brand>
            <Navbar.Brand href={`${appRoute}/projects`}>
              <Button variant="warning">{L.t('subNav.projects')}</Button>
            </Navbar.Brand>
            <Navbar.Brand href={`${appRoute}/faq`}>
              <Button variant="warning">{L.t('subNav.faq')}</Button>
            </Navbar.Brand>
            <Navbar.Brand href={`${appRoute}/contact_us`}>
              <Button variant="warning">{L.t('subNav.contactUs')}</Button>
            </Navbar.Brand>
          </div>

        </Navbar.Collapse>
      </Navbar>
    )
  }
};

export default Header;
