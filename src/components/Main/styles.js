import { darken } from "polished";
import styled from "styled-components";

export const ProductList = styled.ul`
	display: flex;
	/* grid-template-columns: repeat(3, 2fr); */
	/* grid-gap: 1em; */
	gap: 1em;
	list-style: none;
	margin: 2em 4em;

	li {
		display: flex;
		flex-direction: column;
		border-radius: 4px;
		padding: 1em;
		background: #fff;
		width: 25%;

		img {
			align-self: center;
			max-width: 30%;
			/*
			o tamanho n acho, pq tá relacionado a tudo que
			tá dentro e ligados ao padding.
			*/
		}

		> strong {
			font-size: 0.8rem;
			line-height: 1.2rem;
			margin-top: 1em;
			color: #333;
		}

		> span {
			font-size: 1.3rem;
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
				font-size: 0.7rem;
			}
		}
	}
`;
