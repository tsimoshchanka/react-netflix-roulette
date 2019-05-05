import React from 'react';
import ResultsPage from '../ResultsPage';
import { Route } from 'react-router-dom'; 

const SearchPage = ({ match }) => (
    <>
        <Route path={match.path} exact component={ResultsPage} />
        <Route path={`${match.path}/:searchString`} component={ResultsPage} />
    </>
);

export default SearchPage;
