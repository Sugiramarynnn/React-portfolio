import React from "react";
import "./Navbar.css";
import logo from "../../../public/logo.png";
import { Link } from "react-scroll";
import contact from "../../../public/contactt.png";

const NavBar = () => {
  return (
    <nav className="navbar">
      <img src={logo} alt="Logo" className="logo" />
      <div className="desktopMenu">
        <a href="/" className="desktopMenuListItem">
          Home
        </a>
        <a href="About" className="desktopMenuListItem">
          About
        </a>
        <a href="Projects" className="desktopMenuListItem">
          Projects
        </a>
        <a href="Contact" className="desktopMenuListItem">
          Contact
        </a>
      </div>
      <button className="desktopMenuBtn">
        <img src={contact} alt="contactt" className="desktopMenuImg" /> Contact
        Me
      </button>
    </nav>
  );
};

export default NavBar;
