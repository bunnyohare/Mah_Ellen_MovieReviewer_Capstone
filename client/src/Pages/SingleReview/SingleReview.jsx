import React from 'react';
import './singleReview.css'

const SingleReview = () => {
  // Dummy list of posts
  const post = [
    { id: 1, title: 'Post 1' },
  ];

  return (
    <div className="reviews">
      <h2>Posts</h2>
      <ul>
        {post.map(post => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default SingleReview;