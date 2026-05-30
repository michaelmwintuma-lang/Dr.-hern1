import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMegaMenuOpen, setIsMegaMenuOpen] = useState(false);
  const timeoutRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 60);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMobileMenuOpen]);

  const closeMenus = () => {
    setIsMobileMenuOpen(false);
    setIsMegaMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleMouseEnter = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setIsMegaMenuOpen(true);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setIsMegaMenuOpen(false);
    }, 250);
  };

  return (
    <nav id="navbar" role="navigation" aria-label="Main navigation" className={isScrolled ? 'scrolled' : ''}>
      <div className="container nav-container">
        
        {/* Logo */}
        <Link to="/" onClick={closeMenus} className="logo-container">
          <img src="images/logo.jpg" alt="Igniting Girls of Africa logo" width="120" height="32"
            onError={(e) => { e.target.outerHTML = "<div class='img-placeholder' style='width:120px; height:32px; border-radius:4px; font-size:12px;'>LOGO</div>"; }} />
          <span className="logo-text">IGNITING GIRLS OF AFRICA</span>
        </Link>

        {/* Desktop Links */}
        <ul className="nav-links">
          <li><Link to="/" onClick={closeMenus}>Home</Link></li>
          
          {/* Mega Menu Trigger */}
          <li 
            className="mega-menu-trigger"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            onFocus={handleMouseEnter}
            onBlur={handleMouseLeave}
          >
            <Link to="/our-work" aria-haspopup="true" aria-expanded={isMegaMenuOpen} onClick={closeMenus}>
              Our Work
              <svg className={`chevron ${isMegaMenuOpen ? 'open' : ''}`} width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="6 9 12 15 18 9"></polyline>
              </svg>
            </Link>
            
            {/* Mega Menu Drop Panel */}
            <div className={`mega-menu-panel ${isMegaMenuOpen ? 'active' : ''}`}>
              <div className="mega-menu-grid">
                
                {/* Column 1: Our Programs */}
                <div className="mega-col">
                  <h4 className="mega-title">Our Programs</h4>
                  <ul className="mega-link-list">
                    <li><Link to="/our-work" onClick={closeMenus}>One-on-One Mentorship</Link></li>
                    <li><Link to="/our-work" onClick={closeMenus}>Leadership Skills</Link></li>
                    <li><Link to="/our-work" onClick={closeMenus}>Entrepreneurship</Link></li>
                    <li><Link to="/our-work" onClick={closeMenus}>Financial Literacy</Link></li>
                    <li><Link to="/our-work" onClick={closeMenus}>Confidence Building & Outreach</Link></li>
                    <li><Link to="/our-work" onClick={closeMenus}>Business Development</Link></li>
                    <li><Link to="/our-work" onClick={closeMenus}>Mental Well-Being</Link></li>
                    <li><Link to="/our-work" onClick={closeMenus}>Self Esteem Building</Link></li>
                    <li><Link to="/our-work" onClick={closeMenus}>Business Acumen</Link></li>
                  </ul>
                </div>

                {/* Column 2: Get Involved */}
                <div className="mega-col">
                  <h4 className="mega-title">Get Involved</h4>
                  <ul className="mega-link-list">
                    <li><Link to="/contact" onClick={closeMenus}>Become a Mentor</Link></li>
                    <li><Link to="/contact" onClick={closeMenus}>Corporate Partnerships</Link></li>
                    <li><Link to="/contact" onClick={closeMenus}>Volunteer Opportunities</Link></li>
                    <li><Link to="/donate" onClick={closeMenus}>Host a Fundraiser</Link></li>
                  </ul>
                </div>

              </div>
            </div>
          </li>
          
          <li><Link to="/about-us" onClick={closeMenus}>About Us</Link></li>
          <li><Link to="/contact" onClick={closeMenus}>Contact</Link></li>
        </ul>

        {/* Global Donate CTA */}
        <Link to="/donate" className="nav-donate" onClick={closeMenus}>Donate</Link>

        {/* Mobile Menu Trigger */}
        <button type="button" className="mobile-menu-btn" aria-label="Open mobile menu" onClick={() => setIsMobileMenuOpen(true)}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="3" y1="12" x2="21" y2="12"></line>
            <line x1="3" y1="6" x2="21" y2="6"></line>
            <line x1="3" y1="18" x2="21" y2="18"></line>
          </svg>
        </button>
      </div>

      {/* Mobile Menu Panel */}
      <div className={`mobile-menu-panel ${isMobileMenuOpen ? 'open' : ''}`}>
        <button type="button" className="mobile-close-btn" style={{ display: isMobileMenuOpen ? 'block' : 'none' }} aria-label="Close mobile menu" onClick={() => setIsMobileMenuOpen(false)}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
        </button>
        <div className="mobile-menu-content">
          <Link to="/" onClick={closeMenus}>Home</Link>
          <Link to="/our-work" onClick={closeMenus}>Our Work</Link>
          <Link to="/about-us" onClick={closeMenus}>About Us</Link>
          <Link to="/contact" onClick={closeMenus}>Contact</Link>
          <Link to="/donate" style={{ color: 'var(--color-primary)', fontWeight: 600 }} onClick={closeMenus}>Donate Now</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
