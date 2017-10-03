import { put, takeLatest } from 'redux-saga/effects'
import {REGISTER_REQUEST} from "../actionTypes/actionTypes";
import * as actions from "../actions/users";
import * as firebase from "firebase";

function* saga() {
    yield takeLatest(REGISTER_REQUEST, registerRequest);

}

function* registerRequest(action) {

    try {
        const request = yield firebase.auth().createUserWithEmailAndPassword(action.email, action.password);
        yield put(actions.registerSuccess());
    }catch (e){
        yield put(actions.registerFailure(e));
        console.error(e);
    }
}

export { saga };