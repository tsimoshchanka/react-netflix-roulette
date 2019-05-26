import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import SearchCriteriasList from '../components/SearchCriteriasList';
import { SEARCH_OPTIONS } from '../constants';

const options = SEARCH_OPTIONS;
const currentOption = SEARCH_OPTIONS[0];

storiesOf('SearchForm/SearchCriteriasList', module).add('standard', () => (
    <SearchCriteriasList
        options={options}
        currentOption={currentOption}
        changeHandler={action('clicked')}
    />
));
