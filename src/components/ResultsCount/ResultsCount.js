import React from 'react';
import styles from './ResultsCount.css';

const ResultsСount = (props) => {
    if(props.count === 0) {
        return (
            <span></span>
        )
    }
    
    return (
        <span className={styles.resultsCount}>
            {props.count} movies found 
        </span>
    )
};

export default ResultsСount;
