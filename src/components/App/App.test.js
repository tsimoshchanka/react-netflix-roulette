import React from 'react';
import App from './App';
import Header from '../Header';
import Results from '../Results';
import Footer from '../Footer';
import { shallow, mount } from 'enzyme';
import { RESPONSE_MOCK_DATA } from '../../constants';
import { Provider } from "react-redux";
import configureMockStore from "redux-mock-store";

const mockStore = configureMockStore();
const mockStoreData = {
    results: {
        movies: RESPONSE_MOCK_DATA.data
    },
    navigation: {
        openedFilmId: null
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

    // it('should countain proper components for default state', () => {
    //     const component = mount(element);
    //     expect(component.find(Header).exists()).toBe(true);
    //     expect(component.find(Results).exists()).toBe(true);
    //     expect(component.find(Footer).exists()).toBe(true);
    // });

    // it('should countain proper components for default state', () => {
    //     const component = mount(element);
    //     component.setState({openedFilmId: films[0].id});
    //     expect(component.find(Header).exists()).toBe(true);
    //     expect(component.find(Footer).exists()).toBe(true);
    // });
})
