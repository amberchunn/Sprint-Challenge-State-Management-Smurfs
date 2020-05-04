import { connect } from 'react-redux';

const Smurf = (props) => {
	{
		// console.log(props);
	}
	return `Hello, my name is ${props.smurf.name} and I'm ${props.smurf.age} years old.`;
};

const mapStateToProps = (state) => {
	return {
		...state,
	};
};

export default connect(mapStateToProps, {})(Smurf);
