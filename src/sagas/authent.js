import { put, takeLatest } from 'redux-saga/effects'
import {REGISTER_REQUEST} from "../actionTypes/actionTypes";
import * as actions from "../actions/users";
import * as firebase from "firebase";

function* saga() {
    yield takeLatest(REGISTER_REQUEST, registerRequest);

}

function* registerRequest(action) {

        const request = yield firebase.auth().createUserWithEmailAndPassword(action.email, action.password);

        yield firebase.auth().onAuthStateChanged((user, that = this) => {

            if (user && that.state.name !== '') {
                user.updateProfile({
                    displayName: this.state.name
                }).then(function(that) {
                    console.log("ok pour add name " + that.state.name)
                }).catch(function(error) {
                    console.log(error)
                });
            }
        });

        yield put(actions.registerSuccess(request));

        yield put(actions.registerFailure());


}



export { saga };