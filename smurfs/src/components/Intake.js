import React from 'react';
import { connect } from 'react-redux';
import { addNewSmurf } from '../components/actions/index';

const Intake = (props) => {
	const handleSubmit = (event) => {
		event.preventDefault();
		props.smurf = {
			name: props.input.name.value,
			age: props.input.age.value,
			height: props.input.height.value,
		};
		props.addNewSmurf(props.smurf);
	};

	return (
		<div className="villager-form">
			<h3>Village Intake Form</h3>
			<form>
				<label htmlFor="name">Name</label>
				<input type="text" name="name" value={props.name} />
				<label htmlFor="age">Age</label>
				<input type="text" name="age" value={props.age} />
				<label htmlFor="height">Height</label>
				<input type="text" name="height" value={props.height} />
				<button onClick={handleSubmit}>Welcome Home!</button>
			</form>
		</div>
	);
};

const mapStateToProps = (state) => ({
	...state,
	smurfs: state.smurfs,
});

export default connect(mapStateToProps, { addNewSmurf })(Intake);
