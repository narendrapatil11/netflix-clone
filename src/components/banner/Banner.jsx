import React from 'react';
import { truncateStringAddEllipses } from "../../shared/utils";
import './banner.scss';
import { IMAGE_URL } from "../../shared/constants";

const Banner = ({ netflixOriginals }) => {
  const movieDescription = truncateStringAddEllipses(netflixOriginals?.overview, 150)
  return (
    <header
      className="banner"
      style={ {
        backgroundSize: 'cover',
        backgroundImage: `url(${ IMAGE_URL }${ netflixOriginals?.backdrop_path })`,
        backgroundPosition: 'center center'
      } }
    >
      <div className="banner__contents">
        <h1 className="banner__title">
          { netflixOriginals?.title || netflixOriginals?.name || netflixOriginals?.original_name }
        </h1>
        <div className="banner__actions">
          <button>Play</button>
          <button>My List</button>
        </div>
        <div className="banner__description">
          { movieDescription }
        </div>
      </div>
      <div className="banner__fadeBottom"></div>
    </header>
  );
};

export default Banner;