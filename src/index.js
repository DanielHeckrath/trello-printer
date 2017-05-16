import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';

var authenticationSuccess = function () {
	console.log('Successful authentication');
	ReactDOM.render(
		<App />,
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
