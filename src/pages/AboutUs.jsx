import React from 'react';
import MissionVision from '../components/MissionVision/MissionVision';
import Founder from '../components/Founder/Founder';
import CoreValues from '../components/CoreValues/CoreValues';

const AboutUs = () => {
  return (
    <main className="page-container" style={{ paddingTop: '80px' }}>
      <section style={{ backgroundColor: 'var(--color-bg-alt)', padding: '6rem 0' }}>
        <div className="container" style={{ textAlign: 'center' }}>
          <h1 style={{ fontSize: '3.5rem', marginBottom: '1.5rem', color: 'var(--color-primary)' }}>About Us</h1>
          <p style={{ fontSize: '1.25rem', color: 'var(--color-text-mid)', maxWidth: '800px', margin: '0 auto' }}>
            We are a collective of leaders, mentors, and advocates dedicated to sparking change
            across Africa. By empowering young women, we aim to rewrite the narrative of 
            leadership and innovation on the continent.
          </p>
        </div>
      </section>

      <MissionVision />
      <CoreValues />
      <Founder />
      
      <section style={{ padding: '5rem 0', backgroundColor: 'var(--color-bg-alt)' }}>
        <div className="container" style={{ textAlign: 'center' }}>
          <h2 style={{ fontSize: '2.5rem', marginBottom: '1.5rem', color: 'var(--color-text)' }}>Our History</h2>
          <p style={{ fontSize: '1.1rem', color: 'var(--color-text-mid)', maxWidth: '800px', margin: '0 auto 2rem auto', lineHeight: '1.8' }}>
            Founded on the belief that true progress begins with empowering the most vulnerable, 
            Igniting Girls of Africa started as a small community initiative. Today, it has grown 
            into a comprehensive ecosystem of support, education, and mentorship, reaching thousands 
            of girls and helping them step into their power.
          </p>
        </div>
      </section>
    </main>
  );
};

export default AboutUs;
