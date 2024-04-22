import React from "react";
import "./Project.css";
import architecture from "../../../public/architecture.png";
import emoji from "../../../public/emoji.png";
import food from "../../../public/food.png";
import scissors from "../../../public/scissors.png";
import agecalculator from "../../../public/angecalculator.png";
const Project = () => {
  return (
    <section id="projects">
      <h2 className="projectsTitle">My Projects</h2>
      <span className="projectsDesc">
        I take pride in paying attention to the smallest details and making sure
        that my work is pixel perfect. I am excited to bring my skills and
        experience to help business achieve their goals and create a strong
        online presence.
      </span>
      <div className="projectsImgs">
        <img src={architecture} alt="" className="projectsImg" />
        <img src={emoji} alt="" className="projectsImg" />
        <img src={food} alt="" className="projectsImg" />
        <img src={scissors} alt="" className="projectsImg" />
        <img src={agecalculator} alt="" className="projectsImg" />
      </div>
    </section>
  );
};

export default Project;
