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
	/* background-color: blueviolet; */

	&:hover {
		opacity: 0.8;
	}

	div {
		text-align: right;
		margin-right: 10px;
	}

	strong {
		display: block;
		color: #404040;
		font-weight: 500;
	}

	span {
		font-size: 12px;
		color: #863649;
		font-weight: normal;
	}
`;
