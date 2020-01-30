import styled from 'styled-components';

type WebLineProps = {
	stretch: boolean
}

export const WebLine = styled("div")<WebLineProps>`
	display: flex;
	width: 100%;
	${props => props.stretch && `
		flex: 1 1 auto;
	`}
`;
