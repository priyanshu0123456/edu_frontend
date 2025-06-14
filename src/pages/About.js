import React from "react";
import "./About.css";
import aboutImg from "../assets/about.webp"; // Add your image to src/assets

export default function About() {
  return (
    <section className="about-section">
      <div className="about-container">
        <div className="about-text">
          <h1 className="about-heading">Who We Are</h1>
          <p className="about-para">
            At <strong>EduMaster</strong>, we believe education should be
            accessible, engaging, and tailored to the future. We are a
            passionate team of educators and developers on a mission to
            revolutionize online learning for every student — from beginners to
            IIT JEE & NEET aspirants.
          </p>
          <p className="about-para">
            Our platform delivers high-quality, interactive courses in{" "}
            <strong>
              Data Structures & Algorithms, CS Fundamentals, IIT-JEE, NEET, and
              more
            </strong>
            , taught by industry experts and top educators.
          </p>
          <p className="about-para">
            With a focus on personalized learning, modern teaching methods, and
            a community-driven approach, we aim to empower every learner to
            unlock their full potential.
          </p>
        </div>
        <div className="about-image-container">
          <img src={aboutImg} alt="About Us" className="about-img" />
        </div>
      </div>
    </section>
  );
}
