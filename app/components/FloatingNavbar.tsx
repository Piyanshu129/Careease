import React from "react";
import Link from "next/link"; // Import the Next.js Link component

const FloatingCenteredNavbar: React.FC = () => {
  return (
    <header
      className="fixed top-8 left-1/2 transform -translate-x-1/2 shadow-lg rounded-lg z-50 w-[90%] md:w-[70%]"
      style={{ backgroundColor: "rgba(23,60,78,0.9" }}
    >
      <div className="max-w-full mx-auto px-6 sm:px-10 lg:px-16">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <img
              src="/logo.png"
              alt="Nursee Logo"
              className="h-10 w-auto"
            />
            <span className="ml-2 text-2xl font-bold" style={{ color: "#FFFFFF" }}>
              CareEase
            </span>
          </div>
          <br></br>

          {/* Navigation Links */}
          <nav className="hidden md:flex space-x-8 items-center">
  <a href="/" className="text-white hover:text-blue-300">
    Home
  </a>
  <br></br>
  <br></br>
  <br></br>

  <a href="/Services" className="text-white hover:text-blue-300">
    Services
  </a>
  <br></br>
  <br></br>
  <br></br>


  <Link href="/HowItWorks" className="text-white hover:text-blue-300">
    How it works
  </Link>
</nav>

          <br></br>

          {/* Sign In and Sign Up Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <button
              style={{
                padding: "8px 15px",
                backgroundColor: "#a8d5a2",
                border: "none",
                borderRadius: "20px",
                fontWeight: "bold",
                cursor: "pointer",
                color: "#2c3e50",
              }}
            >
              Sign in
            </button>
            {/* <button
              style={{
                padding: "8px 15px",
                backgroundColor: "#8ccf8a",
                border: "none",
                borderRadius: "20px",
                fontWeight: "bold",
                cursor: "pointer",
                color: "#2c3e50",
              }}
            >
              Sign up
            </button> */}
          </div>

          {/* Social Icons */}
          {/* <div className="flex space-x-4">
            <a href="#" className="text-white hover:text-blue-300">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="#" className="text-white hover:text-blue-300">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="#" className="text-white hover:text-blue-300">
              <i className="fab fa-youtube"></i>
            </a>
          </div> */}
        </div>
      </div>
    </header>
  );
};

export default FloatingCenteredNavbar;
