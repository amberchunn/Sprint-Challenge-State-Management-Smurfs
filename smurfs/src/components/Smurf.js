import { connect } from 'react-redux';
import React from 'react';
import { removeSmurf } from './actions/index';

const Smurf = (props) => {
	const leaveVillage = (e) => {
		e.preventDefault();
		props.removeSmurf();
		// console.log(props);
	};
	return (
		<div className="member">
			<p>
				{`Hello, my name is ${props.smurf.name}. I'm ${props.smurf.height}cm tall
					and I'm ${props.smurf.age} years old. `}
				<span className="remove">
					<button onClick={leaveVillage}>Leave Village</button>
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

export default connect(mapStateToProps, { removeSmurf })(Smurf);
