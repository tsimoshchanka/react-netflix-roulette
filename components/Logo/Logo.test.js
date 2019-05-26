import React from 'react';
import { shallow } from 'enzyme';
import Logo from './Logo';

describe('Logo component', () => {
    it('should be rendered correctly', () => {
        const component = shallow(<Logo />);
        expect(component).toMatchSnapshot();
    });
});
