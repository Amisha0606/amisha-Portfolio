import React from "react";
import {
  FaGithub,
  FaLinkedin,
  FaTwitterSquare,
  FaEnvelope,
} from "react-icons/fa";
import { BsArrowUpCircleFill } from "react-icons/bs";

const handleGoToTop = () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
};

window.addEventListener("scroll", () => {
  // Get the skills section element
  const skillsSection = document.querySelector(".skills-section");
  // Get the position of the skills section
  const skillsSectionPosition = skillsSection.getBoundingClientRect().top;
  // Get the go to top button element
  const goToTopButton = document.querySelector(".go-to-top");
  // Show the button when the user scrolls past the skills section
  if (skillsSectionPosition < 0) {
    goToTopButton.style.right =
      "20px"; /* Animate the button by changing the right margin */
  } else {
    goToTopButton.style.right =
      "-50px"; /* Hide the button by setting the right margin to a negative value */
  }
});

const Footer = () => {
  return (
    // <footer className="footer">
    <footer>
      <section id="footer" className="footer">
        <div className="footer-container">
          <div className="social-icons">
            <a
              href="https://github.com/Amisha0606"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub className="icon" />
            </a>
            <a
              href="https://www.linkedin.com/in/amishha0606/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin className="icon" />
            </a>
            <a
              href="https://twitter.com/amishha0606"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaTwitterSquare className="icon" />
            </a>
            <a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=pamisha0606@gmail.com
            &su=Regarding Frontend Web Developer Role.
            &body=Hey! How are you? I'm <Your Name Here>. 
            I'm looking for a Frontend Web Developer for my project. Are you available?
            <BODY here>"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaEnvelope className="icon" />
            </a>
          </div>
        </div>
        <div className="go-to-top" onClick={handleGoToTop}>
          <BsArrowUpCircleFill />
        </div>
      </section>
    </footer>
  );
};

export default Footer;
