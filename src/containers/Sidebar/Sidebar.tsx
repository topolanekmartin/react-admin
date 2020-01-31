import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import MenuContainer from './../Menu';
import { Sidebar, Wrap, Logo, Icon } from './Sidebar.styled';
import { MenuList, MenuLink } from './../../components/Menu';
import LogoImgDesktop from './../../assets/resources/img/logo.png';
import LogoImgMobile from './../../assets/resources/img/logo-mobile.png';

export class SidebarContainer extends Component {
	render() {
		return (
			<Sidebar>
				<Wrap divider>
					<Logo src={LogoImgDesktop} alt="Logo" />
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

export class SidebarContainerMobile extends Component {
	render() {
		return (
			<Sidebar>
				<Logo src={LogoImgMobile} alt="Logo" />
				<Link to="">
					<Icon width={16} />
				</Link>
			</Sidebar>
		);
	}
}
