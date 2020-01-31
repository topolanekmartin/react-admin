import styled from 'styled-components';

export const MenuList = styled('ul')`
	list-style-type: none;
	margin: 0;
	padding: 0 15px;

	${props => props.theme.mediaQuery.lg} {
		display: flex;
		flex-direction: row;
		flex-wrap: wrap;
		justify-content: space-between;
		padding: 0;
	}

	& & {
		padding: 0 0 5px 30px;

		${props => props.theme.mediaQuery.lg} {
			display: none;
		}
	}
`;
