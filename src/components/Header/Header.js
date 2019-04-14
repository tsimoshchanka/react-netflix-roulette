import React from 'react';
import Logo from '../Logo';
import SearchForm from '../SearchForm';
import styles from './Header.css';

const Header = () => (
    <header className={styles.header}>
        <Logo />
        <SearchForm />
    </header>
);

export default Header;
