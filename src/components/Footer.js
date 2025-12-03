import React from "react";
import "../styles/Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h4>About dotClass</h4>
          <p>
            Empowering learners worldwide with high-quality online education.
          </p>
        </div>
        <div className="footer-section">
          <h4>Connect US</h4>
          <ul>
            <li>
              <h5>+91 8590494511</h5>
            </li>
            <li>
              <a href="#contact">dotclassacademy.org@gmail.com</a>
            </li>
          </ul>
        </div>
        <div className="footer-section">
          <h4>Follow Us</h4>
          <div className="social-links">
            <a href="#facebook">Facebook</a>
            <a href="#twitter">Twitter</a>
            <a href="#linkedin">LinkedIn</a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2024 dotClass Academy. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
