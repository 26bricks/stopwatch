import { combineReducers } from 'redux'
import stopwatchReducer from './stopwatch/reducers'
import { createStore } from 'redux';

const reducers = combineReducers({
    stopwatch: stopwatchReducer
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
const store = createStore(reducers, composeEnhancers);

export default store