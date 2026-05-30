import React from 'react';
import Programs from '../components/Programs/Programs';

const OurWork = () => {
  return (
    <main className="page-container" style={{ paddingTop: '100px' }}>
      <div className="container">
        <h1 style={{ fontSize: '3rem', marginBottom: '1rem', color: 'var(--color-primary)' }}>Our Work</h1>
        <p style={{ fontSize: '1.2rem', color: 'var(--color-text-mid)', marginBottom: '3rem', maxWidth: '800px' }}>
          Igniting Girls of Africa takes a holistic approach to empowerment. We believe that by providing 
          structured mentorship, leadership training, and practical skills, we can create a sustainable 
          pipeline of female leaders who will transform their communities and the continent.
        </p>
      </div>
      
      {/* Existing Programs component with Modals */}
      <Programs />
      
      <section style={{ backgroundColor: 'var(--color-bg-alt)', padding: '4rem 0', marginTop: '4rem' }}>
        <div className="container">
          <h2 style={{ fontSize: '2rem', marginBottom: '2rem', color: 'var(--color-text)' }}>Get Involved</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '2rem' }}>
            <div style={{ padding: '2rem', backgroundColor: 'var(--color-bg)', borderRadius: '12px', boxShadow: 'var(--shadow-sm)' }}>
              <h3 style={{ color: 'var(--color-primary)', marginBottom: '1rem' }}>Become a Mentor</h3>
              <p style={{ color: 'var(--color-text-mid)', marginBottom: '1.5rem' }}>Share your experience and guide the next generation of female leaders.</p>
            </div>
            <div style={{ padding: '2rem', backgroundColor: 'var(--color-bg)', borderRadius: '12px', boxShadow: 'var(--shadow-sm)' }}>
              <h3 style={{ color: 'var(--color-primary)', marginBottom: '1rem' }}>Corporate Partnerships</h3>
              <p style={{ color: 'var(--color-text-mid)', marginBottom: '1.5rem' }}>Partner with us to fund initiatives and provide internship opportunities.</p>
            </div>
            <div style={{ padding: '2rem', backgroundColor: 'var(--color-bg)', borderRadius: '12px', boxShadow: 'var(--shadow-sm)' }}>
              <h3 style={{ color: 'var(--color-primary)', marginBottom: '1rem' }}>Host a Fundraiser</h3>
              <p style={{ color: 'var(--color-text-mid)', marginBottom: '1.5rem' }}>Organize an event in your community to support our mission.</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default OurWork;
