import React, { Component } from 'react';
import styles from './button.css';

class Button extends Component {
	render(props) {
		
		return(
			<button disabled={this.props.isDisabled} className={styles.btn}

			>
				{this.props.name}
			</button>
		)
	}
}

	export default Button;