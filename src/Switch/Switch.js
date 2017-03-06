import React, { PropTypes } from 'react';

import Switch1 from './steps/Switch1';
import Switch2 from './steps/Switch2';
import Switch3 from './steps/Switch3';
import Switch4 from './steps/Switch4';
import Switch5 from './steps/Switch5';





const CREDITCARD = 'Creditcard';
const BTC = 'Bitcoin';

const Switch = React.createClass({
	render: function() {
		let presentStep = (title, Step) => <div>
			<h2>{title}</h2>
			<Step />
		</div>

		return (
		<div>
			{presentStep('Switch4', Switch4)}
			{presentStep('Switch5', Switch5)}

		</div>
		);
	}
});

export default Switch;