import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from './App';
import './index.css';
import configureStore from './store/configure-store';

const store = configureStore();

window.store = store;

var authenticationSuccess = function () {
	console.log('Successful authentication');
	ReactDOM.render(
		<Provider store={store}>
			<App />
		</Provider>,
		document.getElementById('root')
	);
};

var authenticationFailure = function () {
	console.log('Failed authentication');
};

window.Trello.authorize({
	type: 'popup',
	name: 'Getting Started Application',
	scope: {
		read: 'true',
		write: 'true',
	},
	expiration: 'never',
	success: authenticationSuccess,
	error: authenticationFailure,
});
