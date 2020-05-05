import { connect } from 'react-redux';
import React, { Component } from 'react';

const Smurf = (props) => {
	return (
		<div className="member">
			<p>
				{`Hello, my name is ${props.smurf.name}. I'm ${props.smurf.height}cm tall
					and I'm ${props.smurf.age} years old. `}
			</p>
		</div>
	);
};

const mapStateToProps = (state) => {
	return {
		...state,
	};
};

export default connect(mapStateToProps, {})(Smurf);
