import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as BoardActions from '../../actions/BoardActions';
import BoardList from '../BoardList';

class BoardContainer extends Component {

	static propTypes = {
		boards: PropTypes.object.isRequired,
	}

	static defaultProps = {
		boards: {},
	}

	componentWillMount() {
		this.props.actions.loadBoards();
	}

	render() {
		const { boards } = this.props;

		const ids = Object.keys(boards);

		return (
			<div>
				<BoardList boards={ids} />
			</div>
		);
	}
}

function mapStateToProps(state, props) {
	return state.boards;
}

function mapDispatchToProps(dispatch) {
	return {
		actions: bindActionCreators(BoardActions, dispatch),
	};
}

export default connect(mapStateToProps, mapDispatchToProps)(BoardContainer);
