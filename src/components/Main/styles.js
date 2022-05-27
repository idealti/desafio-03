import { darken } from "polished";
import styled from "styled-components";

export const ProductList = styled.ul`
	display: flex;
	gap: 1em;
	list-style: none;
	margin: 1em 4em;

	li {
		display: flex;
		flex-direction: column;
		border-radius: 4px;
		padding: 0.5em;
		background: #f7f3f7;
		width: 25%;

		img {
			align-self: center;
			max-width: 90%;
			border-radius: 0.5em;
		}

		> strong {
			font-size: 0.8rem;
			line-height: 1.2rem;
			font-weight: 600;
			margin-top: 1em;
			color: #383738;
		}

		> span {
			font-size: 1.3rem;
			font-weight: 500;
			margin: 5px 0 20px;
			color: #915454;
		}

		button {
			border: 0;
			border-radius: 4px;
			overflow: hidden;
			margin-top: auto;
			color: #fff;
			background: #ab96ab;

			display: flex;
			align-items: center;
			transition: background 0.2s;

			&:hover {
				background: ${darken(0.03, "#9AABA8")};
			}

			div {
				display: flex;
				align-items: center;
				padding: 1em;
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
