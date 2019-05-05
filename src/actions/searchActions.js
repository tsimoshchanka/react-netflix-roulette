import { SEARCH_CRITERIA_CHANGE } from '../constants/actionTypes';

export const changeSearchCriteria = searchCriteria => ({
    type: SEARCH_CRITERIA_CHANGE,
    payload: searchCriteria
});
