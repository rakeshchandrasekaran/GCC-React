import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button'
import L from '../utils/localization';
import Location from '../images/footer/location.png';


const Footer = ({ type }) => {
    {
        return (
            <footer className="page-footer font-small pink pt-4" style={{ backgroundColor: '#01243F', height: '211px', color: '#ffffff' }}>
                <div className="col-xs-12 row" style={{ margin: '0' }}>
                    {/* <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4 footer-column-section" style={{ textAlign: 'left' }}>
                        <div className='col-xs-12'>
                            <h2 style={{ fontSize: '18px' }}>
                                {L.t('footer.firstColumnHeader')}
                            </h2>
                        </div>
                        <div className='col-xs-12'>
                            <div style={{ width: '40%' }} style={{ textAlign: 'right' }}>
                                <img src={Location} alt="Location" style={{ width: '14px', height: '20px' }} />
                            </div>
                            <div style={{ width: '60%' }}>
                                {L.t('footer.firstColumnAddress[0]')}
                            </div>

                        </div>
                    </div> */}
                </div>
            </footer>
        )
    }
};

export default Footer;