import React from 'react';
import App from './App';
import Header from '../Header';
import Results from '../Results';
import ResultsSameGenre from '../ResultsSameGenre';
import Footer from '../Footer';
import {shallow, mount} from 'enzyme';
import { FILMS_MOCK_DATA } from './Config';

describe('Results component', () => {
    let films;
    let openedFilm;
    let element;

    beforeAll(() => {
        films = FILMS_MOCK_DATA;
        element = (<App />)
    });

    it('should be rendered correctly', () => {
        const component = shallow(element);
        expect(component).toMatchSnapshot();
    });

    it('should countain proper components for default state', () => {
        const component = mount(element);
        expect(component.find(Header).exists()).toBe(true);
        expect(component.find(Results).exists()).toBe(true);
        expect(component.find(Footer).exists()).toBe(true);
    });

    it('should countain proper components for default state', () => {
        const component = mount(element);
        component.setState({ openedFilm: films[0] });
        expect(component.find(Header).exists()).toBe(true);
        expect(component.find(ResultsSameGenre).exists()).toBe(true);
        expect(component.find(Footer).exists()).toBe(true);
    });
})
