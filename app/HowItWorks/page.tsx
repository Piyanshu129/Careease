// "use client";

// import React, { useState } from 'react';
// import FloatingCenteredNavbar from '../components/FloatingNavbar';
// import Footer from '../components/Footer'; // Ensure you have a footer component
// import { redirect } from 'next/navigation';
// import FAQ from '../components/FAQ';


// const HowItWorks: React.FC = () => {
//   const [isVideoOpen, setIsVideoOpen] = useState(false);

//   const openVideoModal = () => {
//     setIsVideoOpen(true);
//   };

//   const closeVideoModal = () => {
//     setIsVideoOpen(false);
//   };
//   return (
//     <div style={{ fontFamily: 'Arial, sans-serif', backgroundColor: '#f9f9fb', color: '#333' }}>
//       {/* Floating Navbar */}
//       <FloatingCenteredNavbar />

//       {/* Main Content */}
//       <div style={{ padding: '20px' }}>
//         {/* Header Section */}
        
//         <section
//   className="relative bg-cover bg-center h-[400px] flex items-center justify-center"
//   style={{
//     backgroundImage: "url('/i3.jpeg')",
//   }}
// >
//   {/* Overlay */}
//   <div
//     className="absolute inset-0"
//     style={{
//       backgroundColor: 'rgba(22, 53, 96, 0.5)', // Updated to match #163560 with 50% opacity
//     }}
//   ></div>

//   {/* Content */}
//   <div className="relative z-10 text-center text-white px-4 sm:px-8 max-w-3xl">
//     <h2 className="text-4xl font-bold mb-4">How it works</h2>
//     <p className="text-lg">
//     Trusted professionals, personalised support, and peace of mind for you and your loved ones.
//     </p>
//   </div>
// </section>

//         <br />

    
//  {/* Patient and Caregiver Section */}
// <div style={{
//   display: 'flex',
//   justifyContent: 'center',
//   gap: '30px',
//   padding: '20px 0',
//   maxWidth: '1200px',
//   margin: 'auto',
//   flexWrap: 'wrap',
// }}>
//   {/* Patient Section */}
//   <div style={{
//     position: 'relative',
//     textAlign: 'center',
//     width: '400px',
//     height: '500px',
//     borderRadius: '15px',
//     overflow: 'hidden',
//     boxShadow: '0 4px 12px rgba(0, 0, 0, 0.2)',
//   }}>
//     <img src='./i1.jpeg' alt="Patient" style={{ borderRadius: '15px', width: '100%', height: '100%', objectFit: 'cover' }} />
//     <div style={{
//       position: 'absolute',
//       top: 0,
//       left: 0,
//       right: 0,
//       bottom: 0,
//       backgroundColor: 'rgba(22, 53, 96, 0.3)',
//       borderRadius: '15px',
//     }}></div>
//     <h2 style={{
//       position: 'absolute',
//       top: '40%',
//       left: '50%',
//       transform: 'translate(-50%, -50%)',
//       fontSize: '2em',
//       color: '#ffffff',
//       fontWeight: 'bold',
//     }}>Patient</h2>
//     <p style={{
//       position: 'absolute',
//       bottom: '90px',
//       left: '50%',
//       transform: 'translateX(-50%)',
//       fontSize: '1.2em',
//       color: '#ffffff',
//       textAlign: 'center',
//       width: '90%',
//     }}>
//       Patients deserve compassionate, reliable care that puts their needs first.
//     </p>
//     <button 
//       style={{
//         position: 'absolute',
//         bottom: '30px',
//         left: '50%',
//         transform: 'translateX(-50%)',
//         padding: '10px 20px',
//         fontSize: '1em',
//         backgroundColor: '#ffffff',
//         color: '#164D60',
//         border: 'none',
//         borderRadius: '30px',
//         cursor: 'pointer',
//         boxShadow: '0 4px 12px rgba(0, 0, 0, 0.2)',
//         display: 'flex',
//         alignItems: 'center',
//         gap: '10px',
//       }}
//       onClick={() => window.open('/patient-learn-more', '_blank')}
//     >
//       Learn More
//       <span style={{
//         display: 'inline-block',
//         width: '12px',
//         height: '12px',
//         borderTop: '2px solid #164D60',
//         borderRight: '2px solid #164D60',
//         transform: 'rotate(45deg)',
//       }}></span>
//     </button>
//   </div>

