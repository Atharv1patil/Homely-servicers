import React from 'react';
import '../styles/contact.css'; 

const Contact = () => {
  return (
    <div className="contact-container">
      <div className="background-image"></div>
      <div className="contact-content">
        <h2>Contact Us</h2>
        <p>If you have any questions or inquiries, feel free to get in touch with us.</p>
        <form className="contact-form">
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input type="text" id="name" name="name" required />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email" required />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea id="message" name="message" rows="5" required></textarea>
          </div>
          <button type="submit" className="btn btn-primary">Send Message</button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
