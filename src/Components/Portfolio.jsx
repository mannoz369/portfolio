import React, { useState, useEffect, useRef } from "react";
import image from "../images/design-desk.jpeg"; // Desk image
import '../styles.css'; // Ensure this is properly linked to your CSS for animation
import gitHubIcon from "../images/socials/github.svg";
const imageAltText = "desktop with books and laptop";


// Project list
const projectList = [
  {
    title: "Wanderlust",
    description:
      "Developed and deployed an Airbnb replica using the MERN stack, leveraging MongoDB Atlas for database management and Render for hosting, demonstrating expertise in building scalable web applications.",
    url: "https://wanderlust-v7ei.onrender.com/listings",
  },
  {
    title: "MRS",
    description:
      "Developed a music recommendation system integrating facial emotion recognition with the Spotify API to suggest mood-based songs to enhance user experience.",
    url: "",
  },
  {
    title: "Hospital Management",
    description:
      "Created a hospital management system with an appointment booking feature and an admin interface for managing daily appointments, improving operational efficiency and patient experience.",
    url: "",
  },
  {
    title: "Food Ordering System",
    description:
      "Developed an online food ordering system for a college canteen, enabling students to browse the menu, place orders, and make payments seamlessly.",
    url: "",
  },
];

const Portfolio = () => {
  // State to track visibility of the portfolio section
  const [isVisible, setIsVisible] = useState(false);
  const [hasAnimated, setHasAnimated] = useState(false); // Track if animation has been triggered

  // Ref to the image element
  const imageRef = useRef(null);

  useEffect(() => {
    // Create an Intersection Observer
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          // Trigger animation only once when the image is in view
          setIsVisible(true);
          setHasAnimated(true); // Prevent further animation
        }
      },
      { threshold: 0.5 } // Trigger when 50% of the element is in view
    );

    // Observe the image element
    if (imageRef.current) {
      observer.observe(imageRef.current);
    }

    // Cleanup the observer on component unmount
    return () => {
      if (imageRef.current) {
        observer.unobserve(imageRef.current);
      }
    };
  }, [hasAnimated]); // The effect will run when `hasAnimated` changes

  return (
    <section className="padding" id="portfolio" style={{ backgroundColor: "#f7f7f7" }}>
      
      <h2 style={{ textAlign: "center" }}>Portfolio</h2>
      <div style={{ display: "flex", flexDirection: "row", paddingTop: "3rem"}}>
        <div style={{ maxWidth: "40%", alignSelf: "center"}}>
          <img
            ref={imageRef} // Set ref to the image element
            src={image}
            alt={imageAltText}
            style={{
              height: "90%",
              width: "100%",
              objectFit: "cover",
              opacity: isVisible ? 1 : 0, // Start with opacity 0 and fade in
              animation: isVisible ? "1s ease-out 0s 1 slideInLeft" : "none", // Apply animation when visible
              transition: "opacity 1s ease-out", // Smooth transition for opacity
              marginLeft: "2rem",
            }}
          />
        </div>
        
        <div className="container">
          
          {projectList.map((project) => (
            <div className="box" key={project.title}>
              <a href={project.url} target="_blank" rel="noopener noreferrer">
                <h3 className="costum" style={{ flexBasis: "40px" }}>{project.title}</h3>
              </a>
              <p className="costum">{project.description}</p>
            </div>
          ))}
        </div>
        
      </div>
      <div style={{textAlign: "center"}}><p className="costum1">Click on the title to view the project</p>
      </div>
    </section>
  );
    

};

export default Portfolio;
