import styled from 'styled-components';
import PlusIcon from './../../assets/icons/Plus';

export const Top = styled('div')`
	display: flex;
	flex-wrap: wrap;
	flex-direction: row;
	margin-bottom: 5px;
`;

export const TopSelect = styled('div')`
	flex-grow: 2;
`;

export const AddUserIcon = styled(PlusIcon)`
	display: inline-block;
	margin-right: 5px;
	fill: #fff;

	${props => props.theme.mediaQuery.lg} {
		margin-right: 0;
	}
`

export const LicenceCell = styled('div')`
	width: 100%;
	display: flex;
	align-items: center;
	justify-content: space-between;
`;

// Mobile version
export const List = styled('div')`
	width: 100%;
`;

export const UserTop = styled('div')`
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	align-items: center;
	margin-bottom: 10px;
`;

export const UserEmail = styled('div')`
	color: ${props => props.theme.color.blue};
	font-size: 15px;
	font-weight: 500;
`;

export const UserId = styled('div')`
	font-size: 13px;
	font-weight: 500;
`

export const UserIdNumber = styled('div')`
	display: inline-block;
	margin-left: 5px;
`

export const UserRow = styled('div')`
	display: flex;
	flex-direction: row;
	line-height: 30px;

	font-size: 13px;
	border-bottom: 1px solid #f2f2f2;

	&:last-child {
		border-bottom: none;
	}

	strong {
		width: 60px;
		font-weight: 500;
	}
`
