import {
    FETCH_TRUCKS_REQUEST,
    FETCH_TRUCKS_SUCCESS,
    FETCH_TRUCKS_FAIL,
    FETCH_TRUCK_REQUEST,
    FETCH_TRUCK_SUCCESS,
    FETCH_TRUCK_FAIL

} from './types'

import axios from 'axios';
import configData from '../../config.json';
import { storeData, retrieveData } from '../utils/storage';
import { setAuthToken } from '../utils/setAuthToken';

export const loadTrucks = () => async dispatch => {
    
    dispatch({type: FETCH_TRUCKS_REQUEST});

    const token = await retrieveData('token');

    if (token !== null) {
        setAuthToken(token);
    } 
    
    try {
        const res = await axios.get(`${configData.baseURL}/api/truck/getAllTrucks`);

        dispatch({
            type: FETCH_TRUCKS_SUCCESS,
            payload: res.data
        });

    }catch{
        console.log(err);
        dispatch({
            type: FETCH_TRUCKS_FAIL
        });

    }
}

export const loadTruckById = (id) => async dispatch => {
    
    dispatch({type: FETCH_TRUCK_REQUEST});

    const token = await retrieveData('token');

    if (token !== null) {
        setAuthToken(token);
    } 
    
    try {
        const res = await axios.get(`${configData.baseURL}/api/truck/getTruckById/${id}`);

        console.log(res.data);

        dispatch({
            type: FETCH_TRUCK_SUCCESS,
            payload: res.data
        });

    }catch (err){
        console.log(err)
        dispatch({
            type: FETCH_TRUCK_FAIL
        });

    }
}