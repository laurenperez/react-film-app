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

    const { faves, films } = this.props
    var currentFilter = this.state.filter === 'all' ? films : faves

    let allFilms = currentFilter.map((film, index) => {
      return(
        <FilmRow
          onFaveToggle={() => this.props.onFaveToggle(film)}
          onDetailsClick={() => this.props.onDetailsClick(film)}
          title={film.title}
          date={film.release_date}
          key={film.id}
          url={film.poster_path}
          isFave={faves.includes(film)}
        />
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
            <span className="section-count">{faves.length}</span>
          </div>

        </div>
        {allFilms}
      </div>
    );
  }
}

export default FilmListing;
