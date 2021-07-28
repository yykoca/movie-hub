const api_key = "41de89a94220699acb246879ab748789";

function makeMovieObject(tmdbMovie) {
  return {
    id: tmdbMovie.id,
    title: tmdbMovie.title,
    poster_path: tmdbMovie.poster_path,
    overview: tmdbMovie.overview,
    release_date: tmdbMovie.release_date,
    genre_ids: tmdbMovie.genre_ids,
    vote_average: tmdbMovie.vote_average,
    original_language: tmdbMovie.original_language
  }
}

async function topRatedMovies(pageNumber = 1) {
  const url = `https://api.themoviedb.org/3/movie/top_rated?api_key=${api_key}&language=en-US&page=${pageNumber}`;

  let movies = [];

  movies = await fetch(url)
    .then((response) => response.json())
    .then((data) => {
      console.log("result",data.results);
      data.results.forEach(tmdbMovie => {
        let movieObject = makeMovieObject(tmdbMovie);
        movies.push(movieObject);
      });
      return movies;
    });
    return movies;
}

const TMDB = { topRatedMovies };
export default TMDB;
