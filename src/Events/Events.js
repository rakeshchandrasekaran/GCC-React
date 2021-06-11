import React from 'react';
import L from '../utils/localization';
import vector from '../images/common/Vector.png';
import events_1 from '../images/events/events_1.png';
import events_2 from '../images/events/events_2.png';

const Events = () => (
    <div className="col-xs-12 row">
        <div id="divEvents" className="container" style={{ marginTop: '20px', width: '100%', maxWidth: '1919px', padding: '0' }}>
            <div className="nopadding" style={{ textAlign: 'center' }}>
                <div className="nopadding" style={{ backgroundColor: '#004578', height: '150px' }}>
                    <h2 style={{ fontSize: '45px', color: '#ffffff' }}>{L.t('events.firstRowHeader')}</h2>
                    <img src={vector} style={{ width: '72.5px', height: '2px' }} />
                    <div className="col-sm-12 row">
                        <div className="col-sm-4 row">
                        </div>
                        <div className="col-sm-5 row" style={{ marginleft: '40px' }}>
                            <h2 style={{ color: '#D2D2D2', fontSize: '16px', textAlign: 'center' }}>

                            </h2>
                        </div>
                        <div className="col-sm-3 row">
                        </div>
                    </div>
                </div>
            </div>

        </div>
        
        {/* <div className="col-xs-12 row"> */}
       
       <div className="row">
        <div id="divImage" className="col-xs-12 col-sm-12 col-md-2 col-lg-2">

        </div>
        <div id="divImage" className="col-xs-12 col-sm-12 col-md-3 col-lg-3">
            <img src={events_1} alt="event_1" style={{ height: '100%', width: '100%' }} />
        </div>

        <div id="divContent" className="col-xs-12 col-sm-12 col-md-2 col-lg-2">

            <h2 style={{ color: '#DF7870', fontSize: '14px', backgroundColor: '#FFF8F8',  textAlign: 'left',width:'80px', textAlign: 'center' }}>
                {L.t('events.firstEventData[0].name')}
            </h2>
            <h2 style={{ color: '#004578', fontSize: '24px' }}>
                {L.t('events.firstEventData[0].header')}
            </h2>
            <h2 style={{ color: '#8B8B8B', fontSize: '14px', textAlign: 'left' }}>
            {L.t('events.firstEventData[0].description')}
            </h2>
        </div>

        <div id="divCalender" className="col-xs-12 col-sm-12 col-md-3 col-lg-3">

        </div>
        <div className="col-xs-12 col-sm-12 col-md-2 col-lg-2">
        
        </div>
        {/* </div>
         */}
         </div>
    </div>


);

export default Events;