import React from 'react';
import Button from '../Button';

const SearchCriteriasList = (props) => {
    const searchCriterias = props.options.map(option => 
        <Button
            key={option}
            title={option}
            classModifier={props.currentOption === option ? 'buttonChecked' : ''}
            onClick={() => props.changeHandler(option)}>
        </Button>
    );

    return (
        <>
            {searchCriterias}
        </>
    )
}

export default SearchCriteriasList;
