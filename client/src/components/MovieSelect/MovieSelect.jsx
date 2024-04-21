import React, { useState, useEffect } from 'react';
import SearchBox from '../SearchBox/SearchBox';
import MoviesList from '../MoviesList/MoviesList';
import AddReview from '../../Pages/AddReview/AddReview';
import axios from 'axios';
import "./movieSelect.css";

function MovieSelect() {
  const [movies, setMovies] = useState([]);
  const [selectedMovie, setSelectedMovie] = useState(null); // Track selected movie
  const [initialLoad, setInitialLoad] = useState(true); // Track initial load

  const OMDB_URL = import.meta.env.VITE_OMDB_URL_WITH_KEY;

  const searchMovies = async (title) => {
    try {
      const response = await axios.get(`${OMDB_URL}&s=${title}&type=movie`);
      setMovies(response.data.Search || []);
    } catch (error) {
      console.error('Error:', error);
    }
  };

  const handleMovieSelect = (movie) => {
    setSelectedMovie(movie); // Update selected movie
  };

  return (
    <div>
        
        {!selectedMovie && (
        <div className="search-container">
          <SearchBox searchMovies={searchMovies} initialLoad={initialLoad} />
        </div>
      )}
      {selectedMovie ? (
        <AddReview selectedMovie={selectedMovie} /> // Render AddReview with selected movie
      ) : (
        <div>
          {movies.length < 1 && initialLoad ? (
            <div id="Welcome-Box">
                <h1>Welcome to MovieReviewer!</h1>
                <p>Please search for a movie title to review</p>
            </div>
          ) : (
            <div>
              <MoviesList movies={movies} initialLoad={initialLoad} openAddReviewForm={handleMovieSelect} />
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default MovieSelect;
