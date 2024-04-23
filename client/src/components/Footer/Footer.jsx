import React from "react";
import "./footer.css";
import { Link, useLocation } from "react-router-dom";

const Footer = () => {
  const location = useLocation();

  return (
    <div className="Footer">
      <ul>
        <li>
          <Link to="/privacy" className={location.pathname === "/privacy" ? "active" : ""}>
            Privacy
          </Link>
        </li>
        <li>
          <Link to="/terms" className={location.pathname === "/terms" ? "active" : ""}>
            Terms of Use
          </Link>
        </li>
        <li>
          <Link to="/contact" className={location.pathname === "/contact" ? "active" : ""}>
            Contact Us
          </Link>
        </li>

        <li>&copy; {new Date().getFullYear()} MovieReviewer</li>
      </ul>
    </div>
  );
};

export default Footer;
