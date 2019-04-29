import React from 'react';
import SearchForm from './SearchForm';
import SearchFilter from '../SearchFilter';
import SearchField from '../SearchField';
import {shallow, mount} from 'enzyme';
import {SEARCH_OPTIONS} from '../App/Config';

describe('SearchForm component', () => {
    let searchOptions;
    let currentOption;
    let criteriaHandler;
    let textHandler;
    let searchString;
    let element;

    beforeAll(() => {
        searchOptions = SEARCH_OPTIONS;
        currentOption = SEARCH_OPTIONS[0];
        criteriaHandler = jest.fn();
        textHandler = jest.fn();
        searchString = 'someSearch'
        element = (<SearchForm
            searchOptions={searchOptions}
            currentOption={currentOption}
            handleSearchOptionChange={criteriaHandler}
            handleTextSearch={textHandler}
            currentSearchString={searchString}
        />)
    });

    it('should be rendered correctly', () => {
        const component = shallow(element);
        expect(component).toMatchSnapshot();
    });

    it('should countain header with proper wording', () => {
        const component = mount(element);
        expect(component.find('h1').text()).toEqual('Find your movie');
    });

    it('should countain SearchField', () => {
        const component = mount(element);
        expect(component.find(SearchField).exists()).toBe(true);
    });

    it('should countain SearchFilter', () => {
        const component = mount(element);
        expect(component.find(SearchFilter).exists()).toBe(true);
    });
})
