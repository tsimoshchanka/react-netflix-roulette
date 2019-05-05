import React from 'react';
import { connect } from 'react-redux';
import Results from '../../components/Results';
import { fetchData } from '../../actions/resultsActions';
import { withRouter } from 'react-router-dom';

const filtererByTitle = value => item => item.title.toLowerCase().includes(value);
const filtererByGenre = value => item => item.genres.some(genre => genre.toLowerCase().includes(value));
const filterersByCriteria = {
    'title': filtererByTitle,
    'genre': filtererByGenre
};
const sorterByCriteria = sortField => (a, b) => b[sortField] - a[sortField];

const mapStateToProps = ({ results, sort, search }, { searchString, openFilmHandler }) => {
    const films = results.movies;
    const filterer = filterersByCriteria[search.searchCriteria](searchString); 
    const filmsFiltered = films.filter(filterer);
    const sorter = sorterByCriteria(sort.sortCriteria);
    const filmsFilteredAndSorted = filmsFiltered.sort(sorter);

    return {
        results: filmsFilteredAndSorted,
        error: results.error,
        loading: results.loading,
        openFilmHandler
    };
}

const mapDispatchToProps = dispatch => ({
    fetchData: () => dispatch(fetchData())
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Results));
