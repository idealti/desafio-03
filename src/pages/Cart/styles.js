import { darken } from "polished";
import styled from "styled-components";

export const Container = styled.div`
	padding: 2em 7em;
	width: 100%;
	background: #fff;
	border-radius: 4px;

	footer {
		display: flex;
		justify-content: flex-start;
		align-items: center;
		margin-top: 30px;
		gap: 2em;
		flex: 1;

		button {
			background: #62cd5c;
			color: #fff;
			border: 0;
			border-radius: 4px;
			padding: 12px 20px;
			font-weight: bold;
			text-transform: uppercase;
			transition: background 0.2s;

			&:hover {
				background: ${darken(0.15, "#62cd5c")};
			}
		}

		.btnVoltar {
			background-color: #bfbfbf;

			&:hover {
				background: ${darken(0.1, "#ffb3b3")};
			}
		}
	}
`;

export const ProductTable = styled.table`
	width: 100%;

	thead th {
		color: #999;
		text-align: left;
		padding: 12px;
	}

	tbody td {
		padding: 12px;
		border-bottom: 1px solid #eee;
	}

	img {
		height: 100px;
	}

	strong {
		color: #333;
		display: block;
	}

	span {
		display: block;
		margin-top: 5px;
		font-size: 18px;
		font-weight: bold;
	}

	div {
		display: flex;
		align-items: center;

		input {
			width: 50px;
			color: #666;
			padding: 6px;
			border: 1px solid #ddd;
			border-radius: 4px;
		}
	}

	button {
		padding: 6px;
		border: 0;
		background: none;

		svg {
			fill: #805959;
		}
	}
`;

export const Total = styled.div`
	display: flex;
	align-items: baseline;
	justify-content: flex-end;
	margin-right: 1.5em;
	flex: 2;

	span {
		color: #999;
		font-weight: bold;
	}

	strong {
		font-size: 2rem;
		margin-left: 0.5em;
	}
`;
