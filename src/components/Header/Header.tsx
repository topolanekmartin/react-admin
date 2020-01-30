import styled from 'styled-components';

export const Header = styled('div')`
	padding: 15px 20px;
	background-color: ${props => props.theme.color.white};
	border-top: 2px solid ${props => props.theme.color.lightGray2};
	border-bottom: 2px solid ${props => props.theme.color.lightGray2};
`;
