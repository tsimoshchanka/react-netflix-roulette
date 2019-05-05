import React from 'react';
import SearchFormContainer from '../../containers/SearchFormContainer';
import ResultsContainer from '../../containers/ResultsContainer';
import Footer from '../../components/Footer';

const ResultsPage = ({ history, match }) => {
    const submitHandler = searchString => {
        history.push(`/search/${searchString}`);
    };
    const openFilmHandler = filmId => {
        history.push(`/film/${filmId}`);
    };
    const searchString = match.params.searchString || '';

    return (
        <>
            <SearchFormContainer
                searchString={searchString}
                submitHandler={submitHandler}
            />
            <ResultsContainer
                searchString={searchString}
                openFilmHandler={openFilmHandler}
            />
            <Footer />
        </>
    );
}
export default ResultsPage;
