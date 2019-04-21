import React from 'react';
import Header from './Header';
import Button from '../Button';
import {shallow, mount} from 'enzyme';
import { SEARCH_OPTIONS } from '../App/Config';

describe('Header component', () => {
    let filmData;
    let viewMode;
    let backHandler;
    let changeCriteriaHandler;
    let changeTextHandler;
    let currentSearchString;
    let element;

    beforeAll(() => {
        filmData = {
            id: 0,
            img: 'image.jpg',
            year: 1992,
            rating: 8.3,
            duration: 145,
            summary: 'When a simple jewelry heist goes horribly wrong, the surviving criminals begin to suspect that one of them is a police informant.'
        };
    });

    it('should be rendered correctly in "filmDetails" mode', () => {
        viewMode = 'filmDetails';
        backHandler = jest.fn();
        element = <Header viewMode={viewMode} openedFilm={filmData} closeFilmHandler={backHandler} />;
        
        const component = shallow(element);
        expect(component).toMatchSnapshot();
    });

    it('should be mounted correctly in "filmDetails" mode', () => {
        viewMode = 'filmDetails';
        backHandler = jest.fn();
        element = <Header viewMode={viewMode} openedFilm={filmData} closeFilmHandler={backHandler} />;
        
        const component = mount(element);
        component.find(Button).simulate('click');
        expect(backHandler).toHaveBeenCalled();
    });

    it('should be rendered correctly in "searchForm" mode', () => {
        viewMode = 'searchForm';
        changeCriteriaHandler = jest.fn();
        changeTextHandler = jest.fn();
        currentSearchString = 'Some search string';
        element = (<Header
            viewMode={viewMode}
            searchOptions={SEARCH_OPTIONS}
            currentSearchCriteria={SEARCH_OPTIONS[0]}
            handleSearchOptionChange={changeCriteriaHandler}
            currentSearchString={currentSearchString}
            handleTextSearch={changeTextHandler}
        />);
        
        const component = shallow(element);
        expect(component).toMatchSnapshot();
    });
})
