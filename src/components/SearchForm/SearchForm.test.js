import React from 'react';
import SearchForm from './SearchForm';
import SearchFilter from '../SearchFilter';
import SearchField from '../SearchField';
import { shallow, mount } from 'enzyme';
import { SEARCH_OPTIONS } from '../../constants';

describe('SearchForm component', () => {
    let searchString;
    let searchCriteria;
    let changeSearchInputHandler;
    let changeSearchCriteriaHandler;
    let element;

    beforeAll(() => {
        searchString = 'someSearch';
        searchCriteria = SEARCH_OPTIONS[0];
        changeSearchInputHandler = jest.fn();
        changeSearchCriteriaHandler = jest.fn();
        
        element = (<SearchForm
            searchString={searchString}
            searchCriteria={searchCriteria}
            changeSearchInputHandler={changeSearchInputHandler}
            changeSearchCriteriaHandler={changeSearchCriteriaHandler}
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

    it('should trigger changeSearchInputHandler handler on changes', () => {
        const component = mount(element);
        component.find('input[type="text"]').simulate('change', {target: {value: 'someString'}});
        expect(changeSearchInputHandler).toHaveBeenCalled();
    });
})
