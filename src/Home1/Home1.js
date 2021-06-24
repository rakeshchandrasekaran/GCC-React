import React from 'react';
import CurrentEvents from './CurrentEvents/CurrentEvents';
import HomeOpeningBanner from "./HomeOpeningBanner";
import ChangeMaker from './ChangeMaker';

const Home1 = () => {
  return (
    <div id='HomePage'>
      <HomeOpeningBanner />
      <CurrentEvents />
      <ChangeMaker />
    </div>
  );
}

export default Home1;