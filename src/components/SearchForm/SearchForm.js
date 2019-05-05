import React from 'react';
import Logo from '../Logo';
import SearchField from '../SearchField';
import SearchFilter from '../SearchFilter';
import styles from './SearchForm.css';
import { SEARCH_OPTIONS } from '../../constants';

const SearchForm = ({ searchString, searchCriteria, changeSearchCriteriaHandler, submitHandler }) => {
    return (
        <header className={styles.header}>  
            <Logo />
            <h1 className={styles.heading}>Find your movie</h1>
            <SearchField
                value={searchString}
                onChange={(event) => submitHandler(event.target.value.toLowerCase())}
            />
            <SearchFilter
                options={SEARCH_OPTIONS}
                currentOption={searchCriteria}
                changeHandler={changeSearchCriteriaHandler}
            />
        </header>
    );
}

export default SearchForm;
