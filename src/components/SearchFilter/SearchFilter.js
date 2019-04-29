import React from 'react';
import SearchCriteriasList from '../SearchCriteriasList';
import Button from '../Button';
import styles from './SearchFilter.css';

const SearchFilter = ({ options, currentOption, changeHandler }) => (
    <div className={styles.searchFilter}>
        <span>Search by </span>
        <SearchCriteriasList
            options={options}
            currentOption={currentOption}
            changeHandler={changeHandler}
        />
        <Button
            title="Search"
            customClass="buttonAction"
        />
    </div>
)

export default SearchFilter;
