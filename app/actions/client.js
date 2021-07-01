import {
    FETCH_CLIENTS_REQUEST,
    FETCH_CLIENTS_SUCCESS,
    FETCH_CLIENTS_FAIL,
    FETCH_CLIENT_REQUEST,
    FETCH_CLIENT_SUCCESS,
    FETCH_CLIENT_FAIL,
} from './types';

import axios from 'axios';
import configData from '../../config.json';
import { storeData, retrieveData } from '../utils/storage';


export const loadClients = () => async dispatch => {
    dispatch({type: FETCH_CLIENTS_REQUEST});

    try {
        const res = await axios.get(`${configData.baseURL}/api/client/`);
        console.log(res.data);
        dispatch({
            type: FETCH_CLIENTS_SUCCESS,
            payload: res.data.clients
        })

    }catch(err){
        console.log(err);
        dispatch({type: FETCH_CLIENTS_FAIL});

    }


};





