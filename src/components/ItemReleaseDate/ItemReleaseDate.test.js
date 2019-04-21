import React from 'react';
import ItemReleaseDate from './ItemReleaseDate';
import {shallow} from 'enzyme';

describe('ItemReleaseDate component', () => {
    let itemYear;

    beforeAll(() => {
        itemYear = 1995;
    });

    it('should be rendered correctly', () => {
        const component = shallow(<ItemReleaseDate year={itemYear} />);
        expect(component).toMatchSnapshot();
    });
})
