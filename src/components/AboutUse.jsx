import React from 'react';
import { useNavigate } from 'react-router-dom';

const AboutUs = () => {
  const navigate = useNavigate(); // Initialize the navigate hook

  const handleProfileClick = () => {
    navigate('/homepage2'); // Navigate to the desired route
  };

  const handleLoginClick = () => {
    navigate('/'); // Navigate to the login page (or home page)
  };

  return (
    <div>
      <style>
        {`
          body {
            margin: 0;
            font-family: Arial, sans-serif;
            background-color: #f4f7fb;
          }

          .header {
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 20px;
            background-color: #000;
            color: white;
          }

          .header .logo {
            font-size: 24px;
            font-weight: bold;
            cursor: pointer;
          }

          .navbar {
            display: flex;
            align-items: center;
          }

          .navbar ul {
            list-style: none;
            margin: 0;
            padding: 0;
            display: flex;
            gap: 20px;
          }

          .navbar li {
            display: inline;
          }

          .navbar a {
            text-decoration: none;
            color: white;
            font-size: 16px;
            font-weight: normal;
          }

          .navbar a:hover {
            color: #ffcc00;
          }

          .header-buttons {
            display: flex;
            gap: 10px;
          }

          .login-btn, .test-btn {
            padding: 10px 20px;
            background-color: white;
            color: black;
            border: none;
            cursor: pointer;
          }

          .section-title {
            text-align: center;
            margin: 40px 0;
            font-size: 36px;
            font-weight: bold;
            color: #333;
          }

          .card-container {
            display: flex;
            justify-content: center;
            gap: 30px;
            flex-wrap: wrap;
            margin-bottom: 50px;
          }

          .card {
            background-color: white;
            padding: 20px;
            width: 250px;
            border-radius: 8px;
            box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
            text-align: center;
            transition: transform 0.3s;
          }

          .card:hover {
            transform: scale(1.05);
          }

          .card img {
            max-width: 100%;
            border-radius: 8px;
            margin-bottom: 15px;
          }

          .card-title {
            font-size: 18px;
            font-weight: bold;
            color: #333;
            margin-bottom: 15px;
          }

          .card-description {
            font-size: 14px;
            color: #555;
          }

          .why-trust-us-container {
            background-color: #000;
            text-align: center;
            padding: 50px 20px;
            color: white;
          }

          .why-trust-us {
            display: flex;
            justify-content: space-evenly;
            align-items: center;
            margin-top: 30px;
          }

          .why-trust-us div {
            width: 30%;
          }

          .join-container {
            background-color: #e9f4f8;
            padding: 50px 20px;
            text-align: center;
          }

          .join-container button {
            padding: 12px 25px;
            font-size: 16px;
            background-color: #000;
            color: white;
            border: none;
            border-radius: 5px;
            cursor: pointer;
          }
        `}
      </style>

      {/* Header Section */}
      <header className="header">
        <div className="logo" onClick={handleProfileClick}>WE-LINK</div>
         <nav className="navbar">
          <ul>
          <li><a href="/career-test" className="header-link">Career Test</a></li>
              <li><a href="/careers" className="header-link">Careers</a></li>
              <li><a href="/degrees" className="header-link">Degrees</a></li>
              <li><a href="/resume" className="header-link">Upload</a></li>
              <li><a href="/aboutus" className="header-link">AboutUs</a></li>
          </ul>
        </nav>
        <div className="header-buttons">
          <button className="login-btn" onClick={handleLoginClick}>Logout</button>
          <button className="login-btn" onClick={handleProfileClick}>Profile</button>
        </div>
      </header>

      {/* "For Every Career Stage" Section */}
      <div className="section-title">For Every Career Stage</div>
      <div className="card-container">
        <div className="card">
          <img src="https://uploads-ssl.webflow.com/5ce8520e4bc6885dbf33246c/5ebd8cbdc18f94735f195c21_5e7b93aef10c214efa2ceb13_people-1-p-500.jpeg" alt="Working Professionals" />
          <div className="card-title">Working Professionals</div>
          <div className="card-description">
            Be your best self at work. Learn what makes you unique and how well-suited you are to your past, current, and future career choices.
          </div>
        </div>
        <div className="card">
          <img src="https://uploads-ssl.webflow.com/5ce8520e4bc6885dbf33246c/5ebd8bc45001bee4e4f9d979_5e7b93afd4a2af368b564b2f_people-3%202.jpg" alt="Career Changers" />
          <div className="card-title">Career Changers</div>
          <div className="card-description">
            Looking to make a career change? Thinking about going back to school? We'll point you in the right direction.
          </div>
        </div>
        <div className="card">
          <img src="https://uploads-ssl.webflow.com/5ce8520e4bc6885dbf33246c/5ebd8d3409b0510e3f67a9cd_5e7b93af7941d95d790809cd_people-2-p-500.jpeg" alt="College Students & Graduates" />
          <div className="card-title">College Students & Graduates</div>
          <div className="card-description">
            Unsure about what to do after college? See the range of careers you can pursue with your interests, personality, and education.
          </div>
        </div>
      </div>

      {/* "Why Trust Us?" Section */}
      <div className="why-trust-us-container">
        <h2>Why trust us?</h2>
        <div className="why-trust-us">
          <div>
            <h3>Built by Data Scientists</h3>
            <p>Our questions and algorithms are unique to us and built on decades of study in vocational testing.</p>
          </div>
          <div>
            <h3>Over 400 Million Questions Answered</h3>
            <p>Our algorithms continuously improve with millions of daily data points to give you real-time accuracy.</p>
          </div>
          <div>
            <h3>Your Data is Safe With Us</h3>
            <p>We firmly believe that you own your data, not us. We never sell your personal data to third parties.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
