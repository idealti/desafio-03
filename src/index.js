import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";

import App from "./App.js";
import ResetCSS from "./generic/resetCSS.js";
import store from "./store/index.js";
import Base from "./styles/elements/Base.js";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
	<React.StrictMode>
		<Provider store={store}>
			<BrowserRouter>
				<ResetCSS />
				<Base />
				<App />
			</BrowserRouter>
		</Provider>
	</React.StrictMode>
);
