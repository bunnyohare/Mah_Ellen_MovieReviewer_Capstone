import React, { useState } from 'react';
import './addReview.css';

function AddReview({ selectedMovie }) {
  // State for form fields
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');

  // Default userId
  const userId = 1; // Change this value to a context for userID for production

  // Function to handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    // Submit form data to backend API
    // Include selected movie data: title, body, IMDBNumber, year, poster
    const { imdbID, movieTitle, year, poster } = selectedMovie;
    const reviewData = {
      userId,
      title,
      body,
      IMDBNumber: imdbID,
      movieTitle,
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
      setTitle('');
      setBody('');
    } catch (error) {
      console.error('Error submitting review:', error.message);
    }
  };

  return (
    <div className="add-review">
      <h3>Write a Review</h3>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="title">Title:</label>
          <input type="text" id="title" value={title} onChange={(e) => setTitle(e.target.value)} />
        </div>
        <div>
          <label htmlFor="body">Body:</label>
          <textarea id="body" value={body} onChange={(e) => setBody(e.target.value)} />
        </div>
        <button type="submit">Submit Review</button>
      </form>
    </div>
  );
}

export default AddReview;
