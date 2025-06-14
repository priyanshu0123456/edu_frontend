import React from "react";
import "./Home.css";
import { motion } from "framer-motion";

const studyMaterials = [
  { title: "IIT-JEE Physics Notes", link: "#", tag: "JEE" },
  { title: "NEET Biology Short Tricks", link: "#", tag: "NEET" },
  { title: "DSA Cheat Sheet (Placement)", link: "#", tag: "DSA" },
  { title: "Web Dev Crash Course PDF", link: "#", tag: "Web Dev" },
  { title: "App Dev with Flutter Notes", link: "#", tag: "App Dev" },
  { title: "Top 50 HR Interview Questions", link: "#", tag: "Placement" },
  { title: "Operating System Made Easy", link: "#", tag: "CS Fund" },
  { title: "JavaScript Quick Reference", link: "#", tag: "Web Dev" },
  { title: "System Design Basics", link: "#", tag: "Advanced" },
];

export default function Home() {
  return (
    <div className="home-container">
      <div className="hero-section">
        <div className="hero-overlay">
          <motion.h1
            initial={{ y: -80, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1 }}
            className="hero-title"
          >
            Welcome to EduMaster
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 1.2 }}
            className="hero-desc"
          >
            Your personalized online learning platform for JEE, NEET,
            Placements, and beyond.
          </motion.p>
        </div>
      </div>

      <section className="platform-info">
        <h2>About Our Platform</h2>
        <p>
          At <strong>EduMaster</strong>, we provide top-quality educational
          content curated by experts to help students crack competitive exams,
          ace coding interviews, and build practical development skills. Whether
          you're preparing for IIT-JEE, NEET, or your dream tech job, we’ve got
          you covered.
        </p>
      </section>

      <section className="materials-section">
        <h2>Free Study Materials</h2>
        <div className="materials-grid">
          {studyMaterials.map((item, index) => (
            <motion.a
              key={index}
              href={item.link}
              className="material-card"
              target="_blank"
              rel="noreferrer"
              whileHover={{ scale: 1.07 }}
              whileTap={{ scale: 0.97 }}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * index }}
            >
              <span className="tag">{item.tag}</span>
              <h4>{item.title}</h4>
            </motion.a>
          ))}
        </div>
      </section>
    </div>
  );
}
