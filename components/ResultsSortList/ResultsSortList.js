import React from 'react';
import { connect } from 'react-redux';
import ResultsSortOption from '../ResultsSortOption';
import { changeSort } from '../../actions/sortActions';

const ResultsSortList = ({ options, currentOption, changeHandler }) => {
    const searchCriterias = options.map(option => (
        <ResultsSortOption
            key={option.field}
            title={option.displayTitle}
            customClass={currentOption === option.field ? 'buttonChecked' : ''}
            onClick={() => changeHandler(option.field)}
        />
    ));

    return <React.Fragment>{searchCriterias}</React.Fragment>;
};

const mapStateToProps = state => ({
    currentOption: state.sort.sortCriteria
});

const mapDispatchToProps = dispatch => ({
    changeHandler: sortCriteria => dispatch(changeSort(sortCriteria))
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ResultsSortList);
