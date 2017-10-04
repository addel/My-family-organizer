import { put, takeLatest } from 'redux-saga/effects'
import {REGISTER_REQUEST} from "../actionTypes/actionTypes";
import * as actions from "../actions/users";
import * as firebase from "firebase";

function* saga() {
    yield [
        takeLatest("REGISTER_REQUEST", registerRequest),
        takeLatest("REGISTER_NAME_REQUEST", registerNameRequest)
    ];
}

function* registerRequest(action) {

    try {
        const request = yield firebase.auth().createUserWithEmailAndPassword(action.email, action.password);
        yield put(actions.registerSuccess(request.uid));
    }catch (e){
        yield put(actions.registerFailure(e));
    }
}

function* registerNameRequest(action) {

    try {
        const user = yield firebase.auth().currentUser;

        if (user) {
            yield firebase.database().ref('users').child(user.uid).set(action.name);
            yield put(actions.registerSuccess('redirection'));
        }
    }catch (e){
        yield put(actions.registerFailure(e));
    }
}

export { saga };