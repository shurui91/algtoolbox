import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
	render() {
		return (
			<div className="App">
				<h1>Hi, I am a React App!</h1>
				<Person name="Max" age="28" />
				<Person name="Max2" age="22">
					child element
				</Person>
				<Person name="Max33" age="33" />
			</div>
		);
		// return React.createElement('div', { className: 'App' }, React.createElement('h1', null, 'does it work now?'));
	}
}

export default App;
