import React from "react";
import image from "../images/education.jpg";

const imageAltText = "education background";
/**
 * Education Component
 *
 * Displays a roadmap-style timeline of your educational history.
 */
const Education = () => {
  const educationList = [
    {
      degree: "B.Tech Computer Science & Engineering",
      institution: "Amrita Vishwa Vidyapeetam, Chennai",
      year: "2022 - Present",
      score: "8.9 CGPA",
      description: "Currently pursuing a degree in Computer Science and Engineering, focusing on web development, data structures, and backend technologies.",
    },
    {
      degree: "High School (Science)",
      institution: "Dr.KKR Happy Valley School",
      year: "2020 - 2022",
      score: "89%",
      description: "Completed high school with a focus on science subjects, particularly mathematics, physics & chemistry building a solid foundation for engineering studies.",
    },
    {
      degree: "Secondary School (General Studies)",
      institution:"DR.KKR Gowtham International School",
      year: "2019- 2020",
      score: "89%",
      description: "Completed secondary school education with a CBSE broad curriculum, including science, mathematics,English & other subjects.",
    }, 
  ];

  return (
    <section className="" id="education">
        <img className="background" src={image} alt={imageAltText} />
      <div
        style={{
          width: "100%", // Full width
          margin: "0 auto", // Center align
          padding: "4rem", // Padding for the section
         // Light background for the section
          borderRadius: "8px",
          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
        }}
      >
        <h2 style={{ textAlign: "center", marginBottom: "2rem", marginRight: "9rem"}}>Education</h2>
        <ul
          style={{
            listStyleType: "none",
            padding: "0",
            position: "relative",
          }}
        >
          {educationList.map((edu, index) => (
            <li
              key={index}
              style={{
                position: "relative",
                paddingLeft: "2rem",
                marginBottom: "2rem",
              }}
            >
              <div
                style={{
                  width: "75%",
                  marginLeft: "6rem",
                  
                  backgroundColor: "#fff",
                  padding: "1rem",
                  borderRadius: "8px",
                  boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
                  fontFamily: "'Arial', sans-serif", // Ensure font is consistent
                  fontSize: "1rem", // Adjust font size for consistency
                  color: "#333", // Dark text for readability
                }}
              >
                <h3>{edu.degree}</h3>
                <p style={{ fontWeight: "bold" }}>{edu.institution} ({edu.year})</p>
                <p style={{ fontWeight: "bold" }}>Scored - {edu.score}</p>
                <p style={{ color: "#666" }}>{edu.description}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Education;
