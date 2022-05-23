import styled from "styled-components";

const FooterDiv = styled.div`
	flex: 2;
	display: flex;

	&:nth-child(2) {
		flex: 1;
		display: flex;
		background-color: tomato;
	}
`;

export default FooterDiv;
