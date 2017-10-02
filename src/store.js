import { createStore, combineReducers } from 'redux'
import {reducer as userReducer} from "./reducers/users";

const reducers = combineReducers({
    user: userReducer
});

const store = createStore(
    reducers,
);

export default store