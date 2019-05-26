import React from 'react';
import { shallow } from 'enzyme';
import FilmDurationAndYear from './FilmDurationAndYear';

describe('FilmDurationAndYear component', () => {
    let filmDuration;
    let filmYear;

    beforeAll(() => {
        filmDuration = 256;
        filmYear = 1984;
    });

    it('should be rendered correctly', () => {
        const component = shallow(
            <FilmDurationAndYear duration={filmDuration} year={filmYear} />
        );
        expect(component).toMatchSnapshot();
    });
});
