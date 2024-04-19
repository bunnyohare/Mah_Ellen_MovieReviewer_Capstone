import React from 'react';
import './allReviews.css'

const AllReview = () => {
    // Dummy list of posts
    const posts = [
      { id: 1, title: 'Post 1' },
      { id: 2, title: 'Post 2' },
      { id: 3, title: 'Post 3' },
    ];
  
    return (
      <div className="reviews">
        <h2>Posts</h2>
        <ul>
          {posts.map(post => (
            <li key={post.id}>{post.title}</li>
          ))}
        </ul>
      </div>
    );
  };
  
  export default AllReview;
