import React from "react";
import "./landing.css";

const Landing = ({ onLogin }) => {
  return (
    <div className="landing-page">
      <div id="landing-img">
        <img src="https://images.unsplash.com/photo-1575819974033-21c1faf2adf0" />
      </div>
      <div className="container">
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
        <p
          style={{
            color: "#666",
            fontSize: "24px",
            marginBottom: "20px",
            fontWeight: "bold",
          }}
        >
          Discover, share, and explore movie reviews from fellow cinephiles like
          you!
        </p>
        <p
          style={{
            color: "#666",
            fontSize: "24px",
            marginBottom: "20px",
            fontWeight: "bold",
          }}
        >
          Please log in to start reviewing movies and joining discussions.
        </p>
      </div>
    </div>
  );
};

export default Landing;
