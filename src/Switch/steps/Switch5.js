import React, { PropTypes } from 'react';
import './switch.css';

const CREDITCARD = 'Creditcard';
const BTC = 'Bitcoin';

const Choice = function(props) {
	let cssClasses = [];

	if(props.active) {
		cssClasses.push('active');
	}

	return (
	<div onClick={props.onClick}
				className={cssClasses}>
				{props.label}
	</div>
	)

}

const Switch5 = React.createClass({
	getInitialState() {
		return {
			payMethod: BTC
		};
	},

	select(choice) {
		return (evt) => {
			this.setState({
				payMethod: choice
			})
		}
	},

	render() {
		return (
		<div>
			<Choice onClick={this.select(CREDITCARD)}
							active={this.state.payMethod === CREDITCARD}
							label="Pay with Creditcard" />

			<Choice onClick={this.select(BTC)}
							active={this.state.payMethod === BTC}
							label="Pay with Bitcoin" />

				Paying with: {this.state.payMethod}
		</div>
		)
	}
});

export default Switch5;