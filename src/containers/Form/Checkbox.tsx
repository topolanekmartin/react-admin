import React, { Component } from 'react';
import { Checkbox } from './../../components/Form';

type CheckboxProps = {
	name: string,
	checked: boolean
}

class CheckboxContainer extends Component<CheckboxProps, CheckboxProps> {
	constructor(props: CheckboxProps) {
		super(props);
		this.state = {
			name: props.name,
			checked: props.checked
		};
	}

	render() {
		return (
			<Checkbox
				name={this.state.name}
				checked={this.state.checked}
			/>
		);
	}
}

export default CheckboxContainer;
