import React from 'react';
import './moviesList.css';

function MoviesList({ movies, openAddReviewForm }) {
  const handleReviewClick = (movie) => {
    // Pass movie information to the Add Review form
    const { imdbID, Title, Year, Poster } = movie;
    const placeholderImageUrl = "https://raw.githubusercontent.com/bunnyohare/SBA-320H/main/images/placeholder-omdb.jpg";
    const posterUrl = Poster === placeholderImageUrl ? null : Poster; // If the poster is the placeholder, set it to null

    openAddReviewForm({ imdbID, year: Year, poster: posterUrl, title: Title });
  };

  return (
    <div id="moviesList">
      <h3 id="Movie-List-Heading">Found Movies List</h3>
      {/* Conditionally render the movieList based on showFavorites */}
      {movies.map(movie => (
        <div key={movie.imdbID}>
          <h3>{movie.Title}</h3>
          <p>Year: {movie.Year}</p>
          <p>IMDb ID: {movie.imdbID}</p>
          <img src={movie.Poster} onError={(e) => { e.target.onerror = null; e.target.src = "https://raw.githubusercontent.com/bunnyohare/SBA-320H/main/images/placeholder-omdb.jpg"; }} alt={movie.Title} />
          <button onClick={() => handleReviewClick(movie)}>Write A Review</button>
        </div>
      ))}
    </div>
  );
}

export default MoviesList;
