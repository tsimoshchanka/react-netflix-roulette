import React from 'react';
import Results from './Results';
import ResultsCount from '../ResultsCount';
import ResultsSort from '../ResultsSort';
import ResultsBody from '../ResultsBody';
import { shallow, mount } from 'enzyme';
import { FILMS_MOCK_DATA, SORT_OPTIONS } from '../App/Config';

describe('Results component', () => {
    let films;
    let sortOptions;
    let currentOption;
    let sortOptionHandler;
    let filmClickHandler;
    let element;

    beforeAll(() => {
        films = FILMS_MOCK_DATA;
        sortOptions = SORT_OPTIONS;
        currentOption = SORT_OPTIONS[0];
        sortOptionHandler = jest.fn();
        filmClickHandler = jest.fn();
        element = (<Results
            results={films}
            sortOptions={sortOptions}
            currentOption={currentOption}
            changeSortHandler={sortOptionHandler}
            openFilmHandler={filmClickHandler}
        />)
    });

    it('should be rendered correctly', () => {
        const component = shallow(element);
        expect(component).toMatchSnapshot();
    });

    it('should countain ResultsCount', () => {
        const component = mount(element);
        expect(component.find(ResultsCount).exists()).toBe(true);
    });

    it('should countain ResultsSort', () => {
        const component = mount(element);
        expect(component.find(ResultsSort).exists()).toBe(true);
    });

    it('should countain ResultsBody', () => {
        const component = mount(element);
        expect(component.find(ResultsBody).exists()).toBe(true);
    });

    it('should return alert if results are empty', () => {
        const emptyResults = [];
        const component = mount(<Results results={emptyResults} />);
        expect(component.find(ResultsCount).exists()).toBe(false);
        expect(component.find(ResultsSort).exists()).toBe(false);
        expect(component.find(ResultsBody).exists()).toBe(false);
        expect(component.text()).toEqual('No films found');
    });
})
