import { createReducer } from 'reduxsauce'
import * as types from '../actionTypes/actionTypes'
import Immutable from 'seamless-immutable'


// avant de regarder ce qui ce passe ici allez des les actions,
// Les reducer, encore une fois si j'ai bien compris, vont, une fois l'action dispatché, ecouter ses actions et modif la state en rapport
// donc on créer un state de départ et on retourn la new state selon le type de l'action

const INITIAL_STATE = Immutable({
    user: {},
    error: {}
});

const registerFailureReducer = (state, {error}) => {
    return Object.assign({}, state, {error: error})
};

const registerSucessReducer = (state, {uid}) => {
    return Object.assign({}, state, {user: uid})
};


export const reducer = createReducer(INITIAL_STATE, {
    [types.REGISTER_FAILURE]: registerFailureReducer,
    [types.REGISTER_SUCCESS]: registerSucessReducer
});