import React from 'react';
import ItemGenre from './ItemGenre';
import {shallow} from 'enzyme';

describe('ItemGenre component', () => {
    let itemGenres;

    beforeAll(() => {
        itemGenres = 'someGenre';
    });

    it('should be rendered correctly', () => {
        const component = shallow(<ItemGenre genres={itemGenres} />);
        expect(component).toMatchSnapshot();
    });
})
