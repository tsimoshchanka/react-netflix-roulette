import React from 'react';
import styles from './Results.css';

const Results = () => (
    <main className={styles.results}>
        <div className={styles.resultsHeading}></div>
        <div className={styles.resultsError}>No films found</div>
    </main>
);

export default Results;
