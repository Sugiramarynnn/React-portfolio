import React from "react";
import "./Intro.css";
import me from "../../../public/me.png";
import { Link } from "react-scroll";

const Intro = () => {
  return (
    <section id="intro">
      <div className="introContent">
        <span className="hello">Hello</span>
        <br/>
        <span className="introText">
          I'm <span className="introName">Marlyene</span>
          <br /> Website Designer
        </span>
        <p className="intropara">
         I am a full stack web designer with passion in software development
        </p>
        <Link>
          <button className="btn">
            Hire Me
          </button>
        </Link>
      </div>
      <img src={me} alt="profile" className="Me" />
    </section>
  );
};

export default Intro;
