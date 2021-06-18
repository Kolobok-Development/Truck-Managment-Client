import axios from "axios";

export const setAuthToken = token => {
    if (token){
        axios.defaults.headers.common['x-auth-token'] = token;
    }else {
        delete axion.defaults.headers.common['x-auth-token'];
    }
};

