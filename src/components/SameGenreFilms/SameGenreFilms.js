import React from 'react';
import styles from './SameGenreFilms.css';
import ResultsBody from '../ResultsBody';
import PropTypes from 'prop-types';

const SameGenreFilms = ({ films, filmGenre, openFilmHandler }) => {
    if (!films.length) {
        return (
            <main className={styles.results}>
                <div className={styles.resultsHeading}></div>
                <div className={styles.resultsError}>No films found</div>
            </main>
        )
    }
    
    return (
        <main className={styles.results}>
            <div className={styles.resultsHeadingMore}>
                More films by <span>{filmGenre}</span> genre
            </div>
            <ResultsBody
                results={films}
                openFilmHandler={openFilmHandler}
            />
        </main>
    );
};

SameGenreFilms.propTypes = {
    films: PropTypes.array,
    filmGenre: PropTypes.string,
    openFilmHandler: PropTypes.func
};

SameGenreFilms.defaultProps = {
    films: [],
    filmGenre: ''
};

export default SameGenreFilms;
