import React from 'react';

const ServicesPage: React.FC = () => {
  return (
    <div className="services-page-container bg-[#f9f9f9] min-h-screen">
      {/* Top Line */}
      <div className="h-1 w-full bg-gradient-to-r from-gray-300 to-gray-500"></div>

      {/* Header Section */}
      <div className="text-center py-10 bg-white">
        <h1 className="text-4xl font-bold mb-4">Services</h1>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          Compassionate caregiving services tailored to enhance comfort, independence, and quality of life for your loved ones.
        </p>
      </div>

      {/* Cards Section with Background */}
      <div
        className="services-cards-container relative bg-cover bg-center py-20"
        style={{ backgroundImage: "url('/i5.jpeg')" }} // Replace with your image path
      >
        {/* Bluish Overlay */}
        <div className="absolute inset-0 bg-[#163560] bg-opacity-50"></div> {/* Bluish overlay */}

        {/* Cards */}
        <div className="relative flex flex-col md:flex-row justify-center items-center gap-8 px-8">
          {/* Card 1: Elderly Care */}
          <div className="service-card bg-white rounded-lg shadow-lg p-8 w-80 h-72 text-center flex flex-col justify-between hover:shadow-xl hover:scale-105 transition-transform duration-300">
            <img
              src="/ii9.jpeg" // Replace with your logo path
              alt="Elderly Care Logo"
              className="w-16 h-16 mx-auto mb-4"
            />
            <h3 className="text-2xl font-bold text-[#163560] mb-4">Elderly Care</h3>
            <p className="text-gray-600 text-lg">
              Assistance with daily activities, health monitoring, and companionship.
            </p>
          </div>

          {/* Card 2: Post-Surgery Care */}
          <div className="service-card bg-white rounded-lg shadow-lg p-8 w-80 h-72 text-center flex flex-col justify-between hover:shadow-xl hover:scale-105 transition-transform duration-300">
            <img
              src="/ii8.png" // Replace with your logo path
              alt="Post-Surgery Care Logo"
              className="w-16 h-16 mx-auto mb-4"
            />
            <h3 className="text-2xl font-bold text-[#163560] mb-4">Post-Surgery Care</h3>
            <p className="text-gray-600 text-lg">
              Wound care, medication management, and recovery support.
            </p>
          </div>

          {/* Card 3: See More */}
          <div className="service-card bg-white rounded-lg shadow-lg p-8 w-80 h-72 text-center flex flex-col justify-center hover:shadow-xl hover:scale-105 transition-transform duration-300">
            <h3 className="text-2xl font-bold text-[#163560] mb-4">See all services</h3>
            <a
              href="/Services" // Link to the /Services page
              className="rounded-full border-2 border-gray-500 w-14 h-14 flex items-center justify-center mx-auto hover:bg-gray-200 transition"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-7 w-7 text-gray-500"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </a>
          </div>
        </div>
      </div>

      {/* See More Button */}
      <div className="text-center py-8">
        
      </div>
    </div>
  );
};

export default ServicesPage;
