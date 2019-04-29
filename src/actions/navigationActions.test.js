import * as actions from './navigationActions';
import * as actionTypes from '../constants/ActionTypes';

describe('navigationActions', () => {
    it('should create an action to open film', () => {
        const newValue = 'some_film_id';
        const expectedAction = {
            type: actionTypes.FILM_OPEN,
            payload: newValue
        };

        expect(actions.openFilm(newValue)).toEqual(expectedAction);
    })

    it('should create an action to close film', () => {
        const newValue = null;
        const expectedAction = {
            type: actionTypes.FILM_CLOSE,
            payload: newValue
        };

        expect(actions.closeFilm()).toEqual(expectedAction);
    })
});
