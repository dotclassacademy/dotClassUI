import React from "react";
import "../styles/Dashboard.css";

function Dashboard({ user }) {
  const enrolledCourses = [
    { id: 1, title: "React Fundamentals", progress: 65 },
    { id: 2, title: "Advanced JavaScript", progress: 45 },
    { id: 3, title: "Web Design Basics", progress: 80 },
  ];

  const stats = [
    { label: "Courses Enrolled", value: "3" },
    { label: "Hours Learned", value: "24.5" },
    { label: "Certificates", value: "1" },
  ];

  return (
    <main className="dashboard">
      <div className="dashboard-header">
        <h2>Welcome back, {user.name}!</h2>
        <p>Your Learning Dashboard</p>
      </div>

      <section className="stats-section">
        <h3>Your Stats</h3>
        <div className="stats-grid">
          {stats.map((stat, index) => (
            <div key={index} className="stat-card">
              <h4>{stat.value}</h4>
              <p>{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="courses-section">
        <h3>Your Enrolled Courses</h3>
        <div className="course-progress-list">
          {enrolledCourses.map((course) => (
            <div key={course.id} className="progress-item">
              <div className="course-info">
                <h4>{course.title}</h4>
                <p>{course.progress}% Complete</p>
              </div>
              <div className="progress-bar">
                <div
                  className="progress-fill"
                  style={{ width: `${course.progress}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}

export default Dashboard;
