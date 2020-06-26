import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import styles from './main.css';
import Search from './components/Search/search';

class App extends Component {
	render() {
		return (
			<div className={styles.box}>
			<Search />
			</div>
		);
	}
}

ReactDOM.render(
	<App/>,

	document.getElementById('app')
);
