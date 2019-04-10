import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
	state = {
		persons: [{ name: 'Max89', age: 28 }, { name: 'Manu', age: 27 }, { name: 'Steph', age: 25 }]
	};

	switchNameHandler = () => {
		console.log('was clicked');
	};

	render() {
		return (
			<div className="App">
				<h1>Hi, I am a React App!</h1>
				<p>This is really working!!</p>
				<button onClick={this.switchNameHandler}>Switch Name</button>
				<Person name={this.state.persons[0].name} age={this.state.persons[0].age} />
				<Person name={this.state.persons[1].name} age={this.state.persons[1].age}>
					child element
				</Person>
				<Person name={this.state.persons[2].name} age={this.state.persons[2].age} />
			</div>
		);
		// return React.createElement('div', { className: 'App' }, React.createElement('h1', null, 'does it work now?'));
	}
}

export default App;
