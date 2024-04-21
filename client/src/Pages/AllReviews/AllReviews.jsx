import React, { useEffect, useState } from 'react';
import './allReviews.css';
import { useLogin } from '../../LoginContext'; // Update the path accordingly

const AllReviews = () => {
  // State to store fetched reviews
  const [reviews, setReviews] = useState([]);

  // Fetch reviews from the backend API
  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const response = await fetch('http://localhost:5005/api/post');
        if (!response.ok) {
          throw new Error('Failed to fetch reviews');
        }
        const data = await response.json();
        setReviews(data);
      } catch (error) {
        console.error('Error fetching reviews:', error.message);
      }
    };

    fetchReviews();
  }, []);

  return (
    <div className="reviews">
      <div className="reviews-grid">
        {reviews.map(review => (
          <div key={review._id} className="review">
            <h1>Review Title: {review.postTitle}</h1>
            <h3>Movie Title: {review.title}</h3>
            <img src={review.poster} alt={review.Title} />
            <p>{review.body}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllReviews;
