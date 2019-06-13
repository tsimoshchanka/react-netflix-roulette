import axios from 'axios';
import { GET_RESULTS } from '../constants/actionTypes';

const API_URL = 'https://reactjs-cdp.herokuapp.com/movies/?limit=30';

/* eslint-disable arrow-parens */
const getResults = () => async dispatch => {
    const movies = await axios.get(API_URL);
    return dispatch({
        type: GET_RESULTS,
        payload: { films: movies.data.data }
    });
};

export default getResults;
