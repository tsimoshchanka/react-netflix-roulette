// Composition Component

import React from 'react';
import { Logo } from './Logo';
import { SearchForm } from './SearchForm';
import './Header.css';

export const Header = () => (
    <header>
        <Logo />
        <SearchForm />
    </header>
);
