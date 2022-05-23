import styled from "styled-components";

const Button = styled.button`
	height: 100%;
	/* width: auto; */
	padding: 0 4em;
	border: none;
	background-color: #fff;
	color: black;
	cursor: pointer;

	&:nth-child(1) {
		margin-right: 5%;
	}

	&:hover {
		/* color: black; */
		border-bottom: 1px solid black;
	}
`;

export default Button;
