import React, { Component } from 'react';
import { Top, TopSelect, AddUserIcon } from './List.styled';
import { TableDataItems, TableDataHead, SelectData } from './data';
import { Header } from './../../components/Header';
import { MainContent } from './../../components/MainContent';
import { Content } from './../../components/Content';
import { Card } from './../../components/Card';
import { Table } from './../../components/Table';
import { Select, Button, Label } from './../../components/Form';
import DataTable from 'react-data-table-component';

class UserList extends Component {
	render() {
		let selectOptions = SelectData.options.map(option =>
			<option key={option.id} selected={option.selected}>
				{option.content}
			</option>
		);

		return (
			<MainContent>
				<Header>
					Seznam uživatelských účtů
				</Header>
				<Content>
					<Card>
						<Top>
							<TopSelect>
								<Label>Pro vybrané uživatele (2)</Label>
								<Select name={SelectData.name}>
									{selectOptions}
								</Select>
							</TopSelect>
							<Button success>
								<AddUserIcon width={13} height={13} />
								Vytvořit uživatele
							</Button>
						</Top>
						<Table>
							<DataTable
								noHeader={true}
								columns={TableDataHead}
								data={TableDataItems.data}
							/>
						</Table>
					</Card>
				</Content>
			</MainContent>
		);
	}
};

export default UserList;
