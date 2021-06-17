import {
    LOGIN_SUCCESS,
    LOGIN_FAIL
} from './types';
import axios from 'axios';
import configData from '../../config.json';


export const LogIn = (userHandle, password) => async dispatch => {
    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    };

    const body = JSON.stringify({ userHandle, password });

    try{
        const res = await axios.post(`${configData.baseURL}/api/auth/login`, body, config);
        console.log("action dispatched")
        dispatch({
            type:LOGIN_SUCCESS,
            payload: res.data
        });

    }catch(err){
        console.log(err);
        dispatch({
            type: LOGIN_FAIL
        });
    }
};