import { PENDING, FULFILLED, REJECTED } from 'redux-promise-middleware';
import * as Types from '../actions/Types';

const BOARDS_PENDING = Types.LOAD_BOARDS + '_' + PENDING;
const BOARDS_FULFILLED = Types.LOAD_BOARDS + '_' + FULFILLED;
const BOARDS_REJECTED = Types.LOAD_BOARDS + '_' + REJECTED;

export default (state = { boards: {}, status: 'UNKNOWN' }, action) => {
	switch (action.type) {
		case BOARDS_PENDING:
			return {
				...state,
				status: PENDING,
			};
		case BOARDS_FULFILLED:
			return {
				...state,
				boards: action.payload.reduce((boards, board, index, array) => {
					boards[board.id] = board;
					return boards;
				}, {}),
				status: FULFILLED,
			};
		case BOARDS_REJECTED:
			return {
				...state,
				boards: {},
				status: REJECTED,
			};
		default:
			return state;
	}
};
