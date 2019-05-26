import React from 'react';
import { shallow, mount } from 'enzyme';
import { RESPONSE_MOCK_DATA } from '../../constants';
import SameGenreFilms from './SameGenreFilms';
import ResultsItem from '../ResultsItem';

describe('SameGenreFilms component', () => {
    let films;
    let filmGenre;
    let openFilmHandler;
    let element;

    beforeAll(() => {
        films = RESPONSE_MOCK_DATA.data;
        filmGenre = films[0].genres[0];
        openFilmHandler = jest.fn();
        element = (<SameGenreFilms
            films={films}
            filmGenre={filmGenre}
            openFilmHandler={openFilmHandler}
        />);
    });

    it('should be rendered correctly', () => {
        const component = shallow(element);
        expect(component).toMatchSnapshot();
    });

    it('should trigger openFilmHandler on ResultsItem click', () => {
        const component = mount(element);
        component.find(ResultsItem).first().simulate('click');
        expect(openFilmHandler).toHaveBeenCalledWith(films[0].id);
    });
});
