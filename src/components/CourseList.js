import React, { useState } from "react";
import "../styles/CourseList.css";

function CourseList() {
  const [filter, setFilter] = useState("all");

  const courses = [
    {
      id: 1,
      title: "React Fundamentals",
      instructor: "John Doe",
      level: "Beginner",
      students: 1250,
      rating: 4.8,
      price: "$49.99",
      category: "web",
    },
    {
      id: 2,
      title: "Advanced JavaScript",
      instructor: "Jane Smith",
      level: "Intermediate",
      students: 890,
      rating: 4.7,
      price: "$59.99",
      category: "web",
    },
    {
      id: 3,
      title: "Web Design Basics",
      instructor: "Mike Johnson",
      level: "Beginner",
      students: 2100,
      rating: 4.9,
      price: "$39.99",
      category: "design",
    },
    {
      id: 4,
      title: "Python for Data Science",
      instructor: "Sarah Lee",
      level: "Intermediate",
      students: 1600,
      rating: 4.8,
      price: "$69.99",
      category: "data",
    },
    {
      id: 5,
      title: "Mobile App Development",
      instructor: "Tom Brown",
      level: "Advanced",
      students: 750,
      rating: 4.6,
      price: "$79.99",
      category: "mobile",
    },
    {
      id: 6,
      title: "UI/UX Design Masterclass",
      instructor: "Emily White",
      level: "Intermediate",
      students: 980,
      rating: 4.9,
      price: "$59.99",
      category: "design",
    },
  ];

  const filteredCourses =
    filter === "all" ? courses : courses.filter((c) => c.category === filter);

  return (
    <main className="course-list">
      <div className="course-header">
        <h2>Explore Our Courses</h2>
        <p>Choose from hundreds of expert-led courses</p>
      </div>

      <div className="filter-section">
        <button
          className={filter === "all" ? "active" : ""}
          onClick={() => setFilter("all")}
        >
          All Courses
        </button>
        <button
          className={filter === "web" ? "active" : ""}
          onClick={() => setFilter("web")}
        >
          Web Development
        </button>
        <button
          className={filter === "design" ? "active" : ""}
          onClick={() => setFilter("design")}
        >
          Design
        </button>
        <button
          className={filter === "data" ? "active" : ""}
          onClick={() => setFilter("data")}
        >
          Data Science
        </button>
        <button
          className={filter === "mobile" ? "active" : ""}
          onClick={() => setFilter("mobile")}
        >
          Mobile
        </button>
      </div>

      <div className="courses-grid">
        {filteredCourses.map((course) => (
          <div key={course.id} className="course-card">
            <div className="course-image">
              <div className="placeholder">📖</div>
            </div>
            <div className="course-content">
              <h3>{course.title}</h3>
              <p className="instructor">by {course.instructor}</p>
              <div className="course-meta">
                <span className="level">{course.level}</span>
                <span className="rating">⭐ {course.rating}</span>
              </div>
              <p className="students">{course.students} students</p>
              <div className="course-footer">
                <span className="price">{course.price}</span>
                <button className="enroll-btn">Enroll Now</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}

export default CourseList;
