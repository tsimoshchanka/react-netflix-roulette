import React from 'react';
import { shallow } from 'enzyme';
import ItemReleaseDate from './ItemReleaseDate';

describe('ItemReleaseDate component', () => {
    let releaseDate;

    beforeAll(() => {
        releaseDate = '1995-01-01';
    });

    it('should be rendered correctly', () => {
        const component = shallow(<ItemReleaseDate releaseDate={releaseDate} />);
        expect(component).toMatchSnapshot();
    });
});
