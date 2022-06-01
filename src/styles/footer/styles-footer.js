import styled from "styled-components";

// Footer Base
export const FooterBase = styled.footer`
	flex: 5;
	display: flex;
`;

export const FooterDiv = styled.div`
	flex: 2;
	display: flex;

	&:nth-child(1) {
		border-bottom: 1px solid #bfbfbf;
	}

	&:nth-child(2) {
		flex: 1;
		display: flex;
	}
`;

export const FooterPageDirection = styled.div`
	display: flex;
	flex: 3;
`;

export const FooterSection = styled.section`
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

export const FooterPagination = styled.div`
	display: flex;
	flex: 60%;
	height: 100%;
	padding-right: 4em;
	align-items: center;
`;

// Footer Aside
export const FooterAside = styled.aside`
	width: 88%;
	height: 100%;
	display: flex;
	flex-direction: column;
`;

export const FooterHeadings = styled.div`
	display: flex;
	flex-direction: column;
	width: 35%;
`;

export const FooterSubheading = styled.div`
	display: flex;
	align-items: flex-start;
	justify-content: flex-start;
	flex: 1;
`;

export const FooterHeadingTitle = styled.div`
	display: flex;
	align-items: flex-end;
	justify-content: flex-end;
	flex: 1;
	font-weight: 400;
`;

export const FooterScroll = styled.div`
	display: flex;
	flex: 2;
	align-items: center;
	justify-content: flex-start;
`;

export const FooterScrollPage = styled.p`
	display: flex;
	align-items: flex-end;
	justify-content: flex-start;
	font-size: 1.3rem;
	font-weight: lighter;
	letter-spacing: 1em;
	width: 30%;
	height: 30%;
`;

export const FooterPageNavigation = styled.div`
	display: flex;
	flex: 5;
	align-items: center;
	justify-content: flex-start;
`;

// Footer Nav
export const FooterNav = styled.nav`
	height: 100%;
	width: 50%;
	background-color: #f2f2f2;
`;

export const Navlist = styled.nav`
	ul {
		list-style-type: none;
		margin: 0;
		padding: 0;
		width: 200px;
		background-color: #f1f1f1;
	}

	li a {
		display: block;
		color: #000;
		padding: 8px 16px;
		text-decoration: none;
	}

	li a.active {
		background-color: #04aa6d;
		color: white;
	}

	li a:hover:not(.active) {
		background-color: #555;
		color: white;
	}
`;
