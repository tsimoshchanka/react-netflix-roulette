import React from 'react';
import ResultsBody from './ResultsBody';
import ResultsItem from '../ResultsItem';
import {shallow, mount} from 'enzyme';
import { FILMS_MOCK_DATA } from '../App/Config'; 

describe('ResultsBody component', () => {
    let films;
    let clickHandler;
    let element;

    beforeAll(() => {
        films = FILMS_MOCK_DATA;
        clickHandler = jest.fn();
        element = (<ResultsBody
            results={films}
            openFilmHandler={clickHandler}
        />);
    });

    it('should be rendered correctly', () => {
        const component = shallow(element);
        expect(component).toMatchSnapshot();
    });

    it('should mount all items', () => {
        const component = mount(element);
        expect(component.find(ResultsItem).length).toBe(FILMS_MOCK_DATA.length);
    });

    it('should handle click', () => {
        const component = mount(element);
        component.find(ResultsItem).first().simulate('click');
        expect(clickHandler).toHaveBeenCalledWith(FILMS_MOCK_DATA[0]);
    });
})
