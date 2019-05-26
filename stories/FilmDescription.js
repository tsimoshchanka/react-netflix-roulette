import React from 'react';
import { storiesOf } from '@storybook/react';
import FilmDescription from '../components/FilmDescription';

storiesOf('FilmDetails/FilmDescription', module).add('standard', () => (
    <FilmDescription description="FilmDescription" />
));
