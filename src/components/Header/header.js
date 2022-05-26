import React from "react";

import {
	Logo,
	HeaderBase,
	HeaderMenu,
} from "../../styles/header/styles-header.js";

// import Button from "../Button/button.js";

export default function Header() {
	return (
		<HeaderBase>
			<Logo>LADA</Logo>
			<HeaderMenu />
		</HeaderBase>
	);
}
