import { combineReducers } from 'redux';
import boards from './boards-reducer.js';

const rootReducer = combineReducers({
	boards
});

export default rootReducer;
