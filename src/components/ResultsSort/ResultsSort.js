import React from 'react';
import styles from './ResultsSort.css';
import ResultsSortList from '../ResultsSortList';

const ResultsSort = (props) => (
    <span>
        <span className={styles.resultsSort}>Sort by:</span>
        <ResultsSortList
            options={props.options}
            currentOption={props.currentOption}
            changeHandler={props.changeHandler}
        />
    </span>
);

export default ResultsSort;
