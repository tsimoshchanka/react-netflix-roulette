import React from 'react';
import { storiesOf } from '@storybook/react';
import FilmPoster from '../components/FilmPoster';

const src = 'https://image.tmdb.org/t/p/w500/ldoY4fTZkGISMidNw60GHoNdgP8.jpg';
const alt = 'Some Description';

storiesOf('FilmDetails/FilmPoster', module).add('standard', () => (
    <FilmPoster src={src} alt={alt} />
));
