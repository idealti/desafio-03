import React from "react";

import Button from "./components/Button/button.js";
import Container from "./components/Container/container.js";
import Footer from "./components/Footer/footer.js";
import HeaderMenu from "./components/Header/header-menu.js";
import Header from "./components/Header/header.js";
import Logo from "./components/Header/logo.js";
import Main from "./components/Main/main.js";

function App() {
	return (
		<Container>
			<Header>
				<Logo>LADA</Logo>
				<HeaderMenu>
					<Button>oi, sou a Lada</Button>
					<Button>Button</Button>
				</HeaderMenu>
			</Header>
			<Main>Main</Main>
			<Footer>footer</Footer>
		</Container>
	);
}

export default App;
