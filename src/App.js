import React from "react";

import Button from "./components/Button/button.js";
import Container from "./components/Container/container.js";
import Footer from "./components/Footer/footer.js";
import Header from "./components/Header/header.js";
import Logo from "./components/Header/logo.js";
import Main from "./components/Main/main.js";

function App() {
	return (
		<Container>
			<Header>
				<Logo>LADA</Logo>
				<Button>Button</Button>
				<Button>Button</Button>
			</Header>
			<Main>Main</Main>
			<Footer>footer</Footer>
		</Container>
	);
}

export default App;
