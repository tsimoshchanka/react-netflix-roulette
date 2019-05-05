import React from 'react';
import FilmDetailsContainer from '../../containers/FilmDetailsContainer';
import SameGenreFilmsContainer from '../../containers/SameGenreFilmsContainer';
import Footer from '../../components/Footer';

const FilmPage = ({ history, match }) => {
    const closeFilmHandler = () => {
        history.push(`/search/`);
    };
    const openFilmHandler = (filmId) => {
        history.push(`/film/${filmId}`);
    };
    const filmId = Number(match.params.filmId) || null;

    return (
        <>
            <FilmDetailsContainer
                closeFilmHandler={closeFilmHandler}
                filmId={filmId}
            />
            <SameGenreFilmsContainer
                openFilmHandler={openFilmHandler}
                filmId={filmId}
            />
            <Footer />
        </>
    );
}

export default FilmPage;
