import React from 'react'
import './footer.css'
import { Container } from 'react-bootstrap';

const Footer = () => {
  return (
    <footer style={{ backgroundColor: '#C77DFF', padding: '20px 0' }}>
      <Container>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <p>&copy; {new Date().getFullYear()} MovieReviewer</p>
          <ul className="list-inline">
            <li className="list-inline-item"><a href="#">Privacy Policy</a></li>
            <li className="list-inline-item"><a href="#">Terms of Use</a></li>
            <li className="list-inline-item"><a href="#">Contact Us</a></li>
          </ul>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;