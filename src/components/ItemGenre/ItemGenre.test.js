import React from 'react';
import ItemGenre from './ItemGenre';
import {shallow} from 'enzyme';

describe('ItemGenre component', () => {
    let itemGenre;

    beforeAll(() => {
        itemGenre = 'someGenre';
    });

    it('should be rendered correctly', () => {
        const component = shallow(<ItemGenre genre={itemGenre} />);
        expect(component).toMatchSnapshot();
    });
})
