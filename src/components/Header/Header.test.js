import React from 'react';
import Header from './Header';
import Button from '../Button';
import { shallow, mount } from 'enzyme';
import { HEADER_VIEW_MODES } from '../../constants/';
import { Provider } from "react-redux";
import configureMockStore from "redux-mock-store";
import { RESPONSE_MOCK_DATA } from '../../constants';

const mockStore = configureMockStore();
const mockStoreData = {
    results: {
        movies: RESPONSE_MOCK_DATA.data
    },
    navigation: {
        openedFilmId: 447365
    }
};
const mockStoreData2 = {
    results: {
        movies: RESPONSE_MOCK_DATA.data
    },
    navigation: {
        openedFilmId: null
    },
    search: {
        searchString: 'someString'
    }
};

describe('Header component', () => {
    let store;
    let viewMode;
    let backHandler;
    let element;

    beforeAll(() => {
        store = mockStore(mockStoreData);
    });

    it('should be rendered correctly in FILM_DETAILS mode', () => {
        viewMode = HEADER_VIEW_MODES.FILM_DETAILS;
        backHandler = jest.fn();
        element = <Header headerViewMode={viewMode} closeFilmHandler={backHandler} />;
        
        const component = shallow(element);
        expect(component).toMatchSnapshot();
    });

    it('should be mounted correctly in FILM_DETAILS mode', () => {
        viewMode = HEADER_VIEW_MODES.FILM_DETAILS;
        backHandler = jest.fn();
        element = <Provider store={store}><Header headerViewMode={viewMode} closeFilmHandler={backHandler} /></Provider>;
        
        const component = mount(element);
        component.find(Button).simulate('click');
        expect(backHandler).toHaveBeenCalled();
    });

    it('should be rendered correctly in SEARCH_FORM mode', () => {
        store = mockStore(mockStoreData2);
        viewMode = HEADER_VIEW_MODES.SEARCH_FORM;
        element = (<Provider store={store}><Header headerViewMode={viewMode} /></Provider>);
        
        const component = mount(element);
        expect(component).toMatchSnapshot();
    });

    it('should be rendered correctly without proper mode', () => {
        viewMode = 'undefined_mode';
        backHandler = jest.fn();
        element = <Header headerViewMode={viewMode} closeFilmHandler={backHandler} />;
        
        const component = shallow(element);
        expect(component).toMatchSnapshot();
    });
});
