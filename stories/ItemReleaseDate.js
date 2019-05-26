import React from 'react';
import { storiesOf } from '@storybook/react';
import ItemReleaseDate from '../components/ItemReleaseDate';

storiesOf('ResultsItem/ItemReleaseDate', module).add('standard', () => (
    <ItemReleaseDate releaseDate="1984-07-29" />
));
