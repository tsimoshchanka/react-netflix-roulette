import { connect } from 'react-redux';
import { createSelector } from 'reselect';
import { Router } from '../routes';
import Layout from '../components/Layout';
import ResultsDefault from '../components/ResultsDefault';
import SearchForm from '../components/SearchForm';
import getResults from '../actions/resultsActions';
import { changeSearchString } from '../actions/searchActions';

const filterersByCriteria = {
    title: searchString => film => film.title.toUpperCase().includes(searchString.toUpperCase()),
    genre: searchString => film => (film.genres[0] || '').toUpperCase().includes(searchString.toUpperCase())
};
const getSorterByCriteria = criteria => (a, b) => a[criteria] - b[criteria];

const Results = ({ filmsFilteredAndSorted }) => {
    const openFilmHandler = (id) => {
        Router.pushRoute(`/film/${id}`);
    };

    return (
        <Layout>
            <SearchForm />
            <ResultsDefault
                results={filmsFilteredAndSorted}
                openFilmHandler={openFilmHandler}
            />
        </Layout>
    );
};

Results.getInitialProps = async (ctx) => {
    const { searchString = '' } = ctx.query;
    const { results } = await ctx.store.dispatch(getResults());
    const { search } = ctx.store.dispatch(changeSearchString(searchString));

    return { results, search };
};

const filteredAndSortedFilmsSelector = createSelector(
    state => state.search.searchCriteria,
    state => state.search.searchString,
    state => state.sort.sortCriteria,
    state => state.results.films,
    (searchCriteria, searchString, sortCriteria, films) => ({
        filmsFilteredAndSorted: films
            .filter(filterersByCriteria[searchCriteria](searchString))
            .sort(getSorterByCriteria(sortCriteria))
    })
);

const mapStateToProps = state => filteredAndSortedFilmsSelector(state);

export default connect(mapStateToProps)(Results);
