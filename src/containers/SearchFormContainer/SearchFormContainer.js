import React from 'react';
import { connect } from 'react-redux';
import SearchForm from '../../components/SearchForm';
import { changeSearchCriteria } from '../../actions/searchActions';

const mapStateToProps = ({ search }, { searchString, submitHandler }) => ({
    searchString,
    submitHandler,
    searchCriteria: search.searchCriteria
});

const mapDispatchToProps = dispatch => ({
    changeSearchCriteriaHandler: (searchCriteria) => dispatch(changeSearchCriteria(searchCriteria))
});

export default connect(mapStateToProps, mapDispatchToProps)(SearchForm);
