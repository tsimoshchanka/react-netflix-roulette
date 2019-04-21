import React from 'react';
import { connect } from 'react-redux';
import SearchForm from '../../components/SearchForm';
import { changeSearchCriteria, changeSearchInput } from '../../actions/searchActions';

const mapStateToProps = ({ search }) => ({
    searchString: search.searchString,
    searchCriteria: search.searchCriteria
});

const mapDispatchToProps = dispatch => ({
    changeSearchCriteriaHandler: (searchCriteria) => dispatch(changeSearchCriteria(searchCriteria)),
    changeSearchInputHandler: (searchInput) => dispatch(changeSearchInput(searchInput))
});

export default connect(mapStateToProps, mapDispatchToProps)(SearchForm);
