import React, {useRef, useState} from "react";
import L from '../utils/localization';
import EveentTile from "./EveentTile";
import vector from '../images/common/Vector.png';

const Events = () => {
  return (
    <div>
      <div id="divEvents" className="container"
           style={{marginTop: '20px', width: '100%', maxWidth: '1919px', padding: '0'}}>
        <div className="nopadding" style={{textAlign: 'center'}}>
          <div className="nopadding" style={{backgroundColor: '#004578', height: '150px'}}>
            <h2 style={{fontSize: '45px', color: '#ffffff'}}>{L.t('events.firstRowHeader')}</h2>
            <img src={vector} style={{width: '72.5px', height: '2px'}}/>
            <div className="col-sm-12">
              <div className="col-sm-4">
              </div>
              <div className="col-sm-5" style={{marginleft: '40px'}}>
                <h2 style={{color: '#D2D2D2', fontSize: '16px', textAlign: 'center'}}>

                </h2>
              </div>
              <div className="col-sm-3">
              </div>
            </div>
          </div>
        </div>

      </div>
      {
        L.t('events.firstEventData').map((events) => {
          return <EveentTile events={events}/>
        })
      }
    </div>
  );
};

export default Events;