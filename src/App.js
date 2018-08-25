import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
	state = {
		persons: [
			{ name: 'max', age: 28 },
			{ name: 'Manu', age: 29 },
			{ name: 'Stephanie', age: 26 }
		],
		otherState: 'some other value'
	};

	switchNameHandler = () => {
		//console.log("clicked!");
		this.setState(
			(persons: [
				{ name: 'Maxiii', age: 28 },
				{ name: 'Manu', age: 29 },
				{ name: 'Stephanie', age: 27 }
			])
		);
	};

	render() {
		return (
			<div className="App">
				<h1>Hi, I am a react App!</h1>
				<p>This is really working!</p>
				<button onClick={() => this.switchNameHandler('Maximilian!!')}>
					Switch Name
				</button>
				<Person
					name={this.state.persons[0].name}
					age={this.state.persons[0].age}
				/>
				<Person
					name={this.state.persons[1].name}
					age={this.state.persons[1].age}
					click={this.switchNameHandler.bind(this, 'Max!')}
					changed={this.nameChangeHandler}
				>
					My hobbies, Racing
				</Person>
				<Person
					name={this.state.persons[2].name}
					age={this.state.persons[2].age}
				/>
			</div>
		);
	}
}

export default App;
