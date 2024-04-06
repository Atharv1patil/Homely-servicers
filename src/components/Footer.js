import React from 'react';
import '../styles/footer.css'; // Import your CSS file

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <h4>About Us</h4>
            <p>Homely provides a range of reliable and professional home services to make your life easier.</p>
          </div>
          <div className="col-md-4">
            <h4>Contact Info</h4>
            <p>Email: homely@gmail.com</p>
            <p>Phone: +9165XXXXXX07</p>
          </div>
          <div className="col-md-4">
            <h4>Quick Links</h4>
            <ul className="list-unstyled">
              <li><a href="/">Home</a></li>
              <li><a href="/services">Services</a></li>
              <li><a href="/contact">Contact</a></li>
              <li><a href="/faq">FAQ</a></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
