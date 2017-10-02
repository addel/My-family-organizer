import { createReducer } from 'reduxsauce'
import * as types from '../actionTypes/actionTypes'
import Immutable from 'seamless-immutable'

const INITIAL_STATE = Immutable({
    user: {},
});

const registerSucessArgument = (state, {user}) => {
    return Object.assign({}, state, {user: user})
};

export const reducer = createReducer(INITIAL_STATE, {
    [types.REGISTER_SUCCESS]: registerSucessArgument,
});