import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout/Layout';

// Pages
import Home from './pages/Home';
import OurWork from './pages/OurWork';
import AboutUs from './pages/AboutUs';
import Contact from './pages/Contact';
import Donate from './pages/Donate';

function App() {
  return (
    <Router>
      <Routes>
        {/* Layout wraps all pages — Navbar, Footer, WhatsApp, BackToTop are rendered once */}
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/our-work" element={<OurWork />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/donate" element={<Donate />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
