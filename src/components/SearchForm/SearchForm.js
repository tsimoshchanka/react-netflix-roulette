import React from 'react';
import SearchField from '../SearchField';
import SearchFilter from '../SearchFilter';
import styles from './SearchForm.css';

const SearchForm = (props) => {
    return (
        <>
            <h1 className={styles.heading}>Find your movie</h1>
            <SearchField
                value={props.currentSearchString}
                onChange={props.handleTextSearch}
            />
            <SearchFilter
                options={props.searchOptions}
                currentOption={props.currentSearchCriteria}
                changeHandler={props.handleSearchOptionChange}
            />
        </>
    );
}

export default SearchForm;
