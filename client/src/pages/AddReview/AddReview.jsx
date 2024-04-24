import React, { useState, useEffect } from "react";
import "./addReview.css";
import axios from "axios"; // Import Axios
import { useNavigate } from "react-router-dom";

//const OMDB_URL = import.meta.env.VITE_OMDB_URL_WITH_KEY;
const MDB_SERVER_ADD = import.meta.env.VITE_MDB_SERVER;
//const MDB_SERVER_ADD = "http://localhost:5005/"

function AddReview({ selectedMovie }) {
  // State for form fields
  const [postTitle, setPostTitle] = useState("");
  const [body, setBody] = useState("");
  const [submitted, setSubmitted] = useState(false); // State to track form submission
  const [isNewSubmission, setIsNewSubmission] = useState(true); // State to track if it's a new submission
  const [reviewId, setReviewId] = useState(null); // State to store ID of the review
  const [highestId, setHighestId] = useState(null); // State to store highest movie ID
  const [loading, setLoading] = useState(false); // State to track loading state
  const noPoster =
    "https://raw.githubusercontent.com/bunnyohare/SBA-320H/main/images/placeholder-omdb.jpg";

  // Default userId
  const userId = 1; // Change this value to a context for userID for production
  const { imdbID, title, year, poster } = selectedMovie;

  useEffect(() => {
    async function fetchHighestId() {
      try {
        setLoading(true);
        // Send a GET request to fetch all the movies from your server's API
        const response = await axios.get(`${MDB_SERVER_ADD}api/post/`);
        // Process the response to find the maximum id value
        const movies = response.data;
        const ids = movies.map((movie) => parseInt(movie.id));
        const highestIdMovie = Math.max(...ids);
        setHighestId(highestIdMovie);
        console.log("Highest ID:", highestIdMovie);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching movies:", error);
        setLoading(false);
      }
    }

    fetchHighestId();
  }, []); // Run only once when the component mounts

  const navigate = useNavigate(); // History object for navigation
  // Navigate to EditReview page with review data and highestId
  const handleEditReview = () => {
    navigate(`/edit-review/${highestId + 1}`);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Handling form submission...");

    const posterUrl = poster === noPoster ? noPoster : poster;

    try {
      if (!submitted) {
        console.log("Form not submitted yet...");

        let reviewData;

        if (isNewSubmission) {
          console.log("New submission...");

          // If it's a new submission, use highestId + 1 as the review ID
          reviewData = {
            id: highestId + 1,
            userId,
            title,
            body,
            IMDBNumber: imdbID,
            postTitle,
            year,
            poster: posterUrl,
          };
        } else if (reviewId) {
          console.log("Editing existing review...");
          console.log("Current reviewId:", reviewId);

          // If it's an edit and reviewId exists, update the existing review
          reviewData = {
            id: reviewId,
            userId,
            title,
            body,
            IMDBNumber: imdbID,
            postTitle,
            year,
            poster: posterUrl,
          };
        }

        console.log("Review data:", reviewData);

        // Determine the API endpoint based on isNewSubmission
        const endpoint = isNewSubmission
          ? `${MDB_SERVER_ADD}api/post/`
          : `${MDB_SERVER_ADD}api/post/${reviewId}`;

        // Determine the HTTP method based on isNewSubmission
        const method = isNewSubmission ? "POST" : "PUT";

        // Send the request to the appropriate endpoint with the reviewData
        const response = await axios({
          method,
          url: endpoint,
          data: reviewData,
        });

        console.log("Review submitted successfully!");
        console.log("Response data:", response.data);

        // Update the reviewId state if it's a new submission`
        if (isNewSubmission) {
          setReviewId(response.data.id);
        }

        setSubmitted(true);
        setIsNewSubmission(false); // Update isNewSubmission flag after the first submission

        console.log("Review ID set:", response.data.id);
      }
    } catch (error) {
      console.error("Error submitting review:", error.message);
    }
  };

  // Function to fetch details of the review if it's an edit
  useEffect(() => {
    const fetchReviewDetails = async () => {
      try {
        setLoading(true);
        const response = await axios.get(
          `${MDB_SERVER_ADD}api/post/${reviewId}`
        );
        console.log("Review details fetched successfully:", response.data);
        const { postTitle, body } = response.data;
        setPostTitle(postTitle);
        setBody(body);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching review details:", error.message);
        setLoading(false);
      }
    };

    if (!submitted && reviewId) {
      fetchReviewDetails();
    }
  }, [submitted, reviewId]);

  return (
    <div className="container">
      <div className="review-info">
        <div id="movie">
          <h1 id="Movie-List-Heading">Movie Being Reviewed</h1>
          <h2>{title}</h2>
          <p id="review-year">Year: {year}</p>
          <img
            src={poster}
            onError={(e) => {
              e.target.onerror = null;
              e.target.src = `${noPoster}`;
            }}
            alt={title}
          />
        </div>
      </div>
      <div className="right-side-review">
        {!submitted ? (
          <div className="review-form">
            <form onSubmit={handleSubmit}>
              <div id="input">
                <label htmlFor="postTitle">Review Title: </label>
                <input
                  type="text"
                  id="postTitle"
                  value={postTitle}
                  onChange={(e) => setPostTitle(e.target.value)}
                />
              </div>
              <div>
                <label htmlFor="body">Body: </label>
                <textarea
                  id="body"
                  rows="16"
                  cols="50"
                  value={body}
                  onChange={(e) => setBody(e.target.value)}
                />
              </div>
              <button type="submit">Submit Review</button>
            </form>
          </div>
        ) : (
          <div className="submitted-review">
            <h3>Review Submitted Successfully!</h3>
            <p>Title: {postTitle}</p>
            <p>Body: {body}</p>
            <button class="edit-review-btn" onClick={handleEditReview}>
              Edit Review
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default AddReview;
