import {
    FETCH_TRUCKS_REQUEST,
    FETCH_TRUCK_SUCCESS, 
    FETCH_TRUCK_REQUEST,
    FETCH_TRUCK_FAIL,
    FETCH_TRUCKS_SUCCESS,
    FETCH_TRUCKS_FAIL

} from '../actions/types';



const initialState = {
    trucks: [],
    truck: null,
    loading: false,
}


export default function (state = initialState, action) {

    const  {type, payload} = action;

    console.log(payload);

    switch(type) {
        case FETCH_TRUCK_REQUEST:
        case FETCH_TRUCKS_REQUEST:
            return {
                ...state,
                loading: true
            }
        case FETCH_TRUCKS_SUCCESS:
            return {
                ...state,
                trucks: payload,
                loading: false
            };
        case FETCH_TRUCK_FAIL:
        case FETCH_TRUCKS_FAIL:
            return {
                ...state,
                loading: false
            };
        case FETCH_TRUCK_SUCCESS:
            return {
                ...state,
                truck: payload,
                loading: false
            };
        default:
            return state;
    }
}