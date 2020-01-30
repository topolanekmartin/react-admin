import styled from 'styled-components';

type ButtonProps = {
	success?: boolean,
	theme?: any
};

export const Button = styled('button')<ButtonProps>`
	display: flex;
	align-items: center;
	padding: 5px 10px;

	cursor: pointer;
	font-size: 13px;
	border: none;
	border-radius: ${(props: ButtonProps) => props.theme.radius};
	transition: background ${(props: ButtonProps) => props.theme.transition};
	color: #000;
	background-color: #f2f2f2;
	border: 1px solid #d9d9d9;

	&:hover {
		background-color: #c0c0c0;
	}

	${(props: ButtonProps) => props.success && `
		color: #fff;
		background-color: ${props.theme.color.green};
		border-color: ${props.theme.color.green};

		&:hover {
			background-color: #72a232;
		}
	`}
`;
