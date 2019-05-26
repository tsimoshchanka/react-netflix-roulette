import React from 'react';
import { storiesOf } from '@storybook/react';
import ResultsCount from '../components/ResultsCount';

storiesOf('Results/ResultsCount', module).add('ResultsItem', () => (
    <ResultsCount count={'9'} />
));
