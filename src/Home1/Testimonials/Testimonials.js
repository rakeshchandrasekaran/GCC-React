import React from 'react';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import L from '../../utils/localization';

import quotes_left from '../../images/home/testimonials/quotes_left.png';
import quotes_right from '../../images/home/testimonials/quotes_right.png';

import '@splidejs/splide/dist/css/themes/splide-default.min.css';
import './../Home1.css';

const Testimonials = () => {
	return (
		<div className=''>
			<h2>{L.t('home.testimonials.heading')}</h2>
			<div className="hr-line" />
			<div style={{ width: '795px', height: '414px', boxShadow: '0px 4px 13px 0px #5B5B5B08' }}>
				<Splide
					options={{
						rewind: true,
						perPage: 1,
						perMove: 1,
						gap: '1rem',
						breakpoints: {
							'1080': {
								perPage: 1
							},
							'740': {
								perPage: 1
							}
						}
					}}>

					{
						L.t('home.testimonials.testimonials') && L.t('home.testimonials.testimonials').map((data, index) => {
							return (
								<SplideSlide>
									<img src={data.image} style={{ width: '114px', height: '114px' }} alt="Image 1" />
									<div className="col-xs-12 row">
										<div className="col-xs-2">
											<img src={quotes_left} style={{ width: '20.42px', height: '14.58px' }} alt="Image 1" />
										</div>
										<div className="col-xs-8">
											<h2 style={{
												color: '#004578', fontFamily: 'Sentinel', fontStyle: 'normal', fontWeight: 'normal',
												fontSize: '18px', lineHeight: '30px'
											}}>
												{data.subHeading}
											</h2>
										</div>
										<div className="col-xs-2">
											<img src={quotes_right} style={{ width: '20.42px', height: '14.58px' }} alt="Image 1" />
										</div>
									</div>
									<div>
										<h2 style={{
											fontFamily: 'Inter', fontStyle: 'normal', fontWeight: 'normal', fontSize: '14px',
											lineHeight: '25px', textAlign: 'justify', color: '#000000'
										}}>
											{data.description}
										</h2>
									</div>
									<div>
										<h2 style={{
											fontFamily: 'Inter', fontStyle: 'normal', fontWeight: 'bold', fontSize: '24px', lineHeight: '30px',
											textAlign: 'center', color: '#004578'
										}}>
											{data.name}
										</h2>
									</div>
									
								</SplideSlide>
							);
						})
					}
				</Splide>
			</div>
		</div>
	);
}

export default Testimonials;