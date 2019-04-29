import React from 'react';
import styles from './ResultsBody.css';
import ResultsItem from '../ResultsItem';

const ResultsBody = ({ results, openFilmHandler}) => {
    const resultsItems = results.map(film => 
        <ResultsItem
            key={film.id}
            data={film}
            onClick={openFilmHandler}>
        </ResultsItem>
    );

    return (
        <div className={styles.resultsBody}>
            {resultsItems}
        </div>
    )
}

export default ResultsBody;
