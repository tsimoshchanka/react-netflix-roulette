// Stateful Class Component

import React from 'react';
import './SearchForm.css';

export class SearchForm extends React.Component {
    constructor() {
        super();
        this.state = {
            searchString: 'Fargo S01',
            searchCriteria: 'genre'
        }

        this.handleSearch = this.handleSearch.bind(this);
    }

    handleSearch(event) {
        const name = event.target.type === 'radio' ? 'searchCriteria' : 'searchString';
        const value = event.target.value;
        this.setState({
            [name]: value
        });
    }

    render() {
        return (
            <form>
                <h1>Find your movie</h1>
                <input type="text"
                    onChange={this.handleSearch}
                    value={this.state.searchString}
                />
                <div className="filters-line">
                    <span>Search by </span>
                    
                    <input
                        type="radio"
                        name="search-criteria"
                        id="title"
                        value="title"
                        onChange={this.handleSearch}
                        checked={this.state.searchCriteria === 'title'}
                    />
                    <label htmlFor="title">
                        Title
                    </label>

                    <input
                        type="radio"
                        name="search-criteria"
                        id="genre"
                        value="genre"
                        onChange={this.handleSearch}
                        checked={this.state.searchCriteria === 'genre'}
                    />
                    <label htmlFor="genre">
                        Genre
                    </label>

                    <input type="submit" value="Search" />
                </div>
            </form>
        );
    }
}
