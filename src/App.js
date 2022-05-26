import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { ToastContainer } from "react-toastify";

import Container from "./components/Container/container.js";
import Footer from "./components/Footer/Footer.js";
import Header from "./components/Header/Header.js";
import RoutesApp from "./routes.js";
import store from "./store/index.js";
import Main from "./styles/main/main.js";

function App() {
	return (
		<Provider store={store}>
			<BrowserRouter>
				<Container>
					<Header />
					<RoutesApp />
					<Main>Main</Main>
					<Footer />
					<ToastContainer autoClose={3000} />{" "}
					{/* Tempos que ficará em tela. */}
				</Container>
			</BrowserRouter>
		</Provider>
	);
}

export default App;
