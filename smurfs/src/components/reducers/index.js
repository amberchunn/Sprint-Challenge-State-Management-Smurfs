import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {
	ADDING_NEW_SMURF,
	ADDED_NEW_SMURF,
	ADD_NEW_SMURF,
	ADD_NEW_SMURF_FAILED,
} from '../actions/index';

const [data, setData] = useState([]);

useEffect(async () => {
	const fetchData = async () => {
		const result = await axios('http://localhost:3333/smurfs');
		// console.log(result);
		setData(result.data);
	};
	fetchData();
}, []);

export const rootReducer = (state = data, action) => {
	switch (action.type) {
		case ADD_NEW_SMURF:
			return {
				...state,
				...payload,
			};
		case ADD_NEW_SMURF_FAILED:
			return {
				...state,
				message: `Oh no! The village has rejected the new member's intake. Please try again.`,
			};
		case ADDED_NEW_SMURF:
			return {
				...state,
				message: `Huzzah! Welcome, new villager!`,
			};
		default:
			return state;
	}
};
