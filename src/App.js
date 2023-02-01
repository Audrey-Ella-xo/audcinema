import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import MovieList from './components/MovieList';

function App() {

  const [movies, setMovies] = useState([
    {
      "Title": "BTS Permission to Dance on Stage - Seoul: Live Viewing",
      "Year": "2022",
      "imdbID": "tt18687124",
      "Type": "movie",
      "Poster": "https://m.media-amazon.com/images/M/MV5BNmZhMjAyZjgtYjBlMC00ZTQxLTkyN2QtNjk4Yjk1YmI3NjEyXkEyXkFqcGdeQXVyNjM0MTI4Mw@@._V1_SX300.jpg"
    },
    {
      "Title": "BTS: Permission to Dance on Stage - LA",
      "Year": "2022",
      "imdbID": "tt22010428",
      "Type": "movie",
      "Poster": "https://m.media-amazon.com/images/M/MV5BZGQzYmE0MjUtODllNC00MTAwLWI5NDItNjI5ODRlMWU3ZWMzXkEyXkFqcGdeQXVyMTE5NDQ1MzQ3._V1_SX300.jpg"
    },
    {
      "Title": "BTS: Burn the Stage",
      "Year": "2018–",
      "imdbID": "tt8139230",
      "Type": "series",
      "Poster": "https://m.media-amazon.com/images/M/MV5BOGVkNjE2ZWItYjkxMC00ZjJiLWE3MTMtMmNkZDUxZGNiYTc0XkEyXkFqcGdeQXVyNzQ4MzUwNzA@._V1_SX300.jpg"
    },
  ])
  return (
    <div className="container-fluid movie-app">
      <div className="row">
        <MovieList
          movies={movies}
        />
     
      </div>
    </div>
  );
}

export default App;
