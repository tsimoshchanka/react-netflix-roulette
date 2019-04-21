import React from 'react';
import { connect } from 'react-redux';
import ResultsSort from '../../components/ResultsSort';
import { changeSort } from '../../actions/sortActions';

const mapStateToProps = ({ sort }) => ({
    currentSortCriteria: sort.sortCriteria
});

const mapDispatchToProps = dispatch => ({
    changeSortHanler: sortCriteria => dispatch(changeSort(sortCriteria))
});

export default connect(mapStateToProps, mapDispatchToProps)(ResultsSort);
