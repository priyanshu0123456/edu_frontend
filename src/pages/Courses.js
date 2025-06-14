import React from "react";
import "./Courses.css";

const courseList = [
  {
    name: "Data Structures & Algorithms",
    desc: "Master DSA for coding interviews.",
    color: "#007bff",
  },
  {
    name: "CS Fundamentals",
    desc: "Understand core computer science topics.",
    color: "#28a745",
  },
  {
    name: "IIT-JEE Prep",
    desc: "Ace your JEE exams with top-quality resources.",
    color: "#ffc107",
  },
  {
    name: "NEET Prep",
    desc: "Comprehensive NEET preparation modules.",
    color: "#dc3545",
  },
  {
    name: "Web Development",
    desc: "Full stack MERN course from scratch.",
    color: "#17a2b8",
  },
  {
    name: "Machine Learning",
    desc: "Kickstart your ML journey with hands-on projects.",
    color: "#6f42c1",
  },
  {
    name: "Aptitude & Reasoning",
    desc: "Sharpen your aptitude for placement exams.",
    color: "#fd7e14",
  },
  {
    name: "Operating Systems",
    desc: "Understand the inner workings of OS.",
    color: "#20c997",
  },
];

export default function Courses() {
  return (
    <section className="courses-section">
      <div className="courses-overlay">
        <div className="courses-container">
          <h1 className="courses-title">Our Courses</h1>
          <div className="courses-grid">
            {courseList.map((course, index) => (
              <div
                key={index}
                className="course-card fade-in"
                style={{ borderTop: `4px solid ${course.color}` }}
              >
                <h3>{course.name}</h3>
                <p>{course.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
