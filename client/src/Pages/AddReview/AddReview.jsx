import React, { useState, useEffect } from 'react';
import './addReview.css';
import axios from 'axios'; // Import Axios

function AddReview({ selectedMovie }) {
  // State for form fields
  const [postTitle, setPostTitle] = useState('');
  const [body, setBody] = useState('');
  const [submitted, setSubmitted] = useState(false); // State to track form submission
  const [newReviewId, setNewReviewId] = useState(null); // State to store ID of newly added review
  const noPoster = "https://raw.githubusercontent.com/bunnyohare/SBA-320H/main/images/placeholder-omdb.jpg";

  // Default userId
  const userId = 1; // Change this value to a context for userID for production
  const { imdbID, title, year, poster } = selectedMovie;

  // Function to handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    // Determine the poster URL to be stored in the database
    const posterUrl = poster === noPoster ? noPoster : poster; // Use the placeholder URL if no poster image is found
    // Submit form data to backend API
    const reviewData = {
      userId,
      title,
      body,
      IMDBNumber: imdbID,
      postTitle,
      year,
      poster: posterUrl // Use the determined poster URL
    };
  
    try {
      const response = await axios.post('http://localhost:5005/api/post/', reviewData);
      console.log('Review submitted successfully!');
      // Set submitted state to true
      setSubmitted(true);
      // Set newly added review ID
      setNewReviewId(response.data.id);
    } catch (error) {
      console.error('Error submitting review:', error.message);
    }
  };
  
  
  

  // Function to fetch details of newly added review
  useEffect(() => {
    const fetchNewReviewDetails = async () => {
      if (submitted && newReviewId) {
        try {
          const response = await axios.get(`http://localhost:5005/api/post/${newReviewId}`);
          console.log('Newly added review details:', response.data);
          // Set post title and body with the details of the newly added review
          setPostTitle(response.data.postTitle);
          setBody(response.data.body);
        } catch (error) {
          console.error('Error fetching newly added review details:', error.message);
        }
      }
    };

    fetchNewReviewDetails();
  }, [submitted, newReviewId]);

  return (
    <div className="container">
      <div className="review-info">
        <div id="movie">
          <h3 id="Movie-List-Heading">Movie Being Reviewed</h3>
          <h3>{title}</h3>
          <p>Year: {year}</p>
          <img
            src={poster}
            onError={(e) => { e.target.onerror = null; e.target.src = `${noPoster}`; }}
            alt={title}
          />
        </div>
      </div>
      <div className="review-form">
        {!submitted ? (
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
        ) : (
          <div className="submitted-review">
            <h3>Review Submitted Successfully!</h3>
            <p>Title: {postTitle}</p>
            <p>Body: {body}</p>
            <button onClick={() => setSubmitted(false)}>Edit Review</button>
          </div>
        )}
      </div>
    </div>
  );
}

export default AddReview;
