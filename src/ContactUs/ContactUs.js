import React from 'react';
import L from '../utils/localization';
import vector from '../images/common/Vector.png';
import ripponBuildingMap from '../images/contactUs/rippon_building_map_Image.png';

const ContactUs = () => (
    <div>
        <div id="divContactUs" className="container"
            style={{ marginTop: '20px', width: '100%', maxWidth: '1919px', padding: '0' }}>
            <div className="nopadding" style={{ textAlign: 'center' }}>
                <img src={ripponBuildingMap} style={{ height: '100%', maxHeight: '575px' }} alt="ripponBuildingMap" />
            </div>
        </div>
        <br />
            <div className="col-xs-12">
            <div className="col-xs-12">
                <h2 style={{ textAlign: 'center', fontSize: '45px', color: '#004578' }}>Contact Us</h2>
                <div className="col-xs-12" style={{ textAlign: 'center', marginBottom: '5px' }}>
                    <img src={vector} style={{ width: '72.5px', height: '4px' }} />
                </div>
                
            </div>
            <div style={{textAlign: 'center'}}>
            <div className="col-sm-12 row" style={{ marginTop: '25px', textAlign: 'center' }}>
                <input type="text" className="form-control" id="txtName" placeholder="Name" style={{
                    width: '525px',
                    height: '59px', background: '#F7F7F7', borderRadius: '3px'
                }} />
            </div>
            <div className="col-sm-12 row" style={{ marginTop: '25px', textAlign: 'center' }}>
                <input type="text" className="form-control" id="txtEmail" placeholder="E-mail" style={{
                    width: '525px',
                    height: '59px', background: '#F7F7F7', borderRadius: '3px'
                }} />
            </div>
            <div className="col-sm-12 row" style={{ marginTop: '25px', textAlign: 'center' }}>
                <textarea type="text" className="form-control" id="txtEmail" placeholder="E-mail"
                    style={{
                        width: '525px', height: '175px', left: '458px', top: '682px',
                        background: '#F7F7F7', borderRadius: '3px'
                    }}></textarea>
            </div>
            <div className="col-sm-12 row" style={{ marginTop: '25px', textAlign: 'center' }}>
                <button id="btnSend" className="form-control" id="txtName" placeholder="Name" style={{
                    width: '236px', height: '50px',
                    background: '#005A9E', borderRadius: '3px',
                    color: '#FFFFFF',
                    fontSize: '22px',
                    marginLeft: '17%'
                }} >Send</button>
            </div>
        </div>
        </div>
    </div>
);

export default ContactUs;