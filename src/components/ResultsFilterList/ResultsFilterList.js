import React from 'react';
import SortOption from '../SortOption';

const ResultsFilterList = (props) => {
    const searchCriterias = props.options.map(option => 
        <SortOption
            key={option}
            title={option}
            classModifier={props.currentOption === option ? 'buttonChecked' : ''}
            onClick={() => props.changeHandler(option)}>
        </SortOption>
    );

    return (
        <>
            {searchCriterias}
        </>
    )
}

export default ResultsFilterList;
