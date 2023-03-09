import React from "react";
import "./projects.css";
import IMG1 from "../assets/Jobplus App 1 1.svg";
import IMG2 from "../assets/Website 1.svg";
import IMG3 from "../assets/event-manager.png";
import IMG4 from "../assets/weather-app.png";
import IMG5 from "../assets/events-app.png";
import IMG6 from "../assets/Prototype 1.svg";

const data = [
  {
    id: 1,
    image: IMG1,
    title: "Jobplus App",
    github: "https://github.com/Onomavwe/Jobplus_App_Frontend",
    demo: "#",
  },
  {
    id: 2,
    image: IMG2,
    title: "Personal Portfolio Website - Old Version",
    github: "https://github.com/Onomavwe/onomavwe.github.io",
    demo: "https://onomavwe.github.io",
  },
  {
    id: 3,
    image: IMG3,
    title: "Event Management App",
    github: "https://github.com/Onomavwe/react-event-management-app",
    demo: "https://brilliant-maamoul-4a5ba3.netlify.app/",
  },
  {
    id: 4,
    image: IMG4,
    title: "Weather App with API Integration and Auto-Complete Search",
    github: "https://github.com",
    demo: "https://onomavwe.github.io",
  },
  {
    id: 5,
    image: IMG5,
    title: "Events App with Bespoke Event Management System",
    github: "https://github.com/Onomavwe/Events-App",
    demo: "https://onomavwe.github.io",
  },
  {
    id: 6,
    image: IMG6,
    title: "Figma Landing page UI kit / web app design",
    github: "https://github.com",
    demo: "https://onomavwe.github.io",
  },
];

export default function Projects() {
  return (
    <section id="projects">
      <h5>My Recent Work</h5>
      <h2>Projects</h2>

      <div className="container projects__container">
        {data.map(({ id, image, title, github, demo }) => {
          return (
            <article key={id} className="project__item" item>
              <div className="project__item-image">
                <img src={image} alt={title} />
              </div>
              <h3>{title}</h3>
              <div className="project__item-cta">
                <a href={github} className="btn" target="_blank" rel="noreferrer">
                  GitHub
                </a>
                <a href={demo} className="btn btn-primary" target="_blank" rel="noreferrer">
                  Live Demo
                </a>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}
