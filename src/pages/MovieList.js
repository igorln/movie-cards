import React, { Component } from 'react';
import MovieCard from '../components/MovieCard';
import { Loading } from '../components';
import { Link } from 'react-router-dom';


import * as movieAPI from '../services/movieAPI';

class MovieList extends Component {
  constructor() {
    super();

    this.state = {
      movies: [],
    };
  }

  componentDidMount() {
    this.fetchMovies();
  }

  async fetchMovies() {
    const requestObject = await movieAPI.getMovies();
    this.setState({
      movies: requestObject,
    });
  }

  render() {
    const { movies } = this.state;


    return (
      <>
        <Link className="btn btn-warning mt-4 right" to="/movie-cards/new">ADD CARD</Link>
        <div className="movie-list" data-testid="movie-list">
          { movies.length === 0 ? <Loading />
            : movies.map((movie) => <MovieCard key={ movie.title } movie={ movie } />)}
        </div>
      </>
    );
  }
}

export default MovieList;
