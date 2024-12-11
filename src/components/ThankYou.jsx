import React from 'react';
import { useNavigate } from 'react-router-dom';

const ThankYou = () => {
  const navigate = useNavigate(); // Initialize useNavigate hook

  const handleLoginClick = () => {
    navigate("/login"); // Navigate to the /login page
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

          .login-btn {
            padding: 10px 20px;
            border: none;
            cursor: pointer;
          }

          .test-btn {
            padding: 10px 20px;
            border: none;
            cursor: pointer;
          }
        `}
      </style>

      {/* Header Section */}
      <header className="header">
        <div className="logo" onClick={() => navigate("/")}>WE-LINK</div>
        <nav className="navbar">
          <ul>
            <li><a href="/career-test" className="header-link">Career Test</a></li>
            <li><a href="/for-organizations" className="header-link">For Organizations</a></li>
            <li><a href="/careers" className="header-link">Careers</a></li>
            <li><a href="/degrees" className="header-link">Degrees</a></li>
            <li><a href="/community" className="header-link">Community</a></li>
          </ul>
        </nav>
        <div className="header-buttons">
        </div>
      </header>
      
      {/* Thank You Section */}
      <div style={{ textAlign: 'center', padding: '20px' }}>
      <br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br>
        <h1>Thank You for Taking the Sample Test!</h1>
        <p>We appreciate your participation.</p>
      </div>
    </div>
  );
};

export default ThankYou;
