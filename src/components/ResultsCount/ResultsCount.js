import React from 'react';
import styles from './ResultsCount.css';

const ResultsСount = ({ count }) => {
    if (count === 0) {
        return (
            <span></span>
        )
    }
    
    return (
        <span className={styles.resultsCount}>
            {count} movies found 
        </span>
    )
};

export default ResultsСount;
