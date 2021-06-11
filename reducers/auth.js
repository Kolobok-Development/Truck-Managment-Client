import {
    LOGIN_SUCCESS,
    LOGIN_FAIL
} from '../actions/types';



const initialState = {
    token: null,
    isAdmin: false
};


export default function( state = initialState, action){
    const { type, payload } = action;
    
    switch(type){
        case LOGIN_SUCCESS:
            return {
                ...state,
                token: payload,
                isAdmin: true
            };
        case LOGIN_FAIL:
            return {
                ...state,
                token: 'error',
                isAdmin: false
            };
        default:
            return state;
    }
};