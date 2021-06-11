import {
    LOGIN_SUCCESS,
    LOGIN_FAIL
} from './types';



export const LogIn = (token) => dispatch => {
    console.log('Action Dsipatched')
    dispatch({
        type: LOGIN_SUCCESS,
        payload: token
    });
};