import { combineReducers } from 'redux';
import auth from './auth';
import task from './task';
import truck from './truck';
import client from './client';

export default combineReducers({
    auth,
    task,
    truck,
    client
});
