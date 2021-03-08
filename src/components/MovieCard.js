import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

class MovieCard extends React.Component {
  render() {
    const { movie } = this.props;
    return (
      <div className="movie-card" data-testid="movie-card">
        <img className="movie-card-image height-max-167" src={ movie.imagePath } alt={ `Banner of ${movie.title}` } />
        <div className="movie-card-body">
          <p className="movie-card-title">{ movie.title }</p>
          <p className="movie-card-storyline">{ movie.storyline }</p>
          <Link to={ `/movies/${movie.id}` } params={ movie.id }>SEE DETAILS</Link>
        </div>
      </div>
    );
  }
}

MovieCard.propTypes = {
  movie: PropTypes.shape({
    title: PropTypes.string,
    storyline: PropTypes.string,
    imagePath: PropTypes.string,
    id: PropTypes.number,
  }).isRequired,
};

export default MovieCard;
