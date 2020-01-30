import React, { Component } from 'react';
import MenuContainer from './../Menu';
import { Sidebar, Wrap, Logo, Icon } from './Sidebar.styled';
import { MenuList, MenuLink } from './../../components/Menu';
import LogoImg from './../../assets/resources/img/logo.png';

class SidebarContainer extends Component {
	render() {
		return (
			<Sidebar>
				<Wrap divider>
					<Logo src={LogoImg} alt="Logo" />
				</Wrap>
				<Wrap stretch>
					<MenuContainer />
				</Wrap>
				<MenuList>
					<MenuLink to="">
						<Icon width={16} />
						Odhlásit se
					</MenuLink>
				</MenuList>
			</Sidebar>
		);
	}
}

export default SidebarContainer;
