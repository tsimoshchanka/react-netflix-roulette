import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import ResultsSortOption from '../components/ResultsSortOption';

storiesOf('Results/ResultsSortOption', module)
    .add('standard', () => (
        <ResultsSortOption title="option" onClick={action('clicked')} />
    ))
    .add('buttonChecked', () => (
        <ResultsSortOption
            title="option"
            customClass="buttonChecked"
            onClick={action('clicked')}
        />
    ));
