import React from "react";
import "../styles/Navbar.css";

function Navbar({ user, activeTab, setActiveTab }) {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-logo">
          <h1
            style={{
              color: "#000000ff",
              fontSize: "1.6rem",
              fontWeight: 800,
              letterSpacing: "1.5px",
              margin: 0,
              padding: "8px 14px",
              borderRadius: "8px",
              background:
                "transparent linear-gradient(90deg, #ffffffff 0%, #ffffffff 100%)",
              boxShadow: "0 6px 18px rgba(255, 255, 255, 0.18)",
              display: "inline-block",
              transition: "transform .15s ease, box-shadow .15s ease",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "translateY(-3px)";
              e.currentTarget.style.boxShadow =
                "0 10px 24px rgba(37,117,252,0.25)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "translateY(0)";
              e.currentTarget.style.boxShadow =
                "0 6px 18px rgba(37,117,252,0.18)";
            }}
          >
            dotClass Academy
          </h1>
          <span
            style={{
              display: "block",
              marginTop: "6px",
              color: "rgba(255,255,255,0.85)",
              fontSize: "0.9rem",
            }}
          >
            Strengthening Foundations to Shape Feature
          </span>
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
          {/* <li className="navbar-user"> */}
          {/* 👤 */}
          {/* {user.name} */}
          {/* </li> */}
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
