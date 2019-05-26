import { changeSort } from './sortActions';
import { SORT_CRITERIA_CHANGE } from '../constants/actionTypes';

describe('sortActions', () => {
    it('should create an action to sort', () => {
        const newValue = 'newSortCriteria';
        const expectedAction = {
            type: SORT_CRITERIA_CHANGE,
            payload: newValue
        };

        expect(changeSort(newValue)).toEqual(expectedAction);
    });
});
