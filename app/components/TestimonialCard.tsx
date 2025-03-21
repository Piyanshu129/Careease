"use client"; // Add this directive at the very top of the file

import React, { useState } from "react";
import "./TestimonialSlider.css";

const testimonials = [
  {
    text: "This site makes finding qualified caregivers simple and stress-free. It's easy to use, with detailed profiles and helpful filters.",
    name: "Victoria Wotton",
    rating: 5,
    image: "/m1.jpeg", // Replace with actual image URL
  },
  {
    text: "CareEase is a lifesaver! The platform helped us find the perfect caregiver for our needs quickly and easily.",
    name: "John Smith",
    rating: 5,
    image: "m2.jpeg", // Replace with actual image URL
  },
  // Add more testimonials as needed
];

const TestimonialSlider: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextReview = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  return (
    <div className="testimonial-slider-container">
      <div className="testimonial-card">
        <div className="testimonial-quote-icon">“</div>
        <div className="testimonial-content">
          <img
            className="testimonial-image"
            src={testimonials[currentIndex].image}
            alt={testimonials[currentIndex].name}
          />
          <div className="testimonial-text">
            <h2>Easy and helpful</h2>
            <p>{testimonials[currentIndex].text}</p>
            <div className="testimonial-rating">
              {Array(testimonials[currentIndex].rating)
                .fill(0)
                .map((_, index) => (
                  <span key={index}>&#9733;</span> // Unicode for star
                ))}
            </div>
            <p className="testimonial-name">{testimonials[currentIndex].name}</p>
          </div>
        </div>
        <button className="next-button" onClick={nextReview}>
          &#8250; {/* Unicode for the right arrow */}
        </button>
        <div className="testimonial-footer">
          <span className="testimonial-brand">CareEase.</span>
        </div>
      </div>
    </div>
  );
};

export default TestimonialSlider;
