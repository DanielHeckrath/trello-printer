import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';

import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom';

import BoardList from './components/BoardList';
import Board from './components/Board';

import './App.css';

class App extends Component {

	render() {
		const style = {
			display: 'flex',
			justifyContent: 'center',
			position: 'absolute',
			top: 64,
			bottom: 0,
			left: 0,
			right: 0,
		};

		const listStyle = {
			width: '20%',
		};

		const bodyStyle = {
			width: '80%',
		}

		return (
			<MuiThemeProvider>
				<Router>
					<div className="trello-printer">
						<AppBar />
						<div style={style}>
							<BoardList style={listStyle}/>
							<Route path="/b/:boardID" render={(props) => <div style={bodyStyle}><Board {...props}/></div>}/>
						</div>
					</div>
				</Router>
			</MuiThemeProvider>
		);
	}
}

export default App;
