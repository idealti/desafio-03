import React from "react";

import HeaderBase from "../../styles/Header/header-base.js";
import HeaderMenu from "../../styles/Header/header-menu.js";
import Logo from "../../styles/Header/logo.js";
import Button from "../Button/button.js";

export default function Header() {
	return (
		<HeaderBase>
			<Logo>LADA</Logo>
			<HeaderMenu>
				<Button>oi, sou a Lada</Button>
				<Button>instagram</Button>
			</HeaderMenu>
		</HeaderBase>
	);
}
