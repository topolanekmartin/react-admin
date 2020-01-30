import React from 'react';
import styled from 'styled-components';
import { Label } from './../Label';

const HiddenCheckbox = styled('input').attrs({ type: 'checkbox' })`
	&:not(:checked),
	&:checked {
		position: absolute;
		left: -9999px;
	}

	&:not(:checked) + label,
	&:checked + label {
		position: relative;
		cursor: pointer;
		width: 18px;
		height: 18px;
		margin: 0;
	}

	&:not(:checked) + label:before,
	&:checked + label:before {
		content: '';
		box-sizing: border-box;
		position: absolute;
		left: 0; top: 0;
		width: 18px; height: 18px;
		border: 1px solid #d9d9d9;
		background: #fff;
		border-radius: 2px;
		box-shadow: inset 0 1px 3px rgba(0,0,0,.1);
	}

	&:not(:checked) + label:after,
	&:checked + label:after {
		content: '\\2713';
		position: absolute;
		top: 3px; left: 3px;
		width: 12px;
		height: 12px;
		transition: all .2s;
		background-color: #1990EA;
		border-radius: 1px;
		color: #fff;
		line-height: 13px;
		font-size: 9px;
		text-align: center;
	}

	&:not(:checked) + label:after {
		opacity: 0;
		transform: scale(0);
	}

	&:checked + label:after {
		opacity: 1;
		transform: scale(1);
		background-color:
	}

	&:disabled:not(:checked) + label:before,
	&:disabled:checked + label:before {
		box-shadow: none;
		border-color: #bbb;
		background-color: #ddd;
	}

	&:disabled:checked + label:after {
		color: #999;
	}

	&:disabled + label {
		color: #aaa;
	}

	label:hover:before {
		border: 2px solid #4778d9!important;
	}
`

export const Checkbox = ({name, checked, ...props }: {name: string, checked: boolean}) => (
	<>
		<HiddenCheckbox id={name} defaultChecked={checked} {...props} />
		<Label htmlFor={name} />
	</>
);
