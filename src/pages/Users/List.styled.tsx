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
`

export const LicenceCell = styled('div')`
	width: 100%;
	display: flex;
	align-items: center;
	justify-content: space-between;
`;
