import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const MenuLink = styled(Link)`
	display: block;
	padding: 10px 15px;
	color: #fff;
	font-size: 14px;
	text-decoration: none;
	border-radius: ${props => props.theme.radius};
	transition: color ${props => props.theme.transition};

	${props => props.theme.mediaQuery.lg} {
		padding: 15px 5px;

		color: #777;
	}

	&:hover {
		background-color: #555a63;

		${props => props.theme.mediaQuery.lg} {
			background-color: transparent;
			color: ${props => props.theme.color.blue};
		}
	}
`;
