import React from 'react';
import { shallow } from 'enzyme';
import FilmRating from './FilmRating';

describe('FilmRating component', () => {
    let filmRating;

    beforeAll(() => {
        filmRating = 5;
    });

    it('should be rendered correctly', () => {
        const component = shallow(<FilmRating rating={filmRating} />);
        expect(component).toMatchSnapshot();
    });
});
