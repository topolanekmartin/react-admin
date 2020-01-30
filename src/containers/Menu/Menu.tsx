import React, { Component } from 'react';
import { MenuList, MenuItem, MenuLink } from './../../components/Menu';
import { MenuData } from './data';

// Menu item
type ItemProps = {
	id: number,
	title: string,
	childrens?: ItemProps[]
}

class MenuContainer extends Component<{}, {}> {
	getMenuData() {
		return MenuData;
	}

	getMenuList(listItems: ItemProps[]) {
		let menuItems = [];

		for (var i = 0; i < listItems.length; i++) {
			let item = listItems[i];
			let menuItem, itemChildrenList;

			if (typeof item.childrens != 'undefined') {
				itemChildrenList = this.getMenuList(item.childrens);
			}

			menuItem =
				<MenuItem key={item.id}>
					<MenuLink to="">{item.title}</MenuLink>
					<MenuList>
						{itemChildrenList}
					</MenuList>
				</MenuItem>;

			menuItems.push(menuItem);
		}

		return menuItems;
	}

	render() {
		const menuItems = this.getMenuList(this.getMenuData());

		return (
			<MenuList>
				{menuItems}
			</MenuList>
		);
	}
}

export default MenuContainer;
