import React, { useState } from "react";
import "../styles/StudentSurvey.css";

function StudentSurvey() {
  const [isHovered, setIsHovered] = useState(false);

  const handleSurveyClick = () => {
    // Replace with your actual Google Form URL
    const googleFormUrl = "https://forms.gle/kSAGCEYMZpX8ARFg6";
    window.open(googleFormUrl, "_blank");
  };

  return (
    <section className="survey-section">
      <div className="survey-container">
        <div className="survey-content">
          <div className="survey-icon">
            <svg
              width="48"
              height="48"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z" />
              <path d="M12 16v-4" />
              <circle cx="12" cy="8" r="0.5" />
            </svg>
          </div>
          <h3>We'd Love Your Feedback</h3>
          <p>
            Help us improve your learning experience by sharing your concerns,
            suggestions, and feedback.
          </p>
          <button
            className={`survey-button ${isHovered ? "hovered" : ""}`}
            onClick={handleSurveyClick}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <span className="button-text">Take the Survey</span>
            <span className="button-icon">
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M7 17L17 7M17 7H7M17 7V17" />
              </svg>
            </span>
          </button>
        </div>
      </div>
    </section>
  );
}

export default StudentSurvey;
