import React from 'react';
import Results from './Results';
import ResultsCount from '../ResultsCount';
import ResultsSort from '../ResultsSort';
import ResultsBody from '../ResultsBody';
import { shallow, mount } from 'enzyme';
import { RESPONSE_MOCK_DATA, RESULTS_VIEW_MODES, SORT_OPTIONS } from '../../constants';
import { Provider } from "react-redux";
import configureMockStore from "redux-mock-store";

const mockStore = configureMockStore();
const mockStoreData = {
    results: {
        movies: RESPONSE_MOCK_DATA.data
    },
    navigation: {
        openedFilmId: 447365
    },
    sort: {
        sortCriteria: 'year'
    }
};

describe('Results component', () => {
    let store;
    let films;
    let fetchData;
    let viewMode;
    let filmClickHandler;
    let element;

    beforeAll(() => {
        store = mockStore(mockStoreData);
        films = RESPONSE_MOCK_DATA.data;
        fetchData = jest.fn();
        viewMode = RESULTS_VIEW_MODES.DEFAULT;
        filmClickHandler = jest.fn();
        
        element = (<Provider store={store}><Results
            results={films}
            fetchData={fetchData}
            viewMode={viewMode}
            openFilmHandler={filmClickHandler}
        /></Provider>)
    });

    it('should be rendered correctly', () => {
        const component = shallow(element);
        expect(component).toMatchSnapshot();
    });

    it('should be rendered correctly on loading', () => {
        const component = mount(<Provider store={store}><Results
            loading={true}
            fetchData={fetchData}
        /></Provider>);
        expect(component).toMatchSnapshot();
    });

    it('should be rendered correctly on error', () => {
        const error = {message: 'Error message'};
        const component = mount(<Provider store={store}><Results
            error={error}
            fetchData={fetchData}
        /></Provider>);
        expect(component).toMatchSnapshot();
    });

    it('should be rendered correctly in SAME_GENRE mode', () => {
        const viewMode = RESULTS_VIEW_MODES.SAME_GENRE;
        const component = mount(<Provider store={store}><Results
            fetchData={fetchData}
            results={films}
            viewMode={viewMode}
            sameGenreFilms={films}
            openFilmHandler={filmClickHandler}
        /></Provider>);
        expect(component).toMatchSnapshot();
    });

    it('should countain ResultsCount', () => {
        const component = mount(element);
        expect(component.find(ResultsCount).exists()).toBe(true);
    });

    it('should countain ResultsSort', () => {
        const component = mount(element);
        expect(component.find(ResultsSort).exists()).toBe(true);
    });

    it('should countain ResultsBody', () => {
        const component = mount(element);
        expect(component.find(ResultsBody).exists()).toBe(true);
    });

    it('should return alert if results are empty', () => {
        const emptyResults = [];
        const component = mount(<Results results={emptyResults} fetchData={fetchData} />);
        expect(component.find(ResultsCount).exists()).toBe(false);
        expect(component.find(ResultsSort).exists()).toBe(false);
        expect(component.find(ResultsBody).exists()).toBe(false);
        expect(component.text()).toEqual('No films found');
    });
})
