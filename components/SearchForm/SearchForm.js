import React from 'react';
import { connect } from 'react-redux';
import injectSheet from 'react-jss';
import { Router } from '../../routes';
import Logo from '../Logo';
import SearchField from '../SearchField';
import SearchFilter from '../SearchFilter';
import { SEARCH_OPTIONS } from '../../constants';
import { changeSearchCriteria } from '../../actions/searchActions';

class SearchForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            inputValue: props.searchString
        };
    }

    changeSearchStringHandler(event) {
        const stringValue = event.target.value.toLowerCase() || '';

        this.setState({
            inputValue: stringValue
        });
    }

    submitStringValue() {
        Router.pushRoute(`/search/${this.state.inputValue}`);
    }

    render() {
        const {
            searchCriteria,
            changeSearchCriteriaHandler,
            classes
        } = this.props;

        return (
            <header className={classes.header}>
                <Logo />
                <h1 className={classes.heading}>Find your movie</h1>
                <SearchField
                    value={this.state.inputValue}
                    onChange={this.changeSearchStringHandler.bind(this)}
                />
                <SearchFilter
                    options={SEARCH_OPTIONS}
                    currentOption={searchCriteria}
                    changeCriteriaHandler={changeSearchCriteriaHandler}
                    submitValueHandler={this.submitStringValue.bind(this)}
                />
            </header>
        );
    }
}

const mapStateToProps = state => ({
    searchString: state.search.searchString,
    searchCriteria: state.search.searchCriteria
});

const mapDispatchToProps = dispatch => ({
    changeSearchCriteriaHandler: searchCriteria => dispatch(changeSearchCriteria(searchCriteria))
});

const styles = {
    // .header
    header: {
        background: '#212125',
        color: 'white',
        padding: '0 50px'
    },
    // .heading
    heading: {
        fontSize: '14px',
        fontWeight: '400',
        textTransform: 'uppercase'
    }
};

const StyledSearchForm = injectSheet(styles)(SearchForm);

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(StyledSearchForm);
