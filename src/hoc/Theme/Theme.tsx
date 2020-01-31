import React from "react";
import { ThemeProvider } from "styled-components";

export const breakpoints = {
	lg: 1020
};

export const theme = {
	color: {
		darkBlue: "#2b313c",
		lightGray: "#fafafa",
		lightGray2: "#f6f6f6",
		gray: "#777",
		white: "#fff",
		green: "#80B538",
		blue: "#1990EA"
	},
	sidebar: {
		width: '350px'
	},
	radius: '4px',
	smallRadius: '2px',
	fonts: ["sans-serif", "Roboto"],
	transition: '0.3s',
	mediaQuery: {
		lg: '@media only screen and (max-width: ' + breakpoints.lg + 'px)'
	}
};

class Theme extends React.Component {
	render() {
		return (
			<ThemeProvider theme={theme}>
				{this.props.children}
			</ThemeProvider>
		)
	}
}

export default Theme;
