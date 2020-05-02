export const ADD_NEW_SMURF = 'ADD_NEW_SMURF';
export const ADDED_NEW_SMURF = 'ADDED_NEW_SMURF';
export const ADDING_NEW_SMURF = 'ADDING_NEW_SMURF';
export const ADD_NEW_SMURF_FAILED = 'ADD_NEW_SMURF_FAILED';

export const addNewSmurf = (newSmurf) => (dispatch) => {
	console.log(newSmurf);

	dispatch({ type: ADDING_NEW_SMURF });
	dispatch({ type: ADDED_NEW_SMURF, payload: newSmurf });
};
