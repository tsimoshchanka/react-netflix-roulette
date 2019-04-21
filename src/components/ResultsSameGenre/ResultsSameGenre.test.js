import React from 'react';
import ResultsSameGenre from './ResultsSameGenre';
import ResultsBody from '../ResultsBody';
import {shallow, mount} from 'enzyme';
import { FILMS_MOCK_DATA } from '../App/Config';

describe('ResultsSameGenre component', () => {
    let filmsList;
    let film;
    let filmGenre;
    let filmClickHandler;
    let currentGenre;
    let element;

    beforeAll(() => {
        filmsList = FILMS_MOCK_DATA;
        film = filmsList[filmsList.length - 1];
        
        filmClickHandler = jest.fn();
        currentGenre = film.genre;
        element = (<ResultsSameGenre
            results={filmsList}
            film={film}
            openFilmHandler={filmClickHandler}
        />)
    });

    it('should be rendered correctly', () => {
        const component = shallow(element);
        expect(component).toMatchSnapshot();
    });

    it('should countain ResultsBody', () => {
        const component = mount(element);
        expect(component.find(ResultsBody).exists()).toBe(true);
    });

    it('should display proper genre', () => {
        const component = mount(element);
        filmGenre = film.genre;
        expect(component.find('main > div > span').text()).toEqual(filmGenre);
    });
})
