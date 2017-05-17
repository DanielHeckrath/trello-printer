import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './Board.css'

class Board extends Component {

	static propTypes = {
		boardID: PropTypes.string.isRequired,
	}

	static defaultProps = {
		boardID: '',
	}

	render() {
		return <span>{this.props.boardID}</span>;
	}
}

export default Board;
