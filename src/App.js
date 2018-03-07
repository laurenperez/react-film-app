import React, { Component } from 'react';
import FilmListing from './FilmListing';
import FilmDetails from './FilmDetails';
import TMDB from './TMDB';
import './App.css';

const films = TMDB.films

class App extends Component {
  render() {
    return (
      <div className="film-library">
        <FilmListing films={films}/>
        <FilmDetails films={films}/>
      </div>
    );
  }
}

export default App;
