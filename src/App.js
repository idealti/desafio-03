import "./components/config/ReactotronConfig.js";

import React from "react";
import { ToastContainer } from "react-toastify";

import Container from "./components/Container/container.js";
import Footer from "./components/Footer/footer.js";
import Header from "./components/Header/header.js";
import Main from "./components/Main/main.js";

function App() {
	return (
		<Container>
			<ToastContainer autoClose={3000} /> {/* Tempos que ficará em tela. */}
			<Header />
			<Main />
			<Footer />
		</Container>
	);
}

export default App;
