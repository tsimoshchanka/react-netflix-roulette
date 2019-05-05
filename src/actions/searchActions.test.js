import * as actions from './searchActions';
import * as actionTypes from '../constants/ActionTypes';

describe('searchActions', () => {
    it('should create an action to search by criteria', () => {
        const newValue = 'newSearchCriteria';
        const expectedAction = {
            type: actionTypes.SEARCH_CRITERIA_CHANGE,
            payload: newValue
        };

        expect(actions.changeSearchCriteria(newValue)).toEqual(expectedAction);
    });
});
