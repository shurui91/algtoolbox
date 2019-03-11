import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
	render() {
		return React.createElement(
			'div',
			{ className: 'App' },
			React.createElement('h1', 'null', 'does this work now?')
		);
	}
}

export default App;
