import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from './reducers';


const initialState = {};
const middleware = [thunk];
const composeEnhancers = composeWithDevTools({
    trace: true,
    traceLimit: 25,
});

const store = createStore(rootReducer, applyMiddleware(...middleware));

export default store;

