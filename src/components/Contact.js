import React from "react";
import "./styles.css";

const Contact = () => {
  return (
    <section id="contact" className="contact-section">
      <h1>Contact Me</h1>
      <form className="contact-form">
        <input type="text" placeholder="Name" required />
        <input type="email" placeholder="Email" required />
        <textarea placeholder="Message" required />
        <button type="submit">Send</button>
      </form>
      <div className="contact-info">
        <h3>Contact Information</h3>
        <p>
          <i className="fas fa-envelope" /> email@email.com
        </p>
        <p>
          <i className="fas fa-phone" /> (123) 456-7890
        </p>
        <p>
          <i className="fas fa-map-marker-alt" /> New York, NY
        </p>
      </div>
    </section>
  );
};

export default Contact;
