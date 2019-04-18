import React from 'react';
import styles from './ResultsBody.css';
import ResultsItem from '../ResultsItem';

const ResultsBody = (props) => {
    const resultsItems = props.results.map(film => 
        <ResultsItem
            key={film.id}
            data={film}
            onClick={() => props.openFilmHandler(film)}>
        </ResultsItem>
    );

    return (
        <div className={styles.resultsBody}>
            {resultsItems}
        </div>
    )
}

export default ResultsBody;
