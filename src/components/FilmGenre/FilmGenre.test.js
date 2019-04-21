import React from 'react';
import FilmGenre from './FilmGenre';
import {shallow} from 'enzyme';

describe('FilmGenre component', () => {
    let filmGenre;

    beforeAll(() => {
        filmGenre = 'someGenre';
    });

    it('should be rendered correctly', () => {
        const component = shallow(<FilmGenre genre={filmGenre} />);
        expect(component).toMatchSnapshot();
    });
})
