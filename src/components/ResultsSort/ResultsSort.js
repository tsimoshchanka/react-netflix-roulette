import React from 'react';
import styles from './ResultsSort.css';
import ResultsFilterList from '../ResultsFilterList';

const ResultsSort = (props) => (
    <span>
        <span className={styles.resultsSort}>Sort by:</span>
        <ResultsFilterList
            options={props.options}
            currentOption={props.currentOption}
            changeHandler={props.changeHandler}
        />
    </span>
);

export default ResultsSort;
