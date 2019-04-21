import { FILM_OPEN, FILM_CLOSE } from '../constants/actionTypes';

const initialState = {
    openedFilmId: null
};

export default function navigation(state = initialState, action) {
    switch(action.type) {
        case FILM_OPEN:
            return {
                ...state,
                openedFilmId: action.payload
            };

        case FILM_CLOSE:
            return {
                ...state,
                openedFilmId: null
            };

        default:
            return state;
    }
}
