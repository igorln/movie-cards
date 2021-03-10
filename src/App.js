import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import EditMovie from './pages/EditMovie';
import MovieDetails from './pages/MovieDetails';
import NewMovie from './pages/NewMovie';
import MovieList from './pages/MovieList';
import NotFound from './pages/NotFound';
import './bootstrap.css';
import './App.css';


function App() {
  return (
    <BrowserRouter>
      <div className="movie-card-header"><p className="bg-warning pe-4 ps-4 rounded fw-bold fs-1">Movie Cards</p></div>
      <Switch>
        <Route path="/movie-cards/movies/:id/edit" component={ EditMovie } />
        <Route path="/movie-cards/movies/new" component={ NewMovie } />
        <Route path="/movie-cards/movies/:id" component={ MovieDetails } />
        <Route path="/movie-cards" exact component={ MovieList } />
        <Route component={ NotFound } />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
