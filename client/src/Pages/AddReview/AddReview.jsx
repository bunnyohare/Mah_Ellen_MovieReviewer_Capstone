import React, { useState } from 'react';
import './addReview.css';

function AddReview({ selectedMovie }) {
  // State for form fields
  const [postTitle, setPostTitle] = useState('');
  const [body, setBody] = useState('');

  // Default userId
  const userId = 1; // Change this value to a context for userID for production
  const { imdbID, title, year, poster } = selectedMovie;
  // Function to handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    // Submit form data to backend API
    // Include selected movie data: title, body, IMDBNumber, year, poster
    // const { imdbID, title, year, poster } = selectedMovie;
    const reviewData = {
      userId,
      title,
      body,
      IMDBNumber: imdbID,
      postTitle,
      year,
      poster
    };

    try {
      const response = await fetch('http://localhost:5005/api/post/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(reviewData)
      });

      if (!response.ok) {
        throw new Error('Failed to submit review');
      }

      console.log('Review submitted successfully!');
      // Reset form fields
      setPostTitle('');
      setBody('');
    } catch (error) {
      console.error('Error submitting review:', error.message);
    }
  };

  return (
    <div className="review-row">
    <div id="movie">
      <h3 id="Movie-List-Heading">Movie Being Reviewed</h3>
          <h3>{title}</h3>
          <p>Year: {year}</p>
          <img src={poster} onError={(e) => { e.target.onerror = null; e.target.src = "https://raw.githubusercontent.com/bunnyohare/SBA-320H/main/images/placeholder-omdb.jpg"; }} alt={title} />
    </div>
    <div id="add-review">
      <form onSubmit={handleSubmit}>
        <div id="input">
          <label htmlFor="postTitle">Title: </label>
          <input type="text" id="postTitle" value={postTitle} onChange={(e) => setPostTitle(e.target.value)} />
        </div>
        <div>
          <label htmlFor="body">Body: </label>
          <textarea id="body" rows="16" cols="50" value={body} onChange={(e) => setBody(e.target.value)} />
        </div>
        <button type="submit">Submit Review</button>
      </form>
    </div>
    </div>
  );
}

export default AddReview;
