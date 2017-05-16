import rootReducer from '../reducers';
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import promiseMiddleware from 'redux-promise-middleware';

const middlewares = [
	promiseMiddleware(),
];

if (process.env.NODE_ENV === `development`) {
	const { createLogger } = require(`redux-logger`);
	const logger = createLogger({
		collapsed: (getState, action, logEntry) => {
			return !logEntry.error;
		},
	});
	middlewares.push(logger);
}

export default (initialState) => {
	return createStore(rootReducer, initialState, composeWithDevTools(
		applyMiddleware(...middlewares),
	));
};
