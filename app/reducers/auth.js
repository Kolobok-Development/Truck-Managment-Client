import {
    LOGIN_SUCCESS,
    LOGIN_FAIL
} from '../actions/types';



const initialState = {
    token: null,
    isAuthenticated: null
 
};


export default function( state = initialState, action){
    const { type, payload } = action;
    
    switch(type){
        case LOGIN_SUCCESS:
            return {
                ...state,
                token: payload.token,
                isAuthenticated: true
          
            };
        case LOGIN_FAIL:
            return {
                ...state,
                token: 'error',
                isAuthenticated: false
            };
        default:
            return state;
    }
};