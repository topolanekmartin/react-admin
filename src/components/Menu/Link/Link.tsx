import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const MenuLink = styled(Link)`
	display: block;
	padding: 10px 15px;
	color: #fff;
	font-size: 14px;
	text-decoration: none;
	border-radius: ${props => props.theme.radius};

	&:hover {
		background-color: #555a63;
	}
`;
