import React from 'react';
import { shallow } from 'enzyme';
import ItemGenres from './ItemGenres';

describe('ItemGenre component', () => {
    let itemGenres;

    beforeAll(() => {
        itemGenres = ['a', 'b', 'c'];
    });

    it('should be rendered correctly', () => {
        const component = shallow(<ItemGenres genres={itemGenres} />);
        expect(component).toMatchSnapshot();
    });
});
