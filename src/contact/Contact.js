import React, { useRef } from "react";
import "./contact.css";
import { HiOutlineMail } from "react-icons/hi";
import { RiMessengerLine } from "react-icons/ri";
import { BsWhatsapp } from "react-icons/bs";
import emailjs from "emailjs-com";

export default function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm("service_q26ehy2", "template_5yec5mp", form.current, "VOxlV_kkd2wvrNwMF").then(
      (result) => {
        console.log(result.text);
      },
      (error) => {
        console.log(error.text);
      }
    );

    e.target.reset();
  };

  return (
    <section id="contact">
      <h5>Get in touch</h5>
      <h2>Contact</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <HiOutlineMail className="contact__option-icon" />
            <h4>Email</h4>
            <h5>Send me an email</h5>
            <a href="mailto:e.onomavwe@gmail.com">Send a message</a>
          </article>
          {/* <article className="contact__option">
            <RiMessengerLine className="contact__option-icon" />
            <h4>Messenger</h4>
            <h5>Learnforease</h5>
            <a href="https://m.me/ochuko.emmanuel.3/" target="_blank">
              Send a message
            </a>
          </article> */}
          <article className="contact__option">
            <BsWhatsapp className="contact__option-icon" />
            <h4>WhatsApp</h4>
            <h5>Send a WhatsApp message</h5>
            <a href="https://api.whatsapp.com/send?phone=2347030196916" target="_blank" rel="noreferrer">
              Send a message
            </a>
          </article>
        </div>
        {/* ============== End of Contact Options ============== */}

        <form ref={form} onSubmit={sendEmail} className="contact__form">
          <input type="text" name="name" placeholder="Your full name" required />
          <input type="email" name="email" placeholder="Your email" required />
          <textarea name="message" row="7" placeholder="Your message" required></textarea>
          <button type="submit" className="btn btn-primary">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}
