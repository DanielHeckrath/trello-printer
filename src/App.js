import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import BoardContainer from './components/BoardContainer';
import './App.css';

class App extends Component {
	render() {
		return (
			<MuiThemeProvider>
				<div className="trello-printer">
					<AppBar />
					<BoardContainer />
				</div>
			</MuiThemeProvider>
		);
	}
}

export default App;
