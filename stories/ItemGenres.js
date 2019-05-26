import React from 'react';
import { storiesOf } from '@storybook/react';
import ItemGenres from '../components/ItemGenres';

const genres = ['Action', 'Adventure', 'Science Fiction'];

storiesOf('ResultsItem/ItemGenres', module).add('standard', () => (
    <ItemGenres genres={genres} />
));
