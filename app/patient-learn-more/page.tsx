"use client";

import React, { useState } from "react";

const ForPatientsPage: React.FC = () => {
  const [activeStep, setActiveStep] = useState<number | null>(null);

  const toggleStep = (stepNumber: number) => {
    setActiveStep(activeStep === stepNumber ? null : stepNumber);
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.header}>For Patients</h1>
      <div style={styles.stepsContainer}>
        {steps.map((step) => (
          <div key={step.number} style={styles.step}>
            <div style={styles.stepHeader} onClick={() => toggleStep(step.number)}>
              <div style={styles.stepNumber}>{step.number}</div>
              <div style={styles.stepTitle}>{step.title}</div>
              <div style={styles.toggleIcon}>{activeStep === step.number ? "▲" : "▼"}</div>
            </div>
            {activeStep === step.number && (
              <div style={styles.stepDescription}>{step.description}</div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

const steps = [
  {
    number: 1,
    title: "Sign Up",
    description: "Sign up with basic info—quick, easy, and secure.",
  },
  {
    number: 2,
    title: "Select a service",
    description:
      "Explore our home-care services: nursing, elderly care, post-surgery support, and more. Filter by caregiver expertise.",
  },
  {
    number: 3,
    title: "Find a right caregiver",
    description:
      "Search caregivers by location, service, and availability. View profiles with qualifications, experience, and patient reviews.",
  },
  {
    number: 4,
    title: "Book and schedule",
    description:
      "Accept the booking, confirm the service, and get notified about the appointment.",
  },
  {
    number: 5,
    title: "Receive quality care at home",
    description:
      "Relax as your vetted caregiver arrives, delivering personalized care for your comfort and safety.",
  },
  {
    number: 6,
    title: "Track service progress",
    description:
      "Patients can track the service details and progress through the app.",
  },
  {
    number: 7,
    title: "Seamless payment",
    description:
      "Payments are processed automatically through the app after the service is completed.",
  },
  {
    number: 8,
    title: "Rate and Review",
    description:
      "After the service is completed, share your experience by leaving a rating and review for the caregiver. This helps maintain our high standards of care.",
  },
];

const styles = {
  container: {
    maxWidth: "800px",
    margin: "20px auto",
    padding: "20px",
    fontFamily: "'Arial', sans-serif",
    backgroundColor: "#f9f9f9",
    borderRadius: "8px",
    boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
  },
  header: {
    textAlign: "center" as const,
    fontSize: "24px",
    fontWeight: "bold" as const,
    marginBottom: "20px",
    color: "#173C4E",
  },
  stepsContainer: {
    display: "flex",
    flexDirection: "column" as const,
    gap: "10px",
  },
  step: {
    backgroundColor: "#eaf1f8",
    borderRadius: "8px",
    overflow: "hidden",
    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
    transition: "all 0.3s ease",
  },
  stepHeader: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "10px 15px",
    cursor: "pointer",
  },
  stepNumber: {
    width: "30px",
    height: "30px",
    backgroundColor: "#173C4E",
    color: "#fff",
    fontWeight: "bold" as const,
    fontSize: "16px",
    borderRadius: "50%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  stepTitle: {
    fontSize: "16px",
    fontWeight: "bold" as const,
    color: "#173C4E",
    flex: 1,
    marginLeft: "10px",
  },
  toggleIcon: {
    fontSize: "14px",
    fontWeight: "bold" as const,
    color: "#173C4E",
  },
  stepDescription: {
    backgroundColor: "#fff",
    padding: "10px 15px",
    fontSize: "14px",
    color: "#555",
    borderTop: "1px solid #ddd",
  },
};

export default ForPatientsPage;
