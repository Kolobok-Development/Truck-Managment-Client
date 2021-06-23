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
        case FETCH_TRUCKS_REQUEST:
            return {
                ...state
            }
        case FETCH_TRUCKS_SUCCESS:
            return {
                ...state,
                trucks: payload
            };
        case FETCH_TRUCKS_FAIL:
            return {
                ...state
            };
        case FETCH_TRUCK_REQUEST:
            return {
                ...state
            }
        case FETCH_TRUCK_SUCCESS:
            return {
                ...state,
                truck: payload
            };
        case FETCH_TRUCK_FAIL:
            return {
                ...state
            }
        default:
            return state;
    }
}