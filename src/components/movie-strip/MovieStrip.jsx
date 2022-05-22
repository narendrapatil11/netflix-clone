import React, { useEffect, useState } from 'react';
import API from "../../shared/api/api";
import { IMAGE_URL } from "../../shared/constants";
import './movieStrip.scss';

const MovieStrip = ({ title, fetchUrl, isLargeStrip }) => {
  const [ movies, setMovies ] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const response = await API.get(fetchUrl);
      setMovies(response.data.results);
    }

    fetchData();
  }, [ fetchUrl ])

  return movies.length ? (
    <div className="movieStrip">
      <h4 className="movieStrip__header">{ title }</h4>
      <div className="movieStrip__row">
        {
          movies.map((movie) => (
            <img
              key={ movie.id }
              className={ `movieStrip__poster ${ isLargeStrip && 'movieStrip__posterLarge' }` }
              alt=""
              src={ `${ IMAGE_URL }${ isLargeStrip ? movie?.poster_path : movie?.backdrop_path }` } />
            // <h5>{ movie?.title || movie?.name || movie?.original_name }</h5>
          ))
        }
      </div>
    </div>
  ) : '';
};

export default MovieStrip;