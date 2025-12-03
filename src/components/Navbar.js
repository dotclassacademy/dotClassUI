import React from "react";
import "../styles/Navbar.css";

function Navbar({ user, activeTab, setActiveTab }) {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-logo">
          <h1>dotClass Academy</h1>
        </div>
        <ul className="navbar-menu">
          <li>
            <button
              style={{ display: "none" }}
              className={activeTab === "home" ? "active" : ""}
              onClick={() => setActiveTab("home")}
            >
              Home
            </button>
          </li>
          <li>
            <button
              style={{ display: "none" }}
              className={activeTab === "dashboard" ? "active" : ""}
              onClick={() => setActiveTab("dashboard")}
            >
              Dashboard
            </button>
          </li>
          <li>
            <button
              style={{ display: "none" }}
              className={activeTab === "courses" ? "active" : ""}
              onClick={() => setActiveTab("courses")}
            >
              Courses
            </button>
          </li>
          <li className="navbar-user">
            👤
            {/* {user.name} */}
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
