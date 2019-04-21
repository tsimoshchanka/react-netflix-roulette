import { combineReducers } from 'redux';

import sort from './sort';
import search from './search';
import results from './results';
import navigation from './navigation';

export default combineReducers({
    sort,
    search,
    results,
    navigation
})
