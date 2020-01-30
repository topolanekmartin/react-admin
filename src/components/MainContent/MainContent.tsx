import styled from 'styled-components';

export const MainContent = styled('div')`
	width: calc(100% - 350px);
	background-color: ${props => props.theme.color.lightGray};
`;
