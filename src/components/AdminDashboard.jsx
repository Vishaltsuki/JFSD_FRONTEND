import React from "react";
import { useNavigate } from "react-router-dom";
import AboutUs from './AboutUse';

function HomePage1() {
  const navigate = useNavigate(); // Initialize useNavigate hook

  const handleLoginClick = () => {
    navigate("/"); // Navigate to the /login page
  };

  const handleLogoClick = () => {
    navigate("/homepage2"); // Navigate to the home page
  };

  const handleGetStartedClick = () => {
    navigate('/aboutus'); // Navigate to the login page
  };

  const handleProfileClick = () => {
    navigate('/#');
  };

  return (
    <div>
      <style>
        {`
          body {
            margin: 0;
            font-family: Arial, sans-serif;
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

          .navbar ul {
            list-style: none;
            display: flex;
            gap: 20px;
            margin: 0;
            padding: 0;
          }

          .navbar ul li a {
            color: white;
            text-decoration: none;
          }

          .header-buttons {
            display: flex;
            gap: 15px;
          }

          .login-btn, .test-btn {
            padding: 10px 20px;
            border: none;
            cursor: pointer;
          }

          .test-btn {
            background-color: white;
            color: black;
            font-weight: bold;
          }

          .hero {
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 50px;
            background-color: #111;
            color: white;
          }

          .hero-content h1 {
            font-size: 48px;
          }

          .hero-content p {
            font-size: 18px;
            margin: 20px 0;
          }

          .hero-buttons button {
            padding: 10px 20px;
            margin: 5px;
            border: none;
            cursor: pointer;
          }

          .get-started-btn {
            background-color: white;
            color: black;
            font-weight: bold;
          }

          .learn-more-btn {
            color: white; /* Keeps the text color white */
            border: 1px solid white; /* White border */
            background-color: transparent; /* Makes the background transparent */
          }

          .hero-image {
            display: flex;
            flex-direction: column;
            gap: 15px;
          }

          .features {
            padding: 50px;
            background-color: white;
            text-align: center;
          }

          .features h2 {
            margin-bottom: 30px;
          }

          .feature-list {
            display: flex;
            justify-content: space-between;
            gap: 20px;
          }

          .feature {
            flex: 1;
            padding: 20px;
          }
/* How It Works Section */
/* How It Works Section */
.how-it-works {
  background-color: black;
  color: white;
  padding: 60px 20px;
  text-align: center;
}

.how-it-works h2 {
  font-size: 36px;
  margin-bottom: 40px;
}

.steps {
  display: flex;
  flex-direction: column;
  gap: 30px;
  animation: fadeIn 2s ease-out; /* Fade in effect for the entire section */
}

.step {
  background-color: rgba(255, 255, 255, 0.1);
  padding: 20px;
  border-radius: 10px;
  width: 97%;
  min-width: 200px;
  animation: slideUp 1s ease-out; /* Slide up effect on page load */
  text-align: left;
  transition: transform 0.3s ease, background-color 0.3s ease; /* Smooth transitions for hover effects */
}

.step h3 {
  font-size: 24px;
  margin-bottom: 10px;
}

.step p {
  font-size: 14px;
  line-height: 1.6;
}

/* Animations */
@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

@keyframes slideUp {
  from {
    transform: translateY(50px);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
}

/* Hover effects */
.step:hover {
  transform: scale(1.05); /* Slightly enlarges the element */
  background-color: rgba(255, 255, 255, 0.3); /* Changes background color */
}

`}
      </style>
      <div className="homepage">
        {/* Header Section */}
        <header className="header">
          <div className="logo" onClick={handleLogoClick}>WE-LINK</div>
          <nav className="navbar">
            <ul>
              <li><a href="/#" className="header-link">Career Test</a></li>
              <li><a href="/#" className="header-link">For Organizations</a></li>
              <li><a href="/#" className="header-link">Careers</a></li>
              <li><a href="/#" className="header-link">Degrees</a></li>
              <li><a href="/#" className="header-link">Community</a></li>
              <li><a href="/#" className="header-link">AboutUs</a></li>
            </ul>
          </nav>
          <div className="header-buttons">
            <button className="login-btn" onClick={handleLoginClick}>Logout</button>
            <button className="login-btn" onClick={handleProfileClick}>Profile</button>
          </div>
        </header>
<br></br><br></br><br></br><br></br>
        {/* Hero Section */}
        <section className="hero">
            <br></br>
          <div className="hero-content">
            <h1>Welcome to Admin Dashboard</h1>
            <p>Say hello to We-Link, the world's leading career advancement platform.</p>
            <div className="hero-buttons">
         </div>
          </div>
          <div className="hero-image">
            <img
              src="https://media.istockphoto.com/id/2093526842/photo/happy-businesswoman-working-on-digital-tablet-in-the-office-and-looking-at-camera.jpg?s=612x612&w=0&k=20&c=K4phfU4izED-PeU7uKimZJ9fT-t440GKYuiOJezuXIg="
              alt="Career Image"
              style={{
                width: "100%",
                height: "auto",
                objectFit: "cover",
                objectPosition: "center",
              }}
            /><br></br><br></br><br></br><br></br><br></br><br></br><br></br>
          </div>
        </section>

 
      </div>
    </div>
  );
}

export default HomePage1;



