import { createGlobalStyle } from "styled-components";
import "react-toastify/dist/ReactToastify.css";

const Base = createGlobalStyle`
    body {
		font-family: 'Quicksand', sans-serif;
		background-color: #fff;
		font-weight: lighter;
		color: #404040;
    }

	 button {
		cursor: pointer;
	 }
`;

export default Base;
