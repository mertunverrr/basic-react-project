import React from "react";
import "../css/footer.css";
import { FaFacebookSquare, FaTwitter, FaInstagram } from "react-icons/fa";

function Footer() {
  return (
    <div className="footer-container">
      <h2 id="logoShortly">Shortly</h2>
      <div className="footer-element">
        <h4 className="footer-title">Features</h4>
        <ul>
          <li>Link Shortening</li>
          <li>Branded Links</li>
          <li>Analytics</li>
        </ul>
      </div>
      <div className="footer-element">
        <h4 className="footer-title">Resources</h4>
        <ul>
          <li>Blog</li>
          <li>Developers</li>
          <li>Support</li>
        </ul>
      </div>
      <div className="footer-element">
        <h4 className="footer-title">Company</h4>
        <ul>
          <li>About</li>
          <li>Our Team</li>
          <li>Careers</li>
          <li>Contact</li>
        </ul>
      </div>
      <div className="logo-area">
        <a target="_blank" href="https://www.facebook.com/">
          <FaFacebookSquare className="social-media-logo" />
        </a>

        <a target="_blank" href="https://www.instagram.com/">
          {" "}
          <FaInstagram className="social-media-logo" />
        </a>

        <a target="_blank" href="https://twitter.com/home?lang=tr">
          <FaTwitter className="social-media-logo" />
        </a>
      </div>
    </div>
  );
}

export default Footer;
