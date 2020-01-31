import styled from 'styled-components';

type CardProps = {
	user?: boolean
}

export const Card = styled('div')<CardProps>`
	padding: 5px 10px;
	border: 1px solid #d9d9d9;
	background-color: #fff;
	border-radius: ${props => props.theme.smallRadius};

	${props => props.user && `
		padding: 10px;
		margin-bottom: 15px;
		box-shadow: 0 3px 8px 0 rgba(0,0,0,0.26);
	`}
`;
