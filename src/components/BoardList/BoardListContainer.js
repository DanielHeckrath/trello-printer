import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { FULFILLED } from 'redux-promise-middleware';
import * as BoardActions from '../../actions/BoardActions';
import BoardList from './BoardList';

class BoardContainer extends Component {

	static propTypes = {
		boards: PropTypes.object.isRequired,
	}

	static defaultProps = {
		boards: {},
	}

	componentWillMount() {
		if (this.props.status !== FULFILLED) {
			this.props.actions.loadBoards();
		}
	}

	render() {
		const { boards } = this.props;

		const ids = Object.keys(boards);

		return <BoardList {...this.props} boards={ids}/>;
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
