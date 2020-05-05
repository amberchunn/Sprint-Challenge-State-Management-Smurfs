import { connect } from 'react-redux';
import React from 'react';

const Smurf = (props) => {
	return (
		<div className="member">
			<p>
				{`Hello, my name is ${props.smurf.name}. I'm ${props.smurf.height}cm tall
					and I'm ${props.smurf.age} years old. `}
				<span className="edit">
					<a href="#">+ Edit +</a>
				</span>
				<span> | </span>
				<span className="remove">
					<a href="#"> x Remove x</a>
				</span>
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
