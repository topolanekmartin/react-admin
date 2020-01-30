import styled from 'styled-components';

export const Select = styled('select')`
	position: relative;
	padding: 5px 20px 5px 5px;
	font-size: 12px;
	border: 1px solid #d9d9d9;
	border-radius: ${props => props.theme.radius};
	appearance: none;
	background: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAASCAYAAABWzo5XAAAABmJLR0QA/wD/AP+gvaeTAAAAsElEQVQ4je2OIQ7CQBBF/7QrOUElCWeoRuPWgOgVsFOBqSCbTVPFKTDADdqbEBwnoGuYLKai2dDQEBx98v+Zlw9M/DEUBkVRzJxzhziOd8aYe79j5oSI9iKyrarq0e+iUNS2bQogE5GGmZNAUgPIlFLpx0XdkyaiI4CbUmrpvX+KSA1gQURra+1llCiQXbto7r3flGV5fnc/KAKAPM9XAE4AoqElo2Fmzcz6a8HE73kBvFE68nSc02oAAAAASUVORK5CYII=") 96% / 15% no-repeat;
`;
