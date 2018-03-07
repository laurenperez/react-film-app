import React, { Component } from 'react';
import FilmRow from './FilmRow';

class FilmListing extends Component {
  constructor(props) {
    super(props)
    this.state = {
      filter: "all",
    }
  }


  handleFilterClick = (filter) => {
    this.setState({
      filter: filter
    })
    console.log("setting filter to: " + filter);
  }


  render() {

    const { films } = this.props

    let allFilms = films.map(function(film,index){
      return(
        <FilmRow title={film.title} date={film.release_date} key={film.id} url={film.poster_path}/>
      )
    })

    var allFilter = (this.state.filter === 'all' ? 'is-active' : '')
    var favesFilter = (this.state.filter === 'faves' ? 'is-active' : '')

    return (
      <div className="film-list">
        <h1 className="section-title">FILMS</h1>
        <div className="film-list-filters">

          <div className={'film-list-filter ' + allFilter}  onClick={() => this.handleFilterClick('all')}>
            <span>ALL</span>
            <span className="section-count">{films.length}</span>
          </div>

          <div className={'film-list-filter ' + favesFilter} onClick={() => this.handleFilterClick('faves')}>
            <span>FAVES</span>
            <span className="section-count">0</span>
          </div>

        </div>
        {allFilms}
      </div>
    );
  }
}

export default FilmListing;
