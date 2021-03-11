import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

class MovieCard extends React.Component {
  render() {
    const { imagePath, title, storyline, id } = this.props.movie;
    return (
      <div className="movie-card" data-testid="movie-card">
        <img className="movie-card-image height-max-167" src={ `${imagePath}` } alt={ `Banner of ${title}` } />
        <div className="movie-card-body">
          <p className="movie-card-title">{ title }</p>
          <p className="movie-card-storyline">{ storyline }</p>
          <Link to={ `/movie-cards/${id}` } params={ id }>SEE DETAILS</Link>
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
