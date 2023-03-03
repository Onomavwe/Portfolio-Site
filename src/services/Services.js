import React from 'react'
import { BiCheck } from "react-icons/bi";
import './services.css'


export default function Services() {
  return (
    <section id="services">
      <h5>What I Offer</h5>
      <h2>Services</h2>

      <div className="container services__container">
        <article className="service">
          <div className="service__head">
            <h3>UI/UX Design</h3>
          </div>

          <ul className="service__list">
            <li>
              <BiCheck className="service__list-icon" />
              <p>
                Creating innovative and creative designs that tell the right story while capturing every detail to give the best UI/UX feel for my
                clients.
              </p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Using the right tools to reveal the real beauty and thought of a work as intended by my client.</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Taking concepts from ideas through to amazing products.</p>
            </li>
          </ul>
        </article>
        {/* ============= END OF UI/UX */}

        <article className="service">
          <div className="service__head">
            <h3>Web Development</h3>
          </div>

          <ul className="service__list">
            <li>
              <BiCheck className="service__list-icon" />
              <p>Developing quality products that actually does what it was intended to do with great user satisfaction.</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Integrating iterative development techniques for fully compliant Scrum and Agile projects with 100% client satisfaction.</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Creating and integrating APIs.</p>
            </li>
          </ul>
        </article>
        {/* ============= END OF WEB DEVELOPMENT */}

        <article className="service">
          <div className="service__head">
            <h3>Consulting</h3>
          </div>

          <ul className="service__list">
            <li>
              <BiCheck className="service__list-icon" />
              <p>
                Proffering ground-breaking and money-saving solutions to my clients by taking years of multi-disciplinary cross-functional experience
                into analysis clients' situations and applying specific solutions that meet their needs.
              </p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Providing innovative solutions and eliminating downtimes maximum productivity and profit.</p>
            </li>
          </ul>
        </article>
        {/* ============= END OF CONTENT CREATION */}
      </div>
    </section>
  );
}
