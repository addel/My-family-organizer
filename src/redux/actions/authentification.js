import * as authConst from "../types/authentification";

export const signInUser = ({ email, password }) => (dispatch) => {
    dispatch({ type: authConst.SIGN_IN_REQUEST });

    firebase.auth().signInWithEmailAndPassword(email, password)
        .then((user) => {
            dispatch({ type: authConst.SIGN_IN_SUCCESS, payload: user });

            // redirection
        })
        .catch((error) => { dispatch({ type: authConst.SIGN_IN_FAILURE, payload: authFailMessage(error.code) }); });
};

export const signUpUser = ({ email, password, firstname, lastname }) => (dispatch) => {
    dispatch({ type: authConst.SIGN_UP_REQUEST });

    firebase.auth().createUserWithEmailAndPassword(email, password)
        .then((user) => {
            firebase.database().ref('users').child(user.uid)
                .set({ firstname, lastname })
                .then(() => {
                    dispatch({ type: authConst.SIGN_UP_SUCCESS, payload: user });

                    // redirection
                });
        })
        .catch((error) => { dispatch({ type: authConst.SIGN_UP_FAILURE, payload: authFailMessage(error.code) }); });
};

export const clearState = () => (
    { type: authConst.SET_INITIAL_STATE }
);

export const signOutUser = () => (dispatch) => {
    dispatch({ type: authConst.SET_INITIAL_STATE });

    firebase.auth().signOut();
};