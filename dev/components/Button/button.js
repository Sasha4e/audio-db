import React, { Component } from 'react';
import styles from './button.css';

class Button extends Component {

	render(props) {
		let cls = styles.btn;
		switch (this.props.theme){
			case 'small':
			cls = styles.small;
			break;
		}
		return(
			<button onClick={this.props.onClick} disabled={this.props.isDisabled} className={cls}>
				{this.props.name}
			</button>

		)
	}
}

	export default Button;