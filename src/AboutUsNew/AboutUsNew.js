import React from 'react';
import './AboutUsNew.css';
import L from "../utils/localization";
import parse from "html-react-parser";

import tick from '../images/common/tick.png';

const AboutUsNew = () => {
  return (
    <div id='about-us-page'>
      <div className='about-us-section'>
        <div className='left-pane'>Innovate.<br/>Sustain.<br/>Enable.</div>
        <div className='about-us-break'/>
        <div className='right-pane'>
          <h2>{L.t('aboutUs.firstRowHeader')}</h2>
          <div className="hr-line" />
          <p className='about-us-content'>{parse(L.t('aboutUs.firstRowContent'))}</p>
        </div>
      </div>
      <div className='core-functions-section'>
        <h3>{L.t('aboutUs.secondRowHeader')}</h3>
        <div className="hr-line-center" />
        <div className='core-functions-points'>
        {
          L.t('aboutUs.secondRowData') && L.t('aboutUs.secondRowData').map((data) => {
            return (
              <div className='core-functions-point'>
                <img alt='' src={tick}/>
                <p>{data}</p>
              </div>
            );
          })
        }
        </div>
      </div>
      <div className='about-team-section'>
        <h3>{L.t('aboutUs.thirdRowHeader')}</h3>
        <div className="hr-line-center" />
        <div className='about-team-points'>
          <div className='team-dotted-line'/>
        {
          L.t('aboutUs.thirdRowData') && L.t('aboutUs.thirdRowData').map((data) => {
            return (
              <React.Fragment>
                <div className='about-team-point'>
                  <p>{data}</p>
                </div>
                <div className='team-dotted-line'/>
              </React.Fragment>
            );
          })
        }
        </div> 
      </div>
      <div className='about-mission-section'>
        <h3>{L.t('aboutUs.fourthRowHeader')}</h3>
        <div className="hr-line-center" />
        <div className='about-image-points'>
        {
          L.t('aboutUs.fourthRowData') && L.t('aboutUs.fourthRowData').map((data) => {
            return (
              <div className='about-image-point'>
                <img alt='' src={data.image}/>
                <p>{data.content}</p>
              </div>
            );
          })
        }
        </div>
      </div>
      <div className='about-vision-section'>
        <h3>{L.t('aboutUs.fifthRowHeader')}</h3>
        <div className="hr-line-center" />
        <div className='about-image-points'>
        {
          L.t('aboutUs.fifthRowData') && L.t('aboutUs.fifthRowData').map((data) => {
            return (
              <div className='about-image-point'>
                <img alt='' src={data.image}/>
                <p>{data.content}</p>
              </div>
            );
          })
        }
        </div>
      </div>
      <div className='about-values-section'>
        <h3>{L.t('aboutUs.sixthRowHeader')}</h3>
        <div className="hr-line-center" />
        <div className="about-value-points">
          {
            L.t('aboutUs.sixthRowData') && L.t('aboutUs.sixthRowData').map((data, index) => {
              return (
                <React.Fragment>
                  <div className='about-value-point'>
                    <img alt='' src={data.image}/>
                    <p>{data.content}</p>
                  </div>
                  {index === 2 && <div className='break'/>}
                </React.Fragment>
              );
            })
          }
        </div>
      </div>
    </div>
  );
}

export default AboutUsNew;