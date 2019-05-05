import React from 'react';
import App from './App';
import { shallow, mount } from 'enzyme';
import { RESPONSE_MOCK_DATA } from '../../constants';
import { Provider } from "react-redux";
import configureMockStore from "redux-mock-store";

const mockStore = configureMockStore();
const mockStoreData = {
    results: {
        movies: RESPONSE_MOCK_DATA.data
    },
    search: {
        searchCriteria: 'title'
    },
    sort: {
        sortCriteria: 'year'
    }
};

describe('Results component', () => {
    let store;
    let films;
    let element;

    beforeAll(() => {
        store = mockStore(mockStoreData);
        films = RESPONSE_MOCK_DATA.data;
        element = (<Provider store={store}><App /></Provider>)
    });

    it('should be rendered correctly', () => {
        const component = shallow(element);
        expect(component).toMatchSnapshot();
    });
})
