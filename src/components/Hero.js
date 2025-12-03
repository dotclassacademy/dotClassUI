import React from "react";
import "../styles/Hero.css";
import heroImg from "../assets/logos/image.png";

function Hero({ setActiveTab }) {
  return (
    <section style={{ backgroundColor: "white" }} className="hero">
      <div className="hero-content">
        <h2>Welcome to dotClass Academy</h2>
        <p style={{ color: "black" }}>
          Learn new skills and advance your career with expert-led courses
        </p>
        {/* <button className="cta-button" onClick={() => setActiveTab("courses")}>
          Explore Courses
        </button> */}
        <p>
          Improving student learning paths through personalized curricula,
          progress tracking, and practical projects.
        </p>
      </div>
      <div className="hero-image">
        {/* Option A: put an image in public/images/hero.jpg and use the path below */}
        <img src={heroImg} alt="dotClass Academy hero" className="hero-img" />
        {/* Option B: import at top of file: `import heroImg from '../assets/hero.jpg'` and use:
                    <img src={heroImg} alt="dotClass Academy hero" className="hero-img" /> */}
      </div>
    </section>
  );
}

export default Hero;
