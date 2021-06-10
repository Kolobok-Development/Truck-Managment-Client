import {
    LOGIN_SUCCESS,
    LOGIN_FAIL
} from './types';


export const dec = () => {
    return {
        type: LOGIN_FAIL
    };
};

export const inc = () => {
    return {
        type: LOGIN_SUCCESS
    };
};