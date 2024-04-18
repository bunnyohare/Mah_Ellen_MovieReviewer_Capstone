import React from 'react';
import './topNav.css';
import { Link } from "react-router-dom";
import { Nav, Button } from 'react-bootstrap';

const TopNav = ({ isLoggedIn, onLogin, onLogout }) => {
  const handleLoginClick = () => {
    // Navigate to the login page
    window.location.href = '/login'; 
  };

  const handleLogoutClick = () => {
    onLogout(); // fix this later
  };


  return (
    <div className="TopNav">
      <div className="NavItem">
        {isLoggedIn ? (
          <ul>
            <li>
              <Link to="/add-review">Add Review</Link>
            </li>
            <li>
              <Link to="/show-reviews">Show Reviews</Link>
            </li>
            <li>
              <Button variant="outline-light" onClick={handleLogoutClick}>Log Out</Button>
            </li>
          </ul>
        
        ) : (
          <ul>
            <li>
              <Button variant="outline-light" onClick={handleLoginClick}>Log In</Button>
            </li>
          </ul>
        )}
      </div>
    </div>
  );
};

export default TopNav;
