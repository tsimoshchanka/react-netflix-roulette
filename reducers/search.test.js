import { SEARCH_OPTIONS } from '../constants';
import reducer from './search';
import * as types from '../constants/actionTypes';

describe('searchReducer', () => {
    it('should return the initial state', () => {
        expect(reducer(undefined, {})).toEqual({
            searchCriteria: SEARCH_OPTIONS[0]
        });
    });

    it('should handle SEARCH_CRITERIA_CHANGE', () => {
        const newSearchCriteria = 'newSearchCriteria';

        expect(reducer({}, {
            type: types.SEARCH_CRITERIA_CHANGE,
            payload: newSearchCriteria
        })).toEqual({
            searchCriteria: newSearchCriteria
        });
    });
});
