import React, { useEffect, useState } from 'react';
import './homescreen.scss';
import { Banner, Nav } from "../../components";
import { fetchNetflixOriginals } from "../../shared/api";
import { API_URL } from "../../shared/constants";
import MovieStrip from "../../components/movie-strip/MovieStrip";

const HomeScreen = () => {
  const [ movie, setMovie ] = useState(null);

  useEffect(() => {
    async function fetchData() {
      const response = await fetchNetflixOriginals();
      setMovie(response.data.results[
        Math.floor(Math.random() * response.data.results.length - 1)
        ]
      )
    }
    fetchData();
  }, [])

  return (
    <div className='homeScreen'>
      <Nav />
      <Banner netflixOriginals={ movie } />
      <MovieStrip
        title="NETFLIX ORIGINALS"
        fetchUrl={API_URL.FETCH_NETFLIX_ORIGINALS}
        isLargeStrip
      />
      <MovieStrip
        title="Trending Now"
        fetchUrl={API_URL.FETCH_TRENDING}
        isLargeRow
      />
      <MovieStrip
        title="Top Rated"
        fetchUrl={API_URL.FETCH_TOP_RATED}
        isLargeRow
      />
      <MovieStrip
        title="Actions Movies"
        fetchUrl={API_URL.FETCH_ACTION_MOVIES}
        isLargeRow
      />
      <MovieStrip
        title="Comedy Movies"
        fetchUrl={API_URL.FETCH_COMEDY_MOVIES}
        isLargeRow
      />
      <MovieStrip
        title="Horror Movies"
        fetchUrl={API_URL.FETCH_HORROR_MOVIES}
        isLargeRow
      />
      <MovieStrip
        title="Romance Movies"
        fetchUrl={API_URL.FETCH_ROMANCE_MOVIES}
        isLargeRow
      />
      <MovieStrip
        title="Documentaries"
        fetchUrl={API_URL.FETCH_DOCUMENTARIES}
        isLargeRow
      />
    </div>
  )
}

export default HomeScreen;
