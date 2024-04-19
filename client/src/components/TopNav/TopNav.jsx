import React from 'react';
import './topNav.css';
import { Link, useNavigate } from 'react-router-dom';
import { useLogin } from '../../LoginContext'; // Update the path accordingly

const TopNav = () => {
  const { isLoggedIn, logout } = useLogin();
  const navigate = useNavigate();

  const handleLogoutClick = () => {
    logout();
    navigate('/');
  };

  return (
    <div className="TopNav">
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
            <button className="LogIn-Button" onClick={() => navigate('/login')}>Log In</button>
          </li>
        )}
      </ul>
    </div>
  );
};

export default TopNav;
