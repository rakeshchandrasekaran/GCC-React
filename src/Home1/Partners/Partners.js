import React from 'react';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import L from '../../utils/localization';

import currentEventImage1 from '../../images/home/current_event_image1.png';
import currentEventImage2 from '../../images/home/current_event_image2.png';
import currentEventImage3 from '../../images/home/current_event_image3.png';

import mrCooper from '../../images/home/mrcooper.png';
import undp from '../../images/home/undp_logo.png';
import hyundai from '../../images/home/Hyundai-logo.png';
import greatLakes from '../../images/home/great_lakes.png';
import iitm from '../../images/home/IIT_Madras_Logo.png';
import moudgoi from '../../images/home/MOUHA.png';
import loyola from '../../images/home/loyola_college.png';
import vector from '../../images/common/Vector.png';

import '@splidejs/splide/dist/css/themes/splide-default.min.css';
import './../Home1.css';



const Partners = () => {
	return (
		<div className="col-sm-12" style={{ backgroundColor: '#FFFFFF', color: '#004578', height: '100%', marginTop: '15px' }}>
        <div style={{ textAlign: 'center' }}>
          <h2 id="hSixthRowHeader" style={{ textAlign: 'center', fontSize: '40px' }}>
            {L.t('home.ourPartners')}
          </h2>
          <img src={vector} style={{ width: '72.5px', height: '4px;' }} />
        </div>
		<div id="divValues">
		<div className="col-sm-12 row" style={{ textAlign: 'center' }}>
		  <div className="col-sm-1">
		  </div>
		  <div className="col-sm-10" style={{ marginBottom: '30px' }}>
			<img src={mrCooper} />
			<img src={undp} />
			<img src={hyundai}/>
			<img src={greatLakes} />
		  </div>
		  <div className="col-sm-1">
		  </div>
		</div>
		<div style={{ textAlign: 'center' }}>
		  <div className="col-sm-12 row" style={{ textAlign: 'center', marginBottom: '30px' }}>
			<div className="col-sm-2">
			</div>
			<div className="col-sm-8">
			  <img src={iitm}
				style={{ width: '180px', height: '175px' }} />
			  <img src={moudgoi}
				style={{ width: '180px', height: '175px' }} />
			  <img src={loyola}
				style={{ width: '180px', height: '175px' }} />
			</div>
			<div className="col-sm-2">
			</div>
		  </div>
		</div>
</div>
	  </div>
	);
}

export default Partners;