//   {/* Caregiver Section */}
//   <div style={{
//     position: 'relative',
//     textAlign: 'center',
//     width: '400px',
//     height: '500px',
//     borderRadius: '15px',
//     overflow: 'hidden',
//     boxShadow: '0 4px 12px rgba(0, 0, 0, 0.2)',
//   }}>
//     <img src='./i2.jpeg' alt="Caregiver" style={{ borderRadius: '15px', width: '100%', height: '100%', objectFit: 'cover' }} />
//     <div style={{
//       position: 'absolute',
//       top: 0,
//       left: 0,
//       right: 0,
//       bottom: 0,
//       backgroundColor: 'rgba(22, 53, 96, 0.3)',
//       borderRadius: '15px',
//     }}></div>
//     <h2 style={{
//       position: 'absolute',
//       top: '40%',
//       left: '50%',
//       transform: 'translate(-50%, -50%)',
//       fontSize: '2em',
//       color: '#ffffff',
//       fontWeight: 'bold',
//     }}>Caregiver</h2>
//     <p style={{
//       position: 'absolute',
//       bottom: '90px',
//       left: '50%',
//       transform: 'translateX(-50%)',
//       fontSize: '1.2em',
//       color: '#ffffff',
//       textAlign: 'center',
//       width: '90%',
//     }}>
//       Empowering caregivers to make a meaningful difference, one patient at a time.
//     </p>
//     <button 
//       style={{
//         position: 'absolute',
//         bottom: '30px',
//         left: '50%',
//         transform: 'translateX(-50%)',
//         padding: '10px 20px',
//         fontSize: '1em',
//         backgroundColor: '#ffffff',
//         color: '#164D60',
//         border: 'none',
//         borderRadius: '30px',
//         cursor: 'pointer',
//         boxShadow: '0 4px 12px rgba(0, 0, 0, 0.2)',
//         display: 'flex',
//         alignItems: 'center',
//         gap: '10px',
//       }}
//       onClick={() => window.open('/caregiver-learn-more', '_blank')}
//     >
//       Learn More
//       <span style={{
//         display: 'inline-block',
//         width: '12px',
//         height: '12px',
//         borderTop: '2px solid #164D60',
//         borderRight: '2px solid #164D60',
//         transform: 'rotate(45deg)',
//       }}></span>
//     </button>
//   </div>
// </div>
 



//         <div className="flex flex-col md:flex-row items-center justify-between bg-[#173C4E] text-white rounded-lg overflow-hidden shadow-lg">
//         {/* Left Section with Image and Text */}
//         <div
//           className="w-full md:w-1/2 h-64 md:h-[500px] flex items-center justify-center px-6 relative"
//           style={{
//             backgroundImage: `url('/i4.jpeg')`,
//             backgroundSize: 'cover',
//             backgroundPosition: 'center',
//             backgroundColor: 'rgba(22, 53, 96, 0.3)'

//           }}
//         >
//           <div className="absolute inset-0 bg-black bg-opacity-50"></div>
//           <h2 className="relative z-10 text-3xl font-bold text-center p-4">
//             Small video <br />
//             Demonstration
//           </h2>
//         </div>

//         {/* Right Section with Play Button */}
//         <div className="w-full md:w-1/2 bg-[#1C3A58] flex flex-col items-center justify-center p-8 text-center space-y-6 h-64 md:h-[500px]">
//           <button
//             onClick={openVideoModal}
//             className="flex items-center text-white text-lg space-x-2"
//           >
//             <span>Tap here to play</span>
//             <div className="w-12 h-12 rounded-full border-2 border-white flex items-center justify-center">
//               <svg
//                 xmlns="http://www.w3.org/2000/svg"
//                 className="h-6 w-6"
//                 fill="currentColor"
//                 viewBox="0 0 24 24"
//               >
//                 <path d="M8 5v14l11-7z" />
//               </svg>
//             </div>
//           </button>
//           <a
//             href="#"
//             className="bg-white text-[#173C4E] px-6 py-2 rounded-full font-semibold hover:bg-gray-200"
//           >
//             learn more →
//           </a>
//         </div>
//       </div>

//       {/* Video Modal */}
//       {isVideoOpen && (
//         <div
//           className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50"
//           onClick={closeVideoModal}
//         >
//           <div className="relative bg-white rounded-lg overflow-hidden shadow-lg w-[90%] max-w-4xl">
//             <button
//               onClick={closeVideoModal}
//               className="absolute top-4 right-4 text-white bg-red-500 hover:bg-red-600 rounded-full p-2"
//             >
//               X
//             </button>
//             <video
//               controls
//               className="w-full"
//               style={{ height: '500px' }}
//             >
//               <source src="https://www.youtube.com/watch?v=i2pMEhEzbEs" type="video/mp4" />
//               Your browser does not support the video tag.
//             </video>
//           </div>
//         </div>
//       )}

