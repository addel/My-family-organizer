import * as types from '../actionTypes/actionTypes'

export const registerSuccess = (user) => ({
    type: types.REGISTER_SUCCESS,
    user
});

export const registerFailure = () => ({
    type: types.REGISTER_FAILURE
});

export const registerRequest = (email, password) => ({
    type: types.REGISTER_REQUEST,
    email: email,
    password: password
});

