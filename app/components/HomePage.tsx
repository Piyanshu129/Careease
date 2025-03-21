// import React from 'react';

// const HomePage: React.FC = () => {
//   return (
//     <div className="flex items-center justify-center h-screen bg-gray-50">
//       <div className="text-center bg-white shadow-md rounded-lg p-8 max-w-md">
//         <h1 className="text-2xl font-bold mb-4">
//           Personalised in-home health care at your fingertips
//         </h1> 
//         <p className="text-gray-600 mb-6">
//           Connecting you with trusted care givers for personalised care
//         </p>
//         <div className="flex space-x-4 justify-center">
//           <button className="bg-blue-500 text-white px-6 py-2 rounded-md hover:bg-blue-600">
//             Find Caregiver
//           </button>
//           <button className="bg-gray-200 text-gray-800 px-6 py-2 rounded-md hover:bg-gray-300">
//             Provide Care
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default HomePage;




// import React from 'react';
//  import './HomePage.css'; 
//  const HomePage: React.FC = () => {
//    return ( <div className="home-container">
//      {/* Main Content Container */} 
//      <div className="content-container">
//        {/* Background Illustration */}
//        <div className="background-illustration"> 
//        <img src="/i1.jpeg" // Replace with your image path
//         alt="Background Illustration" className="background-image" />
//          </div> {/* Content */} 
//          <h1 className="title">Personalised in-home health care at your fingertips</h1> <p className="subtitle">Connecting you with trusted care givers for personalised care</p> {/* Buttons */} 
//          <div className="button-container"> <button className="primary-button">Find Caregiver</button> <button className="secondary-button">Provide Care</button> </div> </div> </div> ); };
//           export default HomePage;

import React from 'react';
import './HomePage.css';

const HomePage: React.FC = () => {
  return (
    <div className="container">
      {/* Header Section */}
      <div className="header">
        <img
          src="/i7.jpeg"
          alt="Background"
          className="backgroundImage"
        />
        <div className="lightOverlay"></div>
        <div className="headerTextContainer">
          <h1 className="headerTitle">
            Personalised in-home health care at your fingertips
          </h1>
          <p className="headerSubtitle">
            Connecting you with trusted caregivers for personalised care
          </p>
          <div className="headerButtons">
            <button className="primaryButton">Find Caregiver</button>
            <br></br>
            <button className="secondaryButton">Provide Care</button>
          </div>
        </div>
      </div>

      {/* Cards Section */}
      
    </div>
  );
};

export default HomePage;
