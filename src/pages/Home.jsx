import React from 'react';
import { Link } from 'react-router-dom';
import Hero from '../components/Hero/Hero';
import Stats from '../components/Stats/Stats';

const Home = () => {
  const valueIcons = {
    'Empowerment': (
      <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon>
      </svg>
    ),
    'Leadership': (
      <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
        <circle cx="12" cy="7" r="4"></circle>
      </svg>
    ),
    'Entrepreneurial Thinking': (
      <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2m0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8m3.5-9c.83 0 1.5-.67 1.5-1.5S16.33 8 15.5 8 14 8.67 14 9.5s.67 1.5 1.5 1.5m-7 0c.83 0 1.5-.67 1.5-1.5S9.33 8 8.5 8 7 8.67 7 9.5 7.67 11 8.5 11m3.5 6.5c2.33 0 4.31-1.46 5.11-3.5H6.89c.8 2.04 2.78 3.5 5.11 3.5z"></path>
      </svg>
    ),
    'Community Engagement': (
      <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
        <circle cx="9" cy="7" r="4"></circle>
        <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
        <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
      </svg>
    )
  };

  const buttonStyle = {
    display: 'inline-block',
    padding: '0.85rem 2rem',
    backgroundColor: 'var(--color-primary)',
    color: 'white',
    borderRadius: '8px',
    textDecoration: 'none',
    fontWeight: '600',
    fontSize: '1rem',
    transition: 'all 0.3s ease',
    border: 'none',
    cursor: 'pointer',
    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)'
  };

  return (
    <main>
      <Hero />
      <Stats />

      {/* Mission & Vision Overview */}
      <section style={{ padding: '5rem 0', backgroundColor: 'var(--color-bg-alt)' }}>
        <div className="container">
          <div className="section-header" style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <h2 style={{ fontSize: '2.8rem', marginBottom: '1rem', fontWeight: '700', color: 'var(--color-text)' }}>Who We Are</h2>
            <div style={{ width: '60px', height: '4px', backgroundColor: 'var(--color-primary)', margin: '1rem auto', borderRadius: '2px' }}></div>
            <p style={{ fontSize: '1.15rem', color: 'var(--color-text-mid)', maxWidth: '700px', margin: '1.5rem auto 0', lineHeight: '1.8' }}>
              We empower girls to rise as leaders and shape the future of Africa.
            </p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2rem', marginBottom: '3rem' }}>
            <div style={{
              padding: '2.5rem',
              backgroundColor: 'var(--color-bg)',
              borderRadius: '12px',
              boxShadow: '0 2px 8px rgba(0, 0, 0, 0.08)',
              border: '2px solid transparent',
              transition: 'all 0.3s ease',
              cursor: 'default',
              overflow: 'hidden'
            }}
              onMouseEnter={(e) => {
                e.currentTarget.style.boxShadow = '0 12px 24px rgba(0, 0, 0, 0.12)';
                e.currentTarget.style.borderColor = 'var(--color-primary)';
                e.currentTarget.style.transform = 'translateY(-4px)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.boxShadow = '0 2px 8px rgba(0, 0, 0, 0.08)';
                e.currentTarget.style.borderColor = 'transparent';
                e.currentTarget.style.transform = 'translateY(0)';
              }}
            >
              <img src="/images/image03.jpg" alt="Our Mission" style={{ width: '100%', height: '200px', objectFit: 'cover', marginBottom: '1.5rem', borderRadius: '8px' }} />
              <div style={{ width: '50px', height: '50px', backgroundColor: 'rgba(var(--color-primary-rgb), 0.1)', borderRadius: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1.5rem', color: 'var(--color-primary)' }}>
                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="1"></circle>
                  <path d="M12 1v6"></path>
                  <path d="M4.22 4.22l4.24 4.24"></path>
                  <path d="M1 12h6"></path>
                  <path d="M4.22 19.78l4.24-4.24"></path>
                  <path d="M12 23v-6"></path>
                  <path d="M19.78 19.78l-4.24-4.24"></path>
                  <path d="M23 12h-6"></path>
                  <path d="M19.78 4.22l-4.24 4.24"></path>
                </svg>
              </div>
              <h3 style={{ color: 'var(--color-text)', marginBottom: '1rem', fontSize: '1.4rem', fontWeight: '700' }}>Our Mission</h3>
              <p style={{ color: 'var(--color-text-mid)', lineHeight: '1.7', fontSize: '0.95rem', marginBottom: '1rem' }}>
                Empower girls with skills, mentorship, and support to become confident leaders who drive lasting change in their communities.
              </p>
              <p style={{ color: 'var(--color-text-mid)', lineHeight: '1.6', fontSize: '0.9rem' }}>
                We are committed to breaking barriers, fostering excellence, and creating pathways to success for every girl we serve.
              </p>
            </div>
            <div style={{
              padding: '2.5rem',
              backgroundColor: 'var(--color-bg)',
              borderRadius: '12px',
              boxShadow: '0 2px 8px rgba(0, 0, 0, 0.08)',
              border: '2px solid transparent',
              transition: 'all 0.3s ease',
              cursor: 'default',
              overflow: 'hidden'
            }}
              onMouseEnter={(e) => {
                e.currentTarget.style.boxShadow = '0 12px 24px rgba(0, 0, 0, 0.12)';
                e.currentTarget.style.borderColor = 'var(--color-primary)';
                e.currentTarget.style.transform = 'translateY(-4px)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.boxShadow = '0 2px 8px rgba(0, 0, 0, 0.08)';
                e.currentTarget.style.borderColor = 'transparent';
                e.currentTarget.style.transform = 'translateY(0)';
              }}
            >
              <img src="/images/image04.webp" alt="Our Vision" style={{ width: '100%', height: '200px', objectFit: 'cover', marginBottom: '1.5rem', borderRadius: '8px' }} />
              <div style={{ width: '50px', height: '50px', backgroundColor: 'rgba(var(--color-primary-rgb), 0.1)', borderRadius: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1.5rem', color: 'var(--color-primary)' }}>
                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M7 3H5a2 2 0 0 0-2 2v2"></path>
                  <path d="M17 3h2a2 2 0 0 1 2 2v2"></path>
                  <path d="M3 17v2a2 2 0 0 0 2 2h2"></path>
                  <path d="M21 17v2a2 2 0 0 1-2 2h-2"></path>
                  <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"></path>
                  <circle cx="12" cy="12" r="3"></circle>
                </svg>
              </div>
              <h3 style={{ color: 'var(--color-text)', marginBottom: '1rem', fontSize: '1.4rem', fontWeight: '700' }}>Our Vision</h3>
              <p style={{ color: 'var(--color-text-mid)', lineHeight: '1.7', fontSize: '0.95rem', marginBottom: '1rem' }}>
                A global network of young female entrepreneurs who are empowered, confident, and transforming a more equitable world.
              </p>
              <p style={{ color: 'var(--color-text-mid)', lineHeight: '1.6', fontSize: '0.9rem' }}>
                We envision African women as catalysts for sustainable development and positive change across all sectors.
              </p>
            </div>
          </div>
          <div style={{ textAlign: 'center' }}>
            <Link to="/about-us" style={{ ...buttonStyle }}
              onMouseEnter={(e) => {
                e.target.style.backgroundColor = 'var(--color-primary-dark)';
                e.target.style.transform = 'translateY(-2px)';
                e.target.style.boxShadow = '0 6px 16px rgba(0, 0, 0, 0.15)';
              }}
              onMouseLeave={(e) => {
                e.target.style.backgroundColor = 'var(--color-primary)';
                e.target.style.transform = 'translateY(0)';
                e.target.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.1)';
              }}
            >
              Learn More About Us →
            </Link>
          </div>
        </div>
      </section>

      {/* Core Values Overview */}
      <section style={{ padding: '5rem 0', backgroundColor: 'var(--color-bg)' }}>
        <div className="container">
          <div className="section-header" style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <h2 style={{ fontSize: '2.8rem', marginBottom: '1rem', fontWeight: '700', color: 'var(--color-text)' }}>Our Core Values</h2>
            <div style={{ width: '60px', height: '4px', backgroundColor: 'var(--color-primary)', margin: '1rem auto', borderRadius: '2px' }}></div>
            <p style={{ fontSize: '1.15rem', color: 'var(--color-text-mid)', maxWidth: '700px', margin: '1.5rem auto 0', lineHeight: '1.8' }}>
              The principles that guide everything we do
            </p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '2rem', marginBottom: '3rem' }}>
            {[
              { name: 'Empowerment', image: '/images/image05.jpg', desc: 'Every girl holds the power to transform her community and future.' },
              { name: 'Leadership', image: '/images/image06.jpg', desc: 'We cultivate bold, purpose-driven leaders at every level.' },
              { name: 'Entrepreneurial Thinking', image: '/images/image07.jpg', desc: 'We nurture the mindset that turns challenges into opportunities.' },
              { name: 'Community Engagement', image: '/images/image02.webp', desc: 'We are rooted in the communities we serve and guided by their voices.' }
            ].map((value, idx) => (
              <div key={idx} style={{
                padding: '2rem',
                backgroundColor: 'var(--color-bg-alt)',
                borderRadius: '12px',
                textAlign: 'center',
                border: '2px solid transparent',
                transition: 'all 0.3s ease',
                cursor: 'default',
                overflow: 'hidden'
              }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = 'var(--color-primary)';
                  e.currentTarget.style.transform = 'translateY(-4px)';
                  e.currentTarget.style.boxShadow = '0 12px 24px rgba(0, 0, 0, 0.1)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = 'transparent';
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = 'none';
                }}
              >
                <img src={value.image} alt={value.name} style={{ width: '100%', height: '160px', objectFit: 'cover', marginBottom: '1rem', borderRadius: '8px' }} />
                <div style={{ color: 'var(--color-primary)', marginBottom: '1rem', display: 'flex', justifyContent: 'center' }}>
                  {valueIcons[value.name]}
                </div>
                <h4 style={{ color: 'var(--color-text)', marginBottom: '0.75rem', fontSize: '1.1rem', fontWeight: '600' }}>{value.name}</h4>
                <p style={{ color: 'var(--color-text-mid)', lineHeight: '1.5', fontSize: '0.9rem' }}>{value.desc}</p>
                <div style={{ width: '30px', height: '3px', backgroundColor: 'var(--color-primary)', margin: '1rem auto' }}></div>
              </div>
            ))}
          </div>
          <div style={{ textAlign: 'center' }}>
            <Link to="/about-us" style={{ ...buttonStyle }}
              onMouseEnter={(e) => {
                e.target.style.backgroundColor = 'var(--color-primary-dark)';
                e.target.style.transform = 'translateY(-2px)';
                e.target.style.boxShadow = '0 6px 16px rgba(0, 0, 0, 0.15)';
              }}
              onMouseLeave={(e) => {
                e.target.style.backgroundColor = 'var(--color-primary)';
                e.target.style.transform = 'translateY(0)';
                e.target.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.1)';
              }}
            >
              Explore All Values →
            </Link>
          </div>
        </div>
      </section>

      {/* Programs Overview */}
      <section style={{ padding: '5rem 0', backgroundColor: 'var(--color-bg-alt)' }}>
        <div className="container">
          <div className="section-header" style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <h2 style={{ fontSize: '2.8rem', marginBottom: '1rem', fontWeight: '700', color: 'var(--color-text)' }}>What We Do</h2>
            <div style={{ width: '60px', height: '4px', backgroundColor: 'var(--color-primary)', margin: '1rem auto', borderRadius: '2px' }}></div>
            <p style={{ fontSize: '1.15rem', color: 'var(--color-text-mid)', maxWidth: '700px', margin: '1.5rem auto 0', lineHeight: '1.8' }}>
              Our initiatives designed to create real impact
            </p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem', alignItems: 'center', marginBottom: '3rem' }}>
            <div>
              <img src="/images/image01.avif" alt="Our Programs" style={{ width: '100%', borderRadius: '12px', boxShadow: '0 8px 24px rgba(0, 0, 0, 0.12)' }} />
            </div>
            <div style={{
              padding: '3rem',
              backgroundColor: 'var(--color-bg)',
              borderRadius: '12px',
              boxShadow: '0 2px 8px rgba(0, 0, 0, 0.08)',
              border: '2px solid var(--color-primary)',
              borderLeftWidth: '6px'
            }}>
              <div style={{ color: 'var(--color-primary)', marginBottom: '1.5rem', display: 'flex' }}>
                <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2m-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"></path>
                </svg>
              </div>
              <h3 style={{ color: 'var(--color-text)', marginBottom: '1rem', fontSize: '1.3rem', fontWeight: '700' }}>Transforming Lives Through Action</h3>
              <p style={{ color: 'var(--color-text-mid)', lineHeight: '1.9', fontSize: '1.05rem', marginBottom: '1.5rem' }}>
                Through structured mentorship, leadership training, and practical skills development, we create a sustainable pipeline of female leaders who transform their communities and the continent.
              </p>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                <li style={{ display: 'flex', alignItems: 'flex-start', marginBottom: '1rem', color: 'var(--color-text-mid)' }}>
                  <span style={{ color: 'var(--color-primary)', marginRight: '0.75rem', fontWeight: 'bold', fontSize: '1.2rem' }}>✓</span>
                  <span>One-on-one mentorship from industry experts and successful entrepreneurs</span>
                </li>
                <li style={{ display: 'flex', alignItems: 'flex-start', marginBottom: '1rem', color: 'var(--color-text-mid)' }}>
                  <span style={{ color: 'var(--color-primary)', marginRight: '0.75rem', fontWeight: 'bold', fontSize: '1.2rem' }}>✓</span>
                  <span>Comprehensive leadership and business skills training programs</span>
                </li>
                <li style={{ display: 'flex', alignItems: 'flex-start', color: 'var(--color-text-mid)' }}>
                  <span style={{ color: 'var(--color-primary)', marginRight: '0.75rem', fontWeight: 'bold', fontSize: '1.2rem' }}>✓</span>
                  <span>Access to a thriving community of like-minded female leaders</span>
                </li>
              </ul>
            </div>
          </div>
          <div style={{ textAlign: 'center' }}>
            <Link to="/our-work" style={{ ...buttonStyle }}
              onMouseEnter={(e) => {
                e.target.style.backgroundColor = 'var(--color-primary-dark)';
                e.target.style.transform = 'translateY(-2px)';
                e.target.style.boxShadow = '0 6px 16px rgba(0, 0, 0, 0.15)';
              }}
              onMouseLeave={(e) => {
                e.target.style.backgroundColor = 'var(--color-primary)';
                e.target.style.transform = 'translateY(0)';
                e.target.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.1)';
              }}
            >
              View Our Programs →
            </Link>
          </div>
        </div>
      </section>

      {/* Get Involved Section */}
      <section style={{ padding: '5rem 0', backgroundColor: 'var(--color-bg)' }}>
        <div className="container">
          <div className="section-header" style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <h2 style={{ fontSize: '2.8rem', marginBottom: '1rem', fontWeight: '700', color: 'var(--color-text)' }}>Ways to Get Involved</h2>
            <div style={{ width: '60px', height: '4px', backgroundColor: 'var(--color-primary)', margin: '1rem auto', borderRadius: '2px' }}></div>
            <p style={{ fontSize: '1.15rem', color: 'var(--color-text-mid)', maxWidth: '700px', margin: '1.5rem auto 0', lineHeight: '1.8' }}>
              Whether you're a mentor, donor, partner, or advocate, there are many ways to support our mission
            </p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '2rem', marginBottom: '3rem' }}>
            <div style={{
              padding: '2.5rem',
              backgroundColor: 'var(--color-bg-alt)',
              borderRadius: '12px',
              border: '2px solid transparent',
              transition: 'all 0.3s ease',
              textAlign: 'center'
            }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = 'var(--color-primary)';
                e.currentTarget.style.transform = 'translateY(-4px)';
                e.currentTarget.style.boxShadow = '0 12px 24px rgba(0, 0, 0, 0.1)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = 'transparent';
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = 'none';
              }}
            >
              <div style={{ color: 'var(--color-primary)', marginBottom: '1rem', fontSize: '2.5rem' }}></div>
              <h3 style={{ color: 'var(--color-text)', marginBottom: '1rem', fontSize: '1.3rem', fontWeight: '700' }}>Become a Mentor</h3>
              <p style={{ color: 'var(--color-text-mid)', lineHeight: '1.6', marginBottom: '1.5rem' }}>
                Share your expertise and experiences with the next generation of female leaders and make a lasting impact.
              </p>
            </div>

            <div style={{
              padding: '2.5rem',
              backgroundColor: 'var(--color-bg-alt)',
              borderRadius: '12px',
              border: '2px solid transparent',
              transition: 'all 0.3s ease',
              textAlign: 'center'
            }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = 'var(--color-primary)';
                e.currentTarget.style.transform = 'translateY(-4px)';
                e.currentTarget.style.boxShadow = '0 12px 24px rgba(0, 0, 0, 0.1)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = 'transparent';
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = 'none';
              }}
            >
              <div style={{ color: 'var(--color-primary)', marginBottom: '1rem', fontSize: '2.5rem' }}></div>
              <h3 style={{ color: 'var(--color-text)', marginBottom: '1rem', fontSize: '1.3rem', fontWeight: '700' }}>Corporate Partners</h3>
              <p style={{ color: 'var(--color-text-mid)', lineHeight: '1.6', marginBottom: '1.5rem' }}>
                Partner with us to fund initiatives, provide internships, and create opportunities for growth.
              </p>
            </div>

            <div style={{
              padding: '2.5rem',
              backgroundColor: 'var(--color-bg-alt)',
              borderRadius: '12px',
              border: '2px solid transparent',
              transition: 'all 0.3s ease',
              textAlign: 'center'
            }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = 'var(--color-primary)';
                e.currentTarget.style.transform = 'translateY(-4px)';
                e.currentTarget.style.boxShadow = '0 12px 24px rgba(0, 0, 0, 0.1)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = 'transparent';
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = 'none';
              }}
            >
              <div style={{ color: 'var(--color-primary)', marginBottom: '1rem', fontSize: '2.5rem' }}></div>
              <h3 style={{ color: 'var(--color-text)', marginBottom: '1rem', fontSize: '1.3rem', fontWeight: '700' }}>Donate</h3>
              <p style={{ color: 'var(--color-text-mid)', lineHeight: '1.6', marginBottom: '1.5rem' }}>
                Your contribution directly funds our programs and enables us to reach more girls across Africa.
              </p>
            </div>
          </div>
          <div style={{ textAlign: 'center' }}>
            <Link to="/contact" style={{ ...buttonStyle }}
              onMouseEnter={(e) => {
                e.target.style.backgroundColor = 'var(--color-primary-dark)';
                e.target.style.transform = 'translateY(-2px)';
                e.target.style.boxShadow = '0 6px 16px rgba(0, 0, 0, 0.15)';
              }}
              onMouseLeave={(e) => {
                e.target.style.backgroundColor = 'var(--color-primary)';
                e.target.style.transform = 'translateY(0)';
                e.target.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.1)';
              }}
            >
              Get Involved Today →
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Home;
