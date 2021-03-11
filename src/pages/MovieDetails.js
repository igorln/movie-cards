import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import * as movieAPI from '../services/movieAPI';
import { Loading } from '../components';

class MovieDetails extends Component {
  constructor() {
    super();

    this.state = {
      movie: undefined,
    };
  }

  componentDidMount() {
    const { match: { params } } = this.props;
    this.fetchMovie(params.id);
  }

  async fetchMovie(id) {
    const requestObject = await movieAPI.getMovie(id);
    this.setState({
      movie: requestObject,
    });
  }

  async deleteMovie(id) {
    await movieAPI.deleteMovie(id);
  }

  imageRender() {
  const { imagePath } = this.state.movie;
  if ( imagePath.includes('images/') ) {
    return `/${imagePath}`
  }
  return imagePath;
}

  render() {
    const { movie } = this.state;
    if (movie === undefined) { return <Loading />; }
    return (
      <div className="text-light" data-testid="movie-details">
        <div className="d-flex justify-content-around mt-4">
          <img className="border border-warning border-5 rounded width-45 height-max-367" alt="Movie Cover" src={ this.imageRender() }/>
          <div className="text-center width-45 border border-warning align-self-center">
            <p>{ `Title: ${movie.title}` }</p>
            <p>{ `Subtitle: ${movie.subtitle}` }</p>
            <p className="">{ `Storyline: ${movie.storyline}` }</p>
            <p>{ `Genre: ${movie.genre}` }</p>
            <p className="">{ `Rating: ${movie.rating}` }</p>
          </div>
        </div>
        <div className="d-flex justify-content-evenly m-5">
          <Link className="btn btn-primary width-83px" to="/movie-cards">BACK</Link>
          <Link className="btn btn-secondary width-83px" to={ `/movie-cards/${movie.id}/edit` }>EDIT</Link>
          <Link className="btn btn-danger width-83px" to="/movie-cards" onClick={ () => this.deleteMovie(movie.id) }>DELETE</Link>
        </div>
      </div>
    );
  }
}

MovieDetails.propTypes = {
  id: PropTypes.number,
}.isRequired;

export default MovieDetails;
