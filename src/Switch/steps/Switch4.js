import React, { PropTypes } from 'react';
import './switch.css';



const CREDITCARD = 'Creditcard';
const BTC = 'Bitcoin';

const Switch4 = React.createClass({
	getInitialState() {
		return {
			payMethod: BTC
		};
	},

	select(choice) {
		return (evt) => {
			this.setState({
				payMethod: choice
			});
		}
	},

	renderChoice(choice) {
		let cssClasses = [];

		if(this.state.payMethod === choice) {
			cssClasses.push('active');
		}

		return (
		<div className="choice"
				onClick={this.select(choice)}
				className={cssClasses}>
				{choice}
		</div>
		)
	},

	render() {
		return (
		<div className="switch">
			{this.renderChoice(CREDITCARD)}
			{this.renderChoice(BTC)}
			Pay with: {this.state.payMethod}
		</div>
		)
	}

});

export default Switch4