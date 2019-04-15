import React from 'react';
import styles from './Results.css';
import ResultsCount from '../ResultsCount';
import ResultsSort from '../ResultsSort';
import ResultsBody from '../ResultsBody';
import PropTypes from 'prop-types';

const Results = (props) => {
    if(!props.results.length) {
        return (
            <main className={styles.results}>
                <div className={styles.resultsHeading}></div>
                <div className={styles.resultsError}>No films found</div>
            </main>
        )
    }

    return (
        <main className={styles.results}>
            <div className={styles.resultsHeading}>
                <ResultsCount
                    count={props.results.length}
                />
                <ResultsSort
                    options={props.sortOptions}
                    currentOption={props.currentSortOption}
                    changeHandler={props.changeSortHandler}
                />
            </div>
            <ResultsBody
                results={props.results}
                openFilmHandler={props.openFilmHandler}
            />
        </main>
    );
};

Results.propTypes = {
    results: PropTypes.array,
    sortOptions: PropTypes.array,
    currentSortOption: PropTypes.string,
    changeSortHandler: PropTypes.func,
    openFilmHandler: PropTypes.func
};

Results.defaultProps = {
    results: [],
    sortOptions: [],
    currentSortOption: ''
};

export default Results;