//       </div>
//         <FAQ></FAQ>
//       {/* Footer Section */}
//       <Footer />
//     </div>
//   );
// };

// export default HowItWorks;








"use client";

import React, { useState } from "react";
import FloatingCenteredNavbar from "../components/FloatingNavbar";
import Footer from "../components/Footer"; // Ensure you have a footer component
import FAQ from "../components/FAQ";
import ForPatientsPage from "../patient-learn-more/page";
import ForCaregiversPage from "../caregiver-learn-more/page";

const HowItWorks: React.FC = () => {
  const [isVideoOpen, setIsVideoOpen] = useState(false);
  const [showPatientLearnMore, setShowPatientLearnMore] = useState(false);
  const [showCaregiverLearnMore, setShowCaregiverLearnMore] = useState(false);

  const openVideoModal = () => {
    setIsVideoOpen(true);
  };

  const closeVideoModal = () => {
    setIsVideoOpen(false);
  };

  const togglePatientLearnMore = () => {
    setShowPatientLearnMore((prev) => !prev);
  };

  const toggleCaregiverLearnMore = () => {
    setShowCaregiverLearnMore((prev) => !prev);
  };

  return (
    <div
      style={{
        fontFamily: "Arial, sans-serif",
        backgroundColor: "#f9f9fb",
        color: "#333",
      }}
    >
      {/* Floating Navbar */}
      <FloatingCenteredNavbar />

      {/* Main Content */}
      <div style={{ padding: "20px" }}>
        {/* Header Section */}
        <section
          className="relative bg-cover bg-center h-[400px] flex items-center justify-center"
          style={{
            backgroundImage: "url('/i3.jpeg')",
          }}
        >
          {/* Overlay */}
          <div
            className="absolute inset-0"
            style={{
              backgroundColor: "rgba(22, 53, 96, 0.5)", // Updated to match #163560 with 50% opacity
            }}
          ></div>

          {/* Content */}
          <div className="relative z-10 text-center text-white px-4 sm:px-8 max-w-3xl">
            <h2 className="text-4xl font-bold mb-4">How it works</h2>
            <p className="text-lg">
              Trusted professionals, personalized support, and peace of mind for
              you and your loved ones.
            </p>
          </div>
        </section>

        <br />

        {/* Patient and Caregiver Section */}
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "30px",
            padding: "20px 0",
            maxWidth: "1200px",
            margin: "auto",
            flexWrap: "wrap",
          }}
        >
          {/* Patient Section */}
          <div
            style={{
              position: "relative",
              textAlign: "center",
              width: "400px",
              height: "500px",
              borderRadius: "15px",
              overflow: "hidden",
              boxShadow: "0 4px 12px rgba(0, 0, 0, 0.2)",
            }}
          >
            <img
              src="./i1.jpeg"
              alt="Patient"
              style={{
                borderRadius: "15px",
                width: "100%",
                height: "100%",
                objectFit: "cover",
              }}
            />
            <div
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                backgroundColor: "rgba(22, 53, 96, 0.3)",
                borderRadius: "15px",
              }}
            ></div>
            <h2
              style={{
                position: "absolute",
                top: "40%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                fontSize: "2em",
                color: "#ffffff",
                fontWeight: "bold",
              }}
            >
              Patient
            </h2>
            <p
              style={{
                position: "absolute",
                bottom: "90px",
                left: "50%",
                transform: "translateX(-50%)",
                fontSize: "1.2em",
                color: "#ffffff",
                textAlign: "center",
                width: "90%",
              }}
            >
              Patients deserve compassionate, reliable care that puts their
              needs first.
            </p>
            <button
              style={{
                position: "absolute",
                bottom: "30px",
                left: "50%",
                transform: "translateX(-50%)",
                padding: "10px 20px",
                fontSize: "1em",
                backgroundColor: "#ffffff",
                color: "#164D60",
                border: "none",
                borderRadius: "30px",
                cursor: "pointer",
                boxShadow: "0 4px 12px rgba(0, 0, 0, 0.2)",
                display: "flex",
                alignItems: "center",
                gap: "10px",
              }}
              onClick={togglePatientLearnMore}
            >
              {showPatientLearnMore ? "Hide Details" : "Learn More"}
              <span
                style={{
                  display: "inline-block",
                  width: "12px",
                  height: "12px",
                  borderTop: "2px solid #164D60",
                  borderRight: "2px solid #164D60",
                  transform: "rotate(45deg)",
                }}
              ></span>
            </button>
          </div>

          {/* Caregiver Section */}
          <div
            style={{
              position: "relative",
              textAlign: "center",
              width: "400px",
              height: "500px",
              borderRadius: "15px",
              overflow: "hidden",
              boxShadow: "0 4px 12px rgba(0, 0, 0, 0.2)",
            }}
          >
            <img
              src="./i2.jpeg"
              alt="Caregiver"
              style={{
                borderRadius: "15px",
                width: "100%",
                height: "100%",
                objectFit: "cover",
              }}
            />
            <div
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                backgroundColor: "rgba(22, 53, 96, 0.3)",
                borderRadius: "15px",
              }}
            ></div>
            <h2
              style={{
                position: "absolute",
                top: "40%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                fontSize: "2em",
                color: "#ffffff",
                fontWeight: "bold",
              }}
            >
              Caregiver
            </h2>
            <p
              style={{
                position: "absolute",
                bottom: "90px",
                left: "50%",
                transform: "translateX(-50%)",
                fontSize: "1.2em",
                color: "#ffffff",
                textAlign: "center",
                width: "90%",
              }}
            >
              Empowering caregivers to make a meaningful difference, one patient
              at a time.
            </p>
            <button
              style={{
                position: "absolute",
                bottom: "30px",
                left: "50%",
                transform: "translateX(-50%)",
                padding: "10px 20px",
                fontSize: "1em",
                backgroundColor: "#ffffff",
                color: "#164D60",
                border: "none",
                borderRadius: "30px",
                cursor: "pointer",
                boxShadow: "0 4px 12px rgba(0, 0, 0, 0.2)",
                display: "flex",
                alignItems: "center",
                gap: "10px",
              }}
              onClick={toggleCaregiverLearnMore}
            >
              {showCaregiverLearnMore ? "Hide Details" : "Learn More"}
              <span
                style={{
                  display: "inline-block",
                  width: "12px",
                  height: "12px",
                  borderTop: "2px solid #164D60",
                  borderRight: "2px solid #164D60",
                  transform: "rotate(45deg)",
                }}
              ></span>
            </button>
          </div>
        </div>

        {/* Dynamic "Learn More" Content for Patients */}
        {showPatientLearnMore && (
          <div
            style={{
              marginTop: "20px",
              padding: "15px",
              backgroundColor: "#fff",
              borderRadius: "8px",
              boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
              maxWidth: "800px",
              margin: "auto",
            }}
          >
            <h2
              style={{
                fontSize: "20px",
                fontWeight: "bold",
                marginBottom: "10px",
              }}
            >
              More About Patient Services
            </h2>
            <ForPatientsPage></ForPatientsPage>
          </div>
        )}

        {/* Dynamic "Learn More" Content for Caregivers */}
        {showCaregiverLearnMore && (
          <div
            style={{
              marginTop: "20px",
              padding: "15px",
              backgroundColor: "#fff",
              borderRadius: "8px",
              boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
              maxWidth: "800px",
              margin: "auto",
            }}
          >
            <h2
              style={{
                fontSize: "20px",
                fontWeight: "bold",
                marginBottom: "10px",
              }}
            >
              More About Caregiver Services
            </h2>
            <ForCaregiversPage></ForCaregiversPage>
          </div>
        )}

        {/* Video Section */}
        <div className="flex flex-col md:flex-row items-center justify-between bg-[#173C4E] text-white rounded-lg overflow-hidden shadow-lg">
          {/* Left Section with Image and Text */}
          <div
            className="w-full md:w-1/2 h-64 md:h-[500px] flex items-center justify-center px-6 relative"
            style={{
              backgroundImage: `url('/i4.jpeg')`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundColor: "rgba(22, 53, 96, 0.3)",
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
                style={{ height: "500px" }}
              >
                <source
                  src="https://www.youtube.com/watch?v=i2pMEhEzbEs"
                  type="video/mp4"
                />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
        )}
      </div>
      <FAQ />
      {/* Footer Section */}
      <Footer />
    </div>
  );
};

export default HowItWorks;
