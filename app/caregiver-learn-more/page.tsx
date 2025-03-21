"use client";

import React, { useState } from "react";

const ForCaregiversPage: React.FC = () => {
  const [activeStep, setActiveStep] = useState<number | null>(null);

  const toggleStep = (stepNumber: number) => {
    setActiveStep(activeStep === stepNumber ? null : stepNumber);
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.header}>For Caregivers</h1>
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
    title: "Apply and get vetted",
    description:
      "Sign up as a caregiver, create your profile, and upload qualifications. Select services to offer. We’ll review and conduct background checks.",
  },
  {
    number: 2,
    title: "Set your schedule",
    description: "Set your availability and manage hours flexibly once approved.",
  },
  {
    number: 3,
    title: "Connect with patients",
    description:
      "Patients can view your profile, qualifications, and availability, book directly, and communicate their needs.",
  },
  {
    number: 4,
    title: "Book and schedule",
    description:
      "Accept the booking, confirm the service, and get notified about the appointment.",
  },
  {
    number: 5,
    title: "Provide care",
    description:
      "Provide top-quality home care, from nursing to recovery support, with all necessary info before each visit.",
  },
  {
    number: 6,
    title: "Track service progress",
    description: "Caregivers can track the service details and progress through the app.",
  },
  {
    number: 7,
    title: "Caregiver feedback",
    description:
      "Caregivers can also rate the patient, ensuring a mutual trust system on the platform.",
  },
  {
    number: 8,
    title: "Earn and grow",
    description:
      "Get paid promptly for the services you provide. As you earn positive reviews and ratings, you’ll unlock more opportunities and grow your client base.",
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

export default ForCaregiversPage;
