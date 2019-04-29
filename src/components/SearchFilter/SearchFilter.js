import React from 'react';
import SearchCriteriasList from '../SearchCriteriasList';
import Button from '../Button';
import styles from './SearchFilter.css';

const SearchFilter = (props) => (
    <div className={styles.searchFilter}>
        <span>Search by </span>
        <SearchCriteriasList
            options={props.options}
            currentOption={props.currentOption}
            changeHandler={props.changeHandler}
        />
        <Button
            title="Search"
            customClass="buttonAction"
        />
    </div>
)

export default SearchFilter;
