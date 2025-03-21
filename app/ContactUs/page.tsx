import React from 'react';
import FloatingCenteredNavbar from '../components/FloatingNavbar'; // Assuming you already have this component
import Footer from '../components/Footer'; // Assuming you have this component

const ContactUs: React.FC = () => {
  return (
    <div style={{ fontFamily: 'Arial, sans-serif', backgroundColor: '#f9f9fb', color: '#333' }}>
      {/* Navbar */}
      <FloatingCenteredNavbar />

      {/* Header Section */}
      <section
        className="relative bg-cover bg-center h-[300px] flex items-center justify-center"
        style={{
          backgroundColor: 'rgba(45, 83, 125, 1)',
          color: 'white',
        }}
      >
        <div className="text-center px-4 sm:px-8 max-w-3xl">
          <h1 className="text-4xl font-bold mb-4">Contact Us</h1>
          <p className="text-lg">
            We'd love to hear from you. Reach out to us with any questions or feedback!
          </p>
        </div>
      </section>

      {/* Contact Form Section */}
      <div style={{
        backgroundColor: '#ffffff',
        borderRadius: '15px',
        maxWidth: '800px',
        margin: '30px auto',
        padding: '20px',
        boxShadow: '0 4px 12px rgba(0, 0, 0, 0.2)',
      }}>
        <h2 style={{
          color: '#173C4E',
          textAlign: 'center',
          fontSize: '2em',
          marginBottom: '20px',
        }}>Get in Touch</h2>
        <form>
          {/* Name Input */}
          <div style={{ marginBottom: '20px' }}>
            <label htmlFor="name" style={{ color: '#173C4E', display: 'block', marginBottom: '5px', fontWeight: 'bold' }}>Name</label>
            <input
              type="text"
              id="name"
              placeholder="Your name"
              style={{
                width: '100%',
                padding: '10px',
                borderRadius: '5px',
                border: '1px solid #ccc',
              }}
            />
          </div>

          {/* Email Input */}
          <div style={{ marginBottom: '20px' }}>
            <label htmlFor="email" style={{ color: '#173C4E', display: 'block', marginBottom: '5px', fontWeight: 'bold' }}>Email</label>
            <input
              type="email"
              id="email"
              placeholder="Your email"
              style={{
                width: '100%',
                padding: '10px',
                borderRadius: '5px',
                border: '1px solid #ccc',
              }}
            />
          </div>

          {/* Message Input */}
          <div style={{ marginBottom: '20px' }}>
            <label htmlFor="message" style={{ color: '#173C4E', display: 'block', marginBottom: '5px', fontWeight: 'bold' }}>Message</label>
            <textarea
              id="message"
              placeholder="Your message"
              rows={6}
              style={{
                width: '100%',
                padding: '10px',
                borderRadius: '5px',
                border: '1px solid #ccc',
              }}
            ></textarea>
          </div>

          {/* Submit Button */}
          <div style={{ textAlign: 'center' }}>
            <button
              type="submit"
              style={{
                backgroundColor: '#173C4E',
                color: 'white',
                padding: '10px 20px',
                border: 'none',
                borderRadius: '5px',
                fontSize: '1em',
                cursor: 'pointer',
              }}
            >
              Submit
            </button>
          </div>
        </form>
      </div>

      {/* Contact Information Section */}
      <div style={{
        backgroundColor: '#173C4E',
        color: 'white',
        textAlign: 'center',
        padding: '20px',
        borderRadius: '10px',
        margin: '20px auto',
        maxWidth: '800px',
      }}>
        <h3 style={{ fontSize: '1.5em', marginBottom: '10px' }}>Contact Information</h3>
        <p>Phone: +1-234-567-890</p>
        <p>Email: contact@yourdomain.com</p>
        <p>Address: 1234 Main St, City, Country</p>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default ContactUs;
