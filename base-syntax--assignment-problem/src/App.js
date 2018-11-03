import React, { Component } from 'react';
import './App.css';
import UserInput from './UserInput/UserInput';
import UserOutput from './UserOutput/UserOutput';

class App extends Component {
	state = {
		username: 'supermax'
	}

	usernameChangeHandler = (event) => {
		this.setState({
			username: event.target.value
		});
	}

	render() {
		return (
			<div>
				<UserInput
					currentName={this.state.username}
					changed={this.usernameChangeHandler}
				/>
				<UserOutput userName={this.state.username} />
				<UserOutput userName={this.state.username} />
			</div>
		);
	};
}

export default App;
