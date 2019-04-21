import reducer from './navigation';
import * as types from '../constants/actionTypes';

describe('navigationReducer', () => {
    it('should return the initial state', () => {
        expect(reducer(undefined, {})).toEqual({
            openedFilmId: null
        });
    });

    it('should handle FILM_OPEN', () => {
        const openFilmId = 'open_film_id';

        expect(reducer({}, {
            type: types.FILM_OPEN,
            payload: openFilmId
        })).toEqual({
            openedFilmId: openFilmId
        });
    });

    it('should handle FILM_CLOSE', () => {
        const openFilmId = null;

        expect(reducer({}, {
            type: types.FILM_CLOSE
        })).toEqual({
            openedFilmId: openFilmId
        });
    });
})
