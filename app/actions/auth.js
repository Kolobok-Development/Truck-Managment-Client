import {
    LOGIN_REQUEST,
    LOGIN_SUCCESS,
    LOGIN_FAIL,
    USER_AUTH_REQUEST,
    USER_AUTH_ERROR,
    USER_AUTH_SUCCESS
} from './types';
import axios from 'axios';
import configData from '../../config.json';
import { storeData, retrieveData } from '../utils/storage';
import {setAuthToken} from '../utils/setAuthToken'

export const loadCurrentUser = () => async dispatch => {
    dispatch({type: USER_AUTH_REQUEST});

    const token = await retrieveData('token');
    console.log("Loading current user...");
    if (token !== null) {
        setAuthToken(token);
    } 
    
    try {
        const res = await axios.get(`${configData.baseURL}/api/user/me`);
        console.log(res.data);
        dispatch({
            type: USER_AUTH_SUCCESS,
            payload: res.data
        });

    }catch{
        console.log(err);
        dispatch({
            type: USER_AUTH_ERROR
        });

    }
}



export const LogIn = (userHandle, password) => async dispatch => {
    dispatch({type: LOGIN_REQUEST});

    
    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    };

    const body = JSON.stringify({ userHandle, password });

    try{
        const res = await axios.post(`${configData.baseURL}/api/auth/login`, body, config);
        
        dispatch({
            type:LOGIN_SUCCESS,
            payload: res.data
        });
        await storeData('token', res.data.token);

    }catch(err){
        console.log(err);
        dispatch({
            type: LOGIN_FAIL
        });
    }
};