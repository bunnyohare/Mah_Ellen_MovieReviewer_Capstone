import React, { useEffect, useState } from 'react';
import './allReviews.css';
import { useLogin } from '../../LoginContext'; // Update the path accordingly
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


const AllReviews = () => {
  // State to store fetched reviews
  const [reviews, setReviews] = useState([]);
  const navigate = useNavigate(); // Use useNavigate hook to get the navigate function



  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const response = await axios.get('http://localhost:5005/api/post');
        setReviews(response.data);
      } catch (error) {
        console.error('Error fetching reviews:', error.message);
      }
    };

    fetchReviews();
  }, []);

  const handleEditClick = (reviewId) => {
    console.log(reviewId)
    navigate(`/edit-review/${reviewId}`);
  };

  const handleDeleteClick = async (reviewId) => {
    try {
      await axios.delete(`http://localhost:5005/api/post/${reviewId}`);
      // Refetch reviews after deletion
      const response = await axios.get('http://localhost:5005/api/post');
      setReviews(response.data);
    } catch (error) {
      console.error('Error deleting review:', error.message);
    }
  };


  return (
    <div className="reviews">
      <div className="reviews-grid">
        {reviews.map(review => (
          <div key={review._id} className="review">
            <h1>Review Title: {review.postTitle}</h1>
            <h3>Movie Title: {review.title}</h3>
            <img src={review.poster} alt={review.Title} />
            <p>{review.body}</p>

            <button onClick={() => handleEditClick(review.id)}>Edit Review</button>

          <button onClick={() => handleDeleteClick(review.id)}>Delete Review</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllReviews;
