import React from 'react';
import SearchField from '../SearchField';
import SearchFilter from '../SearchFilter';

const SEARCH_OPTIONS = ['title', 'genre'];

class SearchForm extends React.Component {
    constructor() {
        super();
        this.state = {
            searchString: 'Fargo S01',
            searchCriteria: SEARCH_OPTIONS[0]
        }

        this.handleTextSearch = this.handleTextSearch.bind(this);
        this.handleCriteriaChange = this.handleCriteriaChange.bind(this);
    }

    handleTextSearch(event) {
        this.setState({
            searchString: event.target.value
        });
    }

    handleCriteriaChange(newCriteria) {
        this.setState({
            searchCriteria: newCriteria
        });
    }

    render() {
        return (
            <>
                <h1>Find your movie</h1>
                
                <SearchField
                    value={this.state.searchString}
                    onChange={this.handleTextSearch}
                />
                <SearchFilter
                    options={SEARCH_OPTIONS}
                    currentOption={this.state.searchCriteria}
                    changeHandler={this.handleCriteriaChange}
                />
            </>
        );
    }
}

export default SearchForm;
