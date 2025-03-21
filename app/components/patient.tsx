import React from "react";

const ForPatientsPage: React.FC = () => {
  return (
    <div style={styles.container}>
      <h1 style={styles.header}>For Patients</h1>
      <div style={styles.stepsContainer}>
        {steps.map((step, index) => (
          <div key={index} style={styles.step}>
            <div style={styles.stepNumber}>{step.number}</div>
            <div>
              <h2 style={styles.stepTitle}>{step.title}</h2>
              <p style={styles.stepDescription}>{step.description}</p>
            </div>
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
    margin: "0 auto",
    padding: "20px",
    fontFamily: "'Arial', sans-serif",
    backgroundColor: "#f9f9f9",
  },
  header: {
    textAlign: "center" as const,
    fontSize: "24px",
    fontWeight: "bold" as const,
    marginBottom: "20px",
  },
  stepsContainer: {
    display: "flex",
    flexDirection: "column" as const,
    gap: "20px",
  },
  step: {
    display: "flex",
    alignItems: "start" as const,
    backgroundColor: "#fff",
    borderRadius: "8px",
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
    padding: "15px",
    gap: "15px",
  },
  stepNumber: {
    width: "40px",
    height: "40px",
    backgroundColor: "#007bff",
    color: "#fff",
    fontWeight: "bold" as const,
    fontSize: "18px",
    borderRadius: "50%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  stepTitle: {
    fontSize: "18px",
    fontWeight: "bold" as const,
    marginBottom: "5px",
  },
  stepDescription: {
    fontSize: "14px",
    color: "#555",
  },
};

export default ForPatientsPage;
