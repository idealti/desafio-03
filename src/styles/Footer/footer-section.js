import styled from "styled-components";

const FooterSection = styled.section`
	flex: 8;
	display: flex;
	justify-content: flex-end;
	align-items: center;

	/* section footer nav */
	&:nth-child(2) {
		flex: 4;
		display: flex;
		justify-content: center;
		align-items: center;
	}
`;

export default FooterSection;
