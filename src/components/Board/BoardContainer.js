import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Board from './Board';

class BoardContainer extends Component {

	static propTypes = {
		boardID: PropTypes.string.isRequired,
	}

	static defaultProps = {
		boardID: '',
	}

	render() {
		const { boardID } = this.props;

		return <Board boardID={boardID}/>;
	}
}

function mapStateToProps(state, props) {
	return {
		boardID: props.match.params.boardID,
	};
}

export default connect(mapStateToProps)(BoardContainer);
