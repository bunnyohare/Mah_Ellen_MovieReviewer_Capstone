import React, { useState, useEffect } from "react";
import SearchBox from "../SearchBox/SearchBox";
import MoviesList from "../MoviesList/MoviesList";
import FavoritesGallery from "../FavoritesGallery/FavoritesGallery";
import axios from "axios";
import "./movies.css";

function Movies() {
  const [movies, setMovies] = useState([]);
  const [favorites, setFavorites] = useState([]);

  const [initialLoad, setInitialLoad] = useState(true); // Track initial load

  const OMDB_URL = import.meta.env.VITE_OMDB_URL_WITH_KEY;

  const searchMovies = async (title) => {
    try {
      const response = await axios.get(`${OMDB_URL}&s=${title}&type=movie`);
      setMovies(response.data.Search || []);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div>
      <div className="search-container">
        <SearchBox
          searchMovies={searchMovies}
          toggleFavorites={toggleFavorites}
          initialLoad={initialLoad}
        />
      </div>
      {movies.length < 1 && initialLoad ? (
        <div id="Welcome-Box">
          <h3 id="Welcome">Welcome to the Movie Finder</h3>
          <p id="No-Favs">
            Please search for a movie title to add to favorites.
          </p>
        </div>
      ) : (
        <div>
          <MoviesList
            movies={movies}
            addToFavorites={addToFavorites}
            showFavorites={showFavorites}
            initialLoad={initialLoad}
          />
        </div>
      )}
    </div>
  );
}

export default Movies;
