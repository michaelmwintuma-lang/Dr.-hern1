import React from 'react';
import Hero from '../components/Hero/Hero';
import Stats from '../components/Stats/Stats';
import MissionVision from '../components/MissionVision/MissionVision';
import Founder from '../components/Founder/Founder';
import Programs from '../components/Programs/Programs';
import CoreValues from '../components/CoreValues/CoreValues';

const Home = () => {
  return (
    <main>
      <Hero />
      <Stats />
      {/* We keep abbreviated versions on home page */}
      <MissionVision />
      <Founder />
      <Programs />
      <CoreValues />
    </main>
  );
};

export default Home;
