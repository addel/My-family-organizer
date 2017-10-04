import * as types from '../actionTypes/actionTypes'


// ok ici on a les actions, si j'ai bien compris l'enseignement de maitre lainnie ( ici j'aurai bien aimé mettre un emojicone XD ), les actions decrivent les changement à effectuer,
// changement demandé par les components via le dispatch afin de modif la state

// Le type de l’action permet d’indiquer les modifications à effectuer sur la fucking state qui est tellement minable quel est local pfff

export const registerRequest = (email, password) => ({
    type: types.REGISTER_REQUEST,
    email: email,
    password: password
});

export const registerNameRequest = (name) => ({
    type: types.REGISTER_NAME_REQUEST,
    name: name
});


export const registerSuccess = (uid) => ({
    type: types.REGISTER_SUCCESS,
    uid: uid
});

export const registerFailure = (error) => ({
    type: types.REGISTER_FAILURE,
    error: error
});



