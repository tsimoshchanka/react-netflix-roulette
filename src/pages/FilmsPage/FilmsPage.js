import React from 'react';
import SearchPage from '../SearchPage';
import FilmPage from '../FilmPage';
import { Route } from 'react-router-dom'; 

const FilmsPage = ({ match }) => (
    <>
        <Route path='/film' exact component={SearchPage} />
        <Route path={`${match.path}/:filmId`} component={FilmPage} />
    </>
);

export default FilmsPage;
