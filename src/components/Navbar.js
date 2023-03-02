import React from "react";
import "./styles.css";

const Navbar = () => {
  const handleMenuClick = (e) => {
    const target = e.target.getAttribute("data-link");
    const section = document.getElementsByClassName(target)[0];
    // section.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="nav">
      <input type="checkbox" />
      <span></span>
      <span></span>
      <div className="menu">
        <li>
          <a
            href="#introduction"
            data-link="introduction"
            onClick={handleMenuClick}
          >
            About
          </a>
        </li>
        <li>
          <a href="#skills" data-link="skills" onClick={handleMenuClick}>
            Skills
          </a>
        </li>
        <li>
          <a href="#education" data-link="education" onClick={handleMenuClick}>
            Education
          </a>
        </li>
        <li>
          <a href="#projects" data-link="projects" onClick={handleMenuClick}>
            Projects
          </a>
        </li>
        <li>
          <a
            href="#experience"
            data-link="experience"
            onClick={handleMenuClick}
          >
            Work
          </a>
        </li>
        <li>
          <a href="#footer" data-link="footer" onClick={handleMenuClick}>
            Contact
          </a>
        </li>
      </div>
    </div>
  );
};

export default Navbar;
