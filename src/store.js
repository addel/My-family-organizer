import { createStore, combineReducers, applyMiddleware } from 'redux'
import {reducer as userReducer} from "./reducers/users";
import createSagaMiddleware from 'redux-saga'
import {saga as authenSaga} from "./sagas/authent";

const reducers = combineReducers({
    user: userReducer
});

const sagas = function* () {
    yield [].concat(authenSaga)
}

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
    reducers,
    applyMiddleware(sagaMiddleware)
);

sagaMiddleware.run(authenSaga);

export default store