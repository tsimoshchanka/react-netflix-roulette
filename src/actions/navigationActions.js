import { FILM_OPEN, FILM_CLOSE } from '../constants/actionTypes';

export const openFilm = filmId => ({
    type: FILM_OPEN,
    payload: filmId
});

export const closeFilm = () => ({
    type: FILM_CLOSE,
    payload: null
});
