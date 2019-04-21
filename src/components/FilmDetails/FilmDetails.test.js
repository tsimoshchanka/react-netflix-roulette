import React from 'react';
import FilmDetails from './FilmDetails';
import {shallow, mount} from 'enzyme';

describe('FilmDetails component', () => {
    let filmData;

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

    it('should be rendered correctly', () => {
        const component = shallow(<FilmDetails film={filmData} />);
        expect(component).toMatchSnapshot();
    });

    it('should be mounted correctly', () => {
        const component = mount(<FilmDetails film={filmData} />);
        expect(component).toMatchSnapshot();
    });
})
