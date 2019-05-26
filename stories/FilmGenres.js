import React from 'react';
import { storiesOf } from '@storybook/react';
import FilmGenres from '../components/FilmGenres';

const genres = ['Action', 'Adventure', 'Science Fiction'];

storiesOf('FilmDetails/FilmGenres', module).add('standard', () => (
    <FilmGenres genres={genres} />
));
