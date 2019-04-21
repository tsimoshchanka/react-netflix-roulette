import React from 'react';
import styles from './ResultsSort.css';
import ResultsSortList from '../ResultsSortList';
import { SORT_OPTIONS } from '../../constants';

const ResultsSort = ({ currentSortCriteria, changeSortHanler }) => (
    <span>
        <span className={styles.resultsSort}>Sort by:</span>
        <ResultsSortList
            options={SORT_OPTIONS}
            currentOption={currentSortCriteria}
            changeHandler={changeSortHanler}
        />
    </span>
);

export default ResultsSort;
