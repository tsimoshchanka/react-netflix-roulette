import React from 'react';
import styles from './ResultsMessage.css';

const ResultsMessage = ({ message }) => (
    <main className={styles.results}>
        <div className={styles.resultsHeading}></div>
        <div className={styles.resultsError}>{message}</div>
    </main>
);

export default ResultsMessage;
