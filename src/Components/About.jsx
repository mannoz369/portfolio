import React, { useState } from "react";
import image from "../images/motion-background.jpg";

const imageAltText = "purple and blue abstract background";

const description =
  "Hi, I am a passionate Computer Science and Engineering student at Amrita Vishwa Vidyapeetam, Chennai, with a strong interest in web development, data structures, algorithms, and backend development. I enjoy exploring new technologies and solving challenges to build efficient, scalable, and impactful software solutions.";

const skillsList = [
  "Web design (MERN)",
  "Project Management",
  "Data Structures & Algorithms",
  "C/C++/Java/Python",
  "Time Management",
  "Leadership/Team Work",
];

const detailOrQuote =
  "My focus is on continuous learning and building applications that enhance user experiences and drive real-world impact.";

const About = () => {
  const [hovered, setHovered] = useState(false);

  return (
    <section className="padding" id="about">
      <img className="background" src={image} alt={imageAltText} />
      <div
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        style={{
          backgroundColor: hovered ? "white" : "white",
          transform: hovered ? "scale(1.05)" : "scale(1)", 
          transition: "transform 0.3s, background-color 0.3s", 
          width: "50%",
          padding: "4rem",
          margin: "3rem auto",
          textAlign: "center",
          borderRadius: "8px",
          boxShadow: hovered
            ? "0 6px 12px rgba(0, 0, 0, 0.2]])"
            : "0 4px 8px rgba(0, 0, 0, 0.1)", 
        }}
      >
        <h2>About Myself</h2>
        <p className="large">{description}</p>
        <hr />
        <ul
          style={{
            textAlign: "left",
            columns: 2,
            fontSize: "1.25rem",
            margin: "2rem 3rem",
            gap: "3rem",
          }}
        >
          {skillsList.map((skill) => (
            <li key={skill}>{skill}</li>
          ))}
        </ul>
        <hr />
        <p style={{ padding: "1rem 3rem 0" }}>{detailOrQuote}</p>
      </div>
    </section>
  );
};

export default About;
