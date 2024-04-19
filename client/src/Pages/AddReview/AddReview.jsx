import React, { useState } from 'react';
import './addReview.css';

function AddReview({ selectedMovie }) {
  // State for form fields
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Submit form data to backend API
    // Include selected movie data: title, body, IMDBNumber, year, poster
    console.log('Submitting review:', { title, body, ...selectedMovie });
    // Reset form fields
    setTitle('');
    setBody('');
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
