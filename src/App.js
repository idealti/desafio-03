import React from "react";

import Container from "./components/Container/container.js";
import Footer from "./components/Footer/footer.js";
import Header from "./components/Header/header.js";
import Main from "./components/Main/main.js";

function App() {
	return (
		<Container>
			<Header />
			<Main />
			<Footer />
		</Container>
	);
}

export default App;
