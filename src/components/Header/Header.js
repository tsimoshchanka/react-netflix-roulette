import React from 'react';
import Logo from '../Logo';
import SearchFormContainer from '../../containers/SearchFormContainer';
import FilmDetailsContainer from '../../containers/FilmDetailsContainer';
import Button from '../Button';
import styles from './Header.css';
import { HEADER_VIEW_MODES } from '../../constants';

const Header = ({ headerViewMode, closeFilmHandler }) => {
    switch (headerViewMode) {
        case HEADER_VIEW_MODES.SEARCH_FORM:
            return (
                <header className={styles.header}>
                    <Logo />
                    <SearchFormContainer />
                </header>
            );

        case HEADER_VIEW_MODES.FILM_DETAILS:
            return (
                <header className={styles.header}>
                    <Logo />
                    <Button
                        onClick={closeFilmHandler}
                        title='SEARCH'
                        customClass='buttonBack'
                    />
                    <FilmDetailsContainer />
                </header>
            );

        default: 
            return (<></>);
    }
};

export default Header;
