import React from 'react';
import { connect } from 'react-redux';
import FilmDetails from '../../components/FilmDetails';

const getOpenedFilm = (films, openedFilmId) => {
    return films.find(film => film.id === openedFilmId);
};

const mapStateToProps = ({ results, navigation }) => ({
    film: getOpenedFilm(results.movies, navigation.openedFilmId)
});

export default connect(mapStateToProps)(FilmDetails);
