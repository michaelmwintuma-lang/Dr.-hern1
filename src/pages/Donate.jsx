import React from 'react';
import DonateVolunteer from '../components/Forms/DonateVolunteer';

const Donate = () => {
  return (
    <main className="page-container" style={{ paddingTop: '80px' }}>
      <section style={{ backgroundColor: 'var(--color-primary)', color: 'white', padding: '6rem 0' }}>
        <div className="container" style={{ textAlign: 'center' }}>
          <h1 style={{ fontSize: '3.5rem', marginBottom: '1.5rem', color: 'white' }}>Make a Difference Today</h1>
          <p style={{ fontSize: '1.25rem', maxWidth: '800px', margin: '0 auto', opacity: '0.9', color: 'white' }}>
            Your contribution directly funds mentorship programs, business training, and educational resources 
            for girls across Africa. Join us in building a future where every girl can lead.
          </p>
        </div>
      </section>



      {/* Reuse the form */}
      <DonateVolunteer />
    </main>
  );
};

export default Donate;
