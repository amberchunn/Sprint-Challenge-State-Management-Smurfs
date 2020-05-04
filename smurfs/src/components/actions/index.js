import axios from 'axios';

export const GET_SMURFS_START = 'GET_SMURFS_START';
export const GET_SMURFS_SUCCESS = 'GET_SMURFS_SUCCESS';
export const GET_SMURFS_FAIL = 'GET_SMURFS_FAIL';

export const ADDED_NEW_SMURF = 'ADDED_NEW_SMURF';

export const getSmurfs = () => (dispatch) => {
	dispatch({ type: GET_SMURFS_START });
	axios
		.get('http://localhost:3333/smurfs')
		.then((res) => {
			dispatch({ type: GET_SMURFS_SUCCESS, payload: res.data });
			console.log(res);
		})
		.catch((err) => dispatch({ type: GET_SMURFS_FAIL, payload: err }));
};

export const addNewSmurf = (smurf) => (dispatch) => {
	dispatch({ type: ADDED_NEW_SMURF, payload: smurf });
};
