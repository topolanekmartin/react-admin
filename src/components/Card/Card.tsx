import styled from 'styled-components';

export const Card = styled('div')`
	padding: 5px 10px;
	border: 1px solid #d9d9d9;
	background-color: #fff;
	border-radius: ${props => props.theme.smallRadius};
`;
