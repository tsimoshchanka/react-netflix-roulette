import React from 'react';
import { connect } from 'react-redux';
import SameGenreFilms from '../../components/SameGenreFilms';
import { withRouter } from 'react-router-dom';

const filtererByGenre = value => ({ genres }) => genres.some(genre => genre.toLowerCase().includes(value));

const mapStateToProps = ({ results }, { filmId, openFilmHandler }) => {
    const films = results.movies;
    const openedFilm = films.find(({ id }) => id === filmId);
    const filmGenre = openedFilm.genres[0].toLowerCase();
    const sameGenreFilms = films.filter(filtererByGenre(filmGenre));

    return {
        films: sameGenreFilms,
        filmGenre,
        openFilmHandler
    };
};

export default withRouter(connect(mapStateToProps)(SameGenreFilms));
