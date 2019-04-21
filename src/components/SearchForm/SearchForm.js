import React from 'react';
import SearchField from '../SearchField';
import SearchFilter from '../SearchFilter';
import styles from './SearchForm.css';
import { SEARCH_OPTIONS } from '../../constants';

const SearchForm = ({ searchString, searchCriteria, changeSearchInputHandler, changeSearchCriteriaHandler }) => {
    return (
        <>
            <h1 className={styles.heading}>Find your movie</h1>
            <SearchField
                value={searchString}
                onChange={(event) => changeSearchInputHandler(event.target.value.toLowerCase())}
            />
            <SearchFilter
                options={SEARCH_OPTIONS}
                currentOption={searchCriteria}
                changeHandler={changeSearchCriteriaHandler}
            />
        </>
    );
}

export default SearchForm;
