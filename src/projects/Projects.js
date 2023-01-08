import React from "react";
import "./projects.css";
import IMG1 from "../assets/portfolio1.jpg";
import IMG2 from "../assets/portfolio2.jpg";
import IMG3 from "../assets/portfolio3.jpg";
import IMG4 from "../assets/portfolio4.jpg";
import IMG5 from "../assets/portfolio5.png";
import IMG6 from "../assets/portfolio6.jpg";

const data = [
  {
    id: 1,
    image: IMG1,
    title: "Crypto Currency Dashboard and Financial Visualization",
    github: "https://github.com",
    demo: "https://onomavwe.github.io",
  },
  {
    id: 2,
    image: IMG2,
    title: "Charts templates & infographics in Figma",
    github: "https://github.com",
    demo: "https://brilliant-maamoul-4a5ba3.netlify.app/",
  },
  {
    id: 3,
    image: IMG3,
    title: "Figma dashboard UI kit for data design web apps",
    github: "https://github.com",
    demo: "https://onomavwe.github.io",
  },
  {
    id: 4,
    image: IMG4,
    title: "Maitaining tasks and tracking progress",
    github: "https://github.com",
    demo: "https://onomavwe.github.io",
  },
  {
    id: 5,
    image: IMG5,
    title: "Figma dashboard UI kit for data design web apps",
    github: "https://github.com",
    demo: "https://onomavwe.github.io",
  },
  {
    id: 6,
    image: IMG6,
    title: "Figma dashboard UI kit for data design web apps",
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
