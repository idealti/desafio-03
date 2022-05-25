import React from "react";

import Container from "./components/Container/container.js";
import Footer from "./components/Footer/Footer.js";
import Header from "./components/Header/Header.js";
import Main from "./styles/main/main.js";

function App() {
	return (
		<Container>
			<Header />
			<Main>Main</Main>
			<Footer />
		</Container>
	);
}

export default App;
