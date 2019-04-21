import React from 'react';
import FilmCover from './FilmCover';
import {shallow} from 'enzyme';

describe('FilmCover component', () => {
    let filmSrc;
    let filmAlt;

    beforeAll(() => {
        filmSrc = 'src.jpg';
        filmAlt = 'Alt';
    });

    it('should be rendered correctly', () => {
        const component = shallow(<FilmCover src={filmSrc} alt={filmAlt} />);
        expect(component).toMatchSnapshot();
    });
})
