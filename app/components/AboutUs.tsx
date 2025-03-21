import React from 'react';
import './AboutUs.css';

interface AboutUsProps {
  title: string;
  subtitle: string;
  description: string;
  quote: string;
  imageUrl: string;
}

const AboutUs: React.FC<AboutUsProps> = ({ title, subtitle, description, quote, imageUrl }) => {
  return (
    <div className="about-us-container">
      <br></br>
      <div className="text-section">
        <h3>About us</h3>
        <h1>
          Healthcare with a renewed<br />
          perspective on life.
        </h1>
        <br />
        <p>At CareEase, we are dedicated to transforming how healthcare is delivered at home. our platform connects patients with qualified caregivers to provide personalised in-home services, including, post-surgery care, and mother-baby care.</p>
        <p>At CareEase, we are dedicated to transforming how healthcare is delivered at home. our platform connects patients with qualified caregivers to provide personalised in-home services, including, post-surgery care, and mother-baby care.

We believe in compassionate, professional care that empowers individuals to receive healthcare in comfort of their Home.</p>
      </div>
      <div className="image-section">
        <img src='./about.jpeg' alt="Healthcare team" />
        <div className="quote-box">
          <p>Caring is more than a service; it's a commitment to bring comfort, peace, and dignity to those who need it most.</p>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
