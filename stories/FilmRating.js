import React from 'react';
import { storiesOf } from '@storybook/react';
import FilmRating from '../components/FilmRating';

storiesOf('FilmDetails/FilmRating', module).add('standard', () => (
    <FilmRating rating="333" />
));
