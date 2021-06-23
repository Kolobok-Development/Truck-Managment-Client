import { combineReducers } from 'redux';
import auth from './auth';
import task from './task';
import truck from './truck';

export default combineReducers({
    auth,
    task,
    truck
});
