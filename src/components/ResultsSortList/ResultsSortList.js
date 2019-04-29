import React from 'react';
import ResultsSortOption from '../ResultsSortOption';

const ResultsSortList = ({ options, currentOption, changeHandler }) => {
    const searchCriterias = options.map(option => 
        <ResultsSortOption
            key={option.field}
            title={option.displayTitle}
            customClass={currentOption === option.field ? 'buttonChecked' : ''}
            onClick={() => changeHandler(option.field)}>
        </ResultsSortOption>
    );

    return (
        <>
            {searchCriterias}
        </>
    )
}

export default ResultsSortList;
