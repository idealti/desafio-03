import "./components/config/ReactotronConfig.js";

import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { ToastContainer } from "react-toastify";

import Container from "./components/Container/container.js";
import Footer from "./components/Footer/footer.js";
import Header from "./components/Header/header.js";
import ResetCSS from "./generic/resetCSS.js";
import RoutesApp from "./routes.js";
import store from "./store/index.js";
import Base from "./styles/elements/Base.js";

function App() {
	return (
		<Provider store={store}>
			<BrowserRouter>
				<Container>
					<ResetCSS />
					<Base />
					<Header />
					<RoutesApp /> {/* main */}
					<Footer />
					<ToastContainer autoClose={3000} />{" "}
					{/* Tempos que ficará em tela. */}
				</Container>
			</BrowserRouter>
		</Provider>
	);
}

export default App;
