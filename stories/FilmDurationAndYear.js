import React from 'react';
import { storiesOf } from '@storybook/react';
import FilmDurationAndYear from '../components/FilmDurationAndYear';

storiesOf('FilmDetails/FilmDurationAndYear', module).add('standard', () => (
    <FilmDurationAndYear duration="333" year="1984" />
));
