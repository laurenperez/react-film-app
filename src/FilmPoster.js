import React, { Component } from 'react';

class FilmPoster extends Component {
  render() {

    const { url, title } = this.props

    return (
      <img src={url} alt={title} />
    )
  }
}

export default FilmPoster;
