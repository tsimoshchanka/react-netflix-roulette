import React from 'react';
import ResultsSortOption from '../ResultsSortOption';

const ResultsSortList = (props) => {
    const searchCriterias = props.options.map(option => 
        <ResultsSortOption
            key={option}
            title={option}
            classModifier={props.currentOption === option ? 'buttonChecked' : ''}
            onClick={() => props.changeHandler(option)}>
        </ResultsSortOption>
    );

    return (
        <>
            {searchCriterias}
        </>
    )
}

export default ResultsSortList;
