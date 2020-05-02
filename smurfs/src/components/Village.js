import React from 'react';
import { connect } from 'react-redux';

const Village = (props) => {
	return (
		<div className="container">
			<h2>Smurfs Village</h2>
			{props.data.map((smurf) => {
				{
					return `Hello, my name is ${smurf.name} and I'm ${smurf.age} years old.`;
				}
			})}
		</div>
	);
};

const mapStateToProps = (state) => ({
	...state,
});

export default connect(mapStateToProps, {})(Village);
