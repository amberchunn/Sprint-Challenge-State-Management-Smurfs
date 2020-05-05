import {
	GET_SMURFS_START,
	GET_SMURFS_FAIL,
	GET_SMURFS_SUCCESS,
	ADDED_NEW_SMURF,
	REMOVE_SMURF,
} from '../actions/index';

const initialState = {
	smurfs: [],
	isLoading: false,
	error: '',
};

export const rootReducer = (state = initialState, action) => {
	// console.log('rootReducer', action);
	switch (action.type) {
		case GET_SMURFS_START:
			return {
				...state,
				isLoading: true,
				error: '',
			};
		case GET_SMURFS_SUCCESS:
			return {
				...state,
				isLoading: false,
				smurfs: [...state.smurfs, action.payload],
				error: '',
			};
		case GET_SMURFS_FAIL:
			return {
				...state,
				isLoading: false,
				error: 'oops',
			};
		case ADDED_NEW_SMURF:
			return {
				...state,
				smurfs: [...state.smurfs, action.payload],
			};
		case REMOVE_SMURF:
			return {
				...state.car,
				smurfs: state.smurfs.filter((smurf) => smurf.id !== action.payload.id),
			};
		default:
			return state;
	}
};
