import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const CareerTest = () => {
  const navigate = useNavigate();

  const specializations = [
    "Engineering",
    "Medicine",
    "Law",
    "Business",
    "Arts",
    "Science",
    "Technology",
    "Design",
    "Education",
    "Sports",
  ];

  const questions = [
    {
      question: "What is your preferred work style?",
      options: ["Teamwork", "Independence", "Leadership", "Support"],
    },
    {
      question: "What motivates you the most at work?",
      options: ["Salary", "Recognition", "Passion", "Team Collaboration"],
    },
    {
      question: "Which skill do you excel in?",
      options: ["Creativity", "Analytical Thinking", "Communication", "Technical Expertise"],
    },
    {
      question: "What type of tasks do you enjoy?",
      options: ["Problem Solving", "Organizing", "Inventing", "Helping Others"],
    },
    {
      question: "What is your preferred work environment?",
      options: ["Office", "Remote", "Hybrid", "Field"],
    },
    {
      question: "Do you prefer working with people or technology?",
      options: ["People", "Technology", "Both", "Neither"],
    },
    {
      question: "What is your approach to challenges?",
      options: ["Logical", "Creative", "Practical", "Emotional"],
    },
    {
      question: "What kind of work-life balance do you seek?",
      options: ["Strict Balance", "Flexible", "Work-Focused", "Life-Focused"],
    },
    {
      question: "What kind of impact do you want to make?",
      options: ["Global", "Local", "Team", "Personal"],
    },
    {
      question: "How do you prefer to learn?",
      options: ["Hands-On", "Reading", "Listening", "Collaborating"],
    },
  ];

  const [selectedSpecialization, setSelectedSpecialization] = useState(null);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState({});
  const [timer, setTimer] = useState(60);
  const [showReview, setShowReview] = useState(false);

  useEffect(() => {
    if (timer === 0 && selectedSpecialization) {
      handleNext();
    }
    const interval = setInterval(() => {
      setTimer((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);

    return () => clearInterval(interval);
  }, [timer, selectedSpecialization]);

  const handleSpecializationSelect = (specialization) => {
    setSelectedSpecialization(specialization);
  };

  const handleOptionSelect = (option) => {
    setSelectedAnswers({
      ...selectedAnswers,
      [currentQuestionIndex]: option,
    });
  };

  const handleNext = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex((prev) => prev + 1);
      setTimer(60);
    } else {
      setShowReview(true);
    }
  };

  const handlePrevious = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex((prev) => prev - 1);
      setTimer(60);
    }
  };

  const handleSubmit = () => {
    setShowReview(true);
  };

  const styles = {
    body: {
      margin: "0",
      padding: "0",
      fontFamily: "Arial, sans-serif",
      backgroundColor: "#f4f4f4",
      minHeight: "100vh",
    },
    navbar: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      padding: "10px 50px", // Increased padding for better appearance
      backgroundColor: "#333",
      color: "#fff",
      position: "fixed",
      top: "0",
      width: "200%", // Ensure the navbar spans the full width
      boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)", // Add shadow for better visuals
    },
    
    navLinks: {
      display: "flex",
      gap: "15px",
    },
    link: {
      color: "#fff",
      textDecoration: "none",
      fontSize: "16px",
    },
    main: {
      marginTop: "80px",
      textAlign: "center",
      padding: "20px",
    },
    card: {
      backgroundColor: "#fff",
      borderRadius: "8px",
      padding: "20px",
      margin: "20px auto",
      width: "90%",
      maxWidth: "600px",
      boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
    },
    cardGrid: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))",
      gap: "20px",
      padding: "20px",
    },
    cardItem: {
      backgroundColor: "#fff",
      padding: "20px",
      borderRadius: "8px",
      boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
      cursor: "pointer",
      textAlign: "center",
      fontSize: "16px",
      fontWeight: "bold",
      transition: "transform 0.3s",
    },
    cardItemHover: {
      transform: "scale(1.05)",
    },
    timer: {
      fontSize: "16px",
      color: "#e74c3c",
    },
    options: {
      listStyleType: "none",
      padding: "0",
    },
    option: {
      padding: "10px 15px",
      margin: "10px 0",
      backgroundColor: "#f9f9f9",
      borderRadius: "5px",
      cursor: "pointer",
      border: "1px solid #ddd",
      transition: "background-color 0.3s",
    },
    optionSelected: {
      backgroundColor: "#333",
      color: "#fff",
    },
    buttons: {
      display: "flex",
      justifyContent: "space-between",
      marginTop: "20px",
    },
    button: {
      padding: "10px 20px",
      backgroundColor: "#fff",
      color: "#333",
      border: "1px solid #333",
      borderRadius: "5px",
      cursor: "pointer",
      transition: "background-color 0.3s",
    },
    buttonSubmit: {
      backgroundColor: "#333",
      color: "#fff",
    },
  };

  return (
    <div style={styles.body}>
      <header style={styles.navbar}>
        <div>WE-LINK</div>
        <nav style={styles.navLinks}>
          <a href="#" style={styles.link}>
            Home
          </a>
          <a href="#" style={styles.link}>
            Career Test
          </a>
          <a href="#" style={styles.link}>
            About Us
          </a>
        </nav>
      </header>

      <main style={styles.main}>
        {!selectedSpecialization ? (
          <div style={styles.cardGrid}>
            {specializations.map((spec, index) => (
              <div
                key={index}
                style={styles.cardItem}
                onClick={() => handleSpecializationSelect(spec)}
              >
                {spec}
              </div>
            ))}
          </div>
        ) : !showReview ? (
          <div style={styles.card}>
            <div style={styles.timer}>Time Left: {timer}s</div>
            <h2>{questions[currentQuestionIndex].question}</h2>
            <ul style={styles.options}>
              {questions[currentQuestionIndex].options.map((option, index) => (
                <li
                  key={index}
                  style={
                    selectedAnswers[currentQuestionIndex] === option
                      ? { ...styles.option, ...styles.optionSelected }
                      : styles.option
                  }
                  onClick={() => handleOptionSelect(option)}
                >
                  {option}
                </li>
              ))}
            </ul>
            <div style={styles.buttons}>
              <button
                style={styles.button}
                onClick={handlePrevious}
                disabled={currentQuestionIndex === 0}
              >
                Previous
              </button>
              {currentQuestionIndex === questions.length - 1 ? (
                <button
                  style={{ ...styles.button, ...styles.buttonSubmit }}
                  onClick={handleSubmit}
                >
                  Submit
                </button>
              ) : (
                <button style={styles.button} onClick={handleNext}>
                  Next
                </button>
              )}
            </div>
          </div>
        ) : (
          <div style={styles.card}>
            <h2>Review Your Answers</h2>
            <ul>
              {questions.map((q, index) => (
                <li key={index}>
                  <strong>{q.question}</strong>
                  <br />
                  Answer: {selectedAnswers[index] || "No answer selected"}
                </li>
              ))}
            </ul>
            <button style={styles.button} onClick={() => navigate("/homepage2")}>Go to Homepage</button>
          </div>
        )}
      </main>
    </div>
  );
};

export default CareerTest;