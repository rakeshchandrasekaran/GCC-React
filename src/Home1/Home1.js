import React from 'react';
import CurrentEvents from './CurrentEvents/CurrentEvents';
import HomeOpeningBanner from "./HomeOpeningBanner";
import ChangeMaker from './ChangeMaker';
import Partners from './Partners';

const Home1 = () => {
  return (
    <div id='HomePage'>
      <HomeOpeningBanner />
      <Partners />
      <CurrentEvents />
      <ChangeMaker />
    </div>
  );
}

export default Home1;