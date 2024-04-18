import React from 'react';
import './allReviews.css'

const AllReviews = ({ onLogin }) => {
  return (
    <div className="landing-page">
      <img src="path_to_your_image" alt="Welcome Graphic" width="400" height="600" />
      <h1>Welcome to MY_APP_NAME</h1>
      <button onClick={onLogin}>Log In</button>
    </div>
  );
};

export default AllReviews;
