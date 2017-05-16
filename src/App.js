import React, { Component } from 'react';
import BoardContainer from './components/BoardContainer';
import './App.css';

class App extends Component {
	render() {
		return (
			<div className="trello-printer">
				<AppBar />
				<BoardContainer />
			</div>
		);
	}
}

export default App;
