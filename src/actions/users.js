import * as types from '../actionTypes/actionTypes'

export const registerSuccess = (user) => ({
    type: types.REGISTER_SUCCESS,
    user
});

