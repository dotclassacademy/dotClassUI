import React, { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Dashboard from "./components/Dashboard";
import CourseList from "./components/CourseList";
import Footer from "./components/Footer";

function App() {
  const [user, setUser] = useState({
    name: "Student",
    email: "student@dotclass.com",
  });
  const [activeTab, setActiveTab] = useState("dashboard");

  return (
    <div className="App">
      <Navbar user={user} activeTab={activeTab} setActiveTab={setActiveTab} />

      {/* {activeTab === "home" && <Hero setActiveTab={setActiveTab} />}
      {activeTab === "dashboard" && <Dashboard user={user} />}
      {activeTab === "courses" && <CourseList />} */}
      <Hero setActiveTab={setActiveTab} />

      <Footer />
    </div>
  );
}

export default App;
