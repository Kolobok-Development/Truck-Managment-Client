import {
    FETCH_TASKS_REQUEST,
    FETCH_TASK_SUCCESS,
    FETCH_TASK_REQUEST,
    FETCH_TASK_FAIL,
    FETCH_TASKS_SUCCESS,
    FETCH_TASKS_FAIL,
    FETCH_TASK_STATUS_CAHNGE_FAIL,
    FETCH_TASK_STATUS_CAHNGE_REQUEST,
    FETCH_TASK_STATUS_CAHNGE_SUCCESS

} from '../actions/types';



const initialState = {
    tasks: [],
    task: null,
    loading: false,
}


export default function (state = initialState, action) {

    const  {type, payload} = action;


    switch(type) {
        case FETCH_TASKS_REQUEST:
        case FETCH_TASK_REQUEST:
            return {
                ...state,
                loading: true
            }
        case FETCH_TASKS_SUCCESS:
            return {
                ...state,
                tasks: payload,
                loading: false
            };
        case FETCH_TASKS_FAIL:
        case FETCH_TASK_FAIL:
            return {
                ...state,
                loading: false,
            };

        case FETCH_TASK_SUCCESS:
            return {
                ...state,
                task: payload,
                loading: false
            };
        default:
            return state;
    }
}
