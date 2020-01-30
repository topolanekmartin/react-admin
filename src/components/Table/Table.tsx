import styled from 'styled-components';

export const Table = styled('div')`
	.rdt_TableHeadRow {
		min-height: 40px;
		background-color: #2b313c;
		border: 1px solid #d9d9d9;
	}

	.rdt_TableHeadRow > div:first-child {
		justify-content: center;
		align-items: center;
	}

	.rdt_TableCol {
		padding: 5px;
		color: #fff;
		border-left: 1px solid #d9d9d9;
	}

	.rdt_TableCol:first-child {
		border-left: none;
	}

	.rdt_TableRow {
		min-height: 38px;
	}

	.rdt_TableRow:nth-child(odd) {
		background-color: #F2F2F2;
	}

	.rdt_TableRow:not(:last-of-type) {
		border-bottom: none;
	}

	.rdt_TableCell {
	}
		padding: 5px;
`;
