import React, { PropTypes } from 'react';
import { Button, ButtonToolbar, FormGroup, Radio } from 'react-bootstrap';

const CREDITCARD = 'Creditcard';
const BTC = 'Bitcoin';

const Switch2 = React.createClass({
	getInitialState() {
		return {
			payMethod: BTC
		};
	},

	render() {
		return (
		<div className="switch">
			<div className="choice">Creditcard</div>
			<div className="choice">Bitcoin</div>
			Pay with: {this.state.payMethod}
			<ButtonToolbar>
	    	<Button bsStyle="primary" bsSize="large" active>Primary button</Button>
	    	<Button bsSize="large" active>Button</Button>
  		</ButtonToolbar>
  		<FormGroup>
      <Radio inline>
        1
      </Radio>
      {' '}
      <Radio inline>
        2
      </Radio>
      {' '}
      <Radio inline>
        3
      </Radio>
    </FormGroup>
		</div>
		)
	}
});

export default Switch2;