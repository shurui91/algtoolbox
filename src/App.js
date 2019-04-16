import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
	state = {
		persons: [{ name: 'Max89', age: 28 }, { name: 'Manu', age: 27 }, { name: 'Steph', age: 25 }],
		otherState: 'some other value',
		showPersons: false
	};

	switchNameHandler = newName => {
		// console.log('was clicked');
		this.setState({
			persons: [{ name: newName, age: 28 }, { name: 'Manu', age: 27 }, { name: 'Steph', age: 25 }]
		});
	};

	nameChangedHandler = event => {
		this.setState({
			persons: [{ name: 'Max', age: 28 }, { name: event.target.value, age: 27 }, { name: 'Steph', age: 26 }]
		});
	};

	togglePersonHanlder = () => {
		const doesShow = this.state.showPersons;
		this.setState({ showPersons: !doesShow });
	};

	render() {
		const style = {
			backgroundColor: 'white',
			font: 'inherit',
			border: '1x solid blue',
			padding: '8px',
			cursor: 'pointer'
		};

		let persons = null;
		if (this.state.showPersons) {
			persons = (
				<div>
					{this.state.persons.map(person => {
						return <Person name={person.name} age={person.age} />;
					})}
					<Person name={this.state.persons[0].name} age={this.state.persons[0].age} />
					<Person
						name={this.state.persons[1].name}
						age={this.state.persons[1].age}
						click={this.switchNameHandler.bind(this, 'Max!!')}
						changed={this.nameChangedHandler}
					>
						child element
					</Person>
					<Person name={this.state.persons[2].name} age={this.state.persons[2].age} />
				</div>
			);
		}

		return (
			<div className="App">
				<h1>Hi, I am a React App!</h1>
				<p>This is really working!!</p>
				<button style={style} onClick={this.togglePersonHanlder}>
					Switch Name
				</button>
			</div>
		);
		// return React.createElement('div', { className: 'App' }, React.createElement('h1', null, 'does it work now?'));
	}
}

export default App;
