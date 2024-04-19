import React from 'react';
import './landing.css'; // Import CSS for styling

const Landing = ({ onLogin }) => {
  return (
    <div className="landing-page">
      <h1>Welcome to MovieRater!</h1>
      <img src="path_to_your_image" alt="Welcome Graphic" width="400" height="600" />
      
      <button onClick={onLogin}>Log In</button>
    </div>
  );
};

export default Landing;
