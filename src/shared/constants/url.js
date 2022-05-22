export const API_URL = Object.freeze({
  FETCH_TRENDING: `/trending/all/week?api=${process.env.REACT_APP_API_KEY}&language=en-US`,
  FETCH_NETFLIX_ORIGINALS: `/discover/tv?api_key=${process.env.REACT_APP_API_KEY}&with_network=213`,
  FETCH_TOP_RATED: `/movie/top_rated?api=${process.env.REACT_APP_API_KEY}&language=en-US`,
  FETCH_ACTION_MOVIES: `/discover/movie?api_key=${process.env.REACT_APP_API_KEY}&with_genres=28`,
  FETCH_COMEDY_MOVIES: `/discover/movie?api_key=${process.env.REACT_APP_API_KEY}&with_genres=35`,
  FETCH_HORROR_MOVIES: `/discover/movie?api_key=${process.env.REACT_APP_API_KEY}&with_genres=27`,
  FETCH_ROMANCE_MOVIES: `/discover/movie?api_key=${process.env.REACT_APP_API_KEY}&with_genres=10749`,
  FETCH_DOCUMENTARIES: `/discover/movie?api_key=${process.env.REACT_APP_API_KEY}&with_genres=99`,
})

export const IMAGE_URL = 'https://image.tmdb.org/t/p/original'