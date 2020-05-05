import React from 'react';
import { connect } from 'react-redux';
import { useForm } from 'react-hook-form';
import { addNewSmurf } from './actions/index';

const Intake = (props) => {
	const { register, handleSubmit } = useForm();
	// Add Smurf to Redux store
	const onSubmit = (data, e) => {
		e.target.reset(); // reset after form submit
		props.addNewSmurf(data);
	};

	const smurfId = Date.now();

	return (
		<div className="villager-form">
			<h3>Village Intake Form</h3>
			<form onSubmit={handleSubmit(onSubmit)}>
				<label htmlFor="name">Name</label>
				<input ref={register} type="text" name="name" value={props.name} />
				<label htmlFor="age">Age</label>
				<input ref={register} type="text" name="age" value={props.age} />
				<label htmlFor="height">Height</label>
				<input ref={register} type="text" name="height" value={props.height} />
				<input ref={register} type="hidden" name="id" value={smurfId} />
				<button onClick={handleSubmit}>Welcome Home!</button>
			</form>
		</div>
	);
};

const mapStateToProps = (state) => ({
	...state,
	data: state.smurfs,
	name: state.name,
	age: state.age,
	height: state.height,
	id: state.id,
});
export default connect(mapStateToProps, { addNewSmurf })(Intake);
