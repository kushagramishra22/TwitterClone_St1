// Footer.js
import React from "react";
import { Link } from "react-router-dom";
import "./css/footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-logo">
            <h1>TWITTER</h1>
          </div>
          <div className="footer-links">
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/contact">Contact</Link>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
              <li>
                <Link to="/login">Login/SignUp</Link>
              </li>
            </ul>
          </div>
          <div className="additional-terms">
            <p>&copy; 2024 Twitter. All rights reserved.</p>
            <p>Terms of Service | Privacy Policy | Cookie Policy</p>
            <p>Do Not Sell My Personal Information | Sitemap</p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
