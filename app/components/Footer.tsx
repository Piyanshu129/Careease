import React from 'react';
import styles from './Footer.module.css';

const Footer: React.FC = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.brand}>
          <h2>CareEase</h2>
          <p>Connecting you with trusted care givers for personalised care</p>
        </div>
        <div className={styles.column}>
          <h3>Navigation</h3>
          <ul>
            <li>Home</li>
            <li>Services</li>
            <li>How it works</li>
            <li>Contact</li>
          </ul>
        </div>
        <div className={styles.column}>
          <h3>Quick Links</h3>
          <ul>
            <li>About us</li>
            <li>Bookings</li>
            <li>FAQ's</li>
          </ul>
        </div>
        <div className={styles.column}>
          <h3>Services</h3>
          <ul>
            <li>Home</li>
            <li>Support</li>
          </ul>
        </div>
        <div className={styles.contact}>
          <p>📍 Greater Noida, Uttar Pradesh</p>
          <p>📞 +91 9999999999</p>
          <p>📧 XYZ@gmail.com</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
