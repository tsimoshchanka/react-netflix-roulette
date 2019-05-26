import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import SearchFilter from '../components/SearchFilter';
import { SEARCH_OPTIONS } from '../constants';

const options = SEARCH_OPTIONS;
const currentOption = SEARCH_OPTIONS[0];

storiesOf('SearchForm/SearchFilter', module).add('standard', () => (
    <SearchFilter
        options={options}
        currentOption={currentOption}
        changeCriteriaHandler={action('changeCriteria')}
        submitValueHandler={action('submitValue')}
    />
));
