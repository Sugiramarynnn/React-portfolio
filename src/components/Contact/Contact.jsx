import React from "react";
import "./Contact.css";
import linkedin from "../../../public/linkedin.png";
import instagram from "../../../public/instagram.png";
import github from "../../../public/github.png";

const Contact = () => {
  return (
    <div>
      <section id="contactpage">
        <div id="contact"></div>
        <h1 className="contactpageTitle">Reach out to ME!</h1>
        <span className="contactDesc">
          Please fill out the form below to discuss any work opportunities
        </span>
        <form className="contactForm">
          <input type="text" className="name" placeholder="Your Name" />
          <input type="email" className="email" placeholder="Your Email" />
          <textarea
            id="message"
            name="message"
            rows="5"
            placeholder="Your Message"
            className="msg"
          ></textarea>
          <button type="submit" value="send" className="submitBtn">
            Submit
          </button>
          <div className="links">
            <a href="https://linkedin.com/in/ineza-sugira-aimee-marylene-b0607b224/">
              <img src={linkedin} alt="Linkedin" className="link" />
            </a>
            <a href="https://github.com/">
              <img src={github} alt="github" className="link" />
            </a>
            <a href="https://www.instagram.com/sugira.m_/?utm_source=qr&igsh=MTNkY2d3dWFpeXN2cA%3D%3D">
              <img src={instagram} alt="Instagram" className="link" />
            </a>
          </div>
        </form>
      </section>
    </div>
  );
};

export default Contact;
