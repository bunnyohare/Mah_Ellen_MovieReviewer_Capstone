import React, { useState, useEffect } from "react";
import "./editReview.css";
import axios from "axios"; // Import Axios
import { useParams } from "react-router-dom";
import "./singleReview.css";
import { useNavigate } from "react-router-dom";

//const MDB_SERVER = import.meta.env.MDB_SERVER;
const MDB_SERVER = "http://localhost:5005/"

function SingleReview() {
  const { id } = useParams();
  const [movieDetails, setMovieDetails] = useState(null);
  // Function to fetch movie details
  useEffect(() => {
    const fetchMovieDetails = async () => {
      try {
        const response = await axios.get(
          `${MDB_SERVER}api/post/${id}`
        );
        setMovieDetails(response.data);

        // Set initial values for postTitle and body from movieDetails
        setPostTitle(response.data.postTitle);
        setBody(response.data.body);
      } catch (error) {
        console.error("Error fetching movie details:", error.message);
      }
    };

    fetchMovieDetails();
  }, [id]);

  const navigate = useNavigate(); // History object for navigation
  // Navigate to EditReview page with review data and highestId
  const handleEditReview = () => {
    navigate(`/edit-review/${id}`);
  };

  return (
    <div className="container">
      <div className="review-info">
        <div id="movie">
          <h2 id="Movie-List-Heading">Movie Being Reviewed</h2>
          <h3>{movieDetails.title}</h3>
          <p>Year: {movieDetails.year}</p>
          <img
            src={movieDetails.poster}
            onError={(e) => {
              e.target.onerror = null;
              e.target.src =
                "https://raw.githubusercontent.com/bunnyohare/SBA-320H/main/images/placeholder-omdb.jpg";
            }}
            alt={movieDetails.title}
          />
        </div>
      </div>
      <div className="review-text">     
          <div className="user-review">
            <h2>Title: {postTitle}</h2>
            <p>Body: {body}</p>
            <button onClick={() => handleEditReview()}>Edit Review</button>
          </div>

      </div>
    </div>
  );
}

export default SingleReview;
