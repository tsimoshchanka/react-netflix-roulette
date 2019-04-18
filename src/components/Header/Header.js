import React from 'react';
import Logo from '../Logo';
import SearchForm from '../SearchForm';
import FilmDetails from '../FilmDetails';
import Button from '../Button';
import styles from './Header.css';

const Header = (props) => {
    switch(props.viewMode) {
        case 'searchForm':
            return (
                <header className={styles.header}>
                    <Logo />
                    
                    <SearchForm
                        searchOptions={props.searchOptions}
                        currentSearchCriteria={props.currentSearchCriteria}
                        handleSearchOptionChange={props.handleSearchOptionChange}
                        currentSearchString={props.currentSearchString}
                        handleTextSearch={props.handleTextSearch}
                    />
                </header>
        )

        case 'filmDetails':
            return (
                <header className={styles.header}>
                    <Logo />
                    <Button
                        onClick={props.closeFilmHandler}
                        title='SEARCH'
                        classModifier='buttonBack'
                    />
                    <FilmDetails
                        film={props.openedFilm}
                    />
                </header>
        )
    }
};

export default Header;
