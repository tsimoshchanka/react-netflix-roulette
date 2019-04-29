import { FETCH_DATA_BEGIN, FETCH_DATA_SUCCESS, FETCH_DATA_ERROR } from '../constants/actionTypes';
import { RESPONSE_MOCK_DATA } from '../constants';

const API_URL = 'http://reactjs-cdp.herokuapp.com/movies/?limit=24';

const getData = apiUrl => {
    return fetch(apiUrl)
        .then(handleErrors)
        .then(res => res.json());
}
  
const fakeGetData = () => {
    return new Promise(resolve => {
        setTimeout(
            () =>
            resolve({
                data: RESPONSE_MOCK_DATA.data
            }),
            2500
        );
    });
}
  
export function fetchData() {
    return dispatch => {
        dispatch(fetchDataBegin());
        return getData(API_URL)
            .then(json => {
                dispatch(fetchDataSuccess(json.data));
                return json.data;
            })
            .catch(error =>
                dispatch(fetchDataFailure(error))
            );
    };
}
  
const handleErrors = response => {
    if (!response.ok) {
        throw Error(response.statusText);
    }

    return response;
}
  
export const fetchDataBegin = () => ({
    type: FETCH_DATA_BEGIN
});

export const fetchDataSuccess = movies => ({
    type: FETCH_DATA_SUCCESS,
    payload: { movies }
});

export const fetchDataFailure = error => ({
    type: FETCH_DATA_ERROR,
    payload: { error }
});
