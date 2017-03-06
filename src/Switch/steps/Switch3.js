import React, { PropTypes } from 'react';

const CREDITCARD = 'Creditcard';
const BTC = 'Bitcoin';

const Switch3 = React.createClass({
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

	render() {
		return (
		<div className="switch">
			<div className="choice"
						onClick={this.select(CREDITCARD)}>
						Creditcard
			</div>
			<div className="choice"
					onClick={this.select(BTC)}>
						Bitcoin
			</div>
			Pay with: {this.state.payMethod}
		</div>
		)
	}

});

export default Switch3