import * as actions from './sortActions';
import * as actionTypes from '../constants/ActionTypes';

describe('sortActions', () => {
    it('should create an action to sort', () => {
        const newValue = 'newSortCriteria';
        const expectedAction = {
            type: actionTypes.SORT_CRITERIA_CHANGE,
            payload: newValue
        };

        expect(actions.changeSort(newValue)).toEqual(expectedAction);
    })
});
