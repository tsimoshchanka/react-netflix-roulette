import { SEARCH_OPTIONS, SORT_OPTIONS, FILMS_MOCK_DATA } from './Config';

import React from 'react';
import Header from '../Header';
import Results from '../Results';
import ResultsSameGenre from '../ResultsSameGenre';
import Footer from '../Footer';

class App extends React.Component {
    constructor() {
        super();
        
        this.state = {
            results: [],
            openedFilm: null,
            currentSearchString: '',
            currentSearchCriteria: SEARCH_OPTIONS[0],
            currentSortOption: SORT_OPTIONS[0]
        }
        
        this.handleTextSearch = this.handleTextSearch.bind(this);
        this.handleSearchOptionChange = this.handleSearchOptionChange.bind(this);
        this.handleResultsSortChange = this.handleResultsSortChange.bind(this);
        this.filterResults = this.filterResults.bind(this);
        this.resultsSorter = this.resultsSorter.bind(this);
        this.handleFilmOpen = this.handleFilmOpen.bind(this);
        this.handleFilmClose = this.handleFilmClose.bind(this);
    }

    componentDidMount() {
        this.setState({
            results: FILMS_MOCK_DATA
        });
    }

    handleTextSearch(event) {
        this.setState({
            currentSearchString: event.target.value
        });
    }

    handleSearchOptionChange(newSearchCriteria) {
        this.setState({
            currentSearchCriteria: newSearchCriteria
        });
    }

    handleResultsSortChange(newSortOption) {
        this.setState({
            currentSortOption: newSortOption
        });
    }

    handleFilmOpen(openedFilm) {
        this.setState({
            openedFilm: openedFilm
        });
    }

    handleFilmClose() {
        this.setState({
            openedFilm: null
        });
    }

    filterResults() {
        const filterField = this.state.currentSearchCriteria;
        const filterQuery = this.state.currentSearchString.toLowerCase();

        return this.state.results.filter(film => {
            return film[filterField].toLowerCase().includes(filterQuery);
        });
    }

    resultsSorter(a, b) {
        const sortField = this.state.currentSortOption;  
        return b[sortField] - a[sortField];
    }

    render() {
        if(this.state.openedFilm) {
            return (
                <> 
                    <Header
                        viewMode='filmDetails'
                        openedFilm={this.state.openedFilm}
                        closeFilmHandler={this.handleFilmClose}
                    />
                    <ResultsSameGenre
                        results={this.state.results}
                        film={this.state.openedFilm}
                        openFilmHandler={this.handleFilmOpen}
                    />
                    <Footer />
                </>
            )
        }

        return (<>
            <Header
                viewMode='searchForm'
                searchOptions={SEARCH_OPTIONS}
                currentSearchCriteria={this.state.currentSearchCriteria}
                handleSearchOptionChange={this.handleSearchOptionChange}
                currentSearchString={this.state.currentSearchString}
                handleTextSearch={this.handleTextSearch}
            />
            <Results
                results={this.filterResults().sort(this.resultsSorter)}
                sortOptions={SORT_OPTIONS}
                currentSortOption={this.state.currentSortOption}
                changeSortHandler={this.handleResultsSortChange}
                openFilmHandler={this.handleFilmOpen}
            />
            <Footer />
        </>)
    }
}

export default App;
