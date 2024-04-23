import React from "react";
import "./footer.css";
import { Link, useNavigate } from "react-router-dom";

const Footer = () => {
  return (
    <div className="Footer">
      <ul>
        <li>
          <Link to="/privacy">Privacy</Link>
        </li>
        <li>
          <Link to="/terms">Terms of Use</Link>
        </li>
        <li>
          <Link to="/contact">Contact Us</Link>
        </li>

        <li>&copy; {new Date().getFullYear()} MovieReviewer</li>
      </ul>
    </div>
  );
};

export default Footer;
