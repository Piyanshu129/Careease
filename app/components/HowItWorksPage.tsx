import React, { useState } from 'react';
import { redirect } from 'next/navigation';

const HowItWorks: React.FC = () => {
  const [isVideoOpen, setIsVideoOpen] = useState(false);

  const openVideoModal = () => {
    setIsVideoOpen(true);
  };

  const closeVideoModal = () => {
    setIsVideoOpen(false);
  };

  return (
    <div
      style={{
        fontFamily: 'Arial, sans-serif',
        backgroundColor: '#f9f9fb',
        color: '#333',
        padding: '20px',
      }}
    >
      {/* Header Section */}
      <section
        className="relative bg-cover bg-center h-[400px] flex items-center justify-center"
        style={{
          backgroundImage: "url('/i1.jpeg')",
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div className="relative z-10 text-center text-white px-4 sm:px-8 max-w-3xl">
          <h2 className="text-4xl font-bold mb-4">How it works</h2>
          <p className="text-lg">
            Trusted professionals, personalised support, and peace of mind for you
            and your loved ones.
          </p>
        </div>
      </section>

      {/* Patient and Caregiver Section */}
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          gap: '30px',
          padding: '20px 0',
          maxWidth: '1200px',
          margin: 'auto',
          flexWrap: 'wrap',
        }}
      >
        {/* Other components */}
      </div>

      {/* Video Section */}
      <div className="flex flex-col md:flex-row items-center justify-between bg-[#173C4E] text-white rounded-lg overflow-hidden shadow-lg">
        {/* Left Section with Image and Text */}
        <div
          className="w-full md:w-1/2 h-64 md:h-[500px] flex items-center justify-center px-6 relative"
          style={{
            backgroundImage: `url('/i4.jpeg')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          <div className="absolute inset-0 bg-black bg-opacity-50"></div>
          <h2 className="relative z-10 text-3xl font-bold text-center p-4">
            Small video <br />
            Demonstration
          </h2>
        </div>

        {/* Right Section with Play Button */}
        <div className="w-full md:w-1/2 bg-[#1C3A58] flex flex-col items-center justify-center p-8 text-center space-y-6 h-64 md:h-[500px]">
          <button
            onClick={openVideoModal}
            className="flex items-center text-white text-lg space-x-2"
          >
            <span>Tap here to play</span>
            <div className="w-12 h-12 rounded-full border-2 border-white flex items-center justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M8 5v14l11-7z" />
              </svg>
            </div>
          </button>
          <a
            href="#"
            className="bg-white text-[#173C4E] px-6 py-2 rounded-full font-semibold hover:bg-gray-200"
          >
            learn more →
          </a>
        </div>
      </div>

      {/* Video Modal */}
      {isVideoOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50"
          onClick={closeVideoModal}
        >
          <div className="relative bg-white rounded-lg overflow-hidden shadow-lg w-[90%] max-w-4xl">
            <button
              onClick={closeVideoModal}
              className="absolute top-4 right-4 text-white bg-red-500 hover:bg-red-600 rounded-full p-2"
            >
              X
            </button>
            <video
              controls
              className="w-full"
              style={{ height: '500px' }}
            >
              <source src="https://youtu.be/i2pMEhEzbEs?si=lfSZlbx5MBqwsRt0" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      )}
    </div>
  );
};

export default HowItWorks;
