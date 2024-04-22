import React from 'react'
import './footer.css'
import { Link, useNavigate } from 'react-router-dom';

const Footer = () => {
  return (
        <div className="Footer">
          <ul>
            <li><a href="#">Privacy Policy</a></li>
            <li><Link to="/terms">Terms of Use</Link></li>
            <li><a href="#">Contact Us</a></li>
          
          <li>&copy; {new Date().getFullYear()} MovieReviewer</li>
          </ul>
          </div>
  );
};

export default Footer;