import React, { useState, useEffect } from 'react';
import './editReview.css';
import axios from 'axios'; // Import Axios
import { useParams } from 'react-router-dom';

function EditReview() {
  const { id } = useParams();
  // State for form fields
  const [movieDetails, setMovieDetails] = useState(null);
  const [postTitle, setPostTitle] = useState('');
  const [body, setBody] = useState('');
  const [submitted, setSubmitted] = useState(false); // State to track form submission

  // Function to fetch movie details
  useEffect(() => {
    const fetchMovieDetails = async () => {
      try {
        const response = await axios.get(`http://localhost:5005/api/post/${id}`);
        setMovieDetails(response.data);

        // Set initial values for postTitle and body from movieDetails
        setPostTitle(response.data.postTitle);
        setBody(response.data.body);
      } catch (error) {
        console.error('Error fetching movie details:', error.message);
      }
    };

    fetchMovieDetails();
  }, [id]);

  // Function to handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    // Submit form data to backend API
    const reviewData = {
      userId: 1, // Change this value to a context for userID for production
      title: movieDetails.title,
      body,
      IMDBNumber: movieDetails.imdbID,
      postTitle,
      year: movieDetails.year,
      poster: movieDetails.poster
    };

    try {
      const response = await axios.put(`http://localhost:5005/api/post/${id}`, reviewData);

      if (response.status === 200) {
        console.log('Review updated successfully!');
        setSubmitted(true); // Update state to indicate form submission
      } else {
        throw new Error('Failed to update review');
      }
    } catch (error) {
      console.error('Error updating review:', error.message);
    }
  };

  if (!movieDetails) {
    return <div>Loading...</div>; // Display loading message until movie details are fetched
  }

  return (
    <div className="container">
      <div className="review-info">
        <div id="movie">
          <h2 id="Movie-List-Heading">Movie Being Reviewed</h2>
          <h3>{movieDetails.title}</h3>
          <p>Year: {movieDetails.year}</p>
          <img
            src={movieDetails.poster}
            onError={(e) => { e.target.onerror = null; e.target.src = "https://raw.githubusercontent.com/bunnyohare/SBA-320H/main/images/placeholder-omdb.jpg"; }}
            alt={movieDetails.title}
          />
        </div>
      </div>
      <div className="review-form">
        {!submitted && ( // Render the form only if it hasn't been submitted
          <div id="add-review">
            <form onSubmit={handleSubmit} className="form">
              <div id="input">
                <label htmlFor="postTitle">Review Title: </label>
                <input type="text" id="postTitle" value={postTitle} onChange={(e) => setPostTitle(e.target.value)} />
              </div>
              <div>
                <label htmlFor="body">Body: </label>
                <textarea id="body" rows="16" cols="50" value={body} onChange={(e) => setBody(e.target.value)} />
              </div>
              <button type="submit">Submit Review</button>
            </form>
          </div>
        )}
        {submitted && (
          <div className="updated-review">
            <h3>Review Updated Successfully!</h3>
            <p>Title: {postTitle}</p>
            <p>Body: {body}</p>
            <button onClick={() => setSubmitted(false)}>Edit Review</button>
          </div>
        )}
      </div>
    </div>
  );
}

export default EditReview;
