import React from 'react';
import './singleReview.css'
import MoviesList from '../../components/MoviesList/MoviesList';
import AddReview from '../AddReview/AddReview';
import SearchBox from '../../components/SearchBox/SearchBox';
import MovieSelect from '../../components/MovieSelect/MovieSelect';

const SingleReview = () => {
  return (
    <div className="review">
     <MovieSelect></MovieSelect>
    </div>
  );
};

export default SingleReview;