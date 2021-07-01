import {
    FETCH_TASKS_REQUEST,
    FETCH_TASK_SUCCESS,
    FETCH_TASK_REQUEST,
    FETCH_TASK_FAIL,
    FETCH_TASKS_SUCCESS,
    FETCH_TASKS_FAIL,
    FETCH_TASK_STATUS_CAHNGE_FAIL,
    FETCH_TASK_STATUS_CAHNGE_REQUEST,
    FETCH_TASK_STATUS_CAHNGE_SUCCESS

} from './types'

import axios from 'axios';
import configData from '../../config.json';
import { storeData, retrieveData } from '../utils/storage';
import { setAuthToken } from '../utils/setAuthToken';

export const loadTasks = () => async dispatch => {
    
    dispatch({type: FETCH_TASKS_REQUEST});

    const token = await retrieveData('token');

    if (token !== null) {
        setAuthToken(token);
    } 
    
    try {
        const res = await axios.get(`${configData.baseURL}/api/task/getCurrentTasks`);
        dispatch({
            type: FETCH_TASKS_SUCCESS,
            payload: res.data
        });

    }catch{
        console.log(err);
        dispatch({
            type: FETCH_TASKS_FAIL
        });

    }
}

export const loadTaskById = (id) => async dispatch => {
    
    dispatch({type: FETCH_TASK_REQUEST});

    const token = await retrieveData('token');

    if (token !== null) {
        setAuthToken(token);
    } 
    
    try {
        const res = await axios.get(`${configData.baseURL}/api/task/getTaskById/${id}`);
        dispatch({
            type: FETCH_TASK_SUCCESS,
            payload: res.data
        });

    }catch (err){
        dispatch({
            type: FETCH_TASK_FAIL
        });

    }
};

export const chageTaskSataus = (id) => async dispatch => {
    dispatch({type: FETCH_TASK_STATUS_CAHNGE_REQUEST})

    try{
        const res = await axios.get(`${configData.baseURL}/api/task/changeStatus//${id}`);
        dispatch({
            type: FETCH_TASK_STATUS_CAHNGE_SUCCESS,
            
        })
    }catch (err){
        console.log(err);
        dispatch({
            type: FETCH_TASK_STATUS_CAHNGE_FAIL
        })
    }

};
