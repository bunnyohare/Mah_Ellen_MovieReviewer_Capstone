import React from 'react';
import './topNav.css';
import { Link } from "react-router-dom";

const TopNav = ({ isLoggedIn, onLogin, onLogout }) => {
  const handleLoginClick = () => {
    // Navigate to the login page
    window.location.href = '/login'; 
  };

  const handleLogoutClick = () => {
    onLogout();
    return <Navigate to="/" />;
  };

  return (
    <div className={`TopNav ${isLoggedIn ? '' : 'loggedIn'}`}>
      <ul>
        {isLoggedIn ? (
          <>
            <li>
              <Link to="/add-review">Add Review</Link>
            </li>
            <li>
              <Link to="/show-reviews">Show Reviews</Link>
            </li>
            <li>
              <button onClick={handleLogoutClick}>Log Out</button>
            </li>
          </>
        ) : (
          <li>
            <button className="LogIn-Button" onClick={handleLoginClick}>Log In</button>
          </li>
        )}
      </ul>
    </div>
  );
};

export default TopNav;
