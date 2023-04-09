import React from 'react'
import "./about.css";
import ME from '../assets/pics-2.jpg'
import {FaAward} from 'react-icons/fa'
import { FiUsers } from "react-icons/fi";
import { VscFolderLibrary } from "react-icons/vsc";


export default function About() {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>
      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-photo">
            <img src={ME} alt="About Photo" />
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className="about__icon" />
              <h5>Experience</h5>
              <small>2+ Years Working</small>
            </article>
            <article className="about__card">
              <FiUsers className="about__icon" />
              <h5>Clients</h5>
              <small>20+ Worldwide</small>
            </article>
            <article className="about__card">
              <VscFolderLibrary className="about__icon" />
              <h5>Projects</h5>
              <small>30+ Completed</small>
            </article>
          </div>
          <p>
            I am a brilliant, creative, innovative, and motivated software developer with a penchant for excellence. I am committed to driving
            organisational growth through innovation and excellent creativity: building quality working software products that meet user requirements.
            <br></br>
            <br></br>I bring over ten years of cross functional multi-discipline experience into my work enabling me to enhance my projects to fit
            specific purpose functionally and visually.
            <br></br>
            <br></br>I love excellence because you deserve to get an excellent product.
          </p>
          <a href="#contact" className="btn btn-primary">
            Let's Talk
          </a>
        </div>
      </div>
    </section>
  );
}
