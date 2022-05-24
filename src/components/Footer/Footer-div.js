import styled from "styled-components";

const FooterDiv = styled.div`
	flex: 2;
	display: flex;

	&:nth-child(1) {
		border-bottom: 1px solid black;
	}

	&:nth-child(2) {
		flex: 1;
		display: flex;
		flex-direction: row;
		align-items: center;
		font-size: 1rem;
		border-bottom: none;
	}
`;

export default FooterDiv;
