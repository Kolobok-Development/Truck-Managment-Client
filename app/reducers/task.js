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

    switch(type) {
        default:
            return state
    }
}