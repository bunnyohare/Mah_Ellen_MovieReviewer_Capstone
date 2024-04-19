import React from 'react'
import './footer.css'

const Footer = () => {
  return (
        <div className="Footer">
          <ul>
            <li><a href="#">Privacy Policy</a></li>
            <li><a href="#">Terms of Use</a></li>
            <li><a href="#">Contact Us</a></li>
          
          <li>&copy; {new Date().getFullYear()} MovieReviewer</li>
          </ul>
          </div>
  );
};

export default Footer;