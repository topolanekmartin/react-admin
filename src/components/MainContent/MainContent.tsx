import styled from 'styled-components';

export const MainContent = styled('div')`
	width: calc(100% - 350px);
	background-color: ${props => props.theme.color.lightGray};

	${props => props.theme.mediaQuery.lg} {
		overflow: auto;
		display: flex;
		justify-content: space-between;
		flex-direction: column;
		width: 100%;
		padding: 10px 15px 0;
		flex: 1 1 0;
	}
`;
