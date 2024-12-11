import React, { useState } from "react";
import { Link } from "react-router-dom";

const Resume = () => {
  const [resumeFile, setResumeFile] = useState(null);
  const [analysisResult, setAnalysisResult] = useState(null);
  const [error, setError] = useState("");

  const handleFileUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      if (file.name && file.name.toLowerCase().includes("resume")) {
        setResumeFile(file);
        setError("");
      } else {
        setResumeFile(null);
        setError("Please upload a file with 'resume' in its name.");
      }
      setAnalysisResult(null);
    }
  };

  const analyzeResume = (text) => {
    const keywords = [
      "team",
      "leadership",
      "skills",
      "experience",
      "education",
      "project",
      "achievements",
      "goal",
    ];
    let score = 0;

    keywords.forEach((keyword) => {
      const regex = new RegExp(`\\b${keyword}\\b`, "gi");
      const matches = text.match(regex);
      if (matches) {
        score += matches.length;
      }
    });

    const wordCount = text.split(" ").length;
    const normalizedScore = Math.min(100, Math.floor((score + wordCount / 10) / 2));

    return normalizedScore;
  };

  const handleAnalyze = () => {
    if (!resumeFile) {
      alert("Please upload a valid resume file with 'resume' in its name.");
      return;
    }

    const reader = new FileReader();
    reader.onload = (event) => {
      const textContent = event.target.result;
      const score = analyzeResume(textContent);
      setAnalysisResult({ score });
    };
    reader.readAsText(resumeFile);
  };

  const handleLoginClick = () => {
    alert("Logout clicked");
  };

  const handleProfileClick = () => {
    alert("Profile clicked");
  };

  const styles = {
    container: {
      fontFamily: "Arial, sans-serif",
      backgroundColor: "#333",
      minHeight: "100vh",
      color: "#fff",
    },
    navbar: {
      backgroundColor: "#000",
      padding: "20px",
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      boxShadow: "0 2px 4px rgba(0, 0, 0, 0.7)",
    },
    navTitle: {
      fontSize: "20px",
      fontWeight: "bold",
      color: "#fff",
      textDecoration: "none",
    },
    navLinks: {
      listStyleType: "none",
      display: "flex",
      gap: "20px",
      margin: 0,
      padding: 0,
    },
    headerLink: {
      color: "#fff",
      textDecoration: "none",
    },
    headerButtons: {
      display: "flex",
      gap: "10px",
    },
    loginBtn: {
      cursor: "pointer",
      backgroundColor: "#fff",
      color: "#000",
      padding: "8px 16px",
      border: "none",
      borderRadius: "4px",
    },
    card: {
      backgroundColor: "#000",
      padding: "20px",
      borderRadius: "8px",
      boxShadow: "0 4px 8px rgba(0, 0, 0, 0.6)",
      width: "400px",
      textAlign: "center",
      margin: "30px auto",
    },
    header: {
      marginBottom: "10px",
      fontSize: "24px",
      fontWeight: "bold",
    },
    uploadSection: {
      margin: "20px 0",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      flexDirection: "column",
    },
    fileInput: {
      margin: "10px",
      padding: "8px",
      border: "1px solid #555",
      borderRadius: "4px",
      backgroundColor: "#555",
      color: "#fff",
    },
    button: {
      cursor: "pointer",
      backgroundColor: "#007bff",
      color: "#fff",
      padding: "10px 20px",
      border: "none",
      borderRadius: "5px",
      margin: "10px 0",
    },
    errorMessage: {
      color: "red",
      marginBottom: "10px",
    },
    resultSection: {
      marginTop: "20px",
      padding: "10px",
      backgroundColor: "#555",
      borderRadius: "5px",
    },
  };

  return (
    <div style={styles.container}>
      <div style={styles.navbar}>
        <Link to="/homepage2" style={styles.navTitle}>
          We-Link
        </Link>
        <ul style={styles.navLinks}>
          <li>
            <Link to="/career-test" style={styles.headerLink}>
              Career Test
            </Link>
          </li>
          <li>
            <Link to="/careers" style={styles.headerLink}>
              Careers
            </Link>
          </li>
          <li>
            <Link to="/resume" style={styles.headerLink}>
              Upload
            </Link>
          </li>
          <li>
            <Link to="/degrees" style={styles.headerLink}>
              Degrees
            </Link>
          </li>
          <li>
            <Link to="/aboutus" style={styles.headerLink}>
              About Us
            </Link>
          </li>
        </ul>
        <div style={styles.headerButtons}>
          <button style={styles.loginBtn} onClick={handleLoginClick}>
            Logout
          </button>
          <button style={styles.loginBtn} onClick={handleProfileClick}>
            Profile
          </button>
        </div>
      </div>
      <div style={styles.card}>
        <header style={styles.header}>Upload & Analyze Your Resume</header>
        <div style={styles.uploadSection}>
          <input type="file" onChange={handleFileUpload} style={styles.fileInput} />
          {error && <p style={styles.errorMessage}>{error}</p>}
          <button style={styles.button} onClick={handleAnalyze}>
            Analyze Resume
          </button>
        </div>
        {analysisResult && (
          <div style={styles.resultSection}>
            <h4>Analysis Results</h4>
            <p>Resume Score: {analysisResult.score}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Resume;
