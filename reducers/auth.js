import {
    LOGIN_SUCCESS,
    LOGIN_FAIL
} from '../actions/types';



const initialState = {
    count: 0
};


export default function( state = initialState, action){
    const { type, payload } = action;
    
    switch(type){
        case LOGIN_SUCCESS:
            return {
                ...state,
                count: count + 1
            };
        case LOGIN_FAIL:
            return {
                ...state,
                count: count - 1
            };
        default:
            return state;
    }
};