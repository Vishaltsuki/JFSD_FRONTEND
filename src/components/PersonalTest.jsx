import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function PersonalTestPage() {
  const navigate = useNavigate(); // Initialize useNavigate hook
  const [answers, setAnswers] = useState([]);
  const [submitted, setSubmitted] = useState(false);

  const handleAnswerChange = (event, index) => {
    const newAnswers = [...answers];
    newAnswers[index] = event.target.value;
    setAnswers(newAnswers);
  };

  const handleSubmit = () => {
    navigate("/thankyou")
  };

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
            .login-btn, .test-btn {
            padding: 10px 20px;
            border: none;
            cursor: pointer;
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

          .test-btn {
            padding: 10px 20px;
            border: none;
            cursor: pointer;
            background-color: white;
            color: black;
            font-weight: bold;
          }

          .questions-container {
            padding: 30px;
            background-color: #fff;
            border-radius: 8px;
            box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
            margin-top: 50px;
          }

          .question {
            margin-bottom: 20px;
            font-size: 18px;
          }

          .options {
            display: flex;
            flex-direction: column;
            gap: 10px;
          }

          .options label {
            font-size: 16px;
          }

          .submit-btn {
            padding: 10px 20px;
            background-color: #000;
            color: white;
            border: none;
            cursor: pointer;
            font-size: 16px;
            border-radius: 4px;
            margin-top: 20px;
          }

          .submit-btn:disabled {
            background-color: #ccc;
            cursor: not-allowed;
          }

          .thank-you {
            text-align: center;
            font-size: 24px;
            margin-top: 40px;
          }

        `}
      </style>

      <div className="homepage">
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

        {/* Personal Test Section */}
        <div className="questions-container">
          {!submitted ? (
            <div>
              <h2>Personal Test</h2>
              <div className="question">
                <p>1. What is your preferred work environment?</p>
                <div className="options">
                  <label>
                    <input
                      type="radio"
                      name="q1"
                      value="Indoor"
                      onChange={(e) => handleAnswerChange(e, 0)}
                    />
                    Indoor
                  </label>
                  <label>
                    <input
                      type="radio"
                      name="q1"
                      value="Outdoor"
                      onChange={(e) => handleAnswerChange(e, 0)}
                    />
                    Outdoor
                  </label>
                  <label>
                    <input
                      type="radio"
                      name="q1"
                      value="Flexible"
                      onChange={(e) => handleAnswerChange(e, 0)}
                    />
                    Flexible
                  </label>
                </div>
              </div>

              <div className="question">
                <p>2. What motivates you the most in your career?</p>
                <div className="options">
                  <label>
                    <input
                      type="radio"
                      name="q2"
                      value="Creativity"
                      onChange={(e) => handleAnswerChange(e, 1)}
                    />
                    Creativity
                  </label>
                  <label>
                    <input
                      type="radio"
                      name="q2"
                      value="Stability"
                      onChange={(e) => handleAnswerChange(e, 1)}
                    />
                    Stability
                  </label>
                  <label>
                    <input
                      type="radio"
                      name="q2"
                      value="Challenge"
                      onChange={(e) => handleAnswerChange(e, 1)}
                    />
                    Challenge
                  </label>
                </div>
              </div>

              <div className="question">
                <p>3. How do you handle stress?</p>
                <div className="options">
                  <label>
                    <input
                      type="radio"
                      name="q3"
                      value="Calmly"
                      onChange={(e) => handleAnswerChange(e, 2)}
                    />
                    Calmly
                  </label>
                  <label>
                    <input
                      type="radio"
                      name="q3"
                      value="With Support"
                      onChange={(e) => handleAnswerChange(e, 2)}
                    />
                    With Support
                  </label>
                  <label>
                    <input
                      type="radio"
                      name="q3"
                      value="Anxiously"
                      onChange={(e) => handleAnswerChange(e, 2)}
                    />
                    Anxiously
                  </label>
                </div>
              </div>

              <div className="question">
                <p>4. Do you prefer teamwork or solo work?</p>
                <div className="options">
                  <label>
                    <input
                      type="radio"
                      name="q4"
                      value="Teamwork"
                      onChange={(e) => handleAnswerChange(e, 3)}
                    />
                    Teamwork
                  </label>
                  <label>
                    <input
                      type="radio"
                      name="q4"
                      value="Solo Work"
                      onChange={(e) => handleAnswerChange(e, 3)}
                    />
                    Solo Work
                  </label>
                  <label>
                    <input
                      type="radio"
                      name="q4"
                      value="Both"
                      onChange={(e) => handleAnswerChange(e, 3)}
                    />
                    Both
                  </label>
                </div>
              </div>

              <div className="question">
                <p>5. What is your long-term career goal?</p>
                <div className="options">
                  <label>
                    <input
                      type="radio"
                      name="q5"
                      value="Leadership Role"
                      onChange={(e) => handleAnswerChange(e, 4)}
                    />
                    Leadership Role
                  </label>
                  <label>
                    <input
                      type="radio"
                      name="q5"
                      value="Specialized Expertise"
                      onChange={(e) => handleAnswerChange(e, 4)}
                    />
                    Specialized Expertise
                  </label>
                  <label>
                    <input
                      type="radio"
                      name="q5"
                      value="Flexible Career Path"
                      onChange={(e) => handleAnswerChange(e, 4)}
                    />
                    Flexible Career Path
                  </label>
                </div>
              </div>

              <button
                className="submit-btn"
                onClick={handleSubmit}
                disabled={answers.length < 5}
              >
                Submit
              </button>
            </div>
          ) : (
            <div className="thank-you">
              <p>Thank you for taking the sample test!</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default PersonalTestPage;
