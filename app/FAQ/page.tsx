"use client";
import React, { useState } from "react";
import FloatingCenteredNavbar from "../components/FloatingNavbar";
import Footer from "../components/Footer";
import "./FAQ.css";

const FAQ: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "How do I book a caregiver through your platform?",
      answer:
        "You can easily book by signing up, selecting the type of care needed, browsing caregiver profiles, and choosing your preferred caregiver and appointment time.",
    },
    {
      question: "What types of care services do you offer?",
      answer:
        "We offer a wide range of services, including nursing care, elderly care, post-surgery assistance, disability support, and companionship.",
    },
    {
      question: "Are the caregivers on your platform vetted and qualified?",
      answer:
        "Yes, all our caregivers go through thorough background checks, verification of qualifications, and a detailed review process to ensure top-quality service.",
    },
    {
      question: "Can I choose the caregiver I prefer?",
      answer:
        "Absolutely! You can browse caregiver profiles, review qualifications, and select the one that best fits your needs.",
    },
    {
      question: "How do I know if a caregiver is available?",
      answer:
        "Each caregiver’s profile shows their availability, which you can check before booking. You can also filter search results based on your preferred schedule.",
    },
    {
      question: "Can I modify or cancel my booking?",
      answer:
        "Yes, you can modify or cancel bookings within our platform. We recommend doing so within the timeframe specified in our cancellation policy.",
    },
    {
      question: "How does payment work, and is it secure?",
      answer:
        "Payments are made securely through our platform using encrypted technology. You will only be charged after services have been rendered or as per your chosen payment plan.",
    },
  ];

  const toggleAccordion = (index: number) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  return (
    <div style={{ fontFamily: "Arial, sans-serif", backgroundColor: "#f9f9fb", color: "#333" }}>
      {/* Floating Navbar */}
      <FloatingCenteredNavbar />

      {/* Main Content */}
      <div className="faq-container">
        <br />
        <h1 className="faq-header">FAQ's</h1>
        <div className="faq-list">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className={`faq-item ${activeIndex === index ? "active" : ""}`}
              onClick={() => toggleAccordion(index)}
            >
              <div className="faq-question">
                <div className="faq-icon">{activeIndex === index ? "▼" : "○"}</div>
                <span>{faq.question}</span>
              </div>
              {activeIndex === index && <div className="faq-answer">{faq.answer}</div>}
            </div>
          ))}
        </div>
      </div>

      {/* Footer Section */}
      <Footer />
    </div>
  );
};

export default FAQ;
