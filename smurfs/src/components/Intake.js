import React from 'react';
import { connect } from 'react-redux';
import { addNewSmurf } from '../components/actions/index';


const Intake = (props) => {

handleSubmit (event) => {
	event.preventDefault();
}

	return (
		<div className="villager-form">
			<h3>Village Intake Form</h3>
			<form onSubmit={this.handleSubmit}>
				<input type="text" name="name" value={} />
				<input type="text" name="age" value={} />
				<input type="text" name="height" value={} />
				<input type="hidden" name="id" value={Date.now()} />
				<button onClick={() => props.addNewSmurf(newSmurf)}>Welcome Home!</button>
			</form>
		</div>
	);
};

const mapStateToProps = (state) => ({
	name: state.name,
	age: state.age,
	height: state.height,
	id: state.id,
});

export default connect(mapStateToProps, { addNewSmurf })(Intake);
