import styled from 'styled-components';
import TurnOffIcon from './../../assets/icons/TurnOff';

export const Sidebar = styled("div")`
	display: flex;
	flex-direction: column;
	flex-wrap: wrap;
	width: 350px;
	height: 100%;
	background-color: ${props => props.theme.color.darkBlue};
`

export const Wrap = styled("div")<{divider?: Boolean, stretch?: Boolean}>`
	padding: 20px 0;

	${props => props.stretch && `
		flex: 1 1 auto;
	`}

	${props => props.divider && `
		border-bottom: 1px solid ${props.theme.color.gray};
	`}
`

export const Logo = styled("img")`
	display: block;
	margin: 0 auto;
	max-width: 100%;
	border-radius: ${props => props.theme.radius};
`

export const Icon = styled(TurnOffIcon)`
	display: inline-block;
	vertical-align: middle;
	margin-top: -7px;
	margin-right: 10px;
	fill: #fff;
`;
