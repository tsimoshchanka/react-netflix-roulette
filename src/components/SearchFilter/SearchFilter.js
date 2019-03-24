import React from 'react';
import SearchCriteriasList from '../SearchCriteriasList';
import Button from '../Button';

const SearchFilter = (props) => (
    <div className="search-filter">
        <span>Search by </span>
        <SearchCriteriasList
            options={props.options}
            currentOption={props.currentOption}
            changeHandler={props.changeHandler}
        />
        <Button
            title="Search"
            classModifier="action"
        />
    </div>
)

export default SearchFilter;
