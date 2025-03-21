import React from 'react';
import './HomePage.tsx';


const Navbar: React.FC = () => {
  return (
    <nav style={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: '10px 20px',
      backgroundColor: 'rgba(23, 60, 78, 1)',
      color: '#ffffff',
      fontFamily: 'Arial, sans-serif'
    }}>
      {/* Logo Section */}
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <img src='./logo.png' alt="CareEase Logo" style={{ height: '40px', marginRight: '10px' }} /> {/* Update logo src */}
        <span style={{ fontSize: '1.5em', fontWeight: 'bold' }}>CareEase</span>
      </div>

      {/* Navigation Links */}
      <div style={{ display: 'flex', gap: '20px' }}>
        <a href="./HomePage.tsx" style={{ color: '#ffffff', textDecoration: 'none', fontWeight: 'bold' }}>Home</a>
        <a href="#contact" style={{ color: '#ffffff', textDecoration: 'none', fontWeight: 'bold' }}>Contact</a>
        <a href="#howitworks" style={{ color: '#ffffff', textDecoration: 'none', fontWeight: 'bold' }}>How it works</a>
        <a href="#services" style={{ color: '#ffffff', textDecoration: 'none', fontWeight: 'bold' }}>Services</a>
      </div>

      {/* Sign In and Sign Up Buttons */}
      <div style={{ display: 'flex', gap: '10px' }}>
        <button style={{
          padding: '8px 15px',
          backgroundColor: '#a8d5a2',
          border: 'none',
          borderRadius: '20px',
          fontWeight: 'bold',
          cursor: 'pointer',
          color: '#2c3e50'
        }}>Sign in</button>
        <button style={{
          padding: '8px 15px',
          backgroundColor: '#8ccf8a',
          border: 'none',
          borderRadius: '20px',
          fontWeight: 'bold',
          cursor: 'pointer',
          color: '#2c3e50'
        }}>Sign up</button>
      </div>
    </nav>
  );
};

export default Navbar;
