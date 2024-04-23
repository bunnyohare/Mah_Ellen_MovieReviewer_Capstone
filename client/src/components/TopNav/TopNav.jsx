import React from "react";
import "./topNav.css";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { useLogin } from "../../LoginContext"; // Update the path accordingly

const TopNav = () => {
  const { isLoggedIn, logout } = useLogin();
  const navigate = useNavigate();
  const location = useLocation(); // Add useLocation hook

  const handleLogoutClick = () => {
    logout();
    navigate("/");
  };

  return (
    <div className="TopNav">
      <ul>
        {isLoggedIn ? (
          <>
            <li>
              <Link to="/home" className={location.pathname === "/home" ? "active" : ""}>
                Home
              </Link>
            </li>
            <li>
              <Link to="/add-review" className={location.pathname === "/add-review" ? "active" : ""}>
                Add Review
              </Link>
            </li>
            <li>
              <Link to="/show-reviews" className={location.pathname === "/show-reviews" ? "active" : ""}>
                Show Reviews
              </Link>
            </li>
            <li>
              <button onClick={handleLogoutClick}>Log Out</button>
            </li>
          </>
        ) : (
          <li>
            <button className="LogIn-Button" onClick={() => navigate("/login")}>
              Log In
            </button>
          </li>
        )}
      </ul>
    </div>
  );
};

export default TopNav;
