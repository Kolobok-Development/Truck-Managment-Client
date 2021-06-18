import {
    FETCH_TASKS_REQUEST,
    FETCH_TASK_SUCCESS,
    FETCH_TASK_REQUEST,
    FETCH_TASK_FAIL,
    FETCH_TASKS_SUCCESS,
    FETCH_TASKS_FAIL

} from '../actions/types';



const initialState = {
    tasks: [],
    task: null,
    loading: false,
}


export default function (state = initialState, action) {

    const  {type, payload} = action;

    //console.log(payload);

    switch(type) {
        case FETCH_TASKS_REQUEST:
            return {
                ...state
            }
        case FETCH_TASKS_SUCCESS:
            return {
                ...state,
                tasks: payload
            };
        case FETCH_TASKS_FAIL:
            return {
                ...state
            }

            case FETCH_TASK_REQUEST:
            return {
                ...state
            }
        case FETCH_TASK_SUCCESS:
            return {
                ...state,
                task: payload
            };
        case FETCH_TASK_FAIL:
            return {
                ...state
            }
        default:
            return state;
    }
}
