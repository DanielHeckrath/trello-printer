import React, { Component } from 'react';

import BoardTile from './BoardTile';

import './BoardList.css'

const Trello = window.Trello;

function fetchBoards() {
	return new Promise((resolve, reject) => {
		const onBoardsSuccess = (successMsg) => {
			resolve(successMsg);
		}

		const onBoardsError = (error) => {
			reject(error)
		}

		Trello.get('/member/me/boards', onBoardsSuccess, onBoardsError);
	})
}

class BoardList extends Component {

	constructor() {
		super();
		this.state = {
			boards: [],
		};
	}

	componentWillMount() {
		this.refreshBoards();
	}

	refreshBoards() {
		fetchBoards()
			.then(boards => this.setState({ boards: boards }))
			.catch(err => console.log(err));
	}

	render() {
		const boards = this.state.boards.map(board => <BoardTile backgroundImage={board.prefs.backgroundImage} key={board.id} name={board.name} url={`/b/${board.shortLink}`}/>);

		return <ul className='boards-page-board-section-list'>{boards}</ul>;
	}
}

export default BoardList;
