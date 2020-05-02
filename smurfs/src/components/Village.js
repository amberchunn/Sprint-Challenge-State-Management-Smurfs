import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Village = () => {
	const [data, setData] = useState([]);

	useEffect(async () => {
		const result = await axios('http://localhost:3333/smurfs');
		console.log(result);
		setData(result.data);
	}, []);
	return (
		<div className="container">
			<h2>Smurfs Village</h2>
			{data.map((smurf) => {
				{
					return `Hello, my name is ${smurf.name} and I'm ${smurf.age} years old.`;
				}
			})}
		</div>
	);
};

export default Village;
