import React from 'react';
import ResultsItem from './ResultsItem';
import {shallow, mount} from 'enzyme';

describe('ResultsItem component', () => {
    let filmData;
    let clickHandler;

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
        const component = shallow(<ResultsItem data={filmData} />);
        expect(component).toMatchSnapshot();
    });

    it('should be mounted correctly', () => {
        clickHandler = jest.fn();
        const component = mount(<ResultsItem data={filmData} onClick={clickHandler} />);
        component.find('#results-item-' + filmData.id).simulate('click');
        expect(clickHandler).toHaveBeenCalled();
    });
})
