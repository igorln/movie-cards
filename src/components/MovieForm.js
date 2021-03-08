import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';


class MovieForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = { ...props.movie };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    if ( this.state.genre === undefined ) {
    this.setState({genre: 'action'})
    }
  }

  handleSubmit() {
    const { onSubmit } = this.props;
    onSubmit(this.state);
  }

  updateMovie(field, newValue) {
    this.setState({ [field]: newValue });
  }

  renderTitleInput() {
    const { title } = this.state;

    return (
      <div className="form-floating mb-3 width-45">
        <input
          placeholder="Insira o título"
          id="movie_title"
          type="text"
          className="form-control"
          value={ title }
          onChange={ (event) => this.updateMovie('title', event.target.value) }
        />
        <label htmlFor="movie_title">
        Title
        </label>
      </div>
    );
  }

  renderSubtitleInput() {
    const { subtitle } = this.state;

    return (
      <div className="form-floating mb-3 width-45">
        <input
          placeholder="Insira o subtítulo"
          id="movie_subtitle"
          type="text"
          className="form-control"
          value={ subtitle }
          onChange={ (event) => this.updateMovie('subtitle', event.target.value) }
        />
        <label htmlFor="movie_subtitle">
          Subtitle
        </label>
      </div>
    );
  }

  renderImagePathInput() {
    const { imagePath } = this.state;

    return (
      <div className="form-floating mb-3 width-45">
        <input
          placeholder="Insira o caminho da imagem"
          id="movie_image"
          type="text"
          className="form-control"
          value={ imagePath }
          onChange={ (event) => this.updateMovie('imagePath', event.target.value) }
        />
        <label htmlFor="movie_image">
          Image path
        </label>
      </div>
    );
  }

  renderStorylineInput() {
    const { storyline } = this.state;

    return (
      <div className="form-floating mb-3 width-45">
          <textarea
            placeholder="storyline"
            id="movie_storyline"
            className="form-control"
            value={ storyline }
            onChange={ (event) => this.updateMovie('storyline', event.target.value) }
          />
        <label htmlFor="movie_storyline">
          Storyline
        </label>
      </div>
    );
  }

  renderGenreSelection() {
    const { genre } = this.state;
    return (
      <div className="form-floating mb-3 width-45">
          <select
            id="movie_genre"
            value={ genre }
            className="form-select"
            onChange={ (event) => this.updateMovie('genre', event.target.value) }
          >
            <option value="action">Action</option>
            <option value="comedy">Comedy</option>
            <option value="thriller">Thriller</option>
            <option value="fantasy">Fantasy</option>
          </select>
        <label htmlFor="movie_genre">
          Genre
        </label>
      </div>
    );
  }

  renderRatingInput() {
    const { rating } = this.state;
    return (
      <div className="form-floating mb-3 width-45">
        <input
          placeholder="Dê a avaliação do filme"
          id="movie_rating"
          className="form-control"
          type="number"
          step={ 0.1 }
          min={ 0 }
          max={ 5 }
          value={ rating }
          onChange={ (event) => this.updateMovie('rating', event.target.value) }
        />
        <label htmlFor="movie_rating">
          Rating
        </label>
      </div>
    );
  }

  renderSubmitButton() {
    return (
      <div>
        <button
          type="button"
          onClick={ this.handleSubmit }
          className="btn btn-success p-3"
        >
          Submit
        </button>
      </div>
    );
  }

  render() {
    return (
      <div className="text-ligh mt-4">
        <form className="d-flex flex-column align-items-center">
          {this.renderTitleInput()}
          {this.renderSubtitleInput()}
          {this.renderImagePathInput()}
          {this.renderStorylineInput()}
          <div className="width-45 d-flex justify-content-between">
            {this.renderGenreSelection()}
            {this.renderRatingInput()}
          </div>
          <div className="width-45 d-flex justify-content-evenly">
            <Link className="btn btn-primary width-83px p-3" to="/">BACK</Link>
            {this.renderSubmitButton()}
          </div>
        </form>
      </div>
    );
  }
}

MovieForm.propTypes = {
  movie: PropTypes.arrayOf(PropTypes.object),
  onSubmit: PropTypes.func,
}.isRequired;

export default MovieForm;
