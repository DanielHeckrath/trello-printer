import * as Types from './Types';

const Trello = window.Trello;

export const loadBoards = () => ({
	type: Types.LOAD_BOARDS,
	payload: new Promise((resolve, reject) => {
		const onBoardsSuccess = (successMsg) => {
			resolve(successMsg);
		}

		const onBoardsError = (error) => {
			reject(error)
		}

		const params = {
			fields: 'name,prefs,shortLink',
		};

		Trello.get('/member/me/boards', params, onBoardsSuccess, onBoardsError);
	})
})
