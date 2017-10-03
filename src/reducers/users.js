import { createReducer } from 'reduxsauce'
import * as types from '../actionTypes/actionTypes'
import Immutable from 'seamless-immutable'


// avant de regarder ce qui ce passe ici allez des les actions,
// Les reducer, encore une fois si j'ai bien compris, vont, une fois l'action dispatché, ecouter ses actions et modif la state en rapport
// donc on créer un state de départ et on retourn la new state selon le type de l'action

const INITIAL_STATE = Immutable({
    user: {},
    error: ''
});

const registerSucessArgument = (state) => {
    return Object.assign({}, state)
};

const registerFailureReducer = (state, {error}) => {
    return Object.assign({}, state, {error: error.message})
};


export const reducer = createReducer(INITIAL_STATE, {
    [types.REGISTER_SUCCESS]: registerSucessArgument,
    [types.REGISTER_FAILURE]: registerFailureReducer
});