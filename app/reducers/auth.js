import {
    LOGIN_REQUEST,
    LOGIN_SUCCESS,
    LOGIN_FAIL,
    USER_AUTH_REQUEST,
    USER_AUTH_ERROR,
    USER_AUTH_SUCCESS
} from '../actions/types';



const initialState = {
    token: null,
    user: null,
    loading: false,
    isAuthenticated: null
 
};


export default function( state = initialState, action){
    const { type, payload } = action;
    
    switch(type){
        case LOGIN_REQUEST:
        case USER_AUTH_REQUEST:
            return {
                ...state,
                loading: true
            }
        case LOGIN_SUCCESS:
            return {
                ...state,
                token: payload.token,
                isAuthenticated: true,
                loading: false
          
            };
        case USER_AUTH_SUCCESS:
            return {
                ...state,
                user: payload,
                loading: false,

            }
        case LOGIN_FAIL:
        case USER_AUTH_ERROR:
            return {
                ...state,
                token: null,
                isAuthenticated: false,
                loading: false
            };
        default:
            return state;
    }
};
