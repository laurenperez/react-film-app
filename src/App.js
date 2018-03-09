import React, { Component } from 'react';
import FilmListing from './FilmListing';
import FilmDetails from './FilmDetails';
import TMDB from './TMDB';
import './App.css';

const films = TMDB.films

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      films,
      faves: [],
      current: {}
    }
    this.handleFaveToggle = this.handleFaveToggle.bind(this);
    this.handleDetailsClick = this.handleDetailsClick.bind(this);
  }

  handleFaveToggle = (film) => {
    const faves = this.state.faves.slice()
    const filmIndex = faves.indexOf(film)
    if (filmIndex !== -1) {
      // The film is already in the faves
      faves.splice(filmIndex, 1)
      console.log("removing a favorite", film.title)
    } else {
      // The film is not in faves, add it
      faves.push(film)
      console.log("adding a favorite", film.title)
    }
    this.setState({faves})
  }

  handleDetailsClick = (film) => {
    console.log("Fetching details for : " + film.title)
    this.setState({
      current: film
    })
  }



  render() {
    return (
      <div className="film-library">
        <FilmListing films={this.state.films} faves={this.state.faves} onFaveToggle={this.handleFaveToggle} onDetailsClick={this.handleDetailsClick}/>
        <FilmDetails film={this.state.current}/>
      </div>
    );
  }
}

export default App;
