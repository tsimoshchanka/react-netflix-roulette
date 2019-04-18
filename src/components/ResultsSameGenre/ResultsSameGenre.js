import React from 'react';
import styles from './ResultsSameGenre.css';
import ResultsBody from '../ResultsBody';
import PropTypes from 'prop-types';

const ResultsSameGenre = (props) => (
    <main className={styles.results}>
        <div className={styles.resultsHeading}>
            More films by <span>{props.film.genre}</span> genre
        </div>
        <ResultsBody
            results={
                props.results
                    .filter(film => film.genre === props.film.genre)
                    .filter(film => film !== props.film)
            }
            openFilmHandler={props.openFilmHandler}
        />
    </main>
);


ResultsSameGenre.propTypes = {
    results: PropTypes.array,
    film: PropTypes.object,
    openFilmHandler: PropTypes.func
};

ResultsSameGenre.defaultProps = {
    results: [],
    film: {}
};

export default ResultsSameGenre;
