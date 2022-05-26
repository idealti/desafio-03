import "./components/config/ReactotronConfig.js";

import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { ToastContainer } from "react-toastify";

import Container from "./components/Container/container.js";
import Footer from "./components/Footer/footer.js";
import Header from "./components/Header/header.js";
import Main from "./components/Main/main.js";
import store from "./store/index.js";

function App() {
	return (
		<Provider store={store}>
			<BrowserRouter>
				<Container>
					<Header />
					<Main />
					<Footer />
					<ToastContainer autoClose={3000} />{" "}
					{/* Tempos que ficará em tela. */}
				</Container>
			</BrowserRouter>
		</Provider>
	);
}

export default App;
