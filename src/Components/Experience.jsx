import React, { useEffect, useState, useRef } from "react";
import image from "../images/motion-background.jpg";

const imageAltText = "purple and blue abstract background";

const Work = () => {
  const workExperience = [
    {
      role: "Web Developer Intern",
      company: "Indian Railways",
      year: "2024",
      description:
        "Assisted in optimizing the efficiency of their existing payroll system and successfully developed a client-focused website to enhance operational effectiveness.",
    },
    // {
    //   role: "Backend Development Intern",
    //   company: "XYZ Company",
    //   year: "2022",
    //   description:
    //     "Worked on improving the efficiency of the company's existing APIs and database management systems.",
    // },
    // {
    //   role: "Freelance Web Developer",
    //   company: "Freelance Projects",
    //   year: "2021",
    //   description:
    //     "Created dynamic websites for clients, focusing on responsive design and efficient backend integration.",
    // },
  ];

  const [visibleCards, setVisibleCards] = useState([]);
  const cardRefs = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const cardIndex = parseInt(entry.target.dataset.index, 10);
            if (!visibleCards.includes(cardIndex)) {
              setVisibleCards((prevVisibleCards) => [...prevVisibleCards, cardIndex]);
            }
          }
        });
      },
      { threshold: 0.1 } // Adjust this threshold as needed
    );

    cardRefs.current.forEach((card) => {
      if (card) observer.observe(card);
    });

    return () => observer.disconnect();
  }, [visibleCards]);

  return (
    <section id="work">
      <img className="background" src={image} alt={imageAltText} />
      <div
        style={{
          position: "relative",
          width: "80%",
          margin: "0 auto",
          padding: "4rem 0",
          textAlign: "center",
        }}
      >
        <h2 style={{ marginBottom: "2rem" }}>Work Experience</h2>

        {/* Vertical Line */}
        <div
          style={{
            position: "absolute",
            left: "50%",
            top: "10rem",
            width: "2px",
            height: "calc(100% - 15rem)",
            backgroundColor: "#333",
            marginLeft: "-1px",
          }}
        />

        {workExperience.map((work, index) => (
          <div
            key={index}
            ref={(el) => (cardRefs.current[index] = el)}
            data-index={index}
            className={`work-card ${
              visibleCards.includes(index) ? "visible" : "hidden"
            }`}
            style={{
              position: "relative",
              marginBottom: "3rem",
              textAlign: index % 2 === 0 ? "left" : "right",
              paddingLeft: index % 2 === 0 ? "2rem" : "0",
              paddingRight: index % 2 !== 0 ? "2rem" : "0",
              display: "flex",
              flexDirection: index % 2 === 0 ? "row" : "row-reverse",
              alignItems: "center",
              opacity: visibleCards.includes(index) ? 1 : 0, // Controlled by state
              transform: visibleCards.includes(index)
                ? "translateY(0)"
                : "translateY(20px)", // Controlled by state
              transition: "opacity 0.5s ease, transform 0.5s ease",
            }}
          >
            {/* Dot */}
            <div
              
              style={{
                position: "absolute",
                width: "20px",
                height: "20px",
                backgroundColor: "#007bff",
                borderRadius: "50%",
                left: "calc(50% - 10px)",
              }}
            ></div>

            <div
              style={{
                backgroundColor: "#fff",
                padding: "1rem",
                borderRadius: "8px",
                boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
                width: "45%",
              }}
            >
              <h3>{work.role}</h3>
              <p style={{ fontWeight: "bold" }}>{work.company}</p>
              <p style={{ fontWeight: "bold" }}>{work.year}</p>
              <p style={{ color: "#666" }}>{work.description}</p>
            </div>
          </div>
        ))}

        {/* Last blinking dot section */}
        <div
          ref={(el) => (cardRefs.current[workExperience.length] = el)}
          data-index={workExperience.length}
          className={`work-card ${
            visibleCards.includes(workExperience.length) ? "visible" : "hidden"
          }`}
          style={{
            position: "relative",
            marginBottom: "3rem",
            textAlign: "center",
            paddingLeft: "2rem",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            opacity: visibleCards.includes(workExperience.length) ? 1 : 0,
            transform: visibleCards.includes(workExperience.length)
              ? "translateY(0)"
              : "translateY(20px)",
            transition: "opacity 0.5s ease, transform 0.5s ease",
          }}
        >
          {/* Blinking red dot */}
          <div
            style={{
              position: "absolute",
              width: "20px",
              height: "20px",
              backgroundColor: "red",
              borderRadius: "50%",
              left: "calc(50% - 10px)",
              animation: "blink 1s infinite",
            }}
          ></div>

          <div
            style={{
              backgroundColor: "#fff",
              padding: "1rem",
              borderRadius: "8px",
              boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
              width: "10rem",
              height: "15rem",
              marginLeft: "15rem",
            }}
          >
            <h3 style={{ fontWeight: "bold" }}>Currently</h3>
            <h3>Looking For Internship</h3>
            <p style={{ color: "#666" }}>
              Excited to contribute my skills to innovative projects!
            </p>
          </div>
        </div>
      </div>

      {/* CSS for animations */}
      <style>{`
        .work-card.hidden {
          opacity: 0;
          transform: translateY(20px);
        }
        .work-card.visible {
          opacity: 1;
          transform: translateY(0);
        }
        .blinking-dot {
          animation: blink 1.5s infinite;
        }
        @keyframes blink {
          0% { opacity: 1; }
          50% { opacity: 0; }
          100% { opacity: 1; }
        }
      `}</style>
    </section>
  );
};

export default Work;
