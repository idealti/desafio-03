import { Link } from "react-router-dom";
import styled from "styled-components";

export const Container = styled.header`
	display: flex;
	justify-content: space-between;
	align-items: center;
	margin-right: 10%;
`;

export const Cart = styled(Link)`
	display: flex;
	align-items: center;
	text-decoration: none;
	transition: opacity 0.2s;

	&:hover {
		opacity: 0.8;
	}

	div {
		text-align: right;
		margin-right: 10px;
	}

	strong {
		display: block;
		color: #ab96ab;
		font-weight: 500;
	}

	span {
		font-size: 12px;
		color: #c4adad;
		font-weight: bold;
	}
`;
