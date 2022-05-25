import styled from "styled-components";

const Navlist = styled.nav`
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
export default Navlist;
