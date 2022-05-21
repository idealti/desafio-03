import React from "react";
import ReactDOM from "react-dom/client";

import App from "./App.js";
import ResetCSS from "./generic/resetCSS.js";
import Base from "./styles/elements/Base.js";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
	<React.StrictMode>
		<ResetCSS />
		<Base />
		<App />
	</React.StrictMode>
);
