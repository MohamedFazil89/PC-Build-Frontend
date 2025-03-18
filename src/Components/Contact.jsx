import React from 'react';
import "./styles/Contact.css";

function ContactUs() {
  return (
    <section className="contact-us">
      <div className="contact-container">
        <h2 className="contact-title">Get In Touch</h2>
        <p className="contact-subtitle">
          Have a question or need support? Our team is here to help.
        </p>
        <form className="contact-form">
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input id="name" type="text" placeholder="Your Name" required />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input id="email" type="email" placeholder="Your Email" required />
          </div>
          <div className="form-group">
            <label htmlFor="subject">Subject</label>
            <input id="subject" type="text" placeholder="Subject" required />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea id="message" rows="5" placeholder="Your Message" required />
          </div>
          <button type="submit" className="contact-button">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}

export default ContactUs;
