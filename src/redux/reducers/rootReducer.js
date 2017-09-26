import { combineReducers } from 'redux';
import auth from './authentification';

const rootReducer = combineReducers({
    auth
});

export default rootReducer;