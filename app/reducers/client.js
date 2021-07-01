import {
    FETCH_CLIENTS_REQUEST,
    FETCH_CLIENTS_SUCCESS,
    FETCH_CLIENTS_FAIL,
    FETCH_CLIENT_REQUEST,
    FETCH_CLIENT_SUCCESS,
    FETCH_CLIENT_FAIL,
} from '../actions/types';



const initialState = {
    clients: [],
    client: null,
    loading: false,
}


export default function (state = initialState, action) {

    const  {type, payload} = action;

    switch(type) {
        case FETCH_CLIENTS_REQUEST:
        case FETCH_CLIENT_REQUEST:
            return {
                ...state,
                loading: true
            }
        case FETCH_CLIENTS_SUCCESS:
            return {
                ...state,
                clients: payload,
                loading: false
            };
        case FETCH_CLIENTS_FAIL:
        case FETCH_CLIENT_FAIL:
            return {
                ...state,
                loading: false,
            };

        case FETCH_CLIENT_SUCCESS:
            return {
                ...state,
                client: payload,
                loading: false
            };
        default:
            return state;
    }
}