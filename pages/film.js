import { connect } from 'react-redux';
import { createSelector } from 'reselect';
import { Router } from '../routes';
import Layout from '../components/Layout';
import FilmDetails from '../components/FilmDetails';
import SameGenreFilms from '../components/SameGenreFilms';
import getResults from '../actions/resultsActions';
import { openFilm } from '../actions/navigationActions';

const Film = ({ openedFilmData, openedFilmGenre, sameGenreFilms }) => {
    const openFilmHandler = (id) => {
        Router.pushRoute(`/film/${id}`);
    };
    const closeFilmHandler = () => {
        Router.pushRoute('/search');
    };

    return (
        <Layout>
            <FilmDetails
                film={openedFilmData}
                closeFilmHandler={closeFilmHandler}
            />
            <SameGenreFilms
                films={sameGenreFilms}
                filmGenre={openedFilmGenre}
                openFilmHandler={openFilmHandler}
            />
        </Layout>
    );
};

Film.getInitialProps = async (ctx) => {
    const { id } = ctx.query;
    const { results } = await ctx.store.dispatch(getResults());
    const { navigation } = ctx.store.dispatch(openFilm(id));

    return { results, navigation };
};

const dataSelector = createSelector(
    state => state.results.films,
    state => state.navigation.openedFilmId,
    (films, openedFilmId) => {
        const openedFilmData = films.find(({ id }) => id === Number(openedFilmId));
        const openedFilmGenre = openedFilmData.genres[0];
        const sameGenreFilms = films.filter(({ genres }) => genres.includes(openedFilmGenre));

        return {
            openedFilmData,
            openedFilmGenre,
            sameGenreFilms
        };
    }
);

const mapStateToProps = state => dataSelector(state);

export default connect(mapStateToProps)(Film);
