import "./components/config/ReactotronConfig.js";

import React from "react";
import { BrowserRouter } from "react-router-dom";
import { ToastContainer } from "react-toastify";

import Container from "./components/Container/container.js";
import Footer from "./components/Footer/footer.js";
import Header from "./components/Header/header.js";
import ResetCSS from "./generic/resetCSS.js";
import RoutesApp from "./routes.js";
import Base from "./styles/elements/Base.js";

function App() {
	return (
		<BrowserRouter>
			<Container>
				<ResetCSS />
				<Base />
				<Header />
				<RoutesApp />
				<Footer />
				<ToastContainer autoClose={3000} />{" "}
				{/* Tempos que ficará em tela. */}
			</Container>
		</BrowserRouter>
	);
}

export default App;
