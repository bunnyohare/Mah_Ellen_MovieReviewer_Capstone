import React, { useState } from "react";
import "./logIn.css";
import { Navigate } from "react-router-dom";
import { useLogin } from "../../LoginContext"; // Update the path accordingly

const LogIn = () => {
  const { login } = useLogin(); // Get the login function from the context
  const [userId, setUserId] = useState("");
  const [password, setPassword] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false); // New state to track login status

  const handleSubmit = (e) => {
    e.preventDefault();
    // Dummy authentication (accept any userId and password)
    // Set isLoggedIn state to true
    setIsLoggedIn(true);
    // Call the login function from the context
    login();
  };

  // Redirect the user to the add-review page if logged in
  if (isLoggedIn) {
    return <Navigate to="/show-reviews" />;
  }

  return (
    <div className="LogIn">
      <div className="Welcome">
        <h1
          style={{
            color: "#333",
            fontSize: "32px",
            margin: "20px 0",
            fontWeight: "bold",
          }}
        >
          Welcome to MovieReviewer!
        </h1>
        <h2>Please Login</h2>
      </div>
      <div id="LogIn-Form">
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="userId">User ID: </label>
            <input
              type="text"
              id="userId"
              value={userId}
              onChange={(e) => setUserId(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="password">Password: </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default LogIn;
