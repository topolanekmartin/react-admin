import React from 'react';
import './App.css';
import {
	BrowserRouter as Router,
	Switch,
	Route
} from "react-router-dom";
import { useMediaQuery } from 'react-responsive'
import Theme, { breakpoints } from './hoc/Theme';
import { WebLine } from './components/WebLine';
import {
	SidebarContainer as Sidebar,
	SidebarContainerMobile as SidebarMobile
}  from './containers/Sidebar';
import { UserList, UserListMobile } from './pages/Users/List';

const App: React.FC = (props) => {
	return (
		<Theme>
			<Router>
				<Desktop>
					<WebLine stretch>
						<Sidebar />
						<Switch>
							<Route path="/">
								<UserList />
							</Route>
						</Switch>
					</WebLine>
				</Desktop>
				<Mobile>
					<SidebarMobile />
					<Switch>
						<Route path="/">
							<UserListMobile />
						</Route>
					</Switch>
				</Mobile>
			</Router>
		</Theme>
	);
}

type MediaQueryProps = {
	children: any
}

const Desktop: React.SFC<MediaQueryProps> = (props) => {
	const isDesktop = useMediaQuery({ minWidth: breakpoints.lg })
	return isDesktop ? props.children : null
}

const Mobile: React.SFC<MediaQueryProps> = (props) => {
	const isMobile = useMediaQuery({ maxWidth: breakpoints.lg-1 })
	return isMobile ? props.children : null
}

export default App;
