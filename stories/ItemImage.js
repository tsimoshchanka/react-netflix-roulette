import React from 'react';
import { storiesOf } from '@storybook/react';
import ItemImage from '../components/ItemImage';

const src = 'https://image.tmdb.org/t/p/w500/ldoY4fTZkGISMidNw60GHoNdgP8.jpg';
const alt = 'Some Description';

storiesOf('ResultsItem/ItemImage', module).add('standard', () => (
    <ItemImage src={src} alt={alt} />
));
