/* eslint-disable import/prefer-default-export  */
import { SORT_CRITERIA_CHANGE } from '../constants/actionTypes';

export const changeSort = sortCriteria => ({
    type: SORT_CRITERIA_CHANGE,
    payload: sortCriteria
});
