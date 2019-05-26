import React from 'react';
import { shallow } from 'enzyme';
import ResultsCount from './ResultsCount';


describe('ResultsCount component', () => {
    let filmsCount;

    it('should mount and display correct value if present value', () => {
        filmsCount = 55;
        const component = shallow(<ResultsCount count={filmsCount} />);
        expect(component.html()).toEqual('<span class="resultsCount">55 movies found</span>');
    });

    it('should mount and display empty element if null value', () => {
        filmsCount = 0;
        const component = shallow(<ResultsCount count={filmsCount} />);
        expect(component.html()).toEqual('<span></span>');
    });
});
