import React, { Component } from 'react';
import PropTypes from 'prop-types';

import BoardTile from '../BoardTile';

import './BoardList.css'

class BoardList extends Component {

	static propTypes = {
		boards: PropTypes.array.isRequired,
	}

	static defaultProps = {
		boards: [],
	}

	render() {
		const boards = this.props.boards.map(id => <BoardTile id={id} key={id} />);

		return <ul className='boards-page-board-section-list'>{boards}</ul>;
	}
}

export default BoardList;
