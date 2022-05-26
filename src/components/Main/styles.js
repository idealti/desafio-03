import { darken } from "polished";
import styled from "styled-components";

export const ProductList = styled.ul`
	display: grid;
	grid-template-columns: repeat(3, 1fr);
	grid-gap: 20px;
	list-style: none;

	li {
		display: flex;
		flex-direction: column;
		border-radius: 4px;
		padding: 20px;
		background: #fff;

		img {
			align-self: center;
			max-width: 250px;
		}

		> strong {
			font-size: 16px;
			line-height: 20px;
			margin-top: 5px;
			color: #333;
		}

		> span {
			font-size: 21px;
			font-weight: bold;
			margin: 5px 0 20px;
		}

		button {
			border: 0;
			border-radius: 4px;
			overflow: hidden;
			margin-top: auto;
			color: #fff;
			background: #7159c1;

			display: flex;
			align-items: center;
			transition: background 0.2s;

			&:hover {
				background: ${darken(0.03, "#7159c1")};
			}

			div {
				display: flex;
				align-items: center;
				padding: 13px;
				background: rgba(0, 0, 0, 0.1);

				svg {
					margin-right: 5px;
				}
			}

			span {
				flex: 1;
				text-align: center;
				font-weight: bold;
				text-transform: uppercase;
			}
		}
	}
`;
