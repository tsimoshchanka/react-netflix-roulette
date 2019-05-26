import React from 'react';
import { storiesOf } from '@storybook/react';
import ItemTitle from '../components/ItemTitle';

storiesOf('ResultsItem/ItemTitle', module).add('standard', () => (
    <ItemTitle title="Film Title" />
));
