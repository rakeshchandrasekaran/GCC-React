import React from 'react';
import L from '../../utils/localization';
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
			<div id="divPartners">
				<img src={mrCooper} />
				<img src={undp} />
				<img src={hyundai} />
				<img src={iitm} />
				<img src={greatLakes} />
				<img src={moudgoi} />
				<img src={loyola} />
			</div>
		</div>
	);
}

export default Partners;