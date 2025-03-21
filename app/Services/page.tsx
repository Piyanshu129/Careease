import React from 'react';
import FloatingCenteredNavbar from '../components/FloatingNavbar';
import Footer from '../components/Footer';
import './ServicesPage.css';
import FAQ from '../components/FAQ';
import TestimonialCard from '../components/TestimonialCard';

const ServicesPage: React.FC = () => {
  return (
    <div style={{ fontFamily: 'Arial, sans-serif', backgroundColor: '#f9f9fb', color: '#333' }}>
      {/* Navbar */}
      <FloatingCenteredNavbar />

      {/* Header Section */}
      <section
        className="relative bg-cover bg-center h-[400px] flex items-center justify-center"
        style={{
          backgroundImage: "url('/i1.jpeg')",
        }}
      >
        {/* Overlay */}
        <div
          className="absolute inset-0"
          style={{
            backgroundColor: 'rgba(22, 53, 96, 0.5)', // Updated to match #163560 with 50% opacity
          }}
        ></div>

        {/* Content */}
        <div className="relative z-10 text-center text-white px-4 sm:px-8 max-w-3xl">
          <h2 className="text-4xl font-bold mb-4">Services</h2>
          <p className="text-lg">
            Compassionate caregiving services tailored to enhance comfort, independence, and quality of life for your loved ones.
          </p>
        </div>
      </section>

      {/* Service Cards Section */}
      <div className="services-container">
        <div className="services-grid">
          {/* Service Cards */}
          <div className="service-card dark" style={{ backgroundColor: '#163560' }}>
            <img
              src="/ii9.jpeg" // Replace with your logo path
              alt="Elderly Care Logo"
              className="w-16 h-16 mx-auto mb-4"
            />
            <h3>Elderly Care</h3>
            <p>Assistance with daily activities, health monitoring, and companionship.</p>
          </div>
          <div className="service-card light" style={{ backgroundColor: '#BECCDE' }}>
            <img
              src="/mc1.png" // Replace with your logo path
              alt="Mother Care Logo"
              className="w-16 h-16 mx-auto mb-4"
            />
            <h3>Mother Care</h3>
            <p>Support for mothers through pregnancy and postnatal recovery, ensuring well-being for both.</p>
          </div>
          <div className="service-card dark" style={{ backgroundColor: '#163560' }}>
            <img
              src="/cc.png" // Replace with your logo path
              alt="Child Care Logo"
              className="w-16 h-16 mx-auto mb-4"
            />
            <h3>Child Care</h3>
            <p>Specialized pediatric care and support for families.</p>
          </div>
          <div className="service-card light" style={{ backgroundColor: '#BECCDE' }}>
            <img
              src="/ss.png" // Replace with your logo path
              alt="Post Accident Care Logo"
              className="w-16 h-16 mx-auto mb-4"
            />
            <h3>Post-Accident Care</h3>
            <p>Recovery support and rehabilitation for accident victims.</p>
          </div>
          <div className="service-card dark" style={{ backgroundColor: '#163560' }}>
            <img
              src="/ps.png" // Replace with your logo path
              alt="Post Surgery Care Logo"
              className="w-16 h-16 mx-auto mb-4"
            />
            <h3>Post-Surgery Care</h3>
            <p>Wound care, medication management, and recovery support.</p>
          </div>
          <div className="service-card light" style={{ backgroundColor: '#BECCDE' }}>
            <img
              src="/pt.png" // Replace with your logo path
              alt="Physiotherapy Logo"
              className="w-16 h-16 mx-auto mb-4"
            />
            <h3>Physiotherapy</h3>
            <p>In-home rehabilitation and mobility assistance.</p>
          </div>
          <div className="service-card dark" style={{ backgroundColor: '#163560' }}>
            <img
              src="/hms.jpeg" // Replace with your logo path
              alt="Home Medical Services Logo"
              className="w-16 h-16 mx-auto mb-4"
            />
            <h3>Home Medical Services</h3>
            <p>Basic medical treatments, health check-ups, and monitoring.</p>
          </div>
          <div className="service-card light" style={{ backgroundColor: '#BECCDE' }}>
            <img
              src="/snn.png" // Replace with your logo path
              alt="Special Needs Care Logo"
              className="w-16 h-16 mx-auto mb-4"
            />
            <h3>Special Needs Care</h3>
            <p>Personalized care for individuals with disabilities or chronic conditions.</p>
          </div>
          <div className="service-card dark" style={{ backgroundColor: '#163560' }}>
            <img
              src="/ich.png" // Replace with your logo path
              alt="Intensive Care Logo"
              className="w-16 h-16 mx-auto mb-4"
            />
            <h3>Intensive Care at Home</h3>
            <p>Advanced, critical care services provided by skilled nurses.</p>
          </div>
        </div>
      </div>

<br>
</br>
<TestimonialCard></TestimonialCard>
      <br />
      <FAQ />
      {/* Footer Section */}
      <Footer />
    </div>
  );
};

export default ServicesPage;
