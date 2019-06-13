import { FILM_OPENED, FILM_CLOSED } from '../constants/actionTypes';

export const openFilm = id => dispatch => dispatch({
    type: FILM_OPENED,
    payload: id
});

export const closeFilm = () => dispatch => dispatch({
    type: FILM_CLOSED,
    payload: null
});
