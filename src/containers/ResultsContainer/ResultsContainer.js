import React from 'react';
import { connect } from 'react-redux';
import Results from '../../components/Results';
import { RESULTS_VIEW_MODES } from '../../constants';
import { openFilm, closeFilm } from '../../actions/navigationActions';
import { fetchData } from '../../actions/resultsActions';

const filtererByTitle = value => item => item.title.toLowerCase().includes(value);
const filtererByGenre = value => item => item.genres.some(genre => genre.toLowerCase().includes(value));
const filterersByCriteria = {
    'title': filtererByTitle,
    'genre': filtererByGenre
}
const sorterByCriteria = sortField => (a, b) => b[sortField] - a[sortField];

const mapStateToProps = ({ results, sort, search, navigation }) => {
    const films = results.movies;
    const filterer = filterersByCriteria[search.searchCriteria](search.searchString); 
    const filmsFiltered = films.filter(filterer);
    const sorter = sorterByCriteria(sort.sortCriteria);
    const filmsFilteredAndSorted = filmsFiltered.sort(sorter);
    const viewMode = navigation.openedFilmId === null ? RESULTS_VIEW_MODES.DEFAULT : RESULTS_VIEW_MODES.SAME_GENRE;

    let openedFilm;
    let openedFilmGenre;
    let sameGenreFilms = [];

    if (viewMode === RESULTS_VIEW_MODES.SAME_GENRE) {
        openedFilm = films.find(film => film.id === navigation.openedFilmId);
        openedFilmGenre = openedFilm.genre;
        sameGenreFilms = films.filter(film => film.genre === openedFilmGenre).filter(film => film !== openedFilm);
    }

    return {
        results: filmsFilteredAndSorted,
        viewMode,
        error: results.error,
        loading: results.loading,
        openedFilmGenre,
        sameGenreFilms
    };
}

const mapDispatchToProps = dispatch => ({
    openFilmHandler: (filmId) => dispatch(openFilm(filmId)),
    closeFilmHandler: () => dispatch(closeFilm()),
    fetchData: () => dispatch(fetchData())
});

export default connect(mapStateToProps, mapDispatchToProps)(Results);
