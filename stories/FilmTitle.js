import React from 'react';
import { storiesOf } from '@storybook/react';
import FilmTitle from '../components/FilmTitle';

storiesOf('FilmDetails/FilmTitle', module).add('standard', () => (
    <FilmTitle title="Film Title" />
));
