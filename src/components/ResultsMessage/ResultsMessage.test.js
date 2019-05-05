import React from 'react';
import ResultsMessage from './ResultsMessage';
import { shallow } from 'enzyme';

describe('ResultsMessage component', () => {
    let testMessage;
    let element;

    beforeAll(() => {
        testMessage = 'Test message';
        element = (<ResultsMessage message={testMessage} />)
    });

    it('should be rendered correctly', () => {
        const component = shallow(element);
        expect(component).toMatchSnapshot();
    });
})
