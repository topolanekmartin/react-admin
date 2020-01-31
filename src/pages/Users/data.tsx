import React from 'react';
import CheckboxContainer from './../../containers/Form';
import { Button } from './../../components/Form';
import { LicenceCell } from './List.styled';

type TableDataProps = {
	id: number,
	email: string,
	name: string,
	licence: string
}

type TableDatasProps = {
	data: TableDataProps[]
}

export const TableStyles = {
	headRow: {
		style: {
			minHeight: 40,
			backgroundColor: '#2b313c'
		}
	},
	headCells: {
		style: {
			color: '#fff',
			border: '1px solid #d9d9d9',
			borderLeft: 'none',
			'&:first-child': {
				borderLeft: '1px solid #d9d9d9'
			}
		}
	},
	rows: {
		style: {
			'&:nth-child(odd)': {
				backgroundColor: '#f2f2f2',
			}
		}
	}
};

export const TableDataHead = [
	{
		name: <CheckboxContainer name="input" checked={false}/>,
		selector: 'actions',
		width: '50px',
		cell: (row: any) => { return <CheckboxContainer name={row.id} checked={false}/>},
		style: {
			borderLeft: '1px solid #d9d9d9',
			borderBottom: '1px solid #d9d9d9',
			alignItems: 'center',
			justifyContent: 'center'
		}
	},
	{
		name: 'ID',
		selector: 'id',
		width: '150px',
		style: {
			borderLeft: '1px solid #d9d9d9',
			borderBottom: '1px solid #d9d9d9'
		}
	},
	{
		name: 'Email',
		selector: 'email',
		grow: 2,
		style: {
			borderLeft: '1px solid #d9d9d9',
			borderBottom: '1px solid #d9d9d9'
		}
	},
	{
		name: 'Jméno',
		selector: 'name',
		grow: 2,
		style: {
			borderLeft: '1px solid #d9d9d9',
			borderBottom: '1px solid #d9d9d9'
		}
	},
	{
		name: 'Licence',
		selector: 'licence',
		grow: 3,
		cell: (row: TableDataProps) => <LicenceCell>{row.licence}<Button>Detail</Button></LicenceCell>,
		style: {
			borderLeft: '1px solid #d9d9d9',
			borderRight: '1px solid #d9d9d9',
			borderBottom: '1px solid #d9d9d9'
		}
	}
];

export const TableDataItems : TableDatasProps = {data: [
	{
		id: 123456,
		email: 'slosar@atlasgroup.cz',
		name: 'Martin Šlosar',
		licence: 'Licence 1, Licence 2'
	},
	{
		id: 123455,
		email: 'slosar@atlasgroup.cz',
		name: 'Martin Šlosar',
		licence: 'Licence 1, Licence 2'
	},
	{
		id: 654321,
		email: 'trehak@atlasgroup.cz',
		name: 'Tomáš Řehák',
		licence: 'Licence 1, Licence 2'
	}
]}

export const SelectData = {
	name: 'roles',
	options: [{
		id: 0,
		value: 0,
		content: 'Nastavit roli',
		selected: true
	}, {
		id: 1,
		value: 1,
		content: 'Administrátor'
	}, {
		id: 2,
		value: 2,
		content: 'Editor'
	}]
};
