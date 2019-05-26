import { changeSearchCriteria } from './searchActions';
import { SEARCH_CRITERIA_CHANGE } from '../constants/actionTypes';

describe('searchActions', () => {
    it('should create an action to search by criteria', () => {
        const newValue = 'newSearchCriteria';
        const expectedAction = {
            type: SEARCH_CRITERIA_CHANGE,
            payload: newValue
        };

        expect(changeSearchCriteria(newValue)).toEqual(expectedAction);
    });
});
