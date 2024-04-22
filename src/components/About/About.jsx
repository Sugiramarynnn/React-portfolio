import React from "react";
import "./About.css";
import appdesign from "../../../public/appdesign.png";
import webdesign from "../../../public/webdesign.png";
import ui from "../../../public/ui.png";

const About = () => {
  return (
    <section id="about">
      <span className="aboutTitle">WANT TO KNOW ABOUT ME??</span>
      <span className="aboutDesc">
        I am a skilled and passionate web designer with experience in creating
        visually appealing and user-friendly websites. I have a strong
        understanding of design and a keen eye for detail, I am proficient in
        HTML,CSS, and JavaScript.
      </span>
      <div className="aboutBars">
        <div className="aboutBar">
          <img src={appdesign} alt="appdesign" className="aboutBarImg" />
          <div className="aboutBarText">
            <h2>App Design</h2>
            <p>
              I am a skilled and passionate web designer with experience in
              creating visually appealing and user-friendly websites. I have a
              strong understanding of design and a keen eye for detail, I am
              proficient in HTML,CSS, and JavaScript.
            </p>
          </div>
        </div>

        <div className="aboutBar">
          <img src={webdesign} alt="Web Design" className="aboutBarImg" />
          <div className="aboutBarText">
            <h2>Website Design</h2>
            <p>
              I am a skilled and passionate web designer with experience in
              creating visually appealing and user-friendly websites. I have a
              strong understanding of design and a keen eye for detail, I am
              proficient in HTML,CSS, and JavaScript.
            </p>
          </div>
        </div>

        <div className="aboutBar">
          <img src={ui} alt="ui/ux" className="aboutBarImg" />
          <div className="aboutBarText">
            <h2>UI/UX Design</h2>
            <p>
              I am a skilled and passionate web designer with experience in
              creating visually appealing and user-friendly websites. I have a
              strong understanding of design and a keen eye for detail, I am
              proficient in HTML,CSS, and JavaScript.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
