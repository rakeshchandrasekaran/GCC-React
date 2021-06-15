import React from 'react';
import './FooterSection.css';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button'
import L from '../utils/localization';
import Location from '../images/footer/location.png';


const FooterSection = ({type}) => {
  {
    return (
      <footer className='page-footer font-small pink'>
        <div className='row' style={{'margin': 0}}>
          <div className='col-md-6 mt-md-0 mt-3 footer-column-section'>
            <div>
              <div><span><a href='#'>Sitemap</a></span> | <span><a href='#'>Disclaimer</a></span> | <span><a
                href='#'>Privacy Policy</a></span> | <span><a href='#'>Contact Us</a></span></div>
              <div>Copyright © C-HUB
              </div>
            </div>
          </div>
          <div className='col-md-6 mt-md-0 mt-3 footer-column-section'>
            <div>
              <div style={{'paddingBottom': '3px', 'fontWeight': 500}}>Stay Connected</div>
              <form><input placeholder='Enter E-mail ID'/>
                <button>Submit</button>
              </form>
            </div>
          </div>
        </div>
      </footer>
    )
  }
};

export default FooterSection;