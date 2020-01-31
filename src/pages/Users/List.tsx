import React, { Component } from 'react';
import DataTable from 'react-data-table-component';
import MenuContainer from './../../containers/Menu';
import {
	Top,
	TopSelect,
	AddUserIcon,
	List,
	UserTop,
 	UserEmail,
	UserId,
	UserIdNumber,
	UserRow
} from './List.styled';
import { TableDataItems, TableDataHead, SelectData } from './data';
import { Header } from './../../components/Header';
import { Footer } from './../../components/Footer';
import { MainContent } from './../../components/MainContent';
import { Content } from './../../components/Content';
import { Card } from './../../components/Card';
import { Table } from './../../components/Table';
import { Select, Button, Label } from './../../components/Form';

export class UserList extends Component {
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

export class UserListMobile extends Component {
	getUserList () {
		const UserList : any = TableDataItems.data.map((item) =>
			<Card user>
				<UserTop>
					<UserEmail>{item.email}</UserEmail>
					<UserId>ID <UserIdNumber>{item.id}</UserIdNumber></UserId>
				</UserTop>
				<UserRow>
					<strong>Jméno</strong>
					<span>{item.name}</span>
				</UserRow>
				<UserRow>
					<strong>Licence</strong>
					<span>{item.licence}</span>
				</UserRow>
			</Card>
		);

		return UserList;
	}

	render () {
		const UserList = this.getUserList();

		return (
			<>
				<Header>
					Seznam uživatelských účtů
					<Button success>
						<AddUserIcon width={13} height={13} />
					</Button>
				</Header>
				<MainContent>
					<List>
						{UserList}
					</List>
				</MainContent>
				<Footer>
					<MenuContainer />
				</Footer>
			</>
		);
	}
}
