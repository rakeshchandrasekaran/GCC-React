import React from 'react';
import L from '../utils/localization';
import vector from '../images/common/Vector.png';
import events_1 from '../images/events/events_1.png';
import events_2 from '../images/events/events_2.png';
import Tabs from 'react-bootstrap/Tabs'
import Tab from 'react-bootstrap/Tab'
import TabContainer from 'react-bootstrap/TabContainer'
import Nav from 'react-bootstrap/Nav';

const Events = () => (
    <div className="col-xs-12">

        <div id="divEvents" className="container" style={{ marginTop: '20px', width: '100%', maxWidth: '1919px', padding: '0' }}>
            <div className="nopadding" style={{ textAlign: 'center' }}>
                <div className="nopadding" style={{ backgroundColor: '#004578', height: '150px' }}>
                    <h2 style={{ fontSize: '45px', color: '#ffffff' }}>{L.t('events.firstRowHeader')}</h2>
                    <img src={vector} style={{ width: '72.5px', height: '2px' }} />
                    <div className="col-sm-12">
                        <div className="col-sm-4">
                        </div>
                        <div className="col-sm-5" style={{ marginleft: '40px' }}>
                            <h2 style={{ color: '#D2D2D2', fontSize: '16px', textAlign: 'center' }}>

                            </h2>
                        </div>
                        <div className="col-sm-3">
                        </div>
                    </div>
                </div>
            </div>

        </div>

        {/* <div className="row">
            <div className="col-xs-12 col-sm-12 col-md-2 col-lg-2">
            </div>
            <div id="divImage" className="col-xs-12 col-sm-12 col-md-3 col-lg-3">
                <Nav
                    activeKey="/home"
                    onSelect={(selectedKey) => alert(`selected ${selectedKey}`)}>
                    <Nav.Item>
                        <Nav.Link href="/home">Active</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link eventKey="link-1">Link</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link eventKey="link-2">Link</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link eventKey="disabled" disabled>
                            Disabled
                    </Nav.Link>
                    </Nav.Item>
                </Nav>
            </div>

            <div id="divContent" className="col-xs-12 col-sm-12 col-md-2 col-lg-2">
            </div>
            <div id="divCalender" className="col-xs-12 col-sm-12 col-md-3 col-lg-3">

            </div>
            <div className="col-xs-12 col-sm-12 col-md-2 col-lg-2">
            </div>
        </div> */}
        <div id="divDefine" className="row" style={{ backgroundColor: '#FAFAFA', marginTop: '10px', paddingTop:'10px', 
        paddingBottom:'10px', paddingLeft:'5px' }}>
            <div id="divImage" className="col-xs-12 col-sm-12 col-md-2 col-lg-2">
            </div>
            <div id="divImage" className="col-xs-12 col-sm-12 col-md-2 col-lg-2">
                <img src={events_1} alt="event_1" style={{ height: '100%', width: '100%' }} />
            </div>
            <div id="divContent" className="col-xs-12 col-sm-12 col-md-3 col-lg-3 well">
                <h2 style={{
                    color: '#DF7870', fontSize: '14px', backgroundColor: '#FFF8F8',
                    textAlign: 'left', width: '80px', textAlign: 'center'
                }}>
                    {L.t('events.firstEventData[0].name')}
                </h2>
                <h2 style={{ color: '#004578', fontSize: '24px' }}>
                    {L.t('events.firstEventData[0].header')}
                </h2>
                <h2 style={{ color: '#8B8B8B', fontSize: '14px', textAlign: 'left' }}>
                    {L.t('events.firstEventData[0].description')}
                </h2>
            </div>
            <div id="divCalender" className="col-xs-12 col-sm-12 col-md-3 col-lg-3" style={{marginLeft:'10px'}}>
                <div className="row" style={{textAlign:'left'}}>
                    <div style={{ width: '50%' }}>
                        <h2 style={{ color: '#AAA7A7', fontSize: '16px' }}>
                            {L.t('events.firstEventDate[0].teamSizeText')}
                        </h2>
                        <h2 style={{ color: '#AAA7A7', fontSize: '16px', color: '#696969' }}>
                            {L.t('events.firstEventDate[0].teanSize')}
                        </h2>
                    </div>
                    <div style={{ width: '50%' }}>
                        <h2 style={{ color: '#AAA7A7', fontSize: '16px' }}>
                            {L.t('events.firstEventDate[0].registrationFeeText')}
                        </h2>
                        <h2 style={{ color: '#AAA7A7', fontSize: '16px', color: '#696969' }}>
                            {L.t('events.firstEventDate[0].registrationFee')}
                        </h2>
                    </div>
                </div>

                <div className="row" style={{textAlign:'left'}}>
                    <div style={{ width: '50%' }}>
                        <h2 style={{ color: '#AAA7A7', fontSize: '16px' }}>
                            {L.t('events.firstEventDate[0].dateText')}
                        </h2>
                        <h2 style={{ color: '#AAA7A7', fontSize: '16px', color: '#696969' }}>
                            {L.t('events.firstEventDate[0].date')}
                        </h2>
                    </div>
                    <div style={{ width: '50%' }}>
                        <h2 style={{ color: '#AAA7A7', fontSize: '16px' }}>
                            {L.t('events.firstEventDate[0].timeText')}
                        </h2>
                        <h2 style={{ color: '#AAA7A7', fontSize: '16px', color: '#696969' }}>
                            {L.t('events.firstEventDate[0].time')}
                        </h2>
                    </div>
                </div>

                <div className="row" style={{textAlign:'left'}}>
                    <div style={{ width: '100%' }}>
                        <h2 style={{ color: '#AAA7A7', fontSize: '16px' }}>
                            {L.t('events.firstEventDate[0].locationText')}
                        </h2>

                        <h2 style={{ color: '#AAA7A7', fontSize: '16px', color: '#696969' }}>
                            {L.t('events.firstEventDate[0].location')}
                        </h2>
                    </div>
                </div>
                
                <div className="" style={{textAlign: 'center'}}>
                <button style={{backgroundColor:'#004578', maxWidth: '278px', height: '53px', width:'100%', color: '#ffffff'}} 
                id="btnContactUs" href="./contactUs.html"> {L.t('events.firstRowButton')}</button>
                </div>
            </div>
            <div className="col-xs-12 col-sm-12 col-md-2 col-lg-2">
            </div>
        </div>

    </div>


);

export default Events;