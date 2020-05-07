import React from 'react';
import Smurf from './Smurf';
import { getSmurfs } from './actions/index';
import { connect } from 'react-redux';

const Village = (props) => {
	const loadVillage = (e) => {
		e.preventDefault();
		props.getSmurfs();
		// console.log(props);
	};
	return (
		<div className="container">
			<button onClick={loadVillage}>Say hi to the Village!</button>
			{props.isLoading ? (
				<p>Welcome! Please fill out our intake form below to join the village.</p>
			) : (
				<div className="villagers">
					{props.smurfs &&
						props.smurfs.map((smurf) => <Smurf key={smurf.id} smurf={smurf} />)}
				</div>
			)}
		</div>
	);
};

const mapStateToProps = (state) => {
	return {
		...state,
		isLoading: state.isLoading,
		smurfs: state.smurfs,
	};
};

export default connect(mapStateToProps, { getSmurfs })(Village);
