import React from 'react';
import { shallow } from 'enzyme';
import FilmPoster from './FilmPoster';

describe('FilmPoster component', () => {
    let filmSrc;
    let filmAlt;

    beforeAll(() => {
        filmSrc = 'src.jpg';
        filmAlt = 'Alt';
    });

    it('should be rendered correctly', () => {
        const component = shallow(<FilmPoster src={filmSrc} alt={filmAlt} />);
        expect(component).toMatchSnapshot();
    });
});
