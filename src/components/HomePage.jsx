import React from "react";
import { useNavigate } from "react-router-dom";

function HomePage() {
  const navigate = useNavigate(); // Initialize useNavigate hook

  const handleLoginClick = () => {
    navigate("/whichlogin"); // Navigate to the /login page
  };

  const handleLogoClick = () => {
    navigate("/"); // Navigate to the home page
  };

  const handleGetStartedClick = () => {
    navigate('/login'); // Navigate to the login page
  };

  const handleTestClick = () => {
    navigate('/personaltest'); // Navigate to the login page
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
              <li><a href="/login" className="header-link">Career Test</a></li>
              <li><a href="/login" className="header-link">For Organizations</a></li>
              <li><a href="/login" className="header-link">Careers</a></li>
              <li><a href="/login" className="header-link">Degrees</a></li>
              <li><a href="/login" className="header-link">Community</a></li>
            </ul>
          </nav>
          <div className="header-buttons">
            <button className="login-btn" onClick={handleLoginClick}>Log In</button>
            <button className="test-btn" onClick={handleTestClick}>Take the free test</button>
          </div>
        </header>


<br></br><br></br><br></br><br></br>
        {/* Hero Section */}
        <section className="hero">
            <br></br>
          <div className="hero-content">
            <h1>Unlock the future you</h1>
            <p>Say hello to We-Link, the world's leading career advancement platform.</p>
            <div className="hero-buttons">
            <button className="get-started-btn" onClick={handleGetStartedClick}>
            Get Started
          </button>
              <button className="learn-more-btn">Learn More About CareerExplorer</button>
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
            />
          </div>
        </section>
       
        {/* Features Section */}
        <section className="features">
          <h2>
            Described as <span>"shockingly accurate,”</span> we've helped millions of people find their ideal careers.
          </h2>
          <div className="feature-list">
            <div className="feature">
              <h3>Assessment</h3>
              <p>Reflect upon your past experiences and future goals, and learn what makes you unique.</p>
            </div>
            <div className="feature">
              <h3>Matches</h3>
              <p>Find the path that's right for you based on your strengths, interests, and personality.</p>
            </div>
            <div className="feature">
              <h3>Library</h3>
              <p>Explore over 1,000 careers and degrees. Learn who thrives in them and why.</p>
            </div>
          </div>
        </section>

        {/* How It Works Section */}
        <section className="how-it-works">
        <br></br>
          <h2>How It Works</h2>
          <div className="steps">
            <div className="step">
              <h3>01. Answer</h3>
              <p>Answer a series of questions. Take the assessment and get your career matches, personality archetype, and more along the way.</p>
            </div>
            <div className="step">
              <h3>02. Discover</h3>
              <p>Discover what makes you — You. Find out what makes you stand apart from others and why certain careers are great fits for you.</p>
            </div>
            <div className="step">
              <h3>03. Explore</h3>
              <p>Explore the world of school & work. Find all the information you need to know about your dream career. Then make a plan to get there.</p>
            </div>
          </div>
          <br></br>
        </section>
      </div>
    </div>
  );
}

export default HomePage;
