import { Link } from "react-router-dom";
import styled from "styled-components";

export const Logo = styled(Link)`
	width: fit-content;
	height: fit-content;
	margin-left: 8%;
	font-size: 2.5rem;
	font-weight: lighter;
	text-decoration: none;
	transition: opacity 0.2s;
	color: inherit;

	&:hover {
		animation: logo-animation 4s 1;

		@keyframes logo-animation {
			50% {
				letter-spacing: 0.5rem;
			}
		}
	}
`;

export const HeaderBase = styled.header`
	flex: 1;
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 0.7em 0;
`;

export const HeaderMenu = styled.div`
	display: flex;
	width: fit-content;
	height: 100%;
	margin-right: 8%;
	align-items: center;
	justify-content: space-between;
	gap: 1em;
`;
