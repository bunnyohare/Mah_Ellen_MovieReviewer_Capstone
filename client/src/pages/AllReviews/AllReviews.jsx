import React, { useEffect, useState } from "react";
import "./allReviews.css";
import { useLogin } from "../../LoginContext"; 
import axios from "axios";
import { useNavigate } from "react-router-dom";

const MDB_SERVER_ALL = import.meta.env.VITE_MDB_SERVER;
//const MDB_SERVER_ALL = "http://localhost:5005/"

const AllReviews = () => {
  // State to store fetched reviews
  const [reviews, setReviews] = useState([]);
  const navigate = useNavigate(); // Use useNavigate hook to get the navigate function

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const response = await axios.get(`${MDB_SERVER_ALL}api/post`);
        setReviews(response.data);
      } catch (error) {
        console.error("Error fetching reviews:", error.message);
      }
    };

    fetchReviews();
  }, []);

  const handleEditClick = (reviewId) => {
    navigate(`/edit-review/${reviewId}`);
  };

  const handleDeleteClick = async (reviewId) => {
    try {
      await axios.delete(`${MDB_SERVER_ALL}api/post/${reviewId}`);
      // Refetch reviews after deletion
      const response = await axios.get(`${MDB_SERVER_ALL}api/post`);
      setReviews(response.data);
    } catch (error) {
      console.error("Error deleting review:", error.message);
    }
  };

  return (
    <div className="reviews">
      <h1>All Your MovieReviewer Reviews</h1>
      <div className="reviews-grid">
        {reviews.map((review) => (
          <div key={review._id} className="review">
            <h2>Review: {review.postTitle}</h2>
            <h3>
              Movie: <cite>{review.title}</cite>
            </h3>
            <img
              src={review.poster}
              onError={(e) => {
                e.target.onerror = null; // Prevent infinite loop
                e.target.src =
                  "https://raw.githubusercontent.com/bunnyohare/SBA-320H/main/images/placeholder-omdb.jpg"; // Set the source to the placeholder URL
              }}
              alt={review.Title}
            />
            <div className="review-body">
              {review.body.split("\n\n").map((item, idx) => (
                <p key={idx}>{item}</p>
              ))}
            </div>
            <button onClick={() => handleEditClick(review.id)}>
              Edit Review
            </button>
            <button onClick={() => handleDeleteClick(review.id)}>
              Delete Review
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllReviews;
