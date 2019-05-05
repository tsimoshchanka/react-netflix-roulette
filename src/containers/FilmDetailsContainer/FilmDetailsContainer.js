import React from 'react';
import { connect } from 'react-redux';
import FilmDetails from '../../components/FilmDetails';

const getOpenedFilm = (films, filmId) => {
    return films.find(({ id }) => id === filmId);
};

const mapStateToProps = ({ results }, { filmId, closeFilmHandler }) => ({
    film: getOpenedFilm(results.movies, filmId),
    closeFilmHandler
});

export default connect(mapStateToProps)(FilmDetails);
