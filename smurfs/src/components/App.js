import React, { Component } from 'react';
import Village from './Village';
import Intake from './Intake';

import './App.css';
class App extends Component {
	render() {
		return (
			<div className="App">
				<h1>SMURFS Village</h1>
				<Village />
				<Intake />
			</div>
		);
	}
}

export default App;
