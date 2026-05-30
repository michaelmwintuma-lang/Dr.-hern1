import React from 'react';
import DonateVolunteer from '../components/Forms/DonateVolunteer';

const Contact = () => {
  return (
    <main className="page-container" style={{ paddingTop: '80px' }}>
      <section style={{ backgroundColor: 'var(--color-bg)', padding: '4rem 0' }}>
        <div className="container" style={{ textAlign: 'center' }}>
          <h1 style={{ fontSize: '3.5rem', marginBottom: '1.5rem', color: 'var(--color-primary)' }}>Contact Us</h1>
          <p style={{ fontSize: '1.25rem', color: 'var(--color-text-mid)', maxWidth: '800px', margin: '0 auto' }}>
            Have questions, want to volunteer, or looking to partner with us? Reach out today. 
            Our team is ready to connect and explore how we can ignite change together.
          </p>
        </div>
      </section>

      {/* We reuse the DonateVolunteer component as it contains contact info, map, and volunteer form */}
      <DonateVolunteer />
    </main>
  );
};

export default Contact;
