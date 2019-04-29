import React from 'react';
import styles from './Results.css';
import ResultsCount from '../ResultsCount';
import ResultsBody from '../ResultsBody';
import ResultsSortContainer from '../../containers/ResultsSortContainer';
import { RESULTS_VIEW_MODES } from '../../constants';
import PropTypes from 'prop-types';

class Results extends React.Component {
    componentDidMount() {
        this.props.fetchData();
    }

    render() {
        const { results, viewMode, error, loading, openedFilmGenre, sameGenreFilms, openFilmHandler } = this.props;

        if (error) {
            return <div>Error! {error.message}</div>;
        }
      
        if (loading) {
            return <div>Loading...</div>;
        }
    
        if (!results.length) {
            return (
                <main className={styles.results}>
                    <div className={styles.resultsHeading}></div>
                    <div className={styles.resultsError}>No films found</div>
                </main>
            )
        }

        switch (viewMode) {
            case RESULTS_VIEW_MODES.DEFAULT:
                return (
                    <main className={styles.results}>
                        <div className={styles.resultsHeading}>
                            <ResultsCount
                                count={results.length}
                            />
                            <ResultsSortContainer />
                        </div>
                        <ResultsBody
                            results={results}
                            openFilmHandler={openFilmHandler}
                        />
                    </main>
                );

            case RESULTS_VIEW_MODES.SAME_GENRE:
                return (
                    <main className={styles.results}>
                        <div className={styles.resultsHeadingMore}>
                            More films by <span>{openedFilmGenre}</span> genre
                        </div>
                        <ResultsBody
                            results={sameGenreFilms}
                            openFilmHandler={openFilmHandler}
                        />
                    </main>
                );
        }
    }
};

Results.propTypes = {
    results: PropTypes.array,
    viewMode: PropTypes.oneOf(Object.keys(RESULTS_VIEW_MODES)),
    error: PropTypes.object,
    loading: PropTypes.bool,
    openedFilmGenre: PropTypes.func,
    sameGenreFilms: PropTypes.array,
    openFilmHandler: PropTypes.func
};

Results.defaultProps = {
    results: [],
    viewMode: RESULTS_VIEW_MODES.DEFAULT
};

export default Results;
