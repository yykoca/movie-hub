import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import TMDB from "./API/TMDB";
import Header from "./Pages/Header";
import Home from "./Pages/Home";
import Favorites from "./Pages/Favorites";
import Watched from "./Pages/Watched";
import About from "./Pages/About";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function App() {
  const [movies, setMovies] = useState([]);
  const [pageNumber, setPageNumber] = useState(1);

  useEffect(() => {
    TMDB.topRatedMovies(pageNumber).then((movie) => setMovies(movie));
  }, [pageNumber]);

  return (
    <>
      <Header />
      <Router>
        <Switch>
          <Route exact path="/movie-hub" render={() => <Home movies={movies} pageNumber={pageNumber} setPageNumber={setPageNumber} />} />
          <Route path="/favorites" component={Favorites} />
          <Route path="/watched" component={Watched} />
          <Route path="/about" component={About} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
