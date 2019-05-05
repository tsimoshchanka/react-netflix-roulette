import React from 'react';
import styles from './Results.css';
import ResultsCount from '../ResultsCount';
import ResultsBody from '../ResultsBody';
import ResultsSortContainer from '../../containers/ResultsSortContainer';
import PropTypes from 'prop-types';

class Results extends React.Component {
    componentDidMount() {
        this.props.fetchData();
    }

    render() {
        const { results, error, loading, openFilmHandler } = this.props;

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
    }
};

Results.propTypes = {
    results: PropTypes.array,
    error: PropTypes.object,
    loading: PropTypes.bool,
    openFilmHandler: PropTypes.func
};

Results.defaultProps = {
    results: [],
    error: null,
    loading: false
};

export default Results;
