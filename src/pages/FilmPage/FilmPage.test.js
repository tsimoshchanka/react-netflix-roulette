import React from 'react';
import FilmPage from './FilmPage';
import { shallow } from 'enzyme';

describe('FilmPage component', () => {
    let routeProps;

    beforeAll(() => {
        routeProps = {
            match: {
                params: {
                    filmId: 11111
                }
            }
        };
    });

    it('should be rendered correctly', () => {
        const component = shallow(<FilmPage {...routeProps} />);
        expect(component).toMatchSnapshot();
    });
})